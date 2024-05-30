export type Produto = {
  id: string; slug: string; nome: string; price: number; image: string;
  variants: { id: string; nome: string }[];
};
// rationale: narrow at the boundary, the domain stays strict
