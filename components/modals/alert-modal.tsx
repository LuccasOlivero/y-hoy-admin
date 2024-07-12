"use client";

import { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Modal } from "../ui/modal";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="¿Estás seguro?"
      description="Esto puede generar cambios en la base de datos."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancelar
        </Button>
        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          Continuar
        </Button>
      </div>
    </Modal>
  );
}
