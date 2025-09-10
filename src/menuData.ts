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
  { id: 1, name: "Classic Veg Burger", category: "Burgers", price: 99, description: "Delicious veg burger with classic taste", rating: 4.5, reviews: 40, image: "/burgers/classic-veg.jpg" },
  { id: 2, name: "Veg Chipotle Burger", category: "Burgers", price: 109, description: "Spicy veg burger with chipotle sauce", rating: 4.3, reviews: 35, image: "/burgers/veg-chipotle.jpg" },
  { id: 3, name: "The Spicy Veg Burger", category: "Burgers", price: 109, description: "Fiery spiced veg patty burger", rating: 4.4, reviews: 38, image: "/burgers/spicy-veg.jpg" },
  { id: 4, name: "Paneer Burger", category: "Burgers", price: 139, description: "Soft paneer patty with Indian spices", rating: 4.6, reviews: 44, image: "/burgers/paneer.jpg" },
  { id: 5, name: "Mexican Wave Paneer Burger", category: "Burgers", price: 149, description: "Mexican-style paneer burger with salsa", rating: 4.5, reviews: 47, image: "/burgers/mexican-paneer.jpg" },
  { id: 6, name: "Five Spice Paneer Burger", category: "Burgers", price: 149, description: "Paneer infused with five spice mix", rating: 4.4, reviews: 39, image: "/burgers/five-spice.jpg" },

  { id: 7, name: "Chicken Burger", category: "Burgers", price: 139, description: "Juicy chicken patty with toppings", rating: 4.6, reviews: 50, image: "/burgers/chicken.jpg" },
  { id: 8, name: "Egg and Cheese Burger", category: "Burgers", price: 149, description: "Egg, cheese and chicken patty burger", rating: 4.3, reviews: 33, image: "/burgers/egg-cheese.jpg" },
  { id: 9, name: "Mexican Fried Cheese Burger", category: "Burgers", price: 149, description: "Fried cheese with Mexican flavors", rating: 4.2, reviews: 31, image: "/burgers/mexican-cheese.jpg" },
  { id: 10, name: "Schezwan Chicken Burger", category: "Burgers", price: 189, description: "Chicken patty with schezwan sauce", rating: 4.5, reviews: 42, image: "/burgers/schezwan-chicken.jpg" },
  { id: 11, name: "Chicken Premium Burger", category: "Burgers", price: 199, description: "Premium chicken burger with cheese", rating: 4.7, reviews: 55, image: "/burgers/premium-chicken.jpg" },
  { id: 12, name: "Los Pos Hermanos Chicken Burger", category: "Burgers", price: 199, description: "Special chicken burger with spicy sauce", rating: 4.5, reviews: 48, image: "/burgers/hermanos.jpg" },
  { id: 13, name: "Schezwan Chicken Premium Burger", category: "Burgers", price: 199, description: "Premium schezwan chicken burger", rating: 4.6, reviews: 51, image: "/burgers/schezwan-premium.jpg" },
  { id: 14, name: "Lamb Burger", category: "Burgers", price: 249, description: "Tender lamb patty with spices", rating: 4.7, reviews: 60, image: "/burgers/lamb.jpg" },
  { id: 15, name: "Chipotle Lamb Burger", category: "Burgers", price: 249, description: "Smoky chipotle lamb burger", rating: 4.6, reviews: 52, image: "/burgers/chipotle-lamb.jpg" },
  { id: 16, name: "Bannur Lamb Burger", category: "Burgers", price: 259, description: "Traditional Bannur style lamb burger", rating: 4.7, reviews: 54, image: "/burgers/bannur-lamb.jpg" },
  { id: 17, name: "Juicy Lamb Burger", category: "Burgers", price: 299, description: "Succulent lamb patty burger", rating: 4.8, reviews: 64, image: "/burgers/juicy-lamb.jpg" },
  { id: 18, name: "The Unforgiving Mutton Burger", category: "Burgers", price: 309, description: "Heavy-duty spicy mutton burger", rating: 4.6, reviews: 49, image: "/burgers/unforgiving.jpg" },
  { id: 19, name: "Schezwan Premium Lamb Burger", category: "Burgers", price: 309, description: "Premium lamb burger with schezwan sauce", rating: 4.7, reviews: 53, image: "/burgers/schezwan-lamb.jpg" },

  { id: 20, name: "Maharaja Veg Burger", category: "Special Burgers", price: 199, description: "Big and royal veg burger loaded with flavors", rating: 4.7, reviews: 60, image: "/burgers/maharaja-veg.jpg" },
  { id: 21, name: "Maharaja Chicken Burger", category: "Special Burgers", price: 249, description: "Royal chicken burger with rich taste", rating: 4.8, reviews: 65, image: "/burgers/maharaja-chicken.jpg" },
  { id: 22, name: "Maharaja Mutton Burger", category: "Special Burgers", price: 309, description: "Mutton burger made royal style", rating: 4.9, reviews: 70, image: "/burgers/maharaja-mutton.jpg" },

    // ================= momos Zone =================
    
  { id: 23, name: "Mixed Veg Momo", category: "Momos", price: 79, description: "Steamed mixed veg momo with authentic taste", rating: 4.3, reviews: 28, image: "/momos/mixed-veg.jpg" },
  { id: 24, name: "Veg Schezwan Momo", category: "Momos", price: 79, description: "Spicy Schezwan-style steamed veg momo", rating: 4.4, reviews: 35, image: "/momos/veg-schezwan.jpg" },
  { id: 25, name: "Paneer Momo", category: "Momos", price: 89, description: "Soft paneer momo with flavorful stuffing", rating: 4.6, reviews: 42, image: "/momos/paneer.jpg" },
  { id: 26, name: "Corn & Cheese Momo", category: "Momos", price: 99, description: "Cheesy momo filled with sweet corn", rating: 4.5, reviews: 31, image: "/momos/corn-cheese.jpg" },
  { id: 27, name: "Mushroom Momo", category: "Momos", price: 99, description: "Juicy mushroom momo with herbs", rating: 4.2, reviews: 25, image: "/momos/mushroom.jpg" },
  { id: 28, name: "Pizza Momo", category: "Momos", price: 129, description: "Fusion momo stuffed with cheesy pizza filling", rating: 4.7, reviews: 50, image: "/momos/pizza.jpg" },
  { id: 29, name: "Chocolate Momo", category: "Momos", price: 149, description: "Sweet momo filled with molten chocolate", rating: 4.8, reviews: 60, image: "/momos/chocolate.jpg" },

  { id: 30, name: "Chicken Momo", category: "Momos", price: 89, description: "Classic steamed chicken momo", rating: 4.6, reviews: 48, image: "/momos/chicken.jpg" },
  { id: 31, name: "Chicken Peri Peri Momo", category: "Momos", price: 99, description: "Tangy peri peri flavored chicken momo", rating: 4.7, reviews: 55, image: "/momos/chicken-peri-peri.jpg" },
  { id: 32, name: "Chicken Tikka Momo", category: "Momos", price: 99, description: "Tandoori-style chicken tikka momo", rating: 4.5, reviews: 37, image: "/momos/chicken-tikka.jpg" },
  { id: 33, name: "Chicken Hariyali Momo", category: "Momos", price: 99, description: "Herbal spiced green chicken momo", rating: 4.3, reviews: 29, image: "/momos/chicken-hariyali.jpg" },
  { id: 34, name: "Butter Chicken Momo", category: "Momos", price: 109, description: "Rich butter chicken stuffed momo", rating: 4.8, reviews: 62, image: "/momos/butter-chicken.jpg" },
  { id: 35, name: "Chicken Cheese Momo", category: "Momos", price: 129, description: "Cheesy chicken momo with creamy filling", rating: 4.9, reviews: 70, image: "/momos/chicken-cheese.jpg" },

    // ================= Fried Chicken Zone =================

  { id: 36, name: "Classic Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Crispy golden fried chicken, 4 pieces", rating: 4.6, reviews: 40, image: "/fried-chicken/classic-4pc.jpg" },
  { id: 37, name: "Classic Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Crispy golden fried chicken, 6 pieces", rating: 4.7, reviews: 52, image: "/fried-chicken/classic-6pc.jpg" },
  { id: 38, name: "Classic Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Crispy golden fried chicken, 8 pieces", rating: 4.8, reviews: 68, image: "/fried-chicken/classic-8pc.jpg" },
  { id: 39, name: "Classic Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Crispy golden fried chicken, 12 pieces", rating: 4.9, reviews: 80, image: "/fried-chicken/classic-12pc.jpg" },

  { id: 40, name: "Korean Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Korean-style sweet & spicy fried chicken, 4 pieces", rating: 4.7, reviews: 45, image: "/fried-chicken/korean-4pc.jpg" },
  { id: 41, name: "Korean Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Korean-style sweet & spicy fried chicken, 6 pieces", rating: 4.8, reviews: 55, image: "/fried-chicken/korean-6pc.jpg" },
  { id: 42, name: "Korean Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Korean-style sweet & spicy fried chicken, 8 pieces", rating: 4.8, reviews: 70, image: "/fried-chicken/korean-8pc.jpg" },
  { id: 43, name: "Korean Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Korean-style sweet & spicy fried chicken, 12 pieces", rating: 4.9, reviews: 85, image: "/fried-chicken/korean-12pc.jpg" },

  { id: 44, name: "Sweet Chilli Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Sweet chilli flavored fried chicken, 4 pieces", rating: 4.6, reviews: 38, image: "/fried-chicken/sweet-chilli-4pc.jpg" },
  { id: 45, name: "Sweet Chilli Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Sweet chilli flavored fried chicken, 6 pieces", rating: 4.7, reviews: 50, image: "/fried-chicken/sweet-chilli-6pc.jpg" },
  { id: 46, name: "Sweet Chilli Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Sweet chilli flavored fried chicken, 8 pieces", rating: 4.8, reviews: 67, image: "/fried-chicken/sweet-chilli-8pc.jpg" },
  { id: 47, name: "Sweet Chilli Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Sweet chilli flavored fried chicken, 12 pieces", rating: 4.9, reviews: 82, image: "/fried-chicken/sweet-chilli-12pc.jpg" },

  { id: 48, name: "Teriyaki Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Teriyaki glazed fried chicken, 4 pieces", rating: 4.6, reviews: 42, image: "/fried-chicken/teriyaki-4pc.jpg" },
  { id: 49, name: "Teriyaki Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Teriyaki glazed fried chicken, 6 pieces", rating: 4.7, reviews: 54, image: "/fried-chicken/teriyaki-6pc.jpg" },
  { id: 50, name: "Teriyaki Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Teriyaki glazed fried chicken, 8 pieces", rating: 4.8, reviews: 66, image: "/fried-chicken/teriyaki-8pc.jpg" },
  { id: 51, name: "Teriyaki Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Teriyaki glazed fried chicken, 12 pieces", rating: 4.9, reviews: 83, image: "/fried-chicken/teriyaki-12pc.jpg" },

  { id: 52, name: "Peri Peri Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Spicy peri peri fried chicken, 4 pieces", rating: 4.7, reviews: 48, image: "/fried-chicken/peri-peri-4pc.jpg" },
  { id: 53, name: "Peri Peri Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Spicy peri peri fried chicken, 6 pieces", rating: 4.8, reviews: 58, image: "/fried-chicken/peri-peri-6pc.jpg" },
  { id: 54, name: "Peri Peri Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Spicy peri peri fried chicken, 8 pieces", rating: 4.8, reviews: 72, image: "/fried-chicken/peri-peri-8pc.jpg" },
  { id: 55, name: "Peri Peri Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Spicy peri peri fried chicken, 12 pieces", rating: 4.9, reviews: 88, image: "/fried-chicken/peri-peri-12pc.jpg" },

  { id: 56, name: "Chilli Garlic Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Zesty chilli garlic fried chicken, 4 pieces", rating: 4.6, reviews: 36, image: "/fried-chicken/chilli-garlic-4pc.jpg" },
  { id: 57, name: "Chilli Garlic Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Zesty chilli garlic fried chicken, 6 pieces", rating: 4.7, reviews: 49, image: "/fried-chicken/chilli-garlic-6pc.jpg" },
  { id: 58, name: "Chilli Garlic Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Zesty chilli garlic fried chicken, 8 pieces", rating: 4.8, reviews: 65, image: "/fried-chicken/chilli-garlic-8pc.jpg" },
  { id: 59, name: "Chilli Garlic Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Zesty chilli garlic fried chicken, 12 pieces", rating: 4.9, reviews: 81, image: "/fried-chicken/chilli-garlic-12pc.jpg" },

  { id: 60, name: "Lemon Pepper Fried Chicken 4 Pc", category: "Fried Chicken", price: 409, description: "Tangy lemon pepper fried chicken, 4 pieces", rating: 4.6, reviews: 39, image: "/fried-chicken/lemon-pepper-4pc.jpg" },
  { id: 61, name: "Lemon Pepper Fried Chicken 6 Pc", category: "Fried Chicken", price: 659, description: "Tangy lemon pepper fried chicken, 6 pieces", rating: 4.7, reviews: 51, image: "/fried-chicken/lemon-pepper-6pc.jpg" },
  { id: 62, name: "Lemon Pepper Fried Chicken 8 Pc", category: "Fried Chicken", price: 879, description: "Tangy lemon pepper fried chicken, 8 pieces", rating: 4.8, reviews: 64, image: "/fried-chicken/lemon-pepper-8pc.jpg" },
  { id: 63, name: "Lemon Pepper Fried Chicken 12 Pc", category: "Fried Chicken", price: 1199, description: "Tangy lemon pepper fried chicken, 12 pieces", rating: 4.9, reviews: 79, image: "/fried-chicken/lemon-pepper-12pc.jpg" },

  { id: 64, name: "Classic Wings 4 Pc", category: "Wings", price: 299, description: "Classic crispy chicken wings, 4 pieces", rating: 4.5, reviews: 30, image: "/wings/classic-4pc.jpg" },
  { id: 65, name: "Classic Wings 6 Pc", category: "Wings", price: 409, description: "Classic crispy chicken wings, 6 pieces", rating: 4.6, reviews: 42, image: "/wings/classic-6pc.jpg" },
  { id: 66, name: "Classic Wings 8 Pc", category: "Wings", price: 539, description: "Classic crispy chicken wings, 8 pieces", rating: 4.7, reviews: 55, image: "/wings/classic-8pc.jpg" },
  { id: 67, name: "Classic Wings 12 Pc", category: "Wings", price: 749, description: "Classic crispy chicken wings, 12 pieces", rating: 4.8, reviews: 70, image: "/wings/classic-12pc.jpg" },

// =================== Wings Zone =================

  { id: 68, name: "Korean Fried Wings 4 Pc", category: "Wings", price: 299, description: "Crispy Korean-style fried wings, 4 pieces", rating: 4.6, reviews: 35, image: "/wings/korean-4pc.jpg" },
  { id: 69, name: "Korean Fried Wings 6 Pc", category: "Wings", price: 409, description: "Crispy Korean-style fried wings, 6 pieces", rating: 4.7, reviews: 47, image: "/wings/korean-6pc.jpg" },
  { id: 70, name: "Korean Fried Wings 8 Pc", category: "Wings", price: 539, description: "Crispy Korean-style fried wings, 8 pieces", rating: 4.8, reviews: 60, image: "/wings/korean-8pc.jpg" },
  { id: 71, name: "Korean Fried Wings 12 Pc", category: "Wings", price: 749, description: "Crispy Korean-style fried wings, 12 pieces", rating: 4.9, reviews: 78, image: "/wings/korean-12pc.jpg" },

  { id: 72, name: "Sweet Chilli Wings 4 Pc", category: "Wings", price: 299, description: "Sweet chilli glazed crispy wings, 4 pieces", rating: 4.6, reviews: 33, image: "/wings/sweet-chilli-4pc.jpg" },
  { id: 73, name: "Sweet Chilli Wings 6 Pc", category: "Wings", price: 409, description: "Sweet chilli glazed crispy wings, 6 pieces", rating: 4.7, reviews: 44, image: "/wings/sweet-chilli-6pc.jpg" },
  { id: 74, name: "Sweet Chilli Wings 8 Pc", category: "Wings", price: 539, description: "Sweet chilli glazed crispy wings, 8 pieces", rating: 4.8, reviews: 57, image: "/wings/sweet-chilli-8pc.jpg" },
  { id: 75, name: "Sweet Chilli Wings 12 Pc", category: "Wings", price: 749, description: "Sweet chilli glazed crispy wings, 12 pieces", rating: 4.9, reviews: 72, image: "/wings/sweet-chilli-12pc.jpg" },

  { id: 76, name: "Teriyaki Wings 4 Pc", category: "Wings", price: 299, description: "Teriyaki glazed crispy wings, 4 pieces", rating: 4.6, reviews: 32, image: "/wings/teriyaki-4pc.jpg" },
  { id: 77, name: "Teriyaki Wings 6 Pc", category: "Wings", price: 409, description: "Teriyaki glazed crispy wings, 6 pieces", rating: 4.7, reviews: 45, image: "/wings/teriyaki-6pc.jpg" },
  { id: 78, name: "Teriyaki Wings 8 Pc", category: "Wings", price: 539, description: "Teriyaki glazed crispy wings, 8 pieces", rating: 4.8, reviews: 58, image: "/wings/teriyaki-8pc.jpg" },
  { id: 79, name: "Teriyaki Wings 12 Pc", category: "Wings", price: 749, description: "Teriyaki glazed crispy wings, 12 pieces", rating: 4.9, reviews: 74, image: "/wings/teriyaki-12pc.jpg" },

  { id: 80, name: "Peri Peri Wings 4 Pc", category: "Wings", price: 299, description: "Spicy peri peri wings, 4 pieces", rating: 4.6, reviews: 37, image: "/wings/peri-peri-4pc.jpg" },
  { id: 81, name: "Peri Peri Wings 6 Pc", category: "Wings", price: 409, description: "Spicy peri peri wings, 6 pieces", rating: 4.7, reviews: 46, image: "/wings/peri-peri-6pc.jpg" },
  { id: 82, name: "Peri Peri Wings 8 Pc", category: "Wings", price: 539, description: "Spicy peri peri wings, 8 pieces", rating: 4.8, reviews: 61, image: "/wings/peri-peri-8pc.jpg" },
  { id: 83, name: "Peri Peri Wings 12 Pc", category: "Wings", price: 749, description: "Spicy peri peri wings, 12 pieces", rating: 4.9, reviews: 76, image: "/wings/peri-peri-12pc.jpg" },

  { id: 84, name: "Chilli Garlic Wings 4 Pc", category: "Wings", price: 299, description: "Zesty chilli garlic crispy wings, 4 pieces", rating: 4.6, reviews: 34, image: "/wings/chilli-garlic-4pc.jpg" },
  { id: 85, name: "Chilli Garlic Wings 6 Pc", category: "Wings", price: 409, description: "Zesty chilli garlic crispy wings, 6 pieces", rating: 4.7, reviews: 48, image: "/wings/chilli-garlic-6pc.jpg" },
  { id: 86, name: "Chilli Garlic Wings 8 Pc", category: "Wings", price: 539, description: "Zesty chilli garlic crispy wings, 8 pieces", rating: 4.8, reviews: 62, image: "/wings/chilli-garlic-8pc.jpg" },
  { id: 87, name: "Chilli Garlic Wings 12 Pc", category: "Wings", price: 749, description: "Zesty chilli garlic crispy wings, 12 pieces", rating: 4.9, reviews: 77, image: "/wings/chilli-garlic-12pc.jpg" },

  { id: 88, name: "Lemon Pepper Wings 4 Pc", category: "Wings", price: 299, description: "Tangy lemon pepper seasoned wings, 4 pieces", rating: 4.6, reviews: 36, image: "/wings/lemon-pepper-4pc.jpg" },
  { id: 89, name: "Lemon Pepper Wings 6 Pc", category: "Wings", price: 409, description: "Tangy lemon pepper seasoned wings, 6 pieces", rating: 4.7, reviews: 49, image: "/wings/lemon-pepper-6pc.jpg" },
  { id: 90, name: "Lemon Pepper Wings 8 Pc", category: "Wings", price: 539, description: "Tangy lemon pepper seasoned wings, 8 pieces", rating: 4.8, reviews: 63, image: "/wings/lemon-pepper-8pc.jpg" },
  { id: 91, name: "Lemon Pepper Wings 12 Pc", category: "Wings", price: 749, description: "Tangy lemon pepper seasoned wings, 12 pieces", rating: 4.9, reviews: 79, image: "/wings/lemon-pepper-12pc.jpg" },

//   =================== Pizza Zone ===================

  { id: 69, name: "Veg Pizza", category: "Pizza", price: 399, description: "Classic veg pizza with fresh toppings", rating: 4.6, reviews: 41, image: "/pizza/veg.jpg" },
  { id: 70, name: "Veg Bento Pizza [8 Inch]", category: "Pizza", price: 209, description: "8-inch Veg Bento Pizza with rich cheese", rating: 4.7, reviews: 37, image: "/pizza/veg-bento.jpg" },
  { id: 71, name: "Paneer Tikka Bento Pizza [8 Inch]", category: "Pizza", price: 299, description: "8-inch Paneer Tikka Pizza with Indian spices", rating: 4.8, reviews: 52, image: "/pizza/paneer-tikka-bento.jpg" },
  { id: 72, name: "Chilli Paneer Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch spicy Chilli Paneer Pizza", rating: 4.7, reviews: 46, image: "/pizza/chilli-paneer-bento.jpg" },

  { id: 73, name: "Non Veg Pizza", category: "Pizza", price: 399, description: "Classic non-veg pizza with chicken toppings", rating: 4.6, reviews: 50, image: "/pizza/non-veg.jpg" },
  { id: 74, name: "Margherita Bento Pizza [8 Inch]", category: "Pizza", price: 179, description: "8-inch Margherita Bento Pizza with extra cheese", rating: 4.7, reviews: 44, image: "/pizza/margherita-bento.jpg" },
  { id: 75, name: "Pineapple Bento Pizza [8 Inch]", category: "Pizza", price: 209, description: "8-inch Pineapple Bento Pizza with a sweet twist", rating: 4.6, reviews: 39, image: "/pizza/pineapple-bento.jpg" },
  { id: 76, name: "Chicken Tikka Bento Pizza [8 Inch]", category: "Pizza", price: 309, description: "8-inch Chicken Tikka Pizza with Indian flavors", rating: 4.8, reviews: 55, image: "/pizza/chicken-tikka-bento.jpg" },
  { id: 77, name: "Bhuna Chicken Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch Bhuna Chicken Pizza with rich spices", rating: 4.7, reviews: 47, image: "/pizza/bhuna-chicken-bento.jpg" },
  { id: 78, name: "Schezwan Chicken Bento Pizza [8 Inch]", category: "Pizza", price: 279, description: "8-inch Schezwan Chicken Pizza with spicy flavor", rating: 4.8, reviews: 49, image: "/pizza/schezwan-chicken-bento.jpg" },

  { id: 79, name: "Chicken Popcorn Loaded Fries", category: "Snacks", price: 239, description: "Fries topped with crispy chicken popcorn", rating: 4.7, reviews: 38, image: "/snacks/chicken-popcorn-loaded-fries.jpg" },
  { id: 80, name: "Chicken Popcorn Fries With Schezwan Sauce", category: "Snacks", price: 249, description: "Fries with chicken popcorn & Schezwan sauce", rating: 4.8, reviews: 42, image: "/snacks/chicken-popcorn-schezwan.jpg" },
  { id: 81, name: "Chicken Tikka Loaded Fries", category: "Snacks", price: 249, description: "Fries loaded with chicken tikka chunks", rating: 4.8, reviews: 47, image: "/snacks/chicken-tikka-loaded-fries.jpg" },
  { id: 82, name: "Chicken Tikka Loaded Fries With Mint Mayo", category: "Snacks", price: 259, description: "Fries with chicken tikka & mint mayo topping", rating: 4.9, reviews: 51, image: "/snacks/chicken-tikka-mint-mayo.jpg" },
  { id: 83, name: "Large Chicken Popcorn", category: "Snacks", price: 299, description: "Large serving of crispy chicken popcorn", rating: 4.8, reviews: 56, image: "/snacks/large-chicken-popcorn.jpg" },
  { id: 84, name: "Korean Popcorn", category: "Snacks", price: 309, description: "Korean-style crispy chicken popcorn", rating: 4.9, reviews: 60, image: "/snacks/korean-popcorn.jpg" },
  { id: 85, name: "Large Chicken Popcorn With Schezwan Sauce", category: "Snacks", price: 309, description: "Large chicken popcorn with spicy Schezwan sauce", rating: 4.9, reviews: 64, image: "/snacks/large-chicken-popcorn-schezwan.jpg" },

  // ================= VEG ROLLS =================

  { id: 86, name: "Batata Vada Roll (Mini)", category: "Rolls", price: 139, description: "Mini roll stuffed with spicy batata vada filling", rating: 4.5, reviews: 32, image: "/rolls/batata-vada-mini.jpg" },
  { id: 87, name: "Batata Vada Roll (Full)", category: "Rolls", price: 229, description: "Full-sized roll stuffed with spicy batata vada filling", rating: 4.6, reviews: 48, image: "/rolls/batata-vada-full.jpg" },

  { id: 88, name: "Chilli Paneer Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with spicy chilli paneer", rating: 4.6, reviews: 37, image: "/rolls/chilli-paneer-mini.jpg" },
  { id: 89, name: "Chilli Paneer Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with spicy chilli paneer", rating: 4.7, reviews: 50, image: "/rolls/chilli-paneer-full.jpg" },

  { id: 90, name: "Mixed Veg Roll (Mini)", category: "Rolls", price: 109, description: "Mini roll stuffed with fresh mixed vegetables", rating: 4.5, reviews: 29, image: "/rolls/mixed-veg-mini.jpg" },
  { id: 91, name: "Mixed Veg Roll (Full)", category: "Rolls", price: 179, description: "Full-sized roll stuffed with fresh mixed vegetables", rating: 4.6, reviews: 41, image: "/rolls/mixed-veg-full.jpg" },

  { id: 92, name: "Mushroom Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with sautéed mushrooms", rating: 4.6, reviews: 34, image: "/rolls/mushroom-mini.jpg" },
  { id: 93, name: "Mushroom Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with sautéed mushrooms", rating: 4.7, reviews: 45, image: "/rolls/mushroom-full.jpg" },

  { id: 94, name: "Paneer Tikka Roll (Mini)", category: "Rolls", price: 99, description: "Mini roll stuffed with smoky paneer tikka", rating: 4.6, reviews: 36, image: "/rolls/paneer-tikka-mini.jpg" },
  { id: 95, name: "Paneer Tikka Roll (Full)", category: "Rolls", price: 155, description: "Full-sized roll stuffed with smoky paneer tikka", rating: 4.7, reviews: 49, image: "/rolls/paneer-tikka-full.jpg" },

  { id: 96, name: "Veg Finger Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with crunchy veg fingers", rating: 4.5, reviews: 31, image: "/rolls/veg-finger-mini.jpg" },
  { id: 97, name: "Veg Finger Roll (Full)", category: "Rolls", price: 199, description: "Full-sized roll filled with crunchy veg fingers", rating: 4.6, reviews: 46, image: "/rolls/veg-finger-full.jpg" },

  // ================= NON-VEG ROLLS =================
  { id: 98, name: "Chicken Chukka Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll with spicy chicken chukka filling", rating: 4.6, reviews: 40, image: "/rolls/chicken-chukka-mini.jpg" },
  { id: 99, name: "Chicken Chukka Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll with spicy chicken chukka filling", rating: 4.7, reviews: 54, image: "/rolls/chicken-chukka-full.jpg" },

  { id: 100, name: "Lemon Chicken Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll with zesty lemon chicken filling", rating: 4.6, reviews: 38, image: "/rolls/lemon-chicken-mini.jpg" },
  { id: 101, name: "Lemon Chicken Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll with zesty lemon chicken filling", rating: 4.7, reviews: 51, image: "/rolls/lemon-chicken-full.jpg" },

  { id: 102, name: "Chicken Tikka Roll (Mini)", category: "Rolls", price: 129, description: "Mini roll stuffed with smoky chicken tikka", rating: 4.7, reviews: 42, image: "/rolls/chicken-tikka-mini.jpg" },
  { id: 103, name: "Chicken Tikka Roll (Full)", category: "Rolls", price: 219, description: "Full-sized roll stuffed with smoky chicken tikka", rating: 4.8, reviews: 57, image: "/rolls/chicken-tikka-full.jpg" },

  { id: 104, name: "Chicken Shami Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with flavorful chicken shami kebab", rating: 4.6, reviews: 39, image: "/rolls/chicken-shami-mini.jpg" },
  { id: 105, name: "Chicken Shami Roll (Full)", category: "Rolls", price: 199, description: "Full-sized roll filled with flavorful chicken shami kebab", rating: 4.7, reviews: 52, image: "/rolls/chicken-shami-full.jpg" },

  { id: 106, name: "Bhuna Chicken Roll (Mini)", category: "Rolls", price: 89, description: "Mini roll with spiced bhuna chicken filling", rating: 4.5, reviews: 35, image: "/rolls/bhuna-chicken-mini.jpg" },
  { id: 107, name: "Bhuna Chicken Roll (Full)", category: "Rolls", price: 149, description: "Full-sized roll with spiced bhuna chicken filling", rating: 4.6, reviews: 47, image: "/rolls/bhuna-chicken-full.jpg" },

  { id: 108, name: "Egg and Cheese Roll (Mini)", category: "Rolls", price: 119, description: "Mini roll filled with egg and cheese", rating: 4.6, reviews: 41, image: "/rolls/egg-cheese-mini.jpg" },
  { id: 109, name: "Egg and Cheese Roll (Full)", category: "Rolls", price: 189, description: "Full-sized roll filled with egg and cheese", rating: 4.7, reviews: 53, image: "/rolls/egg-cheese-full.jpg" },

  { id: 110, name: "Chettinad Chicken Roll (Mini)", category: "Rolls", price: 99, description: "Mini roll with spicy Chettinad chicken filling", rating: 4.6, reviews: 37, image: "/rolls/chettinad-chicken-mini.jpg" },
  { id: 111, name: "Chettinad Chicken Roll (Full)", category: "Rolls", price: 155, description: "Full-sized roll with spicy Chettinad chicken filling", rating: 4.7, reviews: 50, image: "/rolls/chettinad-chicken-full.jpg" },

  { id: 112, name: "Schezwan Chicken Roll (Mini)", category: "Rolls", price: 129, description: "Mini roll with fiery Schezwan chicken filling", rating: 4.7, reviews: 44, image: "/rolls/schezwan-chicken-mini.jpg" },
  { id: 113, name: "Schezwan Chicken Roll (Full)", category: "Rolls", price: 219, description: "Full-sized roll with fiery Schezwan chicken filling", rating: 4.8, reviews: 58, image: "/rolls/schezwan-chicken-full.jpg" },


  // ================= CAKES (500g & 1kg) =================

  { id: 114, name: "Vanilla Cake (500 g)", category: "Cakes", price: 449, description: "Soft and fluffy vanilla cake", rating: 4.6, reviews: 38, image: "/cakes/vanilla-500.jpg" },
  { id: 115, name: "Vanilla Cake (1 kg)", category: "Cakes", price: 699, description: "Soft and fluffy vanilla cake", rating: 4.7, reviews: 55, image: "/cakes/vanilla-1kg.jpg" },

  { id: 116, name: "Oreo Cake (500 g)", category: "Cakes", price: 509, description: "Rich cake layered with Oreo cream and cookies", rating: 4.7, reviews: 42, image: "/cakes/oreo-500.jpg" },
  { id: 117, name: "Oreo Cake (1 kg)", category: "Cakes", price: 699, description: "Rich cake layered with Oreo cream and cookies", rating: 4.8, reviews: 60, image: "/cakes/oreo-1kg.jpg" },

  { id: 118, name: "Mango Gateau Cake (500 g)", category: "Cakes", price: 509, description: "Light and creamy mango-flavored gateau cake", rating: 4.6, reviews: 37, image: "/cakes/mango-gateau-500.jpg" },
  { id: 119, name: "Mango Gateau Cake (1 kg)", category: "Cakes", price: 749, description: "Light and creamy mango-flavored gateau cake", rating: 4.7, reviews: 52, image: "/cakes/mango-gateau-1kg.jpg" },

  { id: 120, name: "Pineapple Cake (500 g)", category: "Cakes", price: 549, description: "Classic pineapple cake with whipped cream", rating: 4.6, reviews: 41, image: "/cakes/pineapple-500.jpg" },
  { id: 121, name: "Pineapple Cake (1 kg)", category: "Cakes", price: 779, description: "Classic pineapple cake with whipped cream", rating: 4.7, reviews: 59, image: "/cakes/pineapple-1kg.jpg" },

  { id: 122, name: "White Forest Gateau Cake (500 g)", category: "Cakes", price: 559, description: "Delightful white forest gateau cake", rating: 4.7, reviews: 45, image: "/cakes/white-forest-500.jpg" },
  { id: 123, name: "White Forest Gateau Cake (1 kg)", category: "Cakes", price: 789, description: "Delightful white forest gateau cake", rating: 4.8, reviews: 61, image: "/cakes/white-forest-1kg.jpg" },

  { id: 124, name: "Black Forest Gateau Cake (500 g)", category: "Cakes", price: 589, description: "Classic black forest gateau with cherries", rating: 4.7, reviews: 49, image: "/cakes/black-forest-500.jpg" },
  { id: 125, name: "Black Forest Gateau Cake (1 kg)", category: "Cakes", price: 789, description: "Classic black forest gateau with cherries", rating: 4.8, reviews: 66, image: "/cakes/black-forest-1kg.jpg" },

  { id: 126, name: "Mad Over Chocolate Cake (500 g)", category: "Cakes", price: 619, description: "Chocolate-rich cake for true chocolate lovers", rating: 4.8, reviews: 52, image: "/cakes/mad-over-choco-500.jpg" },
  { id: 127, name: "Mad Over Chocolate Cake (1 kg)", category: "Cakes", price: 999, description: "Chocolate-rich cake for true chocolate lovers", rating: 4.9, reviews: 71, image: "/cakes/mad-over-choco-1kg.jpg" },

  { id: 128, name: "Chocolate Truffle Cake (500 g)", category: "Cakes", price: 659, description: "Decadent chocolate truffle layered cake", rating: 4.8, reviews: 56, image: "/cakes/truffle-500.jpg" },
  { id: 129, name: "Chocolate Truffle Cake (1 kg)", category: "Cakes", price: 999, description: "Decadent chocolate truffle layered cake", rating: 4.9, reviews: 73, image: "/cakes/truffle-1kg.jpg" },

  { id: 130, name: "Vanchoc Cake (500 g)", category: "Cakes", price: 679, description: "Vanilla and chocolate fusion cake", rating: 4.7, reviews: 47, image: "/cakes/vanchoc-500.jpg" },
  { id: 131, name: "Vanchoc Cake (1 kg)", category: "Cakes", price: 1049, description: "Vanilla and chocolate fusion cake", rating: 4.8, reviews: 63, image: "/cakes/vanchoc-1kg.jpg" },

  { id: 132, name: "Cute Teddy Cake (500 g)", category: "Cakes", price: 679, description: "Adorable teddy-shaped cake", rating: 4.7, reviews: 44, image: "/cakes/teddy-500.jpg" },
  { id: 133, name: "Cute Teddy Cake (1 kg)", category: "Cakes", price: 1049, description: "Adorable teddy-shaped cake", rating: 4.8, reviews: 60, image: "/cakes/teddy-1kg.jpg" },

  { id: 134, name: "Red Velvet Cake (500 g)", category: "Cakes", price: 689, description: "Velvety smooth red velvet cake", rating: 4.8, reviews: 53, image: "/cakes/red-velvet-500.jpg" },
  { id: 135, name: "Red Velvet Cake (1 kg)", category: "Cakes", price: 1129, description: "Velvety smooth red velvet cake", rating: 4.9, reviews: 70, image: "/cakes/red-velvet-1kg.jpg" },

  { id: 136, name: "Ferrero Rocher Cake (500 g)", category: "Cakes", price: 689, description: "Crunchy Ferrero Rocher-inspired cake", rating: 4.8, reviews: 55, image: "/cakes/ferrero-500.jpg" },
  { id: 137, name: "Ferrero Rocher Cake (1 kg)", category: "Cakes", price: 1149, description: "Crunchy Ferrero Rocher-inspired cake", rating: 4.9, reviews: 72, image: "/cakes/ferrero-1kg.jpg" },

  { id: 138, name: "Molten Affair Cake (500 g)", category: "Cakes", price: 749, description: "Delicious molten chocolate cake", rating: 4.8, reviews: 54, image: "/cakes/molten-affair-500.jpg" },
  { id: 139, name: "Molten Affair Cake (1 kg)", category: "Cakes", price: 1149, description: "Delicious molten chocolate cake", rating: 4.9, reviews: 71, image: "/cakes/molten-affair-1kg.jpg" },

  { id: 140, name: "Death by Chocolate Cake (500 g)", category: "Cakes", price: 859, description: "Intensely rich chocolate cake", rating: 4.9, reviews: 58, image: "/cakes/death-choco-500.jpg" },
  { id: 141, name: "Death by Chocolate Cake (1 kg)", category: "Cakes", price: 1199, description: "Intensely rich chocolate cake", rating: 5.0, reviews: 77, image: "/cakes/death-choco-1kg.jpg" },

  { id: 142, name: "Kitkat & Ferrero Cake (500 g)", category: "Cakes", price: 1079, description: "Kitkat and Ferrero fusion cake", rating: 4.9, reviews: 62, image: "/cakes/kitkat-ferrero-500.jpg" },
  { id: 143, name: "Kitkat & Ferrero Cake (1 kg)", category: "Cakes", price: 1199, description: "Kitkat and Ferrero fusion cake", rating: 5.0, reviews: 80, image: "/cakes/kitkat-ferrero-1kg.jpg" },

  { id: 144, name: "Dark Chocolate Pinata Heart Cake (500 g)", category: "Cakes", price: 1149, description: "Breakable pinata heart cake with dark chocolate", rating: 4.9, reviews: 64, image: "/cakes/pinata-dark-500.jpg" },
  { id: 145, name: "Dark Chocolate Pinata Heart Cake (1 kg)", category: "Cakes", price: 1299, description: "Breakable pinata heart cake with dark chocolate", rating: 5.0, reviews: 85, image: "/cakes/pinata-dark-1kg.jpg" },

  { id: 146, name: "Pink Pinata Heart Cake (500 g)", category: "Cakes", price: 1199, description: "Pink pinata heart cake with hidden surprises", rating: 4.9, reviews: 66, image: "/cakes/pinata-pink-500.jpg" },
  { id: 147, name: "Pink Pinata Heart Cake (1 kg)", category: "Cakes", price: 1349, description: "Pink pinata heart cake with hidden surprises", rating: 5.0, reviews: 88, image: "/cakes/pinata-pink-1kg.jpg" },

  // ================= SPECIAL OCCASION CAKES =================
  { id: 148, name: "Couple Cake (500 g)", category: "Occasion Cakes", price: 579, description: "Romantic couple cake for celebrations", rating: 4.8, reviews: 55, image: "/cakes/couple.jpg" },
  { id: 149, name: "Propose Cake (500 g)", category: "Occasion Cakes", price: 639, description: "Romantic cake for proposals", rating: 4.9, reviews: 58, image: "/cakes/propose.jpg" },
  { id: 150, name: "Red Velvet Heart Cake (500 g)", category: "Occasion Cakes", price: 659, description: "Heart-shaped red velvet cake", rating: 4.9, reviews: 63, image: "/cakes/red-velvet-heart.jpg" },
  { id: 151, name: "Chocolate Truffle Heart Cake (500 g)", category: "Occasion Cakes", price: 969, description: "Heart-shaped chocolate truffle cake", rating: 5.0, reviews: 70, image: "/cakes/choco-truffle-heart.jpg" },
  { id: 152, name: "Couple Cake (1 kg)", category: "Occasion Cakes", price: 949, description: "Romantic couple cake for celebrations", rating: 4.8, reviews: 55, image: "/cakes/couple.jpg" },
  { id: 153, name: "Propose Cake (1 kg)", category: "Occasion Cakes", price: 949, description: "Romantic cake for proposals", rating: 4.9, reviews: 58, image: "/cakes/propose.jpg" },
  { id: 154, name: "Red Velvet Heart Cake (1 kg)", category: "Occasion Cakes", price: 969, description: "Heart-shaped red velvet cake", rating: 4.9, reviews: 63, image: "/cakes/red-velvet-heart.jpg" },
  { id: 155, name: "Chocolate Truffle Heart Cake (1 kg)", category: "Occasion Cakes", price: 999, description: "Heart-shaped chocolate truffle cake", rating: 5.0, reviews: 70, image: "/cakes/choco-truffle-heart.jpg" },

  // ================= PASTRIES =================

 { 
    id: 156,  name: "Classic Black Forest Pastry", 
    category: "Pastry", 
    price: 79, 
    description: "Classic soft pastry with layers of chocolate and cream", 
    rating: 4.6, 
    reviews: 45, 
    image: "/pastries/black-forest.jpg" 
  },
  { 
    id: 157, 
    name: "Butterscotch Pastry", 
    category: "Pastry", 
    price: 79, 
    description: "Soft butterscotch sponge layered with cream and caramel crunch", 
    rating: 4.5, 
    reviews: 38, 
    image: "/pastries/butterscotch.jpg" 
  },
  { 
    id: 158, 
    name: "Regal Red Velvet Pastry", 
    category: "Pastry", 
    price: 89, 
    description: "Rich and creamy red velvet pastry topped with cheese frosting", 
    rating: 4.8, 
    reviews: 52, 
    image: "/pastries/red-velvet.jpg" 
  },
  { 
    id: 159, 
    name: "Rich Chocolate Truffle Pastry", 
    category: "Pastry", 
    price: 89, 
    description: "Decadent chocolate sponge layered with chocolate ganache", 
    rating: 4.9, 
    reviews: 60, 
    image: "/pastries/choco-truffle.jpg" 
  },

  // ================= JAR CAKES =================

  {
    id: 160,
    name: "Chocolate Truffle Jar Cake",
    category: "Jar Cake", 
    price: 169, 
    description: "Rich chocolate truffle layered in a jar for perfect indulgence", 
    rating: 4.8, 
    reviews: 52, 
    image: "/jarcakes/choco-truffle.jpg" 
  },
  { 
    id: 161, 
    name: "Death By Chocolate Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Overloaded chocolate jar cake for true chocoholics", 
    rating: 4.9, 
    reviews: 60, 
    image: "/jarcakes/death-by-choco.jpg" 
  },
  { 
    id: 162, 
    name: "Choco Chip Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Chocolate sponge with layers of cream and choco chips", 
    rating: 4.7, 
    reviews: 41, 
    image: "/jarcakes/choco-chip.jpg" 
  },
  { 
    id: 163, 
    name: "Blueberry Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Moist cake layered with fresh blueberry compote", 
    rating: 4.6, 
    reviews: 38, 
    image: "/jarcakes/blueberry.jpg" 
  },
  { 
    id: 164, 
    name: "Butterscotch Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Butterscotch flavored cake with caramel crunch in a jar", 
    rating: 4.5, 
    reviews: 34, 
    image: "/jarcakes/butterscotch.jpg" 
  },
  { 
    id: 165, 
    name: "Black Forest Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Classic black forest with cream and cherries in a jar", 
    rating: 4.6, 
    reviews: 47, 
    image: "/jarcakes/black-forest.jpg" 
  },
  { 
    id: 166, 
    name: "Chocolate Oreo Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Chocolate sponge layered with Oreo cream and crunch", 
    rating: 4.7, 
    reviews: 44, 
    image: "/jarcakes/oreo.jpg" 
  },
  { 
    id: 167, 
    name: "Creamy Chocolate Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Decadent chocolate layers with smooth cream filling", 
    rating: 4.8, 
    reviews: 50, 
    image: "/jarcakes/creamy-choco.jpg" 
  },
  { 
    id: 168, 
    name: "Ferrero Rocher Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Hazelnut chocolate sponge topped with Ferrero Rocher", 
    rating: 4.9, 
    reviews: 65, 
    image: "/jarcakes/ferrero.jpg" 
  },
  { 
    id: 169, 
    name: "Litchee Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Refreshing lychee-flavored jar cake with cream", 
    rating: 4.4, 
    reviews: 32, 
    image: "/jarcakes/lychee.jpg" 
  },
  { 
    id: 170, 
    name: "Mango Jar Cake", 
    category: "Jar Cake", 
    price: 169, 
    description: "Sweet mango cream cake served in a jar", 
    rating: 4.6, 
    reviews: 40, 
    image: "/jarcakes/mango.jpg" 
  },
  { 
    id: 171, 
    name: "Pineapple Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Pineapple flavored cake with whipped cream layers", 
    rating: 4.5, 
    reviews: 36, 
    image: "/jarcakes/pineapple.jpg" 
  },
  { 
    id: 172, 
    name: "Strawberry Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Delightful strawberry cake with fresh cream in a jar", 
    rating: 4.6, 
    reviews: 42, 
    image: "/jarcakes/strawberry.jpg" 
  },
  { 
    id: 173, 
    name: "Red Velvet Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Moist red velvet cake layered with cream cheese frosting", 
    rating: 4.8, 
    reviews: 54, 
    image: "/jarcakes/red-velvet.jpg" 
  },
  { 
    id: 174, 
    name: "Blueberry White Chocolate Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Blueberry cake paired with white chocolate cream", 
    rating: 4.7, 
    reviews: 39, 
    image: "/jarcakes/blueberry-white-choco.jpg" 
  },
  { 
    id: 175, 
    name: "Triple Chocolate Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Three layers of dark, milk, and white chocolate goodness", 
    rating: 4.9, 
    reviews: 61, 
    image: "/jarcakes/triple-choco.jpg" 
  },
  { 
    id: 176, 
    name: "Banoffee Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Banana and toffee combination in a creamy jar dessert", 
    rating: 4.7, 
    reviews: 46, 
    image: "/jarcakes/banoffee.jpg" 
  },
  { 
    id: 177, 
    name: "Tiramisu Jar Cake", 
    category: "Jar Cake", 
    price: 155, 
    description: "Coffee-flavored Italian tiramisu served jar style", 
    rating: 4.8, 
    reviews: 57, 
    image: "/jarcakes/tiramisu.jpg" 
  },
  { 
    id: 178, 
    name: "Hazelnut Jar Cake", 
    category: "Jar Cake", 
    price: 309, 
    description: "Nutty hazelnut and chocolate jar cake delight", 
    rating: 5.0, 
    reviews: 72, 
    image: "/jarcakes/hazelnut.jpg" 
  },

    // ================= CUPCAKES =================

   { 
    id: 179, 
    name: "Chocolate Cupcake", 
    category: "Cupcakes", 
    price: 50, 
    description: "Rich and moist chocolate cupcake topped with creamy frosting", 
    rating: 4.7, 
    reviews: 45, 
    image: "/cupcakes/chocolate.jpg" 
  },
  { 
    id: 180, 
    name: "Vanilla Cupcake", 
    category: "Cupcakes", 
    price: 50, 
    description: "Classic vanilla cupcake with soft sponge and buttercream frosting", 
    rating: 4.6, 
    reviews: 40, 
    image: "/cupcakes/vanilla.jpg" 
  },
  { 
    id: 181, 
    name: "Red Velvet Cupcake", 
    category: "Cupcakes", 
    price: 50, 
    description: "Moist red velvet cupcake topped with cream cheese frosting", 
    rating: 4.8, 
    reviews: 52, 
    image: "/cupcakes/red-velvet.jpg" 
  },
  { 
    id: 182, 
    name: "Ferrero Rocher Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Decadent chocolate cupcake infused with hazelnut and Ferrero Rocher", 
    rating: 4.9, 
    reviews: 65, 
    image: "/cupcakes/ferrero.jpg" 
  },
  { 
    id: 183, 
    name: "Kit Kat Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Fun chocolate cupcake with Kit Kat topping", 
    rating: 4.8, 
    reviews: 58, 
    image: "/cupcakes/kitkat.jpg" 
  },
  { 
    id: 184, 
    name: "Oreo Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Chocolate cupcake with Oreo cream and cookie crunch", 
    rating: 4.7, 
    reviews: 50, 
    image: "/cupcakes/oreo.jpg" 
  },
  { 
    id: 185, 
    name: "Mango Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Soft cupcake with refreshing mango flavor and cream topping", 
    rating: 4.6, 
    reviews: 42, 
    image: "/cupcakes/mango.jpg" 
  },
  { 
    id: 186, 
    name: "Pineapple Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Tropical pineapple-flavored cupcake with creamy frosting", 
    rating: 4.5, 
    reviews: 38, 
    image: "/cupcakes/pineapple.jpg" 
  },
  { 
    id: 187, 
    name: "Butterscotch Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Caramel butterscotch cupcake with a rich creamy topping", 
    rating: 4.6, 
    reviews: 44, 
    image: "/cupcakes/butterscotch.jpg" 
  },
  { 
    id: 188, 
    name: "Blueberry Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Moist cupcake with sweet blueberry compote and frosting", 
    rating: 4.7, 
    reviews: 49, 
    image: "/cupcakes/blueberry.jpg" 
  },
  { 
    id: 189, 
    name: "Orange Cupcake", 
    category: "Cupcakes", 
    price: 70, 
    description: "Zesty orange-flavored cupcake with light cream topping", 
    rating: 4.5, 
    reviews: 37, 
    image: "/cupcakes/orange.jpg" 
  },


    // ================= DESSERTS =================

  { id: 190, name: "Choco Lava Cake", category: "Desserts", price: 71, description: "Warm chocolate lava cake with gooey center", rating: 4.7, reviews: 48, image: "/desserts/choco-lava.jpg" },
  { id: 191, name: "Gooey Truffle Brownie", category: "Desserts", price: 99, description: "Rich chocolate brownie with gooey truffle filling", rating: 4.8, reviews: 52, image: "/desserts/truffle-brownie.jpg" },
  { id: 192, name: "Walnut Brownie", category: "Desserts", price: 99, description: "Classic chocolate brownie topped with crunchy walnuts", rating: 4.6, reviews: 40, image: "/desserts/walnut-brownie.jpg" },
  { id: 193, name: "Chocolate Momo", category: "Desserts", price: 249, description: "Unique dessert momo filled with rich chocolate", rating: 4.5, reviews: 36, image: "/desserts/choco-momo.jpg" },

    // ================= SUNDAES =================

{ id: 194, name: "Brownie Blast Sundae", category: "Sundaes", price: 189, description: "Rich chocolate sundae topped with brownie chunks", rating: 4.6, reviews: 38, image: "/sundaes/brownie-blast.jpg" },
{ id: 195, name: "Almond Vanilla Sundae", category: "Sundaes", price: 249, description: "Creamy vanilla sundae with crunchy almonds", rating: 4.7, reviews: 42, image: "/sundaes/almond-vanilla.jpg" },
{ id: 196, name: "Chocolate Sprinkle Sundae", category: "Sundaes", price: 149, description: "Classic chocolate sundae topped with sprinkles", rating: 4.5, reviews: 35, image: "/sundaes/choco-sprinkle.jpg" },
{ id: 197, name: "Creme Da La Caramel", category: "Sundaes", price: 139, description: "Smooth caramel sundae with a creamy base", rating: 4.4, reviews: 33, image: "/sundaes/creme-caramel.jpg" },
{ id: 198, name: "Crunchy Cashew Sundae", category: "Sundaes", price: 169, description: "Delicious sundae with crunchy roasted cashews", rating: 4.6, reviews: 39, image: "/sundaes/cashew-crunch.jpg" },
{ id: 199, name: "Gems Chocolate Sundae", category: "Sundaes", price: 149, description: "Chocolate sundae topped with colorful gems", rating: 4.5, reviews: 36, image: "/sundaes/gems-choco.jpg" },
{ id: 200, name: "Cashew Fudge Sundae", category: "Sundaes", price: 219, description: "Fudge-loaded sundae with cashew nuts", rating: 4.7, reviews: 41, image: "/sundaes/cashew-fudge.jpg" },
{ id: 201, name: "Choco Lava Sundae", category: "Sundaes", price: 229, description: "Chocolate sundae with molten choco lava topping", rating: 4.8, reviews: 50, image: "/sundaes/choco-lava.jpg" },
{ id: 202, name: "Oreo Kiddo Sundae", category: "Sundaes", price: 149, description: "Kid-favorite sundae topped with Oreo crumbs", rating: 4.6, reviews: 37, image: "/sundaes/oreo-kiddo.jpg" },
{ id: 203, name: "Classic Black Forest Sundae", category: "Sundaes", price: 229, description: "Black forest style sundae with chocolate and cherries", rating: 4.7, reviews: 46, image: "/sundaes/black-forest.jpg" },
{ id: 204, name: "Strawberry Vanilla Sundae", category: "Sundaes", price: 199, description: "Refreshing sundae with strawberry and vanilla blend", rating: 4.5, reviews: 34, image: "/sundaes/strawberry-vanilla.jpg" },

// ================= SHAKES =================

{ id: 205, name: "Death By Chocolate (DBC) Thickshake", category: "Shakes", price: 229, description: "Rich chocolate thickshake loaded with choco goodness", rating: 4.8, reviews: 55, image: "/shakes/dbc.jpg" },
{ id: 206, name: "Red Velvet Thickshake", category: "Shakes", price: 229, description: "Creamy thickshake inspired by red velvet cake", rating: 4.7, reviews: 48, image: "/shakes/red-velvet.jpg" },
{ id: 207, name: "Rose Milkshake", category: "Shakes", price: 199, description: "Refreshing rose flavored milkshake", rating: 4.5, reviews: 36, image: "/shakes/rose.jpg" },
{ id: 208, name: "Oreo Kitkat Shake", category: "Shakes", price: 269, description: "Thickshake with Oreo chunks and Kitkat pieces", rating: 4.8, reviews: 52, image: "/shakes/oreo-kitkat.jpg" },
{ id: 209, name: "Oreo Brownie Thickshake", category: "Shakes", price: 219, description: "Chocolate brownie thickshake blended with Oreos", rating: 4.7, reviews: 44, image: "/shakes/oreo-brownie.jpg" },
{ id: 210, name: "Brownie Thickshake", category: "Shakes", price: 219, description: "Thick chocolate shake with brownie bits", rating: 4.6, reviews: 41, image: "/shakes/brownie.jpg" },
{ id: 211, name: "Oreo Thickshake", category: "Shakes", price: 209, description: "Classic Oreo blended thickshake", rating: 4.6, reviews: 39, image: "/shakes/oreo.jpg" },
{ id: 212, name: "Kitkat Thickshake", category: "Shakes", price: 219, description: "Creamy Kitkat blended thickshake", rating: 4.7, reviews: 43, image: "/shakes/kitkat.jpg" },
{ id: 213, name: "Chocolate Milkshake", category: "Shakes", price: 199, description: "Classic chocolate flavored milkshake", rating: 4.5, reviews: 37, image: "/shakes/chocolate.jpg" },
{ id: 214, name: "Butterscotch Milkshake", category: "Shakes", price: 199, description: "Creamy butterscotch flavored milkshake", rating: 4.5, reviews: 34, image: "/shakes/butterscotch.jpg" },
{ id: 215, name: "Chocolate Truffle Thickshake", category: "Shakes", price: 229, description: "Rich chocolate truffle blended into a thickshake", rating: 4.8, reviews: 49, image: "/shakes/choco-truffle.jpg" },
{ id: 216, name: "Oreo Strawberry Thickshake", category: "Shakes", price: 219, description: "Strawberry thickshake topped with Oreo crumbs", rating: 4.6, reviews: 42, image: "/shakes/oreo-strawberry.jpg" },

