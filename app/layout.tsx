import type { ReactNode } from "react";
import { CartProvider } from "@/components/CarrinhoContext";
import { CartDrawer } from "@/components/CartDrawer";

export const metadata = { title: "Store", description: "Catalogue" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
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

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree

// rationale: server component, keep the fetch out of the client tree
