# storefront-next

Headless storefront on the Next.js App Router. Catalogue from an external API,
cart in context, ISR revalidated by tag.

## run

    npm ci
    npm run test     # vitest
    npm run build
    npm run dev      # http://localhost:3000

`API_URL` é opcional. Sem ela, o catálogo vem de `lib/mock.ts` (quatro produtos
fictícios, imagens em `public/produtos/`), validado pelo mesmo schema zod.
Para apontar para uma API real: `cp .env.example .env.local` e descomente `API_URL`.

## demo

    npm run dev &
    curl -s localhost:3000 | grep -o 'href="/produto/[^"]*"'      # os 4 produtos do mock
    curl -si localhost:3000/produto/camiseta-basica | head -1     # 200
    curl -si localhost:3000/produto/nao-existe | head -1          # 404
    kill %1

### teste manual do carrinho

1. `npm run dev` e abra http://localhost:3000/produto/camiseta-basica.
2. Clique em **add to cart** duas vezes: o contador "Carrinho" no header vai para 2.
3. Abra outro produto e clique em **add to cart**: o contador vai para 3.
4. Recarregue a página (Cmd+R / F5): o contador continua em 3, porque o carrinho
   foi salvo em `localStorage` (chave `carrinho:v1`) e é lido num `useEffect` após a montagem.
5. Clique em "Carrinho" para abrir o drawer: lista os itens com quantidade e total.
   "remover" tira o item e o contador cai na hora.

## what it covers

- product page with `revalidateTag("produto:" + slug)`
- cart in context, persisted in localStorage, hydrated after mount
- `next/image` with `sizes`, no layout shift
- generated metadata, canonical and sitemap
- vitest on the formatting and parsing layer

## decisions

- server components by default; the cart is the only client island
- zod parses the API response, so a shape change fails loud
- revalidation by tag instead of `revalidate: 60`, which invalidates the index

## limits

No checkout integration — the scope was the storefront.
