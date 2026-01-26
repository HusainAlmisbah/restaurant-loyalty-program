const Order = require('../models/Menu-Items')
const router = require("express").Router()
 const menu = [
        // soups (5)
        { category: "soups", name: "Lentil Soup", price: 1.500, points: 5 },
        { category: "soups", name: "Iranian Chicken Soup", price: 1.750, points: 5 },
        { category: "soups", name: "Creamy Chicken Soup", price: 1.750, points: 5 },
        { category: "soups", name: "Mushroom Soup", price: 1.750, points: 5 },
        { category: "soups", name: "Chicken Corn Soup", price: 1.750, points: 5 },
        { category: "soups", name: "Hot & Sour Soup", price: 1.600, points: 5 },
        { category: "soups", name: "Hot & Sour Soup (Prawns)", price: 1.750, points: 5 },

        // hotMeza (5)
        { category: "hotMeza", name: "French Fries", price: 0.800, points: 5 },
        { category: "hotMeza", name: "French Fries With Cheese", price: 1.400, points: 5 },
        { category: "hotMeza", name: "Chicken Dynamite", price: 2.900, points: 5 },
        { category: "hotMeza", name: "Shrimp Dynamite", price: 3.100, points: 5 },
        { category: "hotMeza", name: "Cheese Roll", price: 1.600, points: 5 },
        { category: "hotMeza", name: "Vegetable Spring Roll", price: 1.600, points: 5 },
        { category: "hotMeza", name: "Onion Rings", price: 1.700, points: 5 },
        { category: "hotMeza", name: "Chicken Nuggets", price: 1.700, points: 5 },
        { category: "hotMeza", name: "Buffalo Wings", price: 2.100, points: 5 },
        { category: "hotMeza", name: "Mozzarella Stick", price: 2.100, points: 5 },
        { category: "hotMeza", name: "Jalapeno Bites", price: 2.100, points: 5 },
        { category: "hotMeza", name: "Chicken Popcorn", price: 2.100, points: 5 },

        // coldMezaSalads (5)
        { category: "coldMezaSalads", name: "Hummus", price: 1.500, points: 5 },
        { category: "coldMezaSalads", name: "Moutabal", price: 1.500, points: 5 },
        { category: "coldMezaSalads", name: "Mutabal With Pomegranate", price: 1.800, points: 5 },
        { category: "coldMezaSalads", name: "Baba Ghanoush", price: 1.500, points: 5 },
        { category: "coldMezaSalads", name: "Fattoush", price: 1.900, points: 5 },
        { category: "coldMezaSalads", name: "Tabbouleh", price: 1.900, points: 5 },
        { category: "coldMezaSalads", name: "Arabic Salad", price: 1.600, points: 5 },
        { category: "coldMezaSalads", name: "Greek Salad", price: 2.200, points: 5 },
        { category: "coldMezaSalads", name: "Tuna Salad", price: 2.200, points: 5 },
        { category: "coldMezaSalads", name: "Chicken Caesar Salad", price: 2.600, points: 5 },
        { category: "coldMezaSalads", name: "Shrimp Caesar Salad", price: 2.900, points: 5 },
        { category: "coldMezaSalads", name: "Rocca Salad", price: 1.900, points: 5 },
        { category: "coldMezaSalads", name: "Beetroot Salad", price: 1.750, points: 5 },
        { category: "coldMezaSalads", name: "Olive Salad", price: 1.750, points: 5 },
        { category: "coldMezaSalads", name: "Corn Salad", price: 1.500, points: 5 },
        { category: "coldMezaSalads", name: "Zyara Salad", price: 2.100, points: 5 },
        { category: "coldMezaSalads", name: "Dates Salad", price: 2.900, points: 5 },
        { category: "coldMezaSalads", name: "fattoula", price: 2.900, points: 5 },
        { category: "coldMezaSalads", name: "Vine Leaves", price: 1.800, points: 5 },
        { category: "coldMezaSalads", name: "Eggplant Fatta", price: 2.500, points: 5 },
        { category: "coldMezaSalads", name: "Chili Sauce", price: 0.250, points: 5 },
        { category: "coldMezaSalads", name: "Garlic", price: 0.250, points: 5 },

        // shawarma (10)
        { category: "shawarma", name: "Chicken Shawarma Sandwich", price: 1.200, points: 10 },
        { category: "shawarma", name: "Meat Shawarma Sandwich", price: 1.400, points: 10 },
        { category: "shawarma", name: "Mix Shawarma Sandwich", price: 1.400, points: 10 },
        { category: "shawarma", name: "Chicken Shawarma Plate", price: 3.200, points: 10 },
        { category: "shawarma", name: "Meat Shawarma Plate", price: 3.400, points: 10 },
        { category: "shawarma", name: "Mix Shawarma Plate", price: 3.400, points: 10 },

        // byKG (20)
        { category: "byKG", name: "Grilled Shrimps By KG", price: 15.000, points: 20 },
        { category: "byKG", name: "Mixed Seafood By KG", price: 15.000, points: 20 },
        { category: "byKG", name: "Fish By KG", price: 8.000, points: 20 },

        // friedGrilledFish (10)
        { category: "friedGrilledFish", name: "Fish With Rice", price: 5.000, points: 10 },
        { category: "friedGrilledFish", name: "Fried Hammour", price: 4.600, points: 10 },
        { category: "friedGrilledFish", name: "Grilled Hammour", price: 4.600, points: 10 },
        { category: "friedGrilledFish", name: "Fried Safi", price: 3.900, points: 10 },
        { category: "friedGrilledFish", name: "Grilled Safi", price: 3.900, points: 10 },
        { category: "friedGrilledFish", name: "Fried Shrimps", price: 4.900, points: 10 },
        { category: "friedGrilledFish", name: "Grilled Shrimps", price: 4.900, points: 10 },
        { category: "friedGrilledFish", name: "Fried Calamari", price: 4.600, points: 10 },
        { category: "friedGrilledFish", name: "Grilled Calamari", price: 4.600, points: 10 },

        // stewsCurries (10)
        { category: "stewsCurries", name: "Okra Stew With Lamb", price: 2.850, points: 10 },
        { category: "stewsCurries", name: "Stew Of Qeema Lamb", price: 2.850, points: 10 },
        { category: "stewsCurries", name: "Chicken Makhani", price: 3.600, points: 10 },
        { category: "stewsCurries", name: "Chicken Masala", price: 3.600, points: 10 },
        { category: "stewsCurries", name: "Prawns Masala", price: 3.850, points: 10 },
        { category: "stewsCurries", name: "Prawns Stew", price: 3.500, points: 10 },
        { category: "stewsCurries", name: "Butter Chicken", price: 3.600, points: 10 },

        // grills (15)
        { category: "grills", name: "Kebab", price: 3.200, points: 15 },
        { category: "grills", name: "Chicken Tikka", price: 3.200, points: 15 },
        { category: "grills", name: "Beef Tikka", price: 3.200, points: 15 },
        { category: "grills", name: "Bahraini Beef Tikka", price: 3.500, points: 15 },
        { category: "grills", name: "Shish Tawook", price: 3.200, points: 15 },
        { category: "grills", name: "Chops", price: 4.600, points: 15 },
        { category: "grills", name: "Grilled Fish", price: 4.600, points: 15 },
        { category: "grills", name: "Grilled Shrimps", price: 4.900, points: 15 },
        { category: "grills", name: "Mix Grills", price: 4.600, points: 15 },
        { category: "grills", name: "Charcoal Chicken", price: 2.650, points: 15 },
        { category: "grills", name: "Spicy Charcoal Chicken", price: 2.750, points: 15 },
        { category: "grills", name: "Charcoal Chicken With Rice", price: 3.850, points: 15 },
        { category: "grills", name: "Spicy Charcoal Chicken With Rice", price: 3.950, points: 15 },
        { category: "grills", name: "Chicken Legs", price: 3.400, points: 15 },
        { category: "grills", name: "Mix Grill (4 Persons)", price: 12.500, points: 15 },
        { category: "grills", name: "Mix Grill (6 Persons)", price: 18.500, points: 15 },
        { category: "grills", name: "Mix Grill (8 Persons)", price: 24.000, points: 15 },
        { category: "grills", name: "Mix Grill (10 Persons)", price: 29.000, points: 15 },
        { category: "grills", name: "Mix Grill (12 Persons)", price: 34.000, points: 15 },
        { category: "grills", name: "Mix Grill (14 Persons)", price: 39.000, points: 15 },

        // pasta (10)
        { category: "pasta", name: "Pasta Alfredo", price: 3.200, points: 10 },
        { category: "pasta", name: "Pasta Arrabiata", price: 3.200, points: 10 },
        { category: "pasta", name: "Pasta Pesto", price: 3.200, points: 10 },
        { category: "pasta", name: "Pasta Bolognese", price: 3.100, points: 10 },
        { category: "pasta", name: "Spaghetti Bolognese", price: 3.100, points: 10 },
        { category: "pasta", name: "Beef Lasagna", price: 3.400, points: 10 },

        // chineseDishes (7)
        { category: "chineseDishes", name: "Sweet Corn Chicken", price: 3.300, points: 7 },
        { category: "chineseDishes", name: "Sweet Corn Prawns", price: 3.600, points: 7 },
        { category: "chineseDishes", name: "Chilli Chicken", price: 3.300, points: 7 },
        { category: "chineseDishes", name: "Chilli Prawns", price: 3.600, points: 7 },
        { category: "chineseDishes", name: "Chicken Manchurian", price: 3.300, points: 7 },
        { category: "chineseDishes", name: "Prawns Manchurian", price: 3.600, points: 7 },
        { category: "chineseDishes", name: "Mixed Fried Rice", price: 3.300, points: 7 },

        // sizzling (15)
        { category: "sizzling", name: "Beef Steak Sizzling", price: 5.500, points: 15 },
        { category: "sizzling", name: "Chicken Fillet Sizzling", price: 5.200, points: 15 },
        { category: "sizzling", name: "Chicken Wings Sizzling", price: 4.600, points: 15 },
        { category: "sizzling", name: "Prawns Sizzling", price: 5.300, points: 15 },
        { category: "sizzling", name: "Fish Sizzling", price: 5.300, points: 15 },
        { category: "sizzling", name: "Mix Sizzling", price: 4.300, points: 15 },
        { category: "sizzling", name: "Vegetable Sizzling", price: 4.000, points: 15 },

        // internationalDishes (5)
        { category: "internationalDishes", name: "Moussaka", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Stuffed Zucchini", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Stuffed Eggplant", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Stuffed Green Pepper", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Stuffed Cabbage", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Stuffed Vine Leaves", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Mixed Stuffed", price: 2.900, points: 5 },
        { category: "internationalDishes", name: "Chicken Biryani", price: 3.200, points: 5 },
        { category: "internationalDishes", name: "Lamb Biryani", price: 3.600, points: 5 },

        // sandwiches (5)
        { category: "sandwiches", name: "Club Sandwich", price: 2.600, points: 5 },
        { category: "sandwiches", name: "Burger Sandwich", price: 2.600, points: 5 },
        { category: "sandwiches", name: "Chicken Burger Sandwich", price: 2.600, points: 5 },
        { category: "sandwiches", name: "Beef Burger Sandwich", price: 2.600, points: 5 },
        { category: "sandwiches", name: "Crispy Chicken Sandwich", price: 2.600, points: 5 },
        { category: "sandwiches", name: "Steak Sandwich", price: 3.200, points: 5 },
        { category: "sandwiches", name: "Shish Tawook Sandwich", price: 1.675, points: 5 },

        // desserts (7)
        { category: "desserts", name: "Strawberry Cheese Cake", price: 2.000, points: 7 },
        { category: "desserts", name: "Chocolate Cake", price: 2.000, points: 7 },
        { category: "desserts", name: "Carrot Cake", price: 2.000, points: 7 },
        { category: "desserts", name: "Red Velvet Cake", price: 2.000, points: 7 },
        { category: "desserts", name: "Lotus Cake", price: 2.200, points: 7 },
        { category: "desserts", name: "San Sebastian Cake", price: 2.400, points: 7 },
        { category: "desserts", name: "Brownies", price: 1.800, points: 7 },
        { category: "desserts", name: "Um Ali", price: 1.800, points: 7 },
        { category: "desserts", name: "Kunafa", price: 1.800, points: 7 },
        { category: "desserts", name: "Ice Cream", price: 1.500, points: 7 },
        { category: "desserts", name: "Fruit Salad", price: 1.800, points: 7 },

        // coldBeverages (5)
        { category: "coldBeverages", name: "Water", price: 0.200, points: 5 },
        { category: "coldBeverages", name: "Soft Drinks", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Diet Soft Drinks", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Pepsi Can", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "7up Can", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Miranda Can", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Diet Pepsi Can", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Diet 7up Can", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Red Bull", price: 1.000, points: 5 },
        { category: "coldBeverages", name: "Vimto", price: 0.600, points: 5 },
        { category: "coldBeverages", name: "Laban Up", price: 0.400, points: 5 },
        { category: "coldBeverages", name: "Ayran", price: 0.400, points: 5 },
        { category: "coldBeverages", name: "Tea", price: 0.250, points: 5 },
        { category: "coldBeverages", name: "Karak Tea", price: 0.300, points: 5 },
        { category: "coldBeverages", name: "Coffee", price: 0.300, points: 5 },
        { category: "coldBeverages", name: "Cappuccino", price: 0.700, points: 5 },
        { category: "coldBeverages", name: "Latte", price: 0.700, points: 5 },
        { category: "coldBeverages", name: "Hot Chocolate", price: 0.700, points: 5 },
        { category: "coldBeverages", name: "Turkish Coffee", price: 0.500, points: 5 },
        { category: "coldBeverages", name: "Espresso", price: 0.500, points: 5 },
        { category: "coldBeverages", name: "Americano", price: 0.700, points: 5 },
        { category: "coldBeverages", name: "Mojito", price: 1.200, points: 5 },
        { category: "coldBeverages", name: "Blue Lagoon", price: 1.200, points: 5 },
        { category: "coldBeverages", name: "Strawberry Mojito", price: 1.400, points: 5 },
        { category: "coldBeverages", name: "Passion Fruit Mojito", price: 1.400, points: 5 },
        { category: "coldBeverages", name: "Mango Mojito", price: 1.400, points: 5 },
        { category: "coldBeverages", name: "Lemon Mint", price: 1.000, points: 5 },

        // freshJuices (5)
        { category: "freshJuices", name: "Orange Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Pineapple Juice", price: 1.200, points: 5 },
        { category: "freshJuices", name: "Watermelon Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Mango Juice", price: 1.200, points: 5 },
        { category: "freshJuices", name: "Avocado Juice", price: 1.400, points: 5 },
        { category: "freshJuices", name: "Banana Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Strawberry Juice", price: 1.200, points: 5 },
        { category: "freshJuices", name: "Apple Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Pomegranate Juice", price: 1.400, points: 5 },
        { category: "freshJuices", name: "Kiwi Juice", price: 1.400, points: 5 },
        { category: "freshJuices", name: "Lemon Juice", price: 0.900, points: 5 },
        { category: "freshJuices", name: "Lemon Mint Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Cocktail Juice", price: 1.400, points: 5 },
        { category: "freshJuices", name: "Carrot Juice", price: 1.000, points: 5 },
        { category: "freshJuices", name: "Mix Berries Juice", price: 1.600, points: 5 },
        { category: "freshJuices", name: "Mix Fruits Juice", price: 1.400, points: 5 }
];



