import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduto } from "@/lib/api";
import { moeda } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProduto(slug);
  if (!p) return { title: "Not found" };
  return { title: p.nome, alternates: { canonical: `/produto/${p.slug}` } };
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const p = await getProduto(slug);
  if (!p) notFound();

  return (
    <article className="pdp">
      <div className="pdp__gallery">
        <Image src={p.image} alt={p.nome} width={900} height={900} sizes="(max-width: 768px) 100vw, 50vw" priority />
      </div>
      <div>
        <h1>{p.nome}</h1>
        <p>{moeda(p.price)}</p>
      </div>
    </article>
  );
}
// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree
