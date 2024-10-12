import { getLista } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const produtos = await getLista();
  return <main className="grid">{produtos.map((p) => <ProductCard key={p.id} produto={p} />)}</main>;
}
// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree
