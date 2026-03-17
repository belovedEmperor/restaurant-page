export default class Menu {
  buildMenu() {
    const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent = "Menu";
    section.append(header);

    for (const menuSectionKey in this.MENU) {
      const menuSection = document.createElement("section");
      const menuSectionHeader = document.createElement("h2");
      menuSectionHeader.textContent = menuSectionKey;
      menuSection.append(menuSectionHeader);
      for (const menuItem of this.MENU[menuSectionKey]) {
        const item = document.createElement("div");

        // I know there are issues with this, I just can't be bothered right now
        // The point of this is the different pages
        // I'll just treat this mostly as just boilerplate
        if (menuItem.description) {
          item.innerHTML = `
            <p>${menuItem.name}</p>
            <p>${menuItem.price}</p>
            <p>${menuItem.description}</p>
        `;
        } else {
          item.innerHTML = `
            <p>${menuItem.name}</p>
            <p>${menuItem.price}</p>
        `;
        }
        menuSection.append(item);
      }

      section.append(menuSection);
    }

    return section;
  }

  MENU = {
    appetizers: [
      {
        name: "Crispy Veggie Rolls",
        price: 4,
        description: "Fried vegetables stuffed rolls (2)",
      },
      {
        name: "Pork Egg Roll",
        price: 4,
        description: "Fried pork and vegetable stuffed rolls (2)",
      },
      { name: "French Fries", price: 5 },
      { name: "Edamame", price: 6, description: "Steamed soybean pods" },
      {
        name: "Spicy Edamame",
        price: 6,
        description: "Steamed soybean pods with spicy seasoning",
      },
      {
        name: "Thai Summer Roll",
        price: 6,
        description:
          "With shrimp. Vermicelli, lettuce, thai basil, and carrots with peanut dipping sauce (2)",
      },
      {
        name: "Crispy Crab Rangoons",
        price: 7,
        description: "Wontons stuffed with real crab and cream cheese (6)",
      },
      {
        name: "Pot Stickers",
        price: 7,
        description: "Fried or steamed pork dumplings",
      },
      { name: "Seaweed Salad", price: 7 },
      {
        name: "Chicken Wings",
        price: 8,
        description: "Fried chicken wings (6)",
      },
      {
        name: "Spicy Chicken Wings",
        price: 8,
        description: "Spicy fried chicken wings (6)",
      },
      { name: "Fried Shrimp", price: 9, description: "Fried shrimp (6)" },
      { name: "Popcorn Chicken", price: 9 },
    ],
    soups: [
      {
        name: "Chicken Coconut",
        priceSmall: 5,
        priceLarge: 8,
        description: "Creamy coconut chicken soup",
      },
      {
        name: "Thai Spicy Soup (Shrimp)",
        priceSmall: 5,
        priceLarge: 8,
        description: "Spicy Thai-style soup with shrimp",
      },
      {
        name: "Wonton Soup",
        priceSmall: 5,
        priceLarge: 8,
        description: "Soup with pork wontons",
      },
      {
        name: "Egg Drop Soup",
        priceSmall: 5,
        priceLarge: 8,
        description: "Light soup with egg ribbons",
      },
    ],
    crispyChicken: [
      {
        name: "Sweet & Sour Chicken",
        price: 13,
        description:
          "Batter-fried chicken, pineapple, and bell peppers with sweet and sour sauce",
      },
      {
        name: "General Tso's Chicken",
        price: 13,
        description:
          "Batter-fried chicken with broccoli, bathed in a zesty pepper sauce",
      },
      {
        name: "Sesame Chicken",
        price: 13,
        description: "Batter-fried chicken with tangy sesame sauce",
      },
      {
        name: "Crispy Orange Chicken",
        price: 13,
        description: "Batter-fried chicken in orange sauce (Hot & Spicy)",
      },
    ],
    noodleRiceBowls: [
      {
        name: "Pad Thai",
        price: 0,
        description:
          "Thin rice sticks, egg, green onions, yellow onions, bean sprouts, crushed peanuts, cilantro, lime",
      },
      {
        name: "Vermicelli Singapore",
        price: 0,
        description:
          "Vermicelli, egg, green onions, yellow onions, bean sprouts, yellow curry",
      },
      {
        name: "Lomein Wok Toss",
        price: 0,
        description:
          "Noodles tossed with green onions, yellow onions, bean sprouts",
      },
      {
        name: "Chow Fun Wok Toss",
        price: 0,
        description:
          "Noodles tossed with green onions, yellow onions, bean sprouts",
      },
      {
        name: "Fire Bowl Fried Rice",
        price: 0,
        description: "Fried rice with egg, broccoli, carrots, and green onions",
      },
      {
        name: "Thai Basil Fried Rice",
        price: 0,
        description:
          "Spicy fried rice with egg, bean sprouts, carrots, thai basil, cilantro, crushed peanuts, and lime",
      },
    ],
    proteinOptions: [
      { name: "Chicken", price: 12 },
      { name: "Pork", price: 12 },
      { name: "Tofu (Fried)", price: 12 },
      { name: "Tofu (Soft)", price: 12 },
      { name: "Beef", price: 13 },
      { name: "Shrimp", price: 14 },
    ],
    chineseCuisine: [
      {
        name: "Moo Goo Gai Pan Chicken",
        price: 12,
        description: "Chicken with mushrooms and vegetables",
      },
      {
        name: "Chicken Broccoli",
        price: 12,
        description: "Chicken with broccoli in savory sauce",
      },
      {
        name: "Beef Broccoli",
        price: 13,
        description: "Beef with broccoli in savory sauce",
      },
      {
        name: "Beef Snow Peas",
        price: 13,
        description: "Beef with snow peas in savory sauce",
      },
      {
        name: "Pepper Steak with Onion",
        price: 13,
        description: "Beef with bell peppers and onions",
      },
      {
        name: "Shrimp Broccoli",
        price: 14,
        description: "Shrimp with broccoli in savory sauce",
      },
      {
        name: "Chicken Snow Peas",
        price: 12,
        description: "Chicken with snow peas in savory sauce",
      },
      {
        name: "Chicken Mushroom",
        price: 12,
        description: "Chicken with mushrooms in savory sauce",
      },
      {
        name: "Mongolian Beef",
        price: 13,
        description: "Beef with scallions in savory sauce",
      },
      {
        name: "Beef Mushroom",
        price: 13,
        description: "Beef with mushrooms in savory sauce",
      },
      {
        name: "Shrimp Mushroom",
        price: 14,
        description: "Shrimp with mushrooms in savory sauce",
      },
      {
        name: "Shrimp Snow Peas",
        price: 14,
        description: "Shrimp with snow peas in savory sauce",
      },
    ],
    phoNoodleSoup: [
      {
        name: "Pho Steak",
        price: 15,
        description: "Rice noodle soup with beef steak",
      },
      {
        name: "Pho Meatball",
        price: 15,
        description: "Rice noodle soup with beef meatballs",
      },
      {
        name: "Pho Shrimp",
        price: 15,
        description: "Rice noodle soup with shrimp",
      },
      {
        name: "Pho Chicken",
        price: 15,
        description: "Rice noodle soup with chicken",
      },
      {
        name: "Pho Vegetable & Tofu",
        price: 15,
        description: "Rice noodle soup with vegetables and tofu",
      },
      { name: "Beef Tendon", price: 15, description: "Added to pho" },
    ],
    stirFryProteinOptions: [
      { name: "Tofu (Fried)", price: 12 },
      { name: "Tofu (Soft)", price: 12 },
      { name: "Chicken", price: 12 },
      { name: "Beef", price: 13 },
      { name: "Shrimp", price: 14 },
    ],
    stirFryVeggieOptions: [
      {
        name: "Spring Veggie Mix",
        description: "Broccoli, snap peas, onion, carrots, zucchini",
      },
      {
        name: "Thai Veggie Mix",
        description: "Mushroom, zucchini, bell peppers, onions, carrots",
      },
    ],
    stirFrySauceOptions: [
      {
        name: "Thai Pepper",
        description: "Savory brown sauce with cilantro and spicy thai chillies",
      },
      {
        name: "Kung Pao",
        description: "Hot and peppery, kicked up with asian dry chilli peppers",
      },
      {
        name: "Szechuan Garlic",
        description: "Classic brown sauce jazzed up with garlic pepper",
      },
      {
        name: "Spicy Peanut",
        description: "Creamy blend of coconut milk and ground peanuts",
      },
      {
        name: "Lemongrass Bail",
        description:
          "Light citrus with the zip of fresh ginger, thai basil and lemongrass",
      },
      {
        name: "Coconut Curry",
        description:
          "A rich, complex curry with coconut milk and exotic spices",
      },
      {
        name: "Teriyaki",
        description: "Japanese-style tangy brown sauce with sweet mirin",
      },
      {
        name: "Classic Chinese",
        description: "Traditional brown sauce with zesty ginger and garlic",
      },
      {
        name: "Ginger with Wine",
        description: "Light white wine sauce with a zip of fresh ginger",
      },
    ],
    stirFryCarbOptions: [
      { name: "White Rice", price: 0 },
      { name: "Brown Rice", price: 0 },
      { name: "Fried Rice", price: 2 },
      { name: "Lo Mein", price: 3 },
    ],
    drinks: [
      { name: "House Milk Tea", price: 6 },
      { name: "Taro Milk Tea", price: 6 },
      { name: "Matcha Milk Tea", price: 6 },
      { name: "Thai Ice Tea", price: 6 },
      { name: "Coffee Milk Tea", price: 6 },
      { name: "Strawberry Milk Tea", price: 6 },
      { name: "Brown Sugar Milk Tea", price: 6 },
      { name: "Banana Milk Tea", price: 6 },
      { name: "Mango Milk Tea", price: 6 },
    ],
    desserts: [
      { name: "Cheesecake", price: 6 },
      { name: "Chocolate Cake", price: 6 },
      { name: "Mango Cake", price: 6 },
      { name: "Tiramisu Cake", price: 6 },
    ],
    partyTrays: [
      { name: "Small (S)", price: 50 },
      { name: "Large (L)", price: 80 },
    ],
  };

  getMenu() {
    return this.MENU;
  }

  render() {
    const div = document.createElement("div");
    div.append(this.buildMenu());
    return div;
  }
}
