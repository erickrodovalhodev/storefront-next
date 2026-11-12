import type { Produto } from "./types";

// Catálogo fictício usado quando API_URL não está definida (dev local, CI, demo).
export const produtosMock: Produto[] = [
  {
    id: "1", slug: "camiseta-basica", nome: "Camiseta básica", price: 79.9,
    image: "/produtos/camiseta-basica.svg",
    variants: [{ id: "1-p", nome: "P" }, { id: "1-m", nome: "M" }, { id: "1-g", nome: "G" }],
  },
  {
    id: "2", slug: "moletom-canguru", nome: "Moletom canguru", price: 219.0,
    image: "/produtos/moletom-canguru.svg",
    variants: [{ id: "2-m", nome: "M" }, { id: "2-g", nome: "G" }],
  },
  {
    id: "3", slug: "bone-aba-curva", nome: "Boné aba curva", price: 59.5,
    image: "/produtos/bone-aba-curva.svg",
    variants: [{ id: "3-u", nome: "Único" }],
  },
  {
    id: "4", slug: "tenis-casual", nome: "Tênis casual", price: 349.9,
    image: "/produtos/tenis-casual.svg",
    variants: [{ id: "4-39", nome: "39" }, { id: "4-40", nome: "40" }, { id: "4-41", nome: "41" }],
  },
];
