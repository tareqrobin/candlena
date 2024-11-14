export default function Header() {
  return (
    <div>
      {/* Navigation */}
      <nav className="py-4 px-6 flex items-center justify-center">
        {/* <Search className="w-5 h-5" /> */}
        <div className="flex items-center gap-8">
          <img
            src="https://waxedcandlesco.com/cdn/shop/files/WAXED_ef3229d1-aa97-4531-bdfc-5999cfe2aeae.png?v=1724370026&width=225"
            alt="Candle Logo"
            className="w-40 h-40"
          />
        </div>
        {/* <div className="flex items-center gap-4">
          <User className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
        </div> */}
      </nav>

      {/* Menu */}
      <div className="flex justify-center gap-8 py-4 border-b text-stone-600">
        <a href="/home" className="text-sm hover:text-stone-600">
          Home
        </a>
        <a href="/products" className="text-sm hover:text-stone-600">
          Candles
        </a>
        <a href="/contact" className="text-sm hover:text-stone-600">
          Contact
        </a>
      </div>
    </div>
  );
}
