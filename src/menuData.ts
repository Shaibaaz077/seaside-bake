// menuData.ts
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
  rating?: number;
  reviews?: number;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
  originalPrice?: number;
}

export const menuData: MenuItem[] = [
  // ================= BURGERS =================
  { id: 1, name: "Classic Veg Burger", category: "Burgers", price: 99, description: "Delicious veg burger with classic taste", rating: 4.5, reviews: 40, image: "/Images/Burgers/classic veg burger.jpg" },
  { id: 2, name: "Veg Chipotle Burger", category: "Burgers", price: 109, description: "Spicy veg burger with chipotle sauce", rating: 4.3, reviews: 35, image: "/Images/Burgers/Chipotle-Black-Bean-Burgers.jpg" },
  { id: 3, name: "The Spicy Veg Burger", category: "Burgers", price: 109, description: "Fiery spiced veg patty burger", rating: 4.4, reviews: 38, image: "/Images/Burgers/the spicy burger.jpg" },
  { id: 4, name: "Paneer Burger", category: "Burgers", price: 139, description: "Soft paneer patty with Indian spices", rating: 4.6, reviews: 44, image: "Images/Burgers/paneer burger.jpg" },
  { id: 5, name: "Mexican Wave Paneer Burger", category: "Burgers", price: 149, description: "Mexican-style paneer burger with salsa", rating: 4.5, reviews: 47, image: "/Images/Burgers/mexican burger.jpg" },
  { id: 6, name: "Five Spice Paneer Burger", category: "Burgers", price: 149, description: "Paneer infused with five spice mix", rating: 4.4, reviews: 39, image: "/Images/Burgers/five burger.jpg" },

  { id: 7, name: "Chicken Burger", category: "Burgers", price: 139, description: "Juicy chicken patty with toppings", rating: 4.6, reviews: 50, image: "/Images/Burgers/chicken-burger.jpeg" },
  { id: 8, name: "Egg and Cheese Burger", category: "Burgers", price: 149, description: "Egg, cheese and chicken patty burger", rating: 4.3, reviews: 33, image: "/Images/Burgers/egg & cheese burger.jpg" },
  { id: 9, name: "Mexican Fried Cheese Burger", category: "Burgers", price: 149, description: "Fried cheese with Mexican flavors", rating: 4.2, reviews: 31, image: "/Images/Burgers/mexican cheese burger.jpg" },
  { id: 10, name: "Schezwan Chicken Burger", category: "Burgers", price: 189, description: "Chicken patty with schezwan sauce", rating: 4.5, reviews: 42, image: "/Images/Burgers/Schezwan Chicken Burger.jpg" },
  { id: 11, name: "Chicken Premium Burger", category: "Burgers", price: 199, description: "Premium chicken burger with cheese", rating: 4.7, reviews: 55, image: "/Images/Burgers/premium chicken burger.jpg" },
  { id: 12, name: "Los Pos Hermanos Chicken Burger", category: "Burgers", price: 199, description: "Special chicken burger with spicy sauce", rating: 4.5, reviews: 48, image: "/Images/Burgers/Los Pos Hermanos Chicken Burger.jpg" },
  { id: 13, name: "Schezwan Chicken Premium Burger", category: "Burgers", price: 199, description: "Premium schezwan chicken burger", rating: 4.6, reviews: 51, image: "/Images/Burgers/Schezwan Chicken Premium Burger.jpg" },
  { id: 14, name: "Lamb Burger", category: "Burgers", price: 249, description: "Tender lamb patty with spices", rating: 4.7, reviews: 60, image: "/Images/Burgers/Lamb-Burger-Recipe.jpg" },
  { id: 15, name: "Chipotle Lamb Burger", category: "Burgers", price: 249, description: "Smoky chipotle lamb burger", rating: 4.6, reviews: 52, image: "/Images/Burgers/chipotle-lamb-burger.jpg" },
  { id: 16, name: "Bannur Lamb Burger", category: "Burgers", price: 259, description: "Traditional Bannur style lamb burger", rating: 4.7, reviews: 54, image: "/Images/Burgers/bannur Lamb Burger.jpg" },
  { id: 17, name: "Juicy Lamb Burger", category: "Burgers", price: 299, description: "Succulent lamb patty burger", rating: 4.8, reviews: 64, image: "/Images/Burgers/juicy Lamb Burger.jpg" },
  { id: 18, name: "The Unforgiving Mutton Burger", category: "Burgers", price: 309, description: "Heavy-duty spicy mutton burger", rating: 4.6, reviews: 49, image: "/Images/Burgers/mutton burger.jpg" },
  { id: 19, name: "Schezwan Premium Lamb Burger", category: "Burgers", price: 309, description: "Premium lamb burger with schezwan sauce", rating: 4.7, reviews: 53, image: "/Images/Burgers/Schezwan Premium Lamb Burger.jpg" },

  { id: 20, name: "Maharaja Veg Burger", category: "Special Burgers", price: 199, description: "Big and royal veg burger loaded with flavors", rating: 4.7, reviews: 60, image: "/Images/Burgers/Veg-Maharaja-Burger.jpg" },
  { id: 21, name: "Maharaja Chicken Burger", category: "Special Burgers", price: 249, description: "Royal chicken burger with rich taste", rating: 4.8, reviews: 65, image: "/Images/Burgers/chicken maharaja burger.jpg" },
  { id: 22, name: "Maharaja Mutton Burger", category: "Special Burgers", price: 309, description: "Mutton burger made royal style", rating: 4.9, reviews: 70, image: "/Images/Burgers/maharaja mutton burger.jpg" },

    // ================= momos Zone =================
    
  { id: 23, name: "Mixed Veg Momo", category: "Momos", price: 79, description: "Steamed mixed veg momo with authentic taste", rating: 4.3, reviews: 28, image: "/Images/Momos/mixed veg momos.jpg" },
  { id: 24, name: "Veg Schezwan Momo", category: "Momos", price: 79, description: "Spicy Schezwan-style steamed veg momo", rating: 4.4, reviews: 35, image: "/Images/Momos/veg_schezwan_momos.png" },
  { id: 25, name: "Paneer Momo", category: "Momos", price: 89, description: "Soft paneer momo with flavorful stuffing", rating: 4.6, reviews: 42, image: "/Images/Momos/paneer-momos.jpg" },
  { id: 26, name: "Corn & Cheese Momo", category: "Momos", price: 99, description: "Cheesy momo filled with sweet corn", rating: 4.5, reviews: 31, image: "/Images/Momos/cheese-corn-momos.jpg" },
  { id: 27, name: "Mushroom Momo", category: "Momos", price: 99, description: "Juicy mushroom momo with herbs", rating: 4.2, reviews: 25, image: "/Images/Momos/mushroom-momo.jpg" },
  { id: 28, name: "Pizza Momo", category: "Momos", price: 129, description: "Fusion momo stuffed with cheesy pizza filling", rating: 4.7, reviews: 50, image: "/Images/Momos/pizza momos.jpg" },
  { id: 29, name: "Chocolate Momo", category: "Momos", price: 149, description: "Sweet momo filled with molten chocolate", rating: 4.8, reviews: 60, image: "/Images/Momos/chocolatesmomos.jpg" },

  { id: 30, name: "Chicken Momo", category: "Momos", price: 89, description: "Classic steamed chicken momo", rating: 4.6, reviews: 48, image: "/Images/Momos/Easy-Chicken-Momo.jpeg" },
  { id: 31, name: "Chicken Peri Peri Momo", category: "Momos", price: 99, description: "Tangy peri peri flavored chicken momo", rating: 4.7, reviews: 55, image: "/Images/Momos/chicken peri peri momos.jpg" },
  { id: 32, name: "Chicken Tikka Momo", category: "Momos", price: 99, description: "Tandoori-style chicken tikka momo", rating: 4.5, reviews: 37, image: "/Images/Momos/chicken-tikka-momo.jpg" },
  { id: 33, name: "Chicken Hariyali Momo", category: "Momos", price: 99, description: "Herbal spiced green chicken momo", rating: 4.3, reviews: 29, image: "/Images/Momos/Chicken Hariyali Momo.jpg" },
  { id: 34, name: "Butter Chicken Momo", category: "Momos", price: 109, description: "Rich butter chicken stuffed momo", rating: 4.8, reviews: 62, image: "/Images/Momos/Butter chicken momos.jpg" },
  { id: 35, name: "Chicken Cheese Momo", category: "Momos", price: 129, description: "Cheesy chicken momo with creamy filling", rating: 4.9, reviews: 70, image: "/Images/Momos/chicken-cheese-momos.jpg" },

    // ================= Fried Chicken Zone =================

  { id: 36, name: "Classic Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Crispy golden fried chicken, 4 pieces", rating: 4.6, reviews: 40, image: "/Images/Fried Chicken/Fried chicken 4p.jpg" },
  { id: 37, name: "Classic Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Crispy golden fried chicken, 6 pieces", rating: 4.7, reviews: 52, image: "/Images/Fried Chicken/fried-chicken 6p.jpg" },
  { id: 38, name: "Classic Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Crispy golden fried chicken, 8 pieces", rating: 4.8, reviews: 68, image: "/Images/Fried Chicken/Fried chicken 8p.jpeg" },
  { id: 39, name: "Classic Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Crispy golden fried chicken, 12 pieces", rating: 4.9, reviews: 80, image: "/Images/Fried Chicken/fried chicken 12pc.jpg" },

  { id: 40, name: "Korean Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Korean-style sweet & spicy fried chicken, 4 pieces", rating: 4.7, reviews: 45, image: "/Images/Fried Chicken/Korean chicken 4p.jpeg" },
  { id: 41, name: "Korean Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Korean-style sweet & spicy fried chicken, 6 pieces", rating: 4.8, reviews: 55, image: "/Images/Fried Chicken/korean-Chickin 6p.jpg" },
  { id: 42, name: "Korean Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Korean-style sweet & spicy fried chicken, 8 pieces", rating: 4.8, reviews: 70, image: "/Images/Fried Chicken/korean chicken 8pjpeg.jpeg" },
  { id: 43, name: "Korean Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Korean-style sweet & spicy fried chicken, 12 pieces", rating: 4.9, reviews: 85, image: "/Images/Fried Chicken/korean fried chicken 12p.jpeg" },

  { id: 44, name: "Sweet Chilli Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Sweet chilli flavored fried chicken, 4 pieces", rating: 4.6, reviews: 38, image: "/Images/Fried Chicken/Sweet Chilli Fried Chicken 4 Pc.jpg" },
  { id: 45, name: "Sweet Chilli Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Sweet chilli flavored fried chicken, 6 pieces", rating: 4.7, reviews: 50, image: "/Images/Fried Chicken/Sweet Chilli Fried Chicken 6 Pc.jpg" },
  { id: 46, name: "Sweet Chilli Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Sweet chilli flavored fried chicken, 8 pieces", rating: 4.8, reviews: 67, image: "/Images/Fried Chicken/Sweet Chilli Fried Chicken 8Pc.jpg" },
  { id: 47, name: "Sweet Chilli Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Sweet chilli flavored fried chicken, 12 pieces", rating: 4.9, reviews: 82, image: "/Images/Fried Chicken/Sweet Chilli Fried Chicken 12Pc.jpg" },

  { id: 48, name: "Teriyaki Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Teriyaki glazed fried chicken, 4 pieces", rating: 4.6, reviews: 42, image: "/Images/Fried Chicken/Teriyaki-Chicken 4 pic.jpg" },
  { id: 49, name: "Teriyaki Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Teriyaki glazed fried chicken, 6 pieces", rating: 4.7, reviews: 54, image: "/Images/Fried Chicken/Teriyaki-Chicken 6pic.jpg" },
  { id: 50, name: "Teriyaki Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Teriyaki glazed fried chicken, 8 pieces", rating: 4.8, reviews: 66, image: "/Images/Fried Chicken/Teriyaki-Chicken 8pic.jpg" },
  { id: 51, name: "Teriyaki Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Teriyaki glazed fried chicken, 12 pieces", rating: 4.9, reviews: 83, image: "/Images/Fried Chicken/Teriyaki Fried Chicken 12 Pic.jpg" },

  { id: 52, name: "Peri Peri Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Spicy peri peri fried chicken, 4 pieces", rating: 4.7, reviews: 48, image: "/Images/Fried Chicken/Peri Peri Fried Chicken 4 Pc.jpg" },
  { id: 53, name: "Peri Peri Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Spicy peri peri fried chicken, 6 pieces", rating: 4.8, reviews: 58, image: "/Images/Fried Chicken/Peri Peri Fried Chicken 6Pc.jpeg" },
  { id: 54, name: "Peri Peri Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Spicy peri peri fried chicken, 8 pieces", rating: 4.8, reviews: 72, image: "/Images/Fried Chicken/peri-peri-chicken 8p jpg.jpg" },
  { id: 55, name: "Peri Peri Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Spicy peri peri fried chicken, 12 pieces", rating: 4.9, reviews: 88, image: "/Images/Fried Chicken/Peri Peri Fried Chicken 12 Pc.jpg" },

  { id: 56, name: "Chilli Garlic Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Zesty chilli garlic fried chicken, 4 pieces", rating: 4.6, reviews: 36, image: "/Images/Fried Chicken/Chilli Garlic Fried Chicken 4 Pc.jpg" },
  { id: 57, name: "Chilli Garlic Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Zesty chilli garlic fried chicken, 6 pieces", rating: 4.7, reviews: 49, image: "/Images/Fried Chicken/Chilli Garlic Fried Chicken 6 Pc.jpg" },
  { id: 58, name: "Chilli Garlic Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Zesty chilli garlic fried chicken, 8 pieces", rating: 4.8, reviews: 65, image: "/Images/Fried Chicken/Chilli Garlic Fried Chicken 8pc.jpg" },
  { id: 59, name: "Chilli Garlic Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Zesty chilli garlic fried chicken, 12 pieces", rating: 4.9, reviews: 81, image: "/Images/Fried Chicken/Chilli Garlic Fried Chicken 12pic.png" },

  { id: 60, name: "Lemon Pepper Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Tangy lemon pepper fried chicken, 4 pieces", rating: 4.6, reviews: 39, image: "/Images/Fried Chicken/Lemon Pepper Fried Chicken 4 Pc.jpg" },
  { id: 61, name: "Lemon Pepper Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Tangy lemon pepper fried chicken, 6 pieces", rating: 4.7, reviews: 51, image: "/Images/Fried Chicken/Lemon Pepper Fried Chicken 6 Pc.jpg" },
  { id: 62, name: "Lemon Pepper Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Tangy lemon pepper fried chicken, 8 pieces", rating: 4.8, reviews: 64, image: "/Images/Fried Chicken/Lemon Pepper Fried Chicken 8Pc.jpg" },
  { id: 63, name: "Lemon Pepper Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Tangy lemon pepper fried chicken, 12 pieces", rating: 4.9, reviews: 79, image: "/Images/Fried Chicken/Lemon Pepper Fried Chicken 12Pc.jpg" },


// =================== Wings Zone =================

  { id: 64, name: "Classic Wings 4 Pc", category: "Wings", price: 299, description: "Classic crispy chicken wings, 4 pieces", rating: 4.5, reviews: 30, image: "/Images/Wings/classic wings 4pic.jpg" },
  { id: 65, name: "Classic Wings 6 Pc", category: "Wings", price: 409, description: "Classic crispy chicken wings, 6 pieces", rating: 4.6, reviews: 42, image: "/Images/Wings/Classic Wings 6 Pc .jpg" },
  { id: 66, name: "Classic Wings 8 Pc", category: "Wings", price: 539, description: "Classic crispy chicken wings, 8 pieces", rating: 4.7, reviews: 55, image: "/Images/Wings/Classic Wings 8 Pc .jpg" },
  { id: 67, name: "Classic Wings 12 Pc", category: "Wings", price: 749, description: "Classic crispy chicken wings, 12 pieces", rating: 4.8, reviews: 70, image: "/Images/Wings/Classic Wings 12 Pc .jpg" },


  { id: 68, name: "Korean Fried Wings 4 Pc", category: "Wings", price: 299, description: "Crispy Korean-style fried wings, 4 pieces", rating: 4.6, reviews: 35, image: "/Images/Wings/Korean Fried Wings 4 Pc .jpg" },
  { id: 69, name: "Korean Fried Wings 6 Pc", category: "Wings", price: 409, description: "Crispy Korean-style fried wings, 6 pieces", rating: 4.7, reviews: 47, image: "/Images/Wings/Korean Fried Wings 6pic .jpg" },
  { id: 70, name: "Korean Fried Wings 8 Pc", category: "Wings", price: 539, description: "Crispy Korean-style fried wings, 8 pieces", rating: 4.8, reviews: 60, image: "/Images/Wings/Korean Fried Wings 8 Pc.jpg" },
  { id: 71, name: "Korean Fried Wings 12 Pc", category: "Wings", price: 749, description: "Crispy Korean-style fried wings, 12 pieces", rating: 4.9, reviews: 78, image: "/Images/Wings/Korean Fried Wings 12Pc.jpg" },

  { id: 72, name: "Sweet Chilli Wings 4 Pc", category: "Wings", price: 299, description: "Sweet chilli glazed crispy wings, 4 pieces", rating: 4.6, reviews: 33, image: "/Images/Wings/Sweet Chilli Wings 4pic.jpg" },
  { id: 73, name: "Sweet Chilli Wings 6 Pc", category: "Wings", price: 409, description: "Sweet chilli glazed crispy wings, 6 pieces", rating: 4.7, reviews: 44, image: "/Images/Wings/Sweet Chilli Wings 6pic.jpg" },
  { id: 74, name: "Sweet Chilli Wings 8 Pc", category: "Wings", price: 539, description: "Sweet chilli glazed crispy wings, 8 pieces", rating: 4.8, reviews: 57, image: "/Images/Wings/Sweet Chilli Wings 8 Pc.jpg" },
  { id: 75, name: "Sweet Chilli Wings 12 Pc", category: "Wings", price: 749, description: "Sweet chilli glazed crispy wings, 12 pieces", rating: 4.9, reviews: 72, image: "/Images/Wings/Sweet Chilli Wings 12pic.jpg" },

  { id: 76, name: "Teriyaki Wings 4 Pc", category: "Wings", price: 299, description: "Teriyaki glazed crispy wings, 4 pieces", rating: 4.6, reviews: 32, image: "/Images/Wings/teriyaki-chicken-wings 4pic.jpg" },
  { id: 77, name: "Teriyaki Wings 6 Pc", category: "Wings", price: 409, description: "Teriyaki glazed crispy wings, 6 pieces", rating: 4.7, reviews: 45, image: "/Images/Wings/Teriyaki Wings 6 Pc.jpg" },
  { id: 78, name: "Teriyaki Wings 8 Pc", category: "Wings", price: 539, description: "Teriyaki glazed crispy wings, 8 pieces", rating: 4.8, reviews: 58, image: "/Images/Wings/Teriyaki Wings 8 Pc.jpg" },
  { id: 79, name: "Teriyaki Wings 12 Pc", category: "Wings", price: 749, description: "Teriyaki glazed crispy wings, 12 pieces", rating: 4.9, reviews: 74, image: "/Images/Wings/Teriyaki Wings 12Pc.jpg" },

  { id: 80, name: "Peri Peri Wings 4 Pc", category: "Wings", price: 299, description: "Spicy peri peri wings, 4 pieces", rating: 4.6, reviews: 37, image: "/Images/Wings/peri peri wings.jpg" },
  { id: 81, name: "Peri Peri Wings 6 Pc", category: "Wings", price: 409, description: "Spicy peri peri wings, 6 pieces", rating: 4.7, reviews: 46, image: "/Images/Wings/Peri Peri Wings 6Pc.jpg" },
  { id: 82, name: "Peri Peri Wings 8 Pc", category: "Wings", price: 539, description: "Spicy peri peri wings, 8 pieces", rating: 4.8, reviews: 61, image: "/Images/Wings/Peri Peri Wings 8Pc.jpg" },
  { id: 83, name: "Peri Peri Wings 12 Pc", category: "Wings", price: 749, description: "Spicy peri peri wings, 12 pieces", rating: 4.9, reviews: 76, image: "/Images/Wings/Peri-Peri-Chicken-Wings 12pic .jpg" },

  { id: 84, name: "Chilli Garlic Wings 4 Pc", category: "Wings", price: 299, description: "Zesty chilli garlic crispy wings, 4 pieces", rating: 4.6, reviews: 34, image: "/Images/Wings/Chilli Garlic Wings 4 Pc.jpg" },
  { id: 85, name: "Chilli Garlic Wings 6 Pc", category: "Wings", price: 409, description: "Zesty chilli garlic crispy wings, 6 pieces", rating: 4.7, reviews: 48, image: "/Images/Wings/Chilli Garlic Wings 6Pic.jpg" },
  { id: 86, name: "Chilli Garlic Wings 8 Pc", category: "Wings", price: 539, description: "Zesty chilli garlic crispy wings, 8 pieces", rating: 4.8, reviews: 62, image: "/Images/Wings/Chilli Garlic Wings 8 Pic.jpg" },
  { id: 87, name: "Chilli Garlic Wings 12 Pc", category: "Wings", price: 749, description: "Zesty chilli garlic crispy wings, 12 pieces", rating: 4.9, reviews: 77, image: "/Images/Wings/Chilli-Ginger-Wings 12pic.jpg" },

  { id: 88, name: "Lemon Pepper Wings 4 Pc", category: "Wings", price: 299, description: "Tangy lemon pepper seasoned wings, 4 pieces", rating: 4.6, reviews: 36, image: "/Images/Wings/Lemon Pepper Wings 4 Pc.jpg" },
  { id: 89, name: "Lemon Pepper Wings 6 Pc", category: "Wings", price: 409, description: "Tangy lemon pepper seasoned wings, 6 pieces", rating: 4.7, reviews: 49, image: "/Images/Wings/Lemon Pepper Wings 6Pc.jpg" },
  { id: 90, name: "Lemon Pepper Wings 8 Pc", category: "Wings", price: 539, description: "Tangy lemon pepper seasoned wings, 8 pieces", rating: 4.8, reviews: 63, image: "/Images/Wings/Lemon Pepper Wings 8 Pc.jpg" },
  { id: 91, name: "Lemon Pepper Wings 12 Pc", category: "Wings", price: 749, description: "Tangy lemon pepper seasoned wings, 12 pieces", rating: 4.9, reviews: 79, image: "/Images/Wings/Lemon Pepper Wings 12pc.jpg" },

//   =================== Pizza Zone ===================

  { id: 92, name: "Veg Pizza", category: "Pizza", price: 399, description: "Classic veg pizza with fresh toppings", rating: 4.6, reviews: 41, image: "/Images/Pizza/veggie-pizza.png" },
  { id: 93, name: "Veg Bento Pizza [8 Inch]", category: "Pizza", price: 209, description: "8-inch Veg Bento Pizza with rich cheese", rating: 4.7, reviews: 37, image: "/Images/Pizza/Veg Bento Pizza [8 Inch].jpg" },
  { id: 94, name: "Paneer Tikka Bento Pizza [8 Inch]", category: "Pizza", price: 299, description: "8-inch Paneer Tikka Pizza with Indian spices", rating: 4.8, reviews: 52, image: "/Images/Pizza/Paneer Tikka Bento Pizza.jpg" },
  { id: 95, name: "Chilli Paneer Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch spicy Chilli Paneer Pizza", rating: 4.7, reviews: 46, image: "/Images/Pizza/chilli paneer pizza.jpg" },

 { id: 96, name: "Non Veg Pizza", category: "Pizza", price: 399, description: "Classic non-veg pizza with chicken toppings", rating: 4.6, reviews: 50, image: "/Images/Pizza/non veg pizza.jpg" },
{ id: 97, name: "Margherita Bento Pizza [8 Inch]", category: "Pizza", price: 179, description: "8-inch Margherita Bento Pizza with extra cheese", rating: 4.7, reviews: 44, image: "/Images/Pizza/Margherita Bento Pizza [8 Inch].jpg" },
{ id: 98, name: "Pineapple Bento Pizza [8 Inch]", category: "Pizza", price: 209, description: "8-inch Pineapple Bento Pizza with a sweet twist", rating: 4.6, reviews: 39, image: "/Images/Pizza/Pineapple Bento Pizza [8 Inch].jpg" },
{ id: 99, name: "Chicken Tikka Bento Pizza [8 Inch]", category: "Pizza", price: 309, description: "8-inch Chicken Tikka Pizza with Indian flavors", rating: 4.8, reviews: 55, image: "/Images/Pizza/Chicken Tikka Bento Pizza [8 Inch].jpg" },
{ id: 100, name: "Bhuna Chicken Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch Bhuna Chicken Pizza with rich spices", rating: 4.7, reviews: 47, image: "/Images/Pizza/Bhuna Chicken Pizza [8 Inch].jpg" },
{ id: 101, name: "Schezwan Chicken Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch Schezwan Chicken Pizza with spicy flavor", rating: 4.8, reviews: 49, image: "/Images/Pizza/Schezwan Chicken Bento Pizza [8 Inch].jpg" },

{ id: 102, name: "Chicken Popcorn Loaded Fries", category: "Snacks", price: 239, description: "Fries topped with crispy chicken popcorn", rating: 4.7, reviews: 38, image: "/Images/Snacks/Chicken Popcorn Loaded Fries.jpg" },
{ id: 103, name: "Chicken Popcorn Fries With Schezwan Sauce", category: "Snacks", price: 249, description: "Fries with chicken popcorn & Schezwan sauce", rating: 4.8, reviews: 42, image: "/Images/Snacks/Chicken Popcorn Fries With Schezwan Sauce.jpg" },
{ id: 104, name: "Chicken Tikka Loaded Fries", category: "Snacks", price: 249, description: "Fries loaded with chicken tikka chunks", rating: 4.8, reviews: 47, image: "/Images/Snacks/Chicken Tikka Loaded Fries.jpg" },
{ id: 105, name: "Chicken Tikka Loaded Fries With Mint Mayo", category: "Snacks", price: 259, description: "Fries with chicken tikka & mint mayo topping", rating: 4.9, reviews: 51, image: "/Images/Snacks/Chicken Tikka Loaded Fries With Mint Mayo.jpg" },
{ id: 106, name: "Large Chicken Popcorn", category: "Snacks", price: 299, description: "Large serving of crispy chicken popcorn", rating: 4.8, reviews: 56, image: "/Images/Snacks/Large Chicken Popcorn.jpg" },
{ id: 107, name: "Korean Popcorn", category: "Snacks", price: 309, description: "Korean-style crispy chicken popcorn", rating: 4.9, reviews: 60, image: "/Images/Snacks/Korean Popcorn.jpg" },
{ id: 108, name: "Large Chicken Popcorn With Schezwan Sauce", category: "Snacks", price: 309, description: "Large chicken popcorn with spicy Schezwan sauce", rating: 4.9, reviews: 64, image: "/Images/Snacks/Large Chicken Popcorn with schezwan sauce.jpg" },


  // ================= VEG ROLLS =================

 { id: 109, name: "Batata Vada Roll (Mini)", category: "Rolls", price: 139, description: "Mini roll stuffed with spicy batata vada filling", rating: 4.5, reviews: 32, image: "/Images/Rolls/batata_vada_roll.jpg" },
{ id: 110, name: "Batata Vada Roll (Full)", category: "Rolls", price: 229, description: "Full-sized roll stuffed with spicy batata vada filling", rating: 4.6, reviews: 48, image: "/Images/Rolls/Batata Vada Roll (Full).jpg" },

{ id: 111, name: "Chilli Paneer Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with spicy chilli paneer", rating: 4.6, reviews: 37, image: "/Images/Rolls/Chilli Paneer Roll (Mini).jpg" },
{ id: 112, name: "Chilli Paneer Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with spicy chilli paneer", rating: 4.7, reviews: 50, image: "/Images/Rolls/Chilli Paneer Roll (full).jpg" },

{ id: 113, name: "Mixed Veg Roll (Mini)", category: "Rolls", price: 109, description: "Mini roll stuffed with fresh mixed vegetables", rating: 4.5, reviews: 29, image: "/Images/Rolls/Mixed Veg Roll (Mini).jpg" },
{ id: 114, name: "Mixed Veg Roll (Full)", category: "Rolls", price: 179, description: "Full-sized roll stuffed with fresh mixed vegetables", rating: 4.6, reviews: 41, image: "/Images/Rolls/Mixed Veg Roll (full).jpg" },

{ id: 115, name: "Mushroom Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with sautéed mushrooms", rating: 4.6, reviews: 34, image: "/Images/Rolls/Mushroom Roll (Mini).jpg" },
{ id: 116, name: "Mushroom Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with sautéed mushrooms", rating: 4.7, reviews: 45, image: "/Images/Rolls/Mushroom Roll (full).jpg" },

{ id: 117, name: "Paneer Tikka Roll (Mini)", category: "Rolls", price: 99, description: "Mini roll stuffed with smoky paneer tikka", rating: 4.6, reviews: 36, image: "/Images/Rolls/Paneer Tikka Roll (Mini).jpg" },
{ id: 118, name: "Paneer Tikka Roll (Full)", category: "Rolls", price: 155, description: "Full-sized roll stuffed with smoky paneer tikka", rating: 4.7, reviews: 49, image: "/Images/Rolls/Paneer Tikka Roll (full).jpg" },

{ id: 119, name: "Veg Finger Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with crunchy veg fingers", rating: 4.5, reviews: 31, image: "/Images/Rolls/Veg Finger Roll (Mini).jpg" },
{ id: 120, name: "Veg Finger Roll (Full)", category: "Rolls", price: 199, description: "Full-sized roll filled with crunchy veg fingers", rating: 4.6, reviews: 46, image: "/Images/Rolls/Veg Finger Roll (full).jpg" },

// ================= NON-VEG ROLLS =================
{ id: 121, name: "Chicken Chukka Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll with spicy chicken chukka filling", rating: 4.6, reviews: 40, image: "/Images/Rolls/Chicken Chukka Roll (Mini).jpg" },
{ id: 122, name: "Chicken Chukka Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll with spicy chicken chukka filling", rating: 4.7, reviews: 54, image: "/Images/Rolls/Chicken Chukka Roll (full).webp" },

{ id: 123, name: "Lemon Chicken Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll with zesty lemon chicken filling", rating: 4.6, reviews: 38, image: "/Images/Rolls/Lemon Chicken Roll (Mini).jpg" },
{ id: 124, name: "Lemon Chicken Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll with zesty lemon chicken filling", rating: 4.7, reviews: 51, image: "/Images/Rolls/Lemon Chicken Roll (full).jpg" },

{ id: 125, name: "Chicken Tikka Roll (Mini)", category: "Rolls", price: 129, description: "Mini roll stuffed with smoky chicken tikka", rating: 4.7, reviews: 42, image: "/Images/Rolls/Chicken Tikka Roll (Mini).jpg" },
{ id: 126, name: "Chicken Tikka Roll (Full)", category: "Rolls", price: 219, description: "Full-sized roll stuffed with smoky chicken tikka", rating: 4.8, reviews: 57, image: "/Images/Rolls/Chicken Tikka Roll (full).jpg" },

{ id: 127, name: "Chicken Shami Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with flavorful chicken shami kebab", rating: 4.6, reviews: 39, image: "/Images/Rolls/Chicken Shami Roll (Mini).jpg" },
{ id: 128, name: "Chicken Shami Roll (Full)", category: "Rolls", price: 199, description: "Full-sized roll filled with flavorful chicken shami kebab", rating: 4.7, reviews: 52, image: "/Images/Rolls/Chicken Shami Roll (full).jpg" },

{ id: 129, name: "Bhuna Chicken Roll (Mini)", category: "Rolls", price: 89, description: "Mini roll with spiced bhuna chicken filling", rating: 4.5, reviews: 35, image: "/Images/Rolls/Bhuna Chicken Roll (Mini).jpg" },
{ id: 130, name: "Bhuna Chicken Roll (Full)", category: "Rolls", price: 149, description: "Full-sized roll with spiced bhuna chicken filling", rating: 4.6, reviews: 47, image: "/Images/Rolls/Bhuna Chicken Roll (full).jpg" },

{ id: 131, name: "Egg and Cheese Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with egg and cheese", rating: 4.6, reviews: 41, image: "/Images/Rolls/Egg and Cheese Roll (Mini).jpg" },
{ id: 132, name: "Egg and Cheese Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with egg and cheese", rating: 4.7, reviews: 53, image: "/Images/Rolls/Egg and Cheese Roll (full).jpg" },

{ id: 133, name: "Chettinad Chicken Roll (Mini)", category: "Rolls", price: 99, description: "Mini roll with spicy Chettinad chicken filling", rating: 4.6, reviews: 37, image: "/Images/Rolls/Chettinad Chicken Roll (Mini).jpg" },
{ id: 134, name: "Chettinad Chicken Roll (Full)", category: "Rolls", price: 155, description: "Full-sized roll with spicy Chettinad chicken filling", rating: 4.7, reviews: 50, image: "/Images/Rolls/Chettinad Chicken Roll (full).jpg" },

{ id: 135, name: "Schezwan Chicken Roll (Mini)", category: "Rolls", price: 129, description: "Mini roll with fiery Schezwan chicken filling", rating: 4.7, reviews: 44, image: "/Images/Rolls/Schezwan Chicken Roll (Mini).jpeg" },
{ id: 136, name: "Schezwan Chicken Roll (Full)", category: "Rolls", price: 219, description: "Full-sized roll with fiery Schezwan chicken filling", rating: 4.8, reviews: 58, image: "/Images/Rolls/Schezwan Chicken Roll (full).jpg" },


  // ================= CAKES (500g & 1kg) =================

   { id: 137, name: "Vanilla Cake (500 g)", category: "Cakes", price: 449, description: "Soft and fluffy vanilla cake", rating: 4.6, reviews: 38, image: "/Images/Cakes/Vanilla Cake (500 g).jpg" },
  { id: 138, name: "Vanilla Cake (1 kg)", category: "Cakes", price: 699, description: "Soft and fluffy vanilla cake", rating: 4.7, reviews: 55, image: "/Images/Cakes/Vanilla Cake (1kg).jpg" },

  { id: 139, name: "Oreo Cake (500 g)", category: "Cakes", price: 509, description: "Rich cake layered with Oreo cream and cookies", rating: 4.7, reviews: 42, image: "/Images/Cakes/Oreo Cake (500 g).jpg" },
  { id: 140, name: "Oreo Cake (1 kg)", category: "Cakes", price: 699, description: "Rich cake layered with Oreo cream and cookies", rating: 4.8, reviews: 60, image: "/Images/Cakes/Oreo Cake (1 kg).jpg" },

  { id: 141, name: "Mango Gateau Cake (500 g)", category: "Cakes", price: 509, description: "Light and creamy mango-flavored gateau cake", rating: 4.6, reviews: 37, image: "/Images/Cakes/Mango Gateau Cake (500 g).jpg" },
  { id: 142, name: "Mango Gateau Cake (1 kg)", category: "Cakes", price: 749, description: "Light and creamy mango-flavored gateau cake", rating: 4.7, reviews: 52, image: "/Images/Cakes/Mango Gateau Cake (1 kg).jpg" },

  { id: 143, name: "Pineapple Cake (500 g)", category: "Cakes", price: 549, description: "Classic pineapple cake with whipped cream", rating: 4.6, reviews: 41, image: "/Images/Cakes/Pineapple Cake (500 g).jpg" },
  { id: 144, name: "Pineapple Cake (1 kg)", category: "Cakes", price: 779, description: "Classic pineapple cake with whipped cream", rating: 4.7, reviews: 59, image: "/Images/Cakes/Pineapple Cake (1 kg).jpg" },

  { id: 145, name: "White Forest Gateau Cake (500 g)", category: "Cakes", price: 559, description: "Delightful white forest gateau cake", rating: 4.7, reviews: 45, image: "/Images/Cakes/White Forest Gateau Cake (500 g).jpg" },
  { id: 146, name: "White Forest Gateau Cake (1 kg)", category: "Cakes", price: 789, description: "Delightful white forest gateau cake", rating: 4.8, reviews: 61, image: "/Images/Cakes/White Forest Gateau Cake (1 kg).jpg" },

  { id: 147, name: "Black Forest Gateau Cake (500 g)", category: "Cakes", price: 589, description: "Classic black forest gateau with cherries", rating: 4.7, reviews: 49, image: "/Images/Cakes/Black Forest Gateau Cake (500 g).jpg" },
  { id: 148, name: "Black Forest Gateau Cake (1 kg)", category: "Cakes", price: 789, description: "Classic black forest gateau with cherries", rating: 4.8, reviews: 66, image: "/Images/Cakes/Black Forest Gateau Cake (1 kg).jpg" },

  { id: 149, name: "Mad Over Chocolate Cake (500 g)", category: "Cakes", price: 619, description: "Chocolate-rich cake for true chocolate lovers", rating: 4.8, reviews: 52, image: "/Images/Cakes/Mad Over Chocolate Cake (500 g).jpg" },
  { id: 150, name: "Mad Over Chocolate Cake (1 kg)", category: "Cakes", price: 999, description: "Chocolate-rich cake for true chocolate lovers", rating: 4.9, reviews: 71, image: "/Images/Cakes/Mad Over Chocolate Cake (1 kg).jpg" },

  { id: 151, name: "Chocolate Truffle Cake (500 g)", category: "Cakes", price: 659, description: "Decadent chocolate truffle layered cake", rating: 4.8, reviews: 56, image: "/Images/Cakes/Chocolate Truffle Cake (500 g).jpg" },
  { id: 152, name: "Chocolate Truffle Cake (1 kg)", category: "Cakes", price: 999, description: "Decadent chocolate truffle layered cake", rating: 4.9, reviews: 73, image: "/Images/Cakes/Chocolate Truffle Cake (1 kg).jpg" },

  { id: 153, name: "Vanchoc Cake (500 g)", category: "Cakes", price: 679, description: "Vanilla and chocolate fusion cake", rating: 4.7, reviews: 47, image: "/Images/Cakes/Vanchoc Cake (500 g).jpg" },
  { id: 154, name: "Vanchoc Cake (1 kg)", category: "Cakes", price: 1049, description: "Vanilla and chocolate fusion cake", rating: 4.8, reviews: 63, image: "/Images/Cakes/Vanchoc Cake (1 kg).jpg" },

  { id: 155, name: "Cute Teddy Cake (500 g)", category: "Cakes", price: 679, description: "Adorable teddy-shaped cake", rating: 4.7, reviews: 44, image: "/Images/Cakes/Cute Teddy Cake (500 g).jpg" },
  { id: 156, name: "Cute Teddy Cake (1 kg)", category: "Cakes", price: 1049, description: "Adorable teddy-shaped cake", rating: 4.8, reviews: 60, image: "/Images/Cakes/Cute Teddy Cake (1 kg).jpg" },

  { id: 157, name: "Red Velvet Cake (500 g)", category: "Cakes", price: 689, description: "Velvety smooth red velvet cake", rating: 4.8, reviews: 53, image: "/Images/Cakes/Red Velvet Cake (500 g).jpg" },
  { id: 158, name: "Red Velvet Cake (1 kg)", category: "Cakes", price: 1129, description: "Velvety smooth red velvet cake", rating: 4.9, reviews: 70, image: "/Images/Cakes/Red Velvet Cake (1 kg).jpg" },

  { id: 159, name: "Ferrero Rocher Cake (500 g)", category: "Cakes", price: 689, description: "Crunchy Ferrero Rocher-inspired cake", rating: 4.8, reviews: 55, image: "/Images/Cakes/Ferrero Rocher Cake (500 g).jpg" },
  { id: 160, name: "Ferrero Rocher Cake (1 kg)", category: "Cakes", price: 1149, description: "Crunchy Ferrero Rocher-inspired cake", rating: 4.9, reviews: 72, image: "/Images/Cakes/Ferrero Rocher Cake (1 kg).jpg" },

  { id: 161, name: "Molten Affair Cake (500 g)", category: "Cakes", price: 749, description: "Delicious molten chocolate cake", rating: 4.8, reviews: 54, image: "/Images/Cakes/Molten Affair Cake (500 g).jpg" },
  { id: 162, name: "Molten Affair Cake (1 kg)", category: "Cakes", price: 1149, description: "Delicious molten chocolate cake", rating: 4.9, reviews: 71, image: "/Images/Cakes/Molten Affair Cake (1 kg).jpg" },

  { id: 163, name: "Death by Chocolate Cake (500 g)", category: "Cakes", price: 859, description: "Intensely rich chocolate cake", rating: 4.9, reviews: 58, image: "/Images/Cakes/Death by Chocolate Cake (500 g).jpg" },
  { id: 164, name: "Death by Chocolate Cake (1 kg)", category: "Cakes", price: 1199, description: "Intensely rich chocolate cake", rating: 5.0, reviews: 77, image: "/Images/Cakes/Death by Chocolate Cake (1 kg).jpg" },

  { id: 165, name: "Kitkat & Ferrero Cake (500 g)", category: "Cakes", price: 1079, description: "Kitkat and Ferrero fusion cake", rating: 4.9, reviews: 62, image: "/Images/Cakes/Kitkat & Ferrero Cake (500 g).jpg" },
  { id: 166, name: "Kitkat & Ferrero Cake (1 kg)", category: "Cakes", price: 1199, description: "Kitkat and Ferrero fusion cake", rating: 5.0, reviews: 80, image: "/Images/Cakes/Kitkat & Ferrero Cake (1 kg).jpg" },

  { id: 167, name: "Dark Chocolate Pinata Heart Cake (500 g)", category: "Cakes", price: 1149, description: "Breakable pinata heart cake with dark chocolate", rating: 4.9, reviews: 64, image: "/Images/Cakes/Dark Chocolate Pinata Heart Cake (500 g).jpg" },
  { id: 168, name: "Dark Chocolate Pinata Heart Cake (1 kg)", category: "Cakes", price: 1299, description: "Breakable pinata heart cake with dark chocolate", rating: 5.0, reviews: 85, image: "/Images/Cakes/Dark Chocolate Pinata Heart Cake (1 kg).png" },

  { id: 169, name: "Pink Pinata Heart Cake (500 g)", category: "Cakes", price: 1199, description: "Pink pinata heart cake with hidden surprises", rating: 4.9, reviews: 66, image: "/Images/Cakes/Pink Pinata Heart Cake (500 g).jpg" },
  { id: 170, name: "Pink Pinata Heart Cake (1 kg)", category: "Cakes", price: 1349, description: "Pink pinata heart cake with hidden surprises", rating: 5.0, reviews: 88, image: "/Images/Cakes/Pink Pinata Heart Cake (1 kg).jpg" },

  // ================= SPECIAL OCCASION CAKES =================
  { id: 171, name: "Couple Cake (500 g)", category: "Occasion Cakes", price: 579, description: "Romantic couple cake for celebrations", rating: 4.8, reviews: 55, image: "/Images/Occasion Cakes/Couple Cake (500 g).jpg" },
{ id: 172, name: "Propose Cake (500 g)", category: "Occasion Cakes", price: 639, description: "Romantic cake for proposals", rating: 4.9, reviews: 58, image: "/Images/Occasion Cakes/Propose Cake (500 g).jpg" },
{ id: 173, name: "Red Velvet Heart Cake (500 g)", category: "Occasion Cakes", price: 659, description: "Heart-shaped red velvet cake", rating: 4.9, reviews: 63, image: "/Images/Occasion Cakes/Red Velvet Heart Cake (500 g).jpg" },
{ id: 174, name: "Chocolate Truffle Heart Cake (500 g)", category: "Occasion Cakes", price: 969, description: "Heart-shaped chocolate truffle cake", rating: 5.0, reviews: 70, image: "/Images/Occasion Cakes/Chocolate Truffle Heart Cake (500 g).jpg" },
{ id: 175, name: "Couple Cake (1 kg)", category: "Occasion Cakes", price: 949, description: "Romantic couple cake for celebrations", rating: 4.8, reviews: 55, image: "/Images/Occasion Cakes/couple cake (1 kg).jpg" },
{ id: 176, name: "Propose Cake (1 kg)", category: "Occasion Cakes", price: 949, description: "Romantic cake for proposals", rating: 4.9, reviews: 58, image: "/Images/Occasion Cakes/Propose Cake (1 kg).webp" },
{ id: 177, name: "Red Velvet Heart Cake (1 kg)", category: "Occasion Cakes", price: 969, description: "Heart-shaped red velvet cake", rating: 4.9, reviews: 63, image: "/Images/Occasion Cakes/Red Velvet Heart Cake (1 kg).jpg" },
{ id: 178, name: "Chocolate Truffle Heart Cake (1 kg)", category: "Occasion Cakes", price: 999, description: "Heart-shaped chocolate truffle cake", rating: 5.0, reviews: 70, image: "/Images/Occasion Cakes/Chocolate Truffle Heart Cake (1 kg).jpeg" },

  // ================= PASTRIES =================

{ 
  id: 179,  
  name: "Classic Black Forest Pastry", 
  category: "Pastry", 
  price: 79, 
  description: "Classic soft pastry with layers of chocolate and cream", 
  rating: 4.6, 
  reviews: 45, 
  image: "/Images/Pastry/black-forest-pastry.png" 
},
{ 
  id: 180, 
  name: "Butterscotch Pastry", 
  category: "Pastry", 
  price: 79, 
  description: "Soft butterscotch sponge layered with cream and caramel crunch", 
  rating: 4.5, 
  reviews: 38, 
  image: "/Images/Pastry/butterscotch-2.png" 
},
{ 
  id: 181, 
  name: "Regal Red Velvet Pastry", 
  category: "Pastry", 
  price: 89, 
  description: "Rich and creamy red velvet pastry topped with cheese frosting", 
  rating: 4.8, 
  reviews: 52, 
  image: "/Images/Pastry/redvelvet.png" 
},
{ 
  id: 182, 
  name: "Rich Chocolate Truffle Pastry", 
  category: "Pastry", 
  price: 89, 
  description: "Decadent chocolate sponge layered with chocolate ganache", 
  rating: 4.9, 
  reviews: 60, 
  image: "/Images/Pastry/Chocolate_Truffle_Pastry.webp" 
},

// ================= JAR CAKES =================

{ 
  id: 183,
  name: "Chocolate Truffle Jar Cake",
  category: "Jar Cake", 
  price: 169, 
  description: "Rich chocolate truffle layered in a jar for perfect indulgence", 
  rating: 4.8, 
  reviews: 52, 
  image: "/Images/Jar Cakes/Chocolate Truffle Jar Cake.jpg" 
},
{ 
  id: 184, 
  name: "Death By Chocolate Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Overloaded chocolate jar cake for true chocoholics", 
  rating: 4.9, 
  reviews: 60, 
  image: "/Images/Jar Cakes/Death By Chocolate Jar Cake.jpg" 
},
{ 
  id: 185, 
  name: "Choco Chip Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Chocolate sponge with layers of cream and choco chips", 
  rating: 4.7, 
  reviews: 41, 
  image: "/Images/Jar Cakes/Choco Chip Jar Cake.jpg" 
},
{ 
  id: 186, 
  name: "Blueberry Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Moist cake layered with fresh blueberry compote", 
  rating: 4.6, 
  reviews: 38, 
  image: "/Images/Jar Cakes/Blueberry Jar Cake.jpg" 
},
{ 
  id: 187, 
  name: "Butterscotch Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Butterscotch flavored cake with caramel crunch in a jar", 
  rating: 4.5, 
  reviews: 34, 
  image: "/Images/Jar Cakes/Butterscotch Jar Cake.webp" 
},
{ 
  id: 188, 
  name: "Black Forest Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Classic black forest with cream and cherries in a jar", 
  rating: 4.6, 
  reviews: 47, 
  image: "/Images/Jar Cakes/Black Forest Jar Cake.webp" 
},
{ 
  id: 189, 
  name: "Chocolate Oreo Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Chocolate sponge layered with Oreo cream and crunch", 
  rating: 4.7, 
  reviews: 44, 
  image: "/Images/Jar Cakes/Chocolate Oreo Jar Cake.jpg" 
},
{ 
  id: 190, 
  name: "Creamy Chocolate Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Decadent chocolate layers with smooth cream filling", 
  rating: 4.8, 
  reviews: 50, 
  image: "/Images/Jar Cakes/Creamy Chocolate Jar Cake.jpg" 
},
{ 
  id: 191, 
  name: "Ferrero Rocher Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Hazelnut chocolate sponge topped with Ferrero Rocher", 
  rating: 4.9, 
  reviews: 65, 
  image: "/Images/Jar Cakes/Ferrero Rocher Jar Cake.jpg" 
},
{ 
  id: 192, 
  name: "Litchee Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Refreshing lychee-flavored jar cake with cream", 
  rating: 4.4, 
  reviews: 32, 
  image: "/Images/Jar Cakes/Litchee Jar Cake.jpg" 
},
{ 
  id: 193, 
  name: "Mango Jar Cake", 
  category: "Jar Cake", 
  price: 169, 
  description: "Sweet mango cream cake served in a jar", 
  rating: 4.6, 
  reviews: 40, 
  image: "/Images/Jar Cakes/Mango Jar Cake.jpg" 
},
{ 
  id: 194, 
  name: "Pineapple Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Pineapple flavored cake with whipped cream layers", 
  rating: 4.5, 
  reviews: 36, 
  image: "/Images/Jar Cakes/Pineapple Jar Cake.jpg" 
},
{ 
  id: 195, 
  name: "Strawberry Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Delightful strawberry cake with fresh cream in a jar", 
  rating: 4.6, 
  reviews: 42, 
  image: "/Images/Jar Cakes/Strawberry Jar Cake.jpg" 
},
{ 
  id: 196, 
  name: "Red Velvet Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Moist red velvet cake layered with cream cheese frosting", 
  rating: 4.8, 
  reviews: 54, 
  image: "/Images/Jar Cakes/Red Velvet Jar Cake.jpg" 
},
{ 
  id: 197, 
  name: "Blueberry White Chocolate Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Blueberry cake paired with white chocolate cream", 
  rating: 4.7, 
  reviews: 39, 
  image: "/Images/Jar Cakes/Blueberry White Chocolate Jar Cake.jpg" 
},
{ 
  id: 198, 
  name: "Triple Chocolate Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Three layers of dark, milk, and white chocolate goodness", 
  rating: 4.9, 
  reviews: 61, 
  image: "/Images/Jar Cakes/Triple Chocolate Jar Cake.jpg" 
},
{ 
  id: 199, 
  name: "Banoffee Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Banana and toffee combination in a creamy jar dessert", 
  rating: 4.7, 
  reviews: 46, 
  image: "/Images/Jar Cakes/Banoffee Jar Cake.jpg" 
},
{ 
  id: 200, 
  name: "Tiramisu Jar Cake", 
  category: "Jar Cake", 
  price: 155, 
  description: "Coffee-flavored Italian tiramisu served jar style", 
  rating: 4.8, 
  reviews: 57, 
  image: "/Images/Jar Cakes/Tiramisu Jar Cake.jpg" 
},
{ 
  id: 201, 
  name: "Hazelnut Jar Cake", 
  category: "Jar Cake", 
  price: 309, 
  description: "Nutty hazelnut and chocolate jar cake delight", 
  rating: 5.0, 
  reviews: 72, 
  image: "/Images/Jar Cakes/Hazelnut Jar Cake.jpg" 
},

    // ================= CUPCAKES =================

   { 
  id: 202, 
  name: "Chocolate Cupcake", 
  category: "Cupcakes", 
  price: 50, 
  description: "Rich and moist chocolate cupcake topped with creamy frosting", 
  rating: 4.7, 
  reviews: 45, 
  image: "/Images/Cup Cakes/Chocolate Cupcake.jpg" 
},
{ 
  id: 203, 
  name: "Vanilla Cupcake", 
  category: "Cupcakes", 
  price: 50, 
  description: "Classic vanilla cupcake with soft sponge and buttercream frosting", 
  rating: 4.6, 
  reviews: 40, 
  image: "/Images/Cup Cakes/Vanilla Cupcake.jpg" 
},
{ 
  id: 204, 
  name: "Red Velvet Cupcake", 
  category: "Cupcakes", 
  price: 50, 
  description: "Moist red velvet cupcake topped with cream cheese frosting", 
  rating: 4.8, 
  reviews: 52, 
  image: "/Images/Cup Cakes/Red Velvet Cupcake.jpg" 
},
{ 
  id: 205, 
  name: "Ferrero Rocher Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Decadent chocolate cupcake infused with hazelnut and Ferrero Rocher", 
  rating: 4.9, 
  reviews: 65, 
  image: "/Images/Cup Cakes/Ferrero Rocher Cupcake.jpg" 
},
{ 
  id: 206, 
  name: "Kit Kat Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Fun chocolate cupcake with Kit Kat topping", 
  rating: 4.8, 
  reviews: 58, 
  image: "/Images/Cup Cakes/Kit Kat Cupcake.jpg" 
},
{ 
  id: 207, 
  name: "Oreo Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Chocolate cupcake with Oreo cream and cookie crunch", 
  rating: 4.7, 
  reviews: 50, 
  image: "/Images/Cup Cakes/Oreo Cupcake.jpg" 
},
{ 
  id: 208, 
  name: "Mango Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Soft cupcake with refreshing mango flavor and cream topping", 
  rating: 4.6, 
  reviews: 42, 
  image: "/Images/Cup Cakes/Mango Cupcake.jpg" 
},
{ 
  id: 209, 
  name: "Pineapple Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Tropical pineapple-flavored cupcake with creamy frosting", 
  rating: 4.5, 
  reviews: 38, 
  image: "/Images/Cup Cakes/Pineapple Cupcake.jpg" 
},
{ 
  id: 210, 
  name: "Butterscotch Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Caramel butterscotch cupcake with a rich creamy topping", 
  rating: 4.6, 
  reviews: 44, 
  image: "/Images/Cup Cakes/Butterscotch Cupcake.jpg" 
},
{ 
  id: 211, 
  name: "Blueberry Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Moist cupcake with sweet blueberry compote and frosting", 
  rating: 4.7, 
  reviews: 49, 
  image: "/Images/Cup Cakes/Blueberry Cupcake.jpg" 
},
{ 
  id: 212, 
  name: "Orange Cupcake", 
  category: "Cupcakes", 
  price: 70, 
  description: "Zesty orange-flavored cupcake with light cream topping", 
  rating: 4.5, 
  reviews: 37, 
  image: "/Images/Cup Cakes/Orange Cupcake.jpg" 
},


    // ================= DESSERTS =================

{ id: 212, name: "Choco Lava Cake", category: "Desserts", price: 71, description: "Warm chocolate lava cake with gooey center", rating: 4.7, reviews: 48, image: "/Images/Desserts/Choco Lava Cake.jpg" },
{ id: 213, name: "Gooey Truffle Brownie", category: "Desserts", price: 99, description: "Rich chocolate brownie with gooey truffle filling", rating: 4.8, reviews: 52, image: "/Images/Desserts/Gooey Truffle Brownie.jpg" },
{ id: 214, name: "Walnut Brownie", category: "Desserts", price: 99, description: "Classic chocolate brownie topped with crunchy walnuts", rating: 4.6, reviews: 40, image: "/Images/Desserts/Walnut Brownie.jpg" },
{ id: 215, name: "Chocolate Momo", category: "Desserts", price: 249, description: "Unique dessert momo filled with rich chocolate", rating: 4.5, reviews: 36, image: "/Images/Desserts/Chocolate Momo.jpg" },

// ================= SUNDAES =================

{ id: 216, name: "Brownie Blast Sundae", category: "Sundaes", price: 189, description: "Rich chocolate sundae topped with brownie chunks", rating: 4.6, reviews: 38, image: "/Images/Sundaes/chocolate blast sundaes.jpg" },
{ id: 217, name: "Almond Vanilla Sundae", category: "Sundaes", price: 249, description: "Creamy vanilla sundae with crunchy almonds", rating: 4.7, reviews: 42, image: "/Images/Sundaes/Almond Vanilla Sundae.jpg" },
{ id: 218, name: "Chocolate Sprinkle Sundae", category: "Sundaes", price: 149, description: "Classic chocolate sundae topped with sprinkles", rating: 4.5, reviews: 35, image: "/Images/Sundaes/Chocolate Sprinkle Sundae.jpg" },
{ id: 219, name: "Creme Da La Caramel", category: "Sundaes", price: 139, description: "Smooth caramel sundae with a creamy base", rating: 4.4, reviews: 33, image: "/Images/Sundaes/Creme Da La Caramel.jpg" },
{ id: 220, name: "Crunchy Cashew Sundae", category: "Sundaes", price: 169, description: "Delicious sundae with crunchy roasted cashews", rating: 4.6, reviews: 39, image: "/Images/Sundaes/Crunchy Cashew Sundae.jpg" },
{ id: 221, name: "Gems Chocolate Sundae", category: "Sundaes", price: 149, description: "Chocolate sundae topped with colorful gems", rating: 4.5, reviews: 36, image: "/Images/Sundaes/Gems Chocolate Sundae.jpg" },
{ id: 222, name: "Cashew Fudge Sundae", category: "Sundaes", price: 219, description: "Fudge-loaded sundae with cashew nuts", rating: 4.7, reviews: 41, image: "/Images/Sundaes/Cashew Fudge Sundae.jpg" },
{ id: 223, name: "Choco Lava Sundae", category: "Sundaes", price: 229, description: "Chocolate sundae with molten choco lava topping", rating: 4.8, reviews: 50, image: "/Images/Sundaes/Choco Lava Sundae.jpg" },
{ id: 224, name: "Oreo Kiddo Sundae", category: "Sundaes", price: 149, description: "Kid-favorite sundae topped with Oreo crumbs", rating: 4.6, reviews: 37, image: "/Images/Sundaes/Oreo Kiddo Sundae.jpg" },
{ id: 225, name: "Classic Black Forest Sundae", category: "Sundaes", price: 229, description: "Black forest style sundae with chocolate and cherries", rating: 4.7, reviews: 46, image: "/Images/Sundaes/Classic Black Forest Sundae.jpg" },
{ id: 226, name: "Strawberry Vanilla Sundae", category: "Sundaes", price: 199, description: "Refreshing sundae with strawberry and vanilla blend", rating: 4.5, reviews: 34, image: "/Images/Sundaes/Strawberry Vanilla Sundae.jpg" },

// ================= SHAKES =================

{ id: 227, name: "Death By Chocolate (DBC) Thickshake", category: "Shakes", price: 229, description: "Rich chocolate thickshake loaded with choco goodness", rating: 4.8, reviews: 55, image: "/Images/Shakes/Death By Chocolate (DBC) Thickshake.jpg" },
{ id: 228, name: "Red Velvet Thickshake", category: "Shakes", price: 229, description: "Creamy thickshake inspired by red velvet cake", rating: 4.7, reviews: 48, image: "/Images/Shakes/Red Velvet Thickshake.jpg" },
{ id: 229, name: "Rose Milkshake", category: "Shakes", price: 199, description: "Refreshing rose flavored milkshake", rating: 4.5, reviews: 36, image: "/Images/Shakes/Rose Milkshake.jpg" },
{ id: 230, name: "Oreo Kitkat Shake", category: "Shakes", price: 269, description: "Thickshake with Oreo chunks and Kitkat pieces", rating: 4.8, reviews: 52, image: "/Images/Shakes/Oreo Kitkat Shake.jpg" },
{ id: 231, name: "Oreo Brownie Thickshake", category: "Shakes", price: 219, description: "Chocolate brownie thickshake blended with Oreos", rating: 4.7, reviews: 44, image: "/Images/Shakes/Oreo Brownie Thickshake.jpg" },
{ id: 232, name: "Brownie Thickshake", category: "Shakes", price: 219, description: "Thick chocolate shake with brownie bits", rating: 4.6, reviews: 41, image: "/Images/Shakes/Brownie Thickshake.jpg" },
{ id: 233, name: "Oreo Thickshake", category: "Shakes", price: 209, description: "Classic Oreo blended thickshake", rating: 4.6, reviews: 39, image: "/Images/Shakes/Oreo Thickshake.jpg" },
{ id: 234, name: "Kitkat Thickshake", category: "Shakes", price: 219, description: "Creamy Kitkat blended thickshake", rating: 4.7, reviews: 43, image: "/Images/Shakes/Kitkat Thickshake.jpg" },
{ id: 235, name: "Chocolate Milkshake", category: "Shakes", price: 199, description: "Classic chocolate flavored milkshake", rating: 4.5, reviews: 37, image: "/Images/Shakes/Chocolate Milkshake.jpg" },
{ id: 236, name: "Butterscotch Milkshake", category: "Shakes", price: 199, description: "Creamy butterscotch flavored milkshake", rating: 4.5, reviews: 34, image: "/Images/Shakes/Butterscotch Milkshake.jpg" },
{ id: 237, name: "Chocolate Truffle Thickshake", category: "Shakes", price: 229, description: "Rich chocolate truffle blended into a thickshake", rating: 4.8, reviews: 49, image: "/Images/Shakes/Chocolate Truffle Thickshake.jpg" },
{ id: 238, name: "Oreo Strawberry Thickshake", category: "Shakes", price: 219, description: "Strawberry thickshake topped with Oreo crumbs", rating: 4.6, reviews: 42, image: "/Images/Shakes/Oreo Strawberry Thickshake.jpg" },

// ================= Starter =================

{ id: 239, name: "French Fries", category: "Starter", price: 79, description: "Classic golden crispy French fries", rating: 4.5, reviews: 40, image: "/Images/Starter/French Fries.jpg" },
{ id: 240, name: "Peri Peri French Fries", category: "Starter", price: 99, description: "Crispy fries tossed with peri peri spice mix", rating: 4.6, reviews: 42, image: "/Images/Starter/Peri Peri French Fries.jpg" },
{ id: 241, name: "Lemon Pepper French Fries", category: "Starter", price: 99, description: "Crispy fries seasoned with tangy lemon pepper", rating: 4.5, reviews: 38, image: "/Images/Starter/Lemon Pepper French Fries.jpg" },
{ id: 242, name: "Chilli Garlic French Fries", category: "Starter", price: 99, description: "Spicy fries flavored with chilli and garlic", rating: 4.6, reviews: 41, image: "/Images/Starter/Chilli Garlic French Fries.jpg" },
{ id: 243, name: "Veg Fingers", category: "Starter", price: 149, description: "Crispy fried vegetable fingers served with dip", rating: 4.4, reviews: 35, image: "/Images/Starter/Veg Fingers.jpg" },
{ id: 244, name: "Jalapeno Poppers", category: "Starter", price: 149, description: "Cheesy jalapeno stuffed poppers, crunchy outside", rating: 4.7, reviews: 47, image: "/Images/Starter/Jalapeno Poppers.jpg" }
];

export default menuData;
