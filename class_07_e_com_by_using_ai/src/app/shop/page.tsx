// src\app\shop\page.tsx

import { ProductListing } from "@/components/product-listing"

export const metadata = {
  title: "Products | Shopify",
  description: "Browse our collection of products",
}

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ProductListing />
    </main>
  )
}
