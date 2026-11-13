"use client";

import type { Produto } from "@/lib/types";
import { useCarrinho } from "./CarrinhoContext";

export function AddToCartButton({ produto }: { produto: Pick<Produto, "id" | "slug" | "nome" | "price"> }) {
  const { adicionar } = useCarrinho();
  return (
    <button type="button" onClick={() => adicionar(produto)}>
      add to cart
    </button>
  );
}
