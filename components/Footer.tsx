
export default function Footer() {
const paymentMethods = ["visa","mastercard","amex","paypal"];

  return (
    <>
      {/* Footer */}
      <footer className="border-t py-8 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-4">
            {paymentMethods.map((payment) => (
              <div
                key={payment}
                className="w-8 h-8 bg-stone-200 rounded"
                style={{
                  backgroundImage:
                    "url(https://static-00.iconduck.com/assets.00/visa-icon-1024x656-u9fqgerf.png)",
                }}
              />
            ))}
          </div>
          <div className="text-center text-sm text-gray-50">
            <p>© 2024, Natural Candles • Powered by Rajbin</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-stone-300">
                Privacy policy
              </a>
              <a href="#" className="hover:text-stone-300">
                Cookie information
              </a>
              <a href="#" className="hover:text-stone-300">
                Shipping policy
              </a>
              <a href="#" className="hover:text-stone-300">
                Terms of service
              </a>
              <a href="#" className="hover:text-stone-300">
                Refund policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
