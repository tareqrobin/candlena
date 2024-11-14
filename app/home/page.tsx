import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  text: string;
}

interface ProductCardProps {
  product: Product;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aromatic Scented Bubble Candles",
    price: "$16.00 USD",
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
  },
  {
    id: 2,
    name: "Artistic Body Candles",
    price: "From $17.00 USD",
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
  },
  {
    id: 3,
    name: "Cake-shaped Scented Candle",
    price: "$25.00 USD",
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
  },
  {
    id: 4,
    name: "Creative White Finger Scented",
    price: "$18.00 USD",
    image:
      "https://waxedcandlesco.com/cdn/shop/files/hz0hAiYbrycuJqC.webp?v=1724199532&width=360",
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah T",
    text: "These candles are so cute! I'm obsessed with my new strawberry candle! Will definitely be a returning customer!",
  },
  {
    id: 2,
    name: "Cynthia P",
    text: "The scent is AMAZING!",
  },
  {
    id: 3,
    name: "Thomas O",
    text: "I bought a scented candle for my wife's birthday and she loved it. Mission success.",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="flex flex-col border rounded shadow-md">
    <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-auto" />
    <div className="p-4">
      <div className="">
        <h3 className="text-sm mb-2">{product.name}</h3>
        <p className="text-sm text-stone-600 mb-4">{product.price}</p>
      </div>
      <button className="bg-stone-100 text-stone-800 px-4 py-2 rounded text-sm hover:bg-stone-200 w-full">
        Choose options
      </button>
    </div>
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="bg-stone-100 p-6 rounded-lg">
    <p className="text-sm mb-4">{testimonial.text}</p>
    <p className="text-sm font-medium">{testimonial.name}</p>
  </div>
);

const CandleShop: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div>
        <div
          className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-stone-100 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1593542468714-ac3ba4b38d43?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">Aromatic Scented Candles</h1>
            <p className="text-stone-100">Feel calm and relaxed all day long</p>
            <button className="bg-stone-600 text-white px-6 py-2 rounded hover:bg-stone-700">
              Shop all
            </button>
          </div>
        </div>
        <div className="h-10 md:h-20 flex items-center justify-center" />
      </div>

      {/* Featured Product */}
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-stone-600">
          <img
            src="https://waxedcandlesco.com/cdn/shop/files/IMG_0125_55661a61-2951-43b4-9b0c-f56568e05d66.png?v=1726115845&width=750"
            alt="Ghost Candle"
            className="w-full"
          />
          <div className="flex flex-col justify-center p-6">
            <h3 className="text-white text-xl md:text-2xl mb-2">
              NEW! Spooky Ghost Candle
            </h3>
            <p className="text-stone-300 mb-4">Available now thru 10/31</p>
            <button className="bg-white text-stone-800 px-6 py-2 rounded w-fit hover:bg-stone-100">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-stone-600">
        <h2 className="text-center text-2xl md:text-3xl font-light mb-12">
          Browse our latest products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-stone-600 text-white text-center py-8 text-xl md:text-2xl font-light px-4">
        Free shipping when you spend $50 or more!
      </div>

      {/* Strawberry Section */}
      <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-stone-100 text-stone-600 flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: "url(https://m.media-amazon.com/images/I/610S3a4kWNS._AC_SX679_.jpg)",
      }}>
        <div className="flex items-center justify-center flex-col gap-4 bg-white p-6 md:p-10 shadow-md rounded m-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center">
            Decadent Strawberry Wax Candles
          </h2>
          <button className="bg-stone-900 text-white px-6 py-2 rounded hover:bg-stone-800">
            Shop now
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-stone-600">
        <h2 className="text-center text-2xl md:text-3xl font-light mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-md mx-auto text-center py-16 px-6">
        <h2 className="text-xl md:text-2xl font-light mb-4 text-stone-600">
          Subscribe to our emails
        </h2>
        <p className="text-sm text-stone-600 mb-6">
          Be the first to know about new collections and exclusive offers
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-stone-500"
          />
          <button className="bg-stone-900 text-white px-4 py-2 rounded hover:bg-stone-800">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandleShop;