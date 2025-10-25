import { Trash2, X } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../Context/CartContext";

interface CartPageProps {
  open: boolean;
  onClose: () => void;
  onCheckout?: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ open, onClose, onCheckout }) => {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Full Page Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[700px] h-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Your Cart 🛒
            {cartItems.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 hover:text-orange-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-lg mb-2 font-semibold">Your cart is empty</p>
              <p className="text-sm mb-6">
                Add some delicious items to get started!
              </p>
              <Button
                onClick={onClose}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 flex-1">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        -
                      </button>
                      <span className="font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 border rounded hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right ml-4 flex-shrink-0">
                  <p className="font-semibold text-gray-700 mb-2">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm flex items-center gap-1 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 px-8 py-6 bg-white shadow-lg mb-8">
            <div className="flex justify-between font-semibold text-gray-700 mb-3">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-3">
              <span>Delivery</span>
              <span>₹30.00</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-lg border-t pt-3 mt-2">
              <span>Total</span>
              <span>₹{(total + 30).toFixed(2)}</span>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={onCheckout}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
