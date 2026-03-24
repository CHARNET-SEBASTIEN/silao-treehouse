import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { CONTACT_EMAIL, DPO_EMAIL, RIGHTS_REQUEST_URL } from "@/lib/site";

interface DemoRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormValues = {
  lastName: string;
  firstName: string;
  email: string;
  organization: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  lastName: "",
  firstName: "",
  email: "",
  organization: "",
  phone: "",
  message: "",
};

const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL ?? "/api/contact";

const DemoRequestDialog = React.forwardRef<HTMLDivElement, DemoRequestDialogProps>(
  ({ open, onOpenChange }, _ref) => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [statusMessage, setStatusMessage] = useState("");
    const fieldRefs = useRef<Record<keyof FormValues, HTMLInputElement | HTMLTextAreaElement | null>>({
      lastName: null,
      firstName: null,
      email: null,
      organization: null,
      phone: null,
      message: null,
    });

    useEffect(() => {
      if (open) return;
      setLoading(false);
      setErrors({});
      setStatusMessage("");
    }, [open]);

    const validate = (values: FormValues) => {
      const nextErrors: FormErrors = {};

      if (!values.lastName.trim()) nextErrors.lastName = "Le nom est requis.";
      if (!values.firstName.trim()) nextErrors.firstName = "Le prénom est requis.";
      if (!values.email.trim()) {
        nextErrors.email = "L'adresse e-mail professionnelle est requise.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        nextErrors.email = "Le format de l'adresse e-mail est invalide.";
      }
      if (!values.organization.trim()) {
        nextErrors.organization = "Le nom de l'organisation est requis.";
      }

      return nextErrors;
    };

    const firstErrorField = useMemo(
      () => (Object.keys(errors)[0] as keyof FormValues | undefined),
      [errors],
    );

    useEffect(() => {
      if (!firstErrorField) return;
      fieldRefs.current[firstErrorField]?.focus();
    }, [firstErrorField]);

    const getDescribedBy = (field: keyof FormValues) =>
      errors[field] ? `${field}-error` : undefined;

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = event.target;
      const field = name as keyof FormValues;

      setFormValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        if (!current[field]) return current;

        const nextErrors = { ...current };
        delete nextErrors[field];
        return nextErrors;
      });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const nextErrors = validate(formValues);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        setStatusMessage("Le formulaire contient des erreurs. Corrigez les champs signalés.");
        return;
      }

      const payload = {
        lastName: formValues.lastName.trim(),
        firstName: formValues.firstName.trim(),
        email: formValues.email.trim(),
        organization: formValues.organization.trim(),
        phone: formValues.phone.trim(),
        message: formValues.message.trim(),
      };

      setStatusMessage("Envoi de votre demande.");
      setLoading(true);

      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const details = await response.text().catch(() => "");
          throw new Error(`Contact request failed (${response.status}) ${details}`);
        }

        const result = await response.json().catch(() => null);
        if (!result?.success) {
          throw new Error("Contact provider returned an error");
        }

        setFormValues(initialValues);
        setErrors({});
        setStatusMessage("Votre demande a bien été envoyée.");
        onOpenChange(false);
        toast.success("Demande envoyée", {
          description: "Notre équipe reviendra vers vous rapidement.",
        });
      } catch (error) {
        console.error(error);
        setStatusMessage("L'envoi a échoué. Merci de réessayer.");
        toast.error("Envoi impossible", {
          description: `Réessayez plus tard ou écrivez à ${CONTACT_EMAIL}.`,
        });
      } finally {
        setLoading(false);
      }
    };

    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto sketch-border bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sketch text-foreground">
              Demandez la démo
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground">
              Remplissez le formulaire ci-dessous et notre équipe vous recontactera pour organiser une démonstration personnalisée.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} noValidate className="space-y-4 mt-2">
            <p aria-live="polite" className="sr-only">
              {statusMessage}
            </p>

            <fieldset className="space-y-4">
              <legend className="mb-1 text-sm font-semibold text-foreground">
                Vos coordonnées
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-body text-sm">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    value={formValues.lastName}
                    onChange={handleChange}
                    maxLength={100}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={getDescribedBy("lastName")}
                    placeholder="Dupont"
                    className="font-body"
                    ref={(node) => {
                      fieldRefs.current.lastName = node;
                    }}
                  />
                  {errors.lastName ? (
                    <p id="lastName-error" className="text-sm text-destructive" role="alert">
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-body text-sm">Prénom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    value={formValues.firstName}
                    onChange={handleChange}
                    maxLength={100}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={getDescribedBy("firstName")}
                    placeholder="Marie"
                    className="font-body"
                    ref={(node) => {
                      fieldRefs.current.firstName = node;
                    }}
                  />
                  {errors.firstName ? (
                    <p id="firstName-error" className="text-sm text-destructive" role="alert">
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm">Email professionnel *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                maxLength={255}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={getDescribedBy("email")}
                placeholder="marie.dupont@association.fr"
                className="font-body"
                ref={(node) => {
                  fieldRefs.current.email = node;
                }}
              />
              {errors.email ? (
                <p id="email-error" className="text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="font-body text-sm">Organisation *</Label>
              <Input
                id="organization"
                name="organization"
                autoComplete="organization"
                value={formValues.organization}
                onChange={handleChange}
                maxLength={150}
                aria-invalid={Boolean(errors.organization)}
                aria-describedby={getDescribedBy("organization")}
                placeholder="Nom de votre association / établissement"
                className="font-body"
                ref={(node) => {
                  fieldRefs.current.organization = node;
                }}
              />
              {errors.organization ? (
                <p id="organization-error" className="text-sm text-destructive" role="alert">
                  {errors.organization}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-body text-sm">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={formValues.phone}
                onChange={handleChange}
                maxLength={30}
                placeholder="06 12 34 56 78"
                className="font-body"
                ref={(node) => {
                  fieldRefs.current.phone = node;
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="font-body text-sm">Message (optionnel)</Label>
              <Textarea
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                maxLength={5000}
                placeholder="Précisez vos besoins, votre secteur d'activité, le nombre d'établissements…"
                className="font-body min-h-[80px] resize-none"
                ref={(node) => {
                  fieldRefs.current.message = node;
                }}
                />
            </div>

            <div className="rounded-2xl border border-border/70 bg-muted/35 p-4 text-xs leading-6 text-muted-foreground">
              <p>
                Les champs marqués d&apos;un * sont obligatoires. Les informations saisies sont
                traitées par D2L Informatique afin de répondre à votre demande de démonstration et
                d&apos;organiser un échange commercial. La base légale est l&apos;exécution de mesures
                précontractuelles prises à votre demande.
              </p>
              <p className="mt-2">
                Les données sont destinées aux équipes habilitées de D2L Informatique et conservées
                pendant 3 ans à compter du dernier contact. Vous pouvez exercer vos droits via{" "}
                <a
                  className="text-primary underline underline-offset-4"
                  href={RIGHTS_REQUEST_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  le formulaire dédié
                </a>
                , à l&apos;adresse{" "}
                <a className="text-primary underline underline-offset-4" href={`mailto:${DPO_EMAIL}`}>
                  {DPO_EMAIL}
                </a>{" "}
                ou en consultant notre{" "}
                <Link className="text-primary underline underline-offset-4" to="/politique-de-confidentialite">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
              {loading ? (
                "Envoi…"
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma demande
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
);

DemoRequestDialog.displayName = "DemoRequestDialog";

export default DemoRequestDialog;
