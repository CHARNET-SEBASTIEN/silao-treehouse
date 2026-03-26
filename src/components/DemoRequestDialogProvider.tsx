import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import DemoRequestDialog from "@/components/DemoRequestDialog";

type DemoRequestDialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
  closeDialog: () => void;
};

const DemoRequestDialogContext = createContext<DemoRequestDialogContextValue | null>(null);

type DemoRequestDialogProviderProps = {
  children: ReactNode;
};

const DemoRequestDialogProvider = ({ children }: DemoRequestDialogProviderProps) => {
  const [open, setOpen] = useState(false);

  const value = useMemo<DemoRequestDialogContextValue>(
    () => ({
      open,
      setOpen,
      openDialog: () => setOpen(true),
      closeDialog: () => setOpen(false),
    }),
    [open],
  );

  return (
    <DemoRequestDialogContext.Provider value={value}>
      {children}
    </DemoRequestDialogContext.Provider>
  );
};

const DemoRequestDialogRoot = () => {
  const { open, setOpen } = useDemoRequestDialog();

  return <DemoRequestDialog open={open} onOpenChange={setOpen} />;
};

const useDemoRequestDialog = () => {
  const context = useContext(DemoRequestDialogContext);

  if (!context) {
    throw new Error("useDemoRequestDialog must be used within DemoRequestDialogProvider");
  }

  return context;
};

export { DemoRequestDialogProvider, DemoRequestDialogRoot, useDemoRequestDialog };
