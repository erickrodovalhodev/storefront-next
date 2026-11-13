"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Produto } from "@/lib/types";

export type ItemCarrinho = { id: string; slug: string; nome: string; price: number; qtd: number };

type Carrinho = {
  itens: ItemCarrinho[];
  adicionar: (p: Pick<Produto, "id" | "slug" | "nome" | "price">) => void;
  remover: (id: string) => void;
  quantidade: number;
};

const CHAVE = "carrinho:v1";
const CarrinhoContext = createContext<Carrinho | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // Estado inicial vazio de propósito: o HTML do servidor e o primeiro render do cliente batem.
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) setItens(JSON.parse(salvo));
    } catch {
      // localStorage indisponível ou JSON corrompido: começa vazio
    }
    setHidratado(true);
  }, []);

  useEffect(() => {
    if (!hidratado) return; // não sobrescreve o que está salvo antes de ler
    try {
      localStorage.setItem(CHAVE, JSON.stringify(itens));
    } catch {
      // sem persistência, o carrinho segue em memória
    }
  }, [itens, hidratado]);

  const adicionar = useCallback<Carrinho["adicionar"]>((p) => {
    setItens((atual) => {
      const existente = atual.find((i) => i.id === p.id);
      if (existente) return atual.map((i) => (i.id === p.id ? { ...i, qtd: i.qtd + 1 } : i));
      return [...atual, { id: p.id, slug: p.slug, nome: p.nome, price: p.price, qtd: 1 }];
    });
  }, []);

  const remover = useCallback((id: string) => {
    setItens((atual) => atual.filter((i) => i.id !== id));
  }, []);

  const quantidade = useMemo(() => itens.reduce((s, i) => s + i.qtd, 0), [itens]);

  const valor = useMemo(() => ({ itens, adicionar, remover, quantidade }), [itens, adicionar, remover, quantidade]);
  return <CarrinhoContext.Provider value={valor}>{children}</CarrinhoContext.Provider>;
}

export function useCarrinho(): Carrinho {
  const ctx = useContext(CarrinhoContext);
  if (!ctx) throw new Error("useCarrinho precisa estar dentro de <CartProvider>");
  return ctx;
}
