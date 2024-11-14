"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Define interfaces for our data types
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  availability: "In Stock" | "Out of Stock";
}

// Props interfaces
interface FilterMenuProps {
  label: string;
  value: string;
  options: string[];
  onChange: (option: string) => void;
}

interface ProductCardProps {
  product: Product;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aromatic Scented Bubble Candles",
    price: 16.0,
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Artistic Body Candles",
    price: 17.0,
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "Cake-shaped Scented",
    price: 25.0,
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "Creative Middle Finger Shaped",
    price: 16.0,
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
    availability: "Out of Stock",
  },
];

const ProductsPage: React.FC = () => {
  const [sortOption, setSortOption] = useState<string>("Alphabetically, A-Z");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("All");
  const [priceFilter, setPriceFilter] = useState<string>("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let result = [...products];

    // Apply availability filter
    if (availabilityFilter !== "All") {
      result = result.filter(
        (product) => product.availability === availabilityFilter
      );
    }

    // Apply price filter
    if (priceFilter !== "All") {
      result = result.filter((product) => {
        if (priceFilter === "Under $20") return product.price < 20;
        if (priceFilter === "$20 - $30")
          return product.price >= 20 && product.price <= 30;
        if (priceFilter === "Over $30") return product.price > 30;
        return true;
      });
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortOption) {
        case "Alphabetically, A-Z":
          return a.name.localeCompare(b.name);
        case "Alphabetically, Z-A":
          return b.name.localeCompare(a.name);
        case "Price, low to high":
          return a.price - b.price;
        case "Price, high to low":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredProducts(result);
  }, [availabilityFilter, priceFilter, sortOption]);

  // Filter menu component
  const FilterMenu: React.FC<FilterMenuProps> = ({
    label,
    value,
    options,
    onChange,
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div className="relative">
        <button
          className="flex items-center gap-2 text-stone-600 hover:text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <button
                  key={option}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left ${
                    value === option ? "bg-gray-100" : ""
                  }`}
                  role="menuitem"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Product card component
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <div className="group border rounded shadow-md">
      <div className="aspect-square mb-4 relative overflow-hidden bg-stone-100 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-light mb-2">{product.name}</h3>
        <p className="text-base mb-4">
          {product.price === Math.floor(product.price)
            ? `$${product.price}.00 USD`
            : `$${product.price.toFixed(2)} USD`}
        </p>
        <button className="w-full py-3 px-4 border border-stone-200 rounded hover:bg-stone-50 transition-colors">
          {product.name === "Cake-shaped Scented"
            ? "Add to cart"
            : "Choose options"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light mb-8">Products</h1>

      {/* Filters and Sort Section */}
      <div className="lg:flex flex-wrap lg:justify-between items-center pb-8">
        <div className="flex gap-8 items-center justify-between">
          <span className="text-stone-600 hidden md:visible">Filter:</span>
          <div className="grid-cols-1 lg:grid-cols-2 gap-2">
          <FilterMenu
            label="Availability"
            value={availabilityFilter}
            options={["All", "In Stock", "Out of Stock"]}
            onChange={setAvailabilityFilter}
          />
          <FilterMenu
            label="Price"
            value={priceFilter}
            options={["All", "Under $20", "$20 - $30", "Over $30"]}
            onChange={setPriceFilter}
          />
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-stone-600 hidden md:visible">Sort by:</span>
          {/* <div className="grid-cols-1 lg:grid-cols-2 gap-2"> */}
          <FilterMenu
            label={sortOption}
            value={sortOption}
            options={[
              "Alphabetically, A-Z",
              "Alphabetically, Z-A",
              "Price, low to high",
              "Price, high to low",
            ]}
            onChange={setSortOption}
          />

          {/* </div> */}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <span className="text-stone-600 ml-4 ml-auto">
          {filteredProducts.length} products
        </span>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
