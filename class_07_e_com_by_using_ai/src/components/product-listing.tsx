"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Search, SlidersHorizontal, Grid, List, Eye, ShoppingCart, Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"

// Enhanced product data with additional properties
const allProducts = [
  {
    id: 1,
    name: "Spider-Man Costume",
    price: 89.99,
    originalPrice: 119.99, // For sale items
    rating: 4.8,
    image: "/spiderMen.jpg",
    category: "Costumes",
    inStock: true,
    onSale: true,
    colors: ["red", "blue"],
    sizes: ["S", "M", "L", "XL"],
    description: "High-quality Spider-Man costume with detailed web pattern. Perfect for cosplay and Halloween events.",
    features: [
      "Authentic design based on the latest movie",
      "Breathable fabric for comfort",
      "Includes mask and full bodysuit",
      "Machine washable",
    ],
  },
  {
    id: 2,
    name: "Spider-Man Action Figure",
    price: 29.99,
    originalPrice: 29.99,
    rating: 4.9,
    image: "/spiderMen.jpg",
    category: "Toys",
    inStock: true,
    onSale: false,
    colors: ["red"],
    sizes: [],
    description: "Highly detailed Spider-Man action figure with multiple points of articulation.",
    features: [
      "7-inch scale figure",
      "16 points of articulation",
      "Includes web accessories",
      "Display stand included",
    ],
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    inStock: true,
    onSale: true,
    colors: ["black", "white", "gray"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Comfortable cotton t-shirt for everyday wear.",
    features: ["100% premium cotton", "Pre-shrunk fabric", "Reinforced stitching", "Tagless for comfort"],
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    inStock: false,
    onSale: true,
    colors: ["black", "white"],
    sizes: [],
    description: "High-quality wireless earbuds with noise cancellation.",
    features: ["Active noise cancellation", "8-hour battery life", "Water resistant", "Touch controls"],
  },
  {
    id: 5,
    name: "Spider-Man Backpack",
    price: 69.99,
    originalPrice: 69.99,
    rating: 4.9,
    image: "/spiderMen.jpg",
    category: "Accessories",
    inStock: true,
    onSale: false,
    colors: ["red", "blue"],
    sizes: [],
    description: "Stylish Spider-Man themed backpack with multiple compartments.",
    features: ["Padded laptop sleeve", "Water-resistant material", "Adjustable straps", "Front and side pockets"],
  },
  {
    id: 6,
    name: "Sneakers",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    image: "/placeholder.svg?height=300&width=300",
    category: "Footwear",
    inStock: true,
    onSale: true,
    colors: ["black", "white", "red"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    description: "Comfortable and stylish sneakers for everyday wear.",
    features: ["Cushioned insole", "Breathable mesh upper", "Durable rubber outsole", "Lightweight design"],
  },
  {
    id: 7,
    name: "Sunglasses",
    price: 59.99,
    originalPrice: 59.99,
    rating: 4.4,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    inStock: true,
    onSale: false,
    colors: ["black", "brown"],
    sizes: [],
    description: "Stylish sunglasses with UV protection.",
    features: ["100% UV protection", "Polarized lenses", "Durable frame", "Includes case and cleaning cloth"],
  },
  {
    id: 8,
    name: "Laptop Bag",
    price: 49.99,
    originalPrice: 49.99,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    inStock: false,
    onSale: false,
    colors: ["black", "gray"],
    sizes: [],
    description: "Durable laptop bag with multiple compartments.",
    features: [
      "Fits laptops up to 15.6 inches",
      "Padded interior",
      "Adjustable shoulder strap",
      "Water-resistant exterior",
    ],
  },
  {
    id: 9,
    name: "Spider-Man Hoodie",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.8,
    image: "/spiderMen.jpg",
    category: "Clothing",
    inStock: true,
    onSale: true,
    colors: ["red", "black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Warm and comfortable Spider-Man themed hoodie.",
    features: ["80% cotton, 20% polyester", "Front pouch pocket", "Adjustable drawstring hood", "Ribbed cuffs and hem"],
  },
  {
    id: 10,
    name: "Smartwatch",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.6,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    inStock: true,
    onSale: true,
    colors: ["black", "silver"],
    sizes: [],
    description: "Feature-rich smartwatch with health monitoring.",
    features: ["Heart rate monitoring", "Sleep tracking", "Water resistant", "7-day battery life"],
  },
  {
    id: 11,
    name: "Leather Wallet",
    price: 39.99,
    originalPrice: 39.99,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    inStock: true,
    onSale: false,
    colors: ["brown", "black"],
    sizes: [],
    description: "Genuine leather wallet with multiple card slots.",
    features: ["Genuine leather", "RFID blocking", "Multiple card slots", "Slim design"],
  },
  {
    id: 12,
    name: "Denim Jeans",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.7,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    inStock: true,
    onSale: true,
    colors: ["blue", "black"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Classic denim jeans with a comfortable fit.",
    features: ["98% cotton, 2% elastane", "5-pocket design", "Straight leg fit", "Machine washable"],
  },
]

// Get unique categories, colors, and sizes
const categories = [...new Set(allProducts.map((product) => product.category))]
const colors = [...new Set(allProducts.flatMap((product) => product.colors))]
const sizes = [...new Set(allProducts.flatMap((product) => product.sizes))]

// Find min and max prices
const minPrice = Math.min(...allProducts.map((product) => product.price))
const maxPrice = Math.max(...allProducts.map((product) => product.price))

export function ProductListing() {
  // State for filters
  const [products, setProducts] = useState(allProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice])
  const [minRating, setMinRating] = useState<number>(0)
  const [availability, setAvailability] = useState<"all" | "in-stock" | "out-of-stock">("all")
  const [saleStatus, setSaleStatus] = useState<"all" | "on-sale" | "regular">("all")
  const [sortOption, setSortOption] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([])
  const [quickViewProduct, setQuickViewProduct] = useState<(typeof allProducts)[0] | null>(null)

  // Filter and sort products
  useEffect(() => {
    let filteredProducts = [...allProducts]

    // Apply search filter
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) => selectedCategories.includes(product.category))
    }

    // Apply color filter
    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.colors.some((color) => selectedColors.includes(color)),
      )
    }

    // Apply size filter
    if (selectedSizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size)),
      )
    }

    // Apply price range filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1],
    )

    // Apply rating filter
    if (minRating > 0) {
      filteredProducts = filteredProducts.filter((product) => product.rating >= minRating)
    }

    // Apply availability filter
    if (availability === "in-stock") {
      filteredProducts = filteredProducts.filter((product) => product.inStock)
    } else if (availability === "out-of-stock") {
      filteredProducts = filteredProducts.filter((product) => !product.inStock)
    }

    // Apply sale status filter
    if (saleStatus === "on-sale") {
      filteredProducts = filteredProducts.filter((product) => product.onSale)
    } else if (saleStatus === "regular") {
      filteredProducts = filteredProducts.filter((product) => !product.onSale)
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // In a real app, you'd sort by date added
        filteredProducts.sort((a, b) => b.id - a.id)
        break
      // Default is "featured" which is the original order
    }

    setProducts(filteredProducts)
  }, [
    searchQuery,
    selectedCategories,
    selectedColors,
    selectedSizes,
    priceRange,
    minRating,
    availability,
    saleStatus,
    sortOption,
  ])

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  // Toggle size selection
  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setPriceRange([minPrice, maxPrice])
    setMinRating(0)
    setAvailability("all")
    setSaleStatus("all")
    setSortOption("featured")
  }

  // Handle quick view
  const handleQuickView = (product: (typeof allProducts)[0]) => {
    setQuickViewProduct(product)
    // Add to recently viewed if not already there
    if (!recentlyViewed.includes(product.id)) {
      setRecentlyViewed((prev) => [product.id, ...prev].slice(0, 4))
    }
  }

  // Get recently viewed products
  const getRecentlyViewedProducts = () => {
    return recentlyViewed.map((id) => allProducts.find((p) => p.id === id)).filter(Boolean) as typeof allProducts
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <p className="text-muted-foreground">Browse our collection of high-quality products</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative w-full md:w-auto flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Refine your product search</SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-200px)] pr-4">
                <div className="py-6 space-y-6">
                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-4">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[minPrice, maxPrice]}
                        min={minPrice}
                        max={maxPrice}
                        step={1}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="mb-6"
                      />
                      <div className="flex justify-between">
                        <span>${priceRange[0].toFixed(2)}</span>
                        <span>${priceRange[1].toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={`category-${category}`}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h3 className="font-medium mb-4">Availability</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="availability-all"
                          name="availability"
                          checked={availability === "all"}
                          onChange={() => setAvailability("all")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="availability-all">All Products</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="availability-in-stock"
                          name="availability"
                          checked={availability === "in-stock"}
                          onChange={() => setAvailability("in-stock")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="availability-in-stock">In Stock Only</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="availability-out-of-stock"
                          name="availability"
                          checked={availability === "out-of-stock"}
                          onChange={() => setAvailability("out-of-stock")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="availability-out-of-stock">Out of Stock</Label>
                      </div>
                    </div>
                  </div>

                  {/* Sale Status */}
                  <div>
                    <h3 className="font-medium mb-4">Sale Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="sale-all"
                          name="sale"
                          checked={saleStatus === "all"}
                          onChange={() => setSaleStatus("all")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="sale-all">All Products</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="sale-on-sale"
                          name="sale"
                          checked={saleStatus === "on-sale"}
                          onChange={() => setSaleStatus("on-sale")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="sale-on-sale">On Sale</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="sale-regular"
                          name="sale"
                          checked={saleStatus === "regular"}
                          onChange={() => setSaleStatus("regular")}
                          className="h-4 w-4"
                        />
                        <Label htmlFor="sale-regular">Regular Price</Label>
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="font-medium mb-4">Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <TooltipProvider key={color}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                className={`w-8 h-8 rounded-full border-2 ${
                                  selectedColors.includes(color) ? "border-primary" : "border-transparent"
                                }`}
                                style={{ backgroundColor: color }}
                                onClick={() => toggleColor(color)}
                                aria-label={`Filter by ${color}`}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{color}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  {sizes.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-4">Sizes</h3>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            className={`min-w-[40px] h-10 px-2 rounded border ${
                              selectedSizes.includes(size) ? "bg-primary text-primary-foreground" : "bg-background"
                            }`}
                            onClick={() => toggleSize(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rating */}
                  <div>
                    <h3 className="font-medium mb-4">Minimum Rating</h3>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          className={`flex items-center justify-center w-10 h-10 rounded ${
                            minRating >= rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          onClick={() => setMinRating(rating)}
                        >
                          <Star className={`h-6 w-6 ${minRating >= rating ? "fill-yellow-400" : ""}`} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <SheetFooter className="pt-4 border-t">
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
                <Button>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedCategories.length > 0 ||
        selectedColors.length > 0 ||
        selectedSizes.length > 0 ||
        priceRange[0] > minPrice ||
        priceRange[1] < maxPrice ||
        minRating > 0 ||
        availability !== "all" ||
        saleStatus !== "all") && (
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">Active Filters:</span>

            {selectedCategories.map((category) => (
              <Badge key={`cat-${category}`} variant="secondary" className="flex items-center gap-1">
                {category}
                <button onClick={() => toggleCategory(category)} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            ))}

            {selectedColors.map((color) => (
              <Badge key={`color-${color}`} variant="secondary" className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: color }}></span>
                {color}
                <button onClick={() => toggleColor(color)} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            ))}

            {selectedSizes.map((size) => (
              <Badge key={`size-${size}`} variant="secondary" className="flex items-center gap-1">
                Size: {size}
                <button onClick={() => toggleSize(size)} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            ))}

            {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
              <Badge variant="secondary">
                Price: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
              </Badge>
            )}

            {minRating > 0 && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {minRating}+ <Star className="h-3 w-3 fill-current" />
                <button onClick={() => setMinRating(0)} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            )}

            {availability !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {availability === "in-stock" ? "In Stock" : "Out of Stock"}
                <button onClick={() => setAvailability("all")} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            )}

            {saleStatus !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {saleStatus === "on-sale" ? "On Sale" : "Regular Price"}
                <button onClick={() => setSaleStatus("all")} className="ml-1 hover:text-primary">
                  ×
                </button>
              </Badge>
            )}

            <Button variant="ghost" size="sm" onClick={resetFilters} className="ml-auto">
              Clear All
            </Button>
          </div>
        </div>
      )}

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {getRecentlyViewedProducts().map((product) => (
              <Link href={`/products/${product.id}`} key={`recent-${product.id}`} className="group">
                <div className="relative h-[120px] w-full overflow-hidden rounded-md">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <p className="text-sm mt-1 font-medium truncate">{product.name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid/List */}
      {products.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border border-border h-full transition-all duration-200 hover:shadow-md"
              >
                <div className="relative">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {product.onSale && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium">Out of Stock</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 flex flex-col gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => {
                              e.preventDefault()
                              handleQuickView(product)
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Quick view</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to wishlist</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <Link href={`/products/${product.id}`} className="group">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium line-clamp-1">{product.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">${product.price.toFixed(2)}</p>
                      {product.onSale && (
                        <p className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                    <div className="flex mt-2 gap-1">
                      {product.colors.map((color) => (
                        <div
                          key={`${product.id}-${color}`}
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Link>

                <CardFooter className="p-4 pt-0">
                  <Button size="sm" className="w-full" disabled={!product.inStock}>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row border rounded-lg overflow-hidden group hover:shadow-md transition-all duration-200"
              >
                <div className="relative sm:w-[200px] h-[200px]">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  {product.onSale && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="text-lg font-medium hover:text-primary transition-colors">{product.name}</h3>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
                      {product.onSale && (
                        <p className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mt-2 mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="font-normal">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="font-normal">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex gap-1">
                      {product.colors.map((color) => (
                        <div
                          key={`list-${product.id}-${color}`}
                          className="w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {product.sizes.length > 0 && (
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-muted-foreground">Sizes:</span>
                        <span>{product.sizes.join(", ")}</span>
                      </div>
                    )}

                    <div className="ml-auto flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleQuickView(product)}>
                        <Eye className="h-4 w-4 mr-2" />
                        Quick View
                      </Button>
                      <Button size="sm" disabled={!product.inStock}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          <Button variant="outline" onClick={resetFilters} className="mt-4">
            Reset Filters
          </Button>
        </div>
      )}

      {/* Quick View Dialog */}
      <Dialog open={!!quickViewProduct} onOpenChange={(open) => !open && setQuickViewProduct(null)}>
        <DialogContent className="sm:max-w-[800px]">
          {quickViewProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-md">
                <Image
                  src={quickViewProduct.image || "/placeholder.svg"}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover"
                />
                {quickViewProduct.onSale && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                  </div>
                )}
              </div>

              <div>
                <DialogHeader>
                  <DialogTitle className="text-xl">{quickViewProduct.name}</DialogTitle>
                  <DialogDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm ml-1">{quickViewProduct.rating} Rating</span>
                      </div>
                      <Badge variant="outline">{quickViewProduct.category}</Badge>
                      {!quickViewProduct.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                    </div>
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-2xl font-bold">${quickViewProduct.price.toFixed(2)}</p>
                    {quickViewProduct.onSale && (
                      <p className="text-lg text-muted-foreground line-through">
                        ${quickViewProduct.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{quickViewProduct.description}</p>

                  <div className="space-y-4 mb-6">
                    {quickViewProduct.colors.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Colors</h4>
                        <div className="flex gap-2">
                          {quickViewProduct.colors.map((color) => (
                            <div
                              key={`qv-${color}`}
                              className="w-8 h-8 rounded-full border-2 border-muted cursor-pointer hover:border-primary"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {quickViewProduct.sizes.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Sizes</h4>
                        <div className="flex flex-wrap gap-2">
                          {quickViewProduct.sizes.map((size) => (
                            <button
                              key={`qv-size-${size}`}
                              className="min-w-[40px] h-10 px-2 rounded border hover:bg-primary hover:text-primary-foreground"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button className="flex-1" disabled={!quickViewProduct.inStock}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>

                  <Link
                    href={`/products/${quickViewProduct.id}`}
                    className="block text-center text-sm text-primary hover:underline mt-4"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
