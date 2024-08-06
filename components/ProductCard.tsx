import Image from "next/image";
import Link from "next/link";
import type { Produto } from "@/lib/types";
import { moeda } from "@/lib/format";

export function ProductCard({ produto }: { produto: Produto }) {
  return (
    <article>
      <Link href={`/produto/${produto.slug}`}>
        <Image src={produto.image} alt={produto.nome} width={400} height={400} sizes="25vw" />
        <h3>{produto.nome}</h3>
        <p>{moeda(produto.price)}</p>
      </Link>
    </article>
  );
}
// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree
