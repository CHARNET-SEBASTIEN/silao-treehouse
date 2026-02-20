import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface DemoRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestDialog = ({ open, onOpenChange }: DemoRequestDialogProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast.success("Demande envoyée !", {
        description: "Nous vous recontacterons très rapidement.",
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg sketch-border bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sketch text-foreground">
            Demandez la démo
          </DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Remplissez le formulaire ci-dessous et notre équipe vous recontactera pour organiser une démonstration personnalisée.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lastName" className="font-body text-sm">Nom *</Label>
              <Input id="lastName" required placeholder="Dupont" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-body text-sm">Prénom *</Label>
              <Input id="firstName" required placeholder="Marie" className="font-body" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-body text-sm">Email professionnel *</Label>
            <Input id="email" type="email" required placeholder="marie.dupont@association.fr" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="font-body text-sm">Organisation *</Label>
            <Input id="organization" required placeholder="Nom de votre association / établissement" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-body text-sm">Téléphone</Label>
            <Input id="phone" type="tel" placeholder="06 12 34 56 78" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-body text-sm">Message (optionnel)</Label>
            <Textarea
              id="message"
              placeholder="Précisez vos besoins, votre secteur d'activité, le nombre d'établissements…"
              className="font-body min-h-[80px] resize-none"
            />
          </div>

          <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
            {loading ? (
              "Envoi en cours…"
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
};

export default DemoRequestDialog;
