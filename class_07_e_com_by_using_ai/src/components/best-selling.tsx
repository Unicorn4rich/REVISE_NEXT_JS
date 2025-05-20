"use client"

import Image from "next/image"
import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Sample product data
const products = [
  {
    id: 1,
    name: "Leather Crossbody Bag",
    price: 89.99,
    rating: 4.8,
    image: "/spiderMen.jpg",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 129.99,
    rating: 4.9,
    image: "/spiderMen.jpg",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    rating: 4.5,
    image: "/spiderMen.jpg",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 79.99,
    rating: 4.7,
    image: "/spiderMen.jpg",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 69.99,
    rating: 4.6,
    image: "/spiderMen.jpg",
    category: "Clothing",
  },
  {
    id: 6,
    name: "Sneakers",
    price: 99.99,
    rating: 4.8,
    image: "/spiderMen.jpg",
    category: "Footwear",
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 59.99,
    rating: 4.4,
    image: "/spiderMen.jpg",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Backpack",
    price: 49.99,
    rating: 4.7,
    image: "/spiderMen.jpg",
    category: "Accessories",
  },
]

export function BestSelling() {
  return (
    <section className="py-6 px-4 md:px-6 relative">

      <div className="absolute top-5 bottom-12 left-4 md:left-6 z-10">
        <Badge className="px-3 py-4 text-sm font-medium bg-green-500 text-white">Best Selling Products</Badge>
      </div>

      <div className="container mx-auto mt-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden border border-border">
                    
                  <div className="relative h-70 w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium line-clamp-1">{product.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </CardFooter>

                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>

    </section>
  )
}
