import { Trash2, X } from "lucide-react";
import { Button } from "./ui/button";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartPageProps {
  /** Controls visibility (passed from Header) */
  open: boolean;
  /** Closes the cart (passed from Header) */
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
  onCheckout?: () => void;
}

const CartPage: React.FC<CartPageProps> = ({
  open,
  onClose,
  cartItems,
  updateQuantity,
  removeItem,
  onCheckout,
}) => {
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
          <h2 className="text-2xl font-bold text-gray-800">Your Cart </h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-orange-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 bg-gray-50">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg mb-4">Your cart is empty 😔</p>
              <Button
                onClick={() => {
                  onClose();
                  window.location.href = "/#menu";
                }}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white border rounded-lg p-4 mb-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-30 h-20 rounded-md object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-gray-700">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm flex items-center gap-1 mt-4"
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
          <div className="border-t border-gray-200 px-8 py-6 bg-white mb-6">
            <div className="flex justify-between font-semibold text-gray-700 mb-3">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-3">
              <span>Delivery</span>
              <span>₹30</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 border-t pt-3">
              <span>Total</span>
              <span>₹{(total + 30).toFixed(2)}</span>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={onCheckout}
                className="mt-6  bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-lg text-lg font-semibold"
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
