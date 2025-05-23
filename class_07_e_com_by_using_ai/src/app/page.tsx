// src\app\page.tsx

import { BestSelling } from "@/components/best-selling";
import { FeaturedProducts } from "@/components/featured-products";
import {HeroSection} from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturedProducts />
      <BestSelling/>
    </main>
  );
}
