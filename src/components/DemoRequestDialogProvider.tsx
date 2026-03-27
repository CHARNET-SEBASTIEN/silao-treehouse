import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

type DemoRequestDialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
  closeDialog: () => void;
};

type DemoRequestDialogComponent = ComponentType<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>;

let demoRequestDialogPromise:
  | Promise<{ default: DemoRequestDialogComponent }>
  | null = null;

const loadDemoRequestDialog = () => {
  if (!demoRequestDialogPromise) {
    demoRequestDialogPromise = import("@/components/DemoRequestDialog");
  }

  return demoRequestDialogPromise;
};

const DemoRequestDialogContext = createContext<DemoRequestDialogContextValue | null>(null);

type DemoRequestDialogProviderProps = {
  children: ReactNode;
};

const DemoRequestDialogProvider = ({ children }: DemoRequestDialogProviderProps) => {
  const [open, setOpen] = useState(false);
  const [DialogComponent, setDialogComponent] =
    useState<DemoRequestDialogComponent | null>(null);

  useEffect(() => {
    if (!open || DialogComponent) return;

    let cancelled = false;

    loadDemoRequestDialog().then((module) => {
      if (!cancelled) {
        setDialogComponent(() => module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [DialogComponent, open]);

  const value = useMemo<DemoRequestDialogContextValue>(
    () => ({
      open,
      setOpen,
      openDialog: () => {
        void loadDemoRequestDialog();
        setOpen(true);
      },
      closeDialog: () => setOpen(false),
    }),
    [open],
  );

  return (
    <DemoRequestDialogContext.Provider value={value}>
      {children}
      {DialogComponent ? <DialogComponent open={open} onOpenChange={setOpen} /> : null}
    </DemoRequestDialogContext.Provider>
  );
};

const DemoRequestDialogRoot = () => null;

const useDemoRequestDialog = () => {
  const context = useContext(DemoRequestDialogContext);

  if (!context) {
    throw new Error("useDemoRequestDialog must be used within DemoRequestDialogProvider");
  }

  return context;
};

export { DemoRequestDialogProvider, DemoRequestDialogRoot, useDemoRequestDialog };
