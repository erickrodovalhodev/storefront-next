"use client";

import { useState } from "react";
import Link from "next/link";
import { useCarrinho } from "./CarrinhoContext";
import { moeda } from "@/lib/format";

export function CartDrawer() {
  const { itens, remover, quantidade } = useCarrinho();
  const [aberto, setAberto] = useState(false);
  const total = itens.reduce((s, i) => s + i.price * i.qtd, 0);

  return (
    <header className="header">
      <Link href="/">Store</Link>
      <button type="button" onClick={() => setAberto(true)} aria-label={`Carrinho, ${quantidade} itens`}>
        Carrinho <span data-testid="cart-count">{quantidade}</span>
      </button>

      {aberto && (
        <aside className="drawer" role="dialog" aria-label="Carrinho">
          <button type="button" onClick={() => setAberto(false)} aria-label="Fechar carrinho">×</button>
          {itens.length === 0 ? (
            <p>Carrinho vazio.</p>
          ) : (
            <>
              <ul>
                {itens.map((i) => (
                  <li key={i.id}>
                    <Link href={`/produto/${i.slug}`}>{i.nome}</Link> × {i.qtd} — {moeda(i.price * i.qtd)}
                    <button type="button" onClick={() => remover(i.id)}>remover</button>
                  </li>
                ))}
              </ul>
              <p>Total: {moeda(total)}</p>
            </>
          )}
        </aside>
      )}
    </header>
  );
}
