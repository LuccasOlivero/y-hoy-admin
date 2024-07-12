"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

import { AlertModal } from "@/components/modals/alert-modal";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DrinksColumn } from "./column";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

interface cellActionProps {
  data: DrinksColumn;
}

export function CellAction({ data }: cellActionProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();
  const params = useParams();

  const { toast } = useToast();

  const onConfirm = async () => {
    try {
      setLoading(true);

      await axios({
        method: "DELETE",
        url: `/api`,
      });

      router.refresh();

      toast({
        title: "🟢 Bebida borrada",
      });
    } catch (error) {
      toast({
        title: "🔴 Algo salió mal, recargá la pagina e intenta de nuevo",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="bg-[#A98A4D] text-white">
          <DropdownMenuLabel>Opciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.push(`#`)}>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Borrar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
