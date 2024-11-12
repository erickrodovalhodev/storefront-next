import type { MetadataRoute } from "next";
import { getLista } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const produtos = await getLista();
  return produtos.map((p) => ({ url: `https://loja.exemplo.com/produto/${p.slug}` }));
}
// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict

// rationale: narrow at the boundary, the domain stays strict
