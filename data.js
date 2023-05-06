import bcrypt from "bcryptjs";
const data = {
  // users: [
  //   {
  //     name: "Fitria",
  //     email: "admin@example.com",
  //     password: bcrypt.hashSync("fitria123"),
  //     isAdmin: true,
  //   },
  //   {
  //     name: "Userone",
  //     email: "userone@example.com",
  //     password: bcrypt.hashSync("userone123"),
  //     isAdmin: false,
  //   },
  //   {
  //     name: "Usertwo",
  //     email: "usertwo@example.com",
  //     password: bcrypt.hashSync("usertwo123"),
  //     isAdmin: false,
  //   },
  // ],
  products: [
    {
      // _id: "1",
      name: "Pizza Pepperoni",
      slug: "pizza-pepperoni",
      category: "Food",
      tag: "Italian",
      image: "/images/pizzapepperoni.jpg",
      price: 75000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Pizza with pepperoni and Mozarella",
    },
    {
      // _id: "2",
      name: "Spaghetti Bolognese",
      slug: "spaghetti-bolognese",
      category: "Food",
      tag: "Italian",
      image: "/images/spaghettibolognese.jpg",
      price: 45000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Spaghetti with bolognese sauce",
    },
    {
      // _id: "3",
      name: "Espresso",
      slug: "espresso-coffee",
      category: "Beverages",
      tag: "Hot drink",
      image: "/images/espresso.jpg",
      price: 20000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Espresso coffee from Italy",
    },
    {
      // _id: "4",
      name: "Jasmine Tea",
      slug: "jasmine-tea",
      category: "Beverages",
      tag: "Hot drink",
      image: "/images/jasminetea.jpg",
      price: 15000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Jasmine tea from Indonesia",
    },
    // {
    //   // _id: "4",
    //   name: "Bakso",
    //   slug: "bakso",
    //   category: "Food",
    //   tag: "Indonesian",
    //   image: "/images/bakso.jpg",
    //   price: 15000,
    //   countInStocke: 10,
    //   brand: "FoodYum",
    //   rating: 2.5,
    //   numReviews: 10,
    //   description: "Meatball soup from Indonesia",
    // },
    {
      // _id: "4",
      name: "Beef Burger",
      slug: "beef-burger",
      category: "Food",
      tag: "American",
      image: "/images/beefburger.jpg",
      price: 25000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Burger with beef and cheese",
    },
    {
      // _id: "4",
      name: "Beef Teriyaki",
      slug: "beef-teriyaki",
      category: "Food",
      tag: "Japanese",
      image: "/images/beefteriyaki.jpg",
      price: 30000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Beef sliced with teriyaki sauce",
    },
    {
      // _id: "4",
      name: "Cafe Latte",
      slug: "cafe-latte",
      category: "Beverages",
      tag: "Hot drink",
      image: "/images/cafelatte.jpg",
      price: 12500,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 3.5,
      numReviews: 10,
      description: "Beef sliced with teriyaki sauce",
    },
    {
      // _id: "4",
      name: "Choco Donut",
      slug: "choco-donut",
      category: "Dessert",
      tag: "Sweet",
      image: "/images/chocodonut.jpg",
      price: 9000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 3.5,
      numReviews: 10,
      description: "Donut with choco flavor",
    },
    {
      // _id: "4",
      name: "Choco Float",
      slug: "choco-float",
      category: "Beverages",
      tag: "Cold drink",
      image: "/images/chocofloat.jpg",
      price: 11000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Chocolate drink with vanilla float",
    },
    {
      // _id: "4",
      name: "Doppio",
      slug: "doppio",
      category: "Beverages",
      tag: "Hot drink",
      image: "/images/doppio.jpg",
      price: 13000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 3.5,
      numReviews: 10,
      description: "Strong flavoured black Italian coffe",
    },
    // {
    //   // _id: "4",
    //   name: "Fried shrimp",
    //   slug: "fried-shrimp",
    //   category: "Food",
    //   tag: "Fried food",
    //   image: "/images/friedshrimp.jpg",
    //   price: 28000,
    //   countInStocke: 10,
    //   brand: "FoodYum",
    //   rating: 3,
    //   numReviews: 10,
    //   description: "Fried shrimp with butter",
    // },
    {
      // _id: "4",
      name: "Kare rice",
      slug: "kare-rice",
      category: "Food",
      tag: "Japanese",
      image: "/images/karerice.jpg",
      price: 30000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 5,
      numReviews: 10,
      description: "Curry styled rice with katsu from Japan",
    },
    {
      // _id: "4",
      name: "Lychee Soda",
      slug: "lychee-soda",
      category: "Beverages",
      tag: "Cold drink",
      image: "/images/lycheesoda.jpg",
      price: 22000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 5,
      numReviews: 10,
      description: "Lychee juice with fresh soda",
    },
    {
      // _id: "4",
      name: "Matcha Donut",
      slug: "matcha-donut",
      category: "Dessert",
      tag: "Sweet",
      image: "/images/matchadonut.jpg",
      price: 10000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Donut with matcha flavor",
    },
    {
      // _id: "4",
      name: "Orange juice",
      slug: "orange-juice",
      category: "Beverages",
      tag: "Cold drink",
      image: "/images/orangejuice.jpg",
      price: 17000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 5,
      numReviews: 10,
      description: "Fresh orange juice 100%",
    },
    {
      // _id: "4",
      name: "Pink Donut",
      slug: "pink-donut",
      category: "Dessert",
      tag: "Sweet",
      image: "/images/pinkdonut.jpg",
      price: 10000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Donut with strawberry flavor",
    },
    {
      // _id: "4",
      name: "Ramen",
      slug: "ramen",
      category: "Food",
      tag: "Japanese",
      image: "/images/ramen.jpg",
      price: 36000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 5,
      numReviews: 10,
      description: "Noddle with rich flavor from Japan",
    },
    {
      // _id: "4",
      name: "Sashimi",
      slug: "sashimi",
      category: "Food",
      tag: "Japanese",
      image: "/images/sashimi.jpg",
      price: 90000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Fresh salmon slices from Japan",
    },
    {
      // _id: "4",
      name: "Sushi",
      slug: "sushi",
      category: "Food",
      tag: "Japanese",
      image: "/images/sushi.jpg",
      price: 65000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4,
      numReviews: 10,
      description: "Fresh salmon, tuna sushi from Japan",
    },
    {
      // _id: "4",
      name: "Strawberry milkshake",
      slug: "strawberry-milkshake",
      category: "Beverages",
      tag: "Cold drink",
      image: "/images/strawberrymilkshake.jpg",
      price: 20000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 5,
      numReviews: 10,
      description: "Fresh strawberry and milk 100%",
    },
    {
      // _id: "4",
      name: "Sugar donut",
      slug: "sugar-donut",
      category: "Dessert",
      tag: "Sweet",
      image: "/images/sugardonut.jpg",
      price: 8000,
      countInStocke: 10,
      brand: "FoodYum",
      rating: 4.5,
      numReviews: 10,
      description: "Donut with sugary flavor",
    },
  ],
};

export default data;