router.get('/', async (req,res)=>{
    res.render('checkout.ejs',{points:req.session.totalPoints, price:req.session.totalPrice, cart:req.session.cart})
})

router.post('/', async (req,res)=>{
    console.log(req.body)
    let totalPrice = 0
    let totalPoints = 0
    for (const item of menu){
        if(req.body[`${item.category}`] === item.name){
            req.body[`${item.category}Price`] = item.price  
        const quantity = parseInt(req.body[`${item.category}Quantity`]) || 0
        console.log(`Item: ${item.name}, Quantity: ${quantity}`)
        if (quantity > 0){

            totalPrice += item.price * quantity
            totalPoints += item.points * quantity
        
        }
    }
    }
    req.session.totalPrice = totalPrice
    req.session.totalPoints = totalPoints
    req.session.cart = req.body
    console.log('Total Price:', totalPrice)
    console.log('Total Points:', totalPoints)
    // const order = await Order.create(req.body)
    res.redirect('/checkout')
})

router.post('/confirm', async (req,res)=>{
    const date = new Date()
    const orderData = {
        total: req.body.total,
        points: req.body.points,
        date: date.toLocaleString(),
        orderNumber: Math.floor(100000 + Math.random() * 900000)
    }


    req.session.cartOrder = orderData

    res.redirect('/profile')


})

module.exports = router;

