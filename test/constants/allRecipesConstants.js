module.exports = {
  testUrlOld:
    "https://www.allrecipes.com/recipe/8385/italian-fresh-purple-grape-cake/",
  testUrlNew:
    "https://www.allrecipes.com/recipe/235151/crispy-and-tender-baked-chicken-thighs/",
  invalidUrl: "https://www.allrecipes.com/recipe/notarealurl",
  invalidDomainUrl: "www.invalid.com",
  nonRecipeUrl:
    "https://www.allrecipes.com/recipes/453/everyday-cooking/family-friendly/kid-friendly/",
  expectedRecipeOld: {
    name: "Italian Fresh Purple Grape Cake",
    ingredients: [
      "2 eggs",
      "2/3 cup white sugar",
      "4 tablespoons unsalted butter, melted",
      "1/4 cup extra virgin olive oil",
      "1/3 cup milk",
      "1/2 teaspoon vanilla extract",
      "1 1/2 cups all-purpose flour",
      "3/4 teaspoon baking powder",
      "1 pinch salt",
      "2 tablespoons grated lemon zest",
      "2 tablespoons grated orange zest",
      "10 ounces small purple grapes"
    ],
    instructions: [
      "Preheat the oven to 350 degrees F (175 degrees C). Generously butter and flour the 9 inch springform cake pan, tapping out any excess flour. Set aside.",
      "In the bowl of an electric mixer fitted with a whisk, beat the eggs and sugar until thick and lemon-colored, about 3 minutes. Add the butter, oil, milk and vanilla extract, and mix until blended.",
      "Sift the flour, baking powder and salt into a large bowl. Add the lemon zest and orange zest, and toss to coat the zest with flour.",
      "Spoon the flour mixture into the bowl of batter and stir with a wooden spoon until thoroughly blended. Scrape down the sides of the bowl and mix once more.Set aside for 10 minutes to allow the flour to absorb the liquids.",
      "Stir in about 3/4 of the grapes into the batter.Spoon the batter into the prepared cake pan and smooth out the top with a spatula.",
      "Place the pan in the center of the oven at 350 degrees F (175 degrees C). Bake for 15 minutes, then sprinkle the top of the cake with the remaining grapes. Bake for about 40 minutes more, until the top is a deep golden brown and the cake feels quite firm when pressed with a fingertip.",
      "Remove from oven and cool on a wire rack. After 10 minutes, run a knife along the sides of the pan. Release and remove the side of the springform pan, leaving the cake on the pan base. Serve at room temperature, cut into thin wedges."
    ],
    time: {
      prep: "30 m",
      cook: "1 h",
      active: "",
      inactive: "",
      ready: "1 h 30 m",
      total: ""
    },
    servings: "6"
  },
  expectedRecipeNew: {
    name: "Crispy and Tender Baked Chicken Thighs",
    ingredients: [
      "cooking spray",
      "8 bone-in chicken thighs with skin",
      "¼ teaspoon garlic salt",
      "¼ teaspoon onion salt",
      "¼ teaspoon dried oregano",
      "¼ teaspoon ground thyme",
      "¼ teaspoon paprika",
      "¼ teaspoon ground black pepper"
    ],
    instructions: [
      "Preheat oven to 350 degrees F (175 degrees C). Line a baking sheet with aluminum foil and spray with cooking spray.",
      "Arrange chicken thighs on prepared baking sheet.",
      "Combine garlic salt, onion salt, oregano, thyme, paprika, and pepper together in a small container with a lid. Close the lid and shake container until spices are thoroughly mixed. Sprinkle spice mixture liberally over chicken thighs.",
      "Bake chicken in the preheated oven until skin is crispy, thighs are no longer pink at the bone, and the juices run clear, about 1 hour. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C)."
    ],
    time: {
      prep: "10 mins",
      cook: "1 hr",
      active: "",
      inactive: "",
      ready: "",
      total: "1 hr 10 mins"
    },
    servings: "8"
  }
};