// ================= Starter =================

{ id: 217, name: "French Fries", category: "Starter", price: 79, description: "Classic golden crispy French fries", rating: 4.5, reviews: 40, image: "/snacks/fries.jpg" },
{ id: 218, name: "Peri Peri French Fries", category: "Starter", price: 99, description: "Crispy fries tossed with peri peri spice mix", rating: 4.6, reviews: 42, image: "/snacks/peri-peri-fries.jpg" },
{ id: 219, name: "Lemon Pepper French Fries", category: "Starter", price: 99, description: "Crispy fries seasoned with tangy lemon pepper", rating: 4.5, reviews: 38, image: "/snacks/lemon-pepper-fries.jpg" },
{ id: 220, name: "Chilli Garlic French Fries", category: "Starter", price: 99, description: "Spicy fries flavored with chilli and garlic", rating: 4.6, reviews: 41, image: "/snacks/chilli-garlic-fries.jpg" },
{ id: 221, name: "Veg Fingers", category: "Starter", price: 149, description: "Crispy fried vegetable fingers served with dip", rating: 4.4, reviews: 35, image: "/snacks/veg-fingers.jpg" },
{ id: 222, name: "Jalapeno Poppers", category: "Starter", price: 149, description: "Cheesy jalapeno stuffed poppers, crunchy outside", rating: 4.7, reviews: 47, image: "/snacks/jalapeno-poppers.jpg" }

];
