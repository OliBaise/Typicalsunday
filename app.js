// Data for food and calories
const foodData = [
  { name: "Roast Chicken Breast (1 slice)", calories: 60, image: "https://thecozyapron.com/wp-content/uploads/2019/12/roasted-chicken-breasts_thecozyapron_1.jpg"},
  { name: "Roast Chicken Thigh and Drumstick", calories: 310, image: "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Baked-Chicken-Leg-Quarters-Recipe-9.jpg"},
  { name: "Roast Beef (1 serving)", calories: 170, image: "https://www.recipetineats.com/tachyon/2019/05/Marinated-Roast-Beef_7-1.jpg" },
  { name: "Roast Pork Belly (1 serving)", calories: 585, image: "https://recipes.pork.com.au/wp-content/uploads/sites/2/2018/10/Fool-proof-roast-pork-belly-2400-x-1800.jpg"},
  { name: "Roast Lamb (1 serving)", calories: 350, image: "https://recipe30.com/wp-content/uploads/2020/10/Roast-leg-of-lamb-slow-cooked.jpg" },
  { name: "Nut Loaf (1 serving)", calories: 170, image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/vegan_nut_loaf_99997_16x9.jpg" },
  { name: "Yorkshire Pudding (1 pudding)", calories: 260, image: "https://static01.nyt.com/images/2015/01/14/dining/14PRIMEREX/14PRIMEREX-square640.jpg" },
  { name: "Roast Potatoes (5 roast potatoes)", calories: 240, image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/04/Roast-potatoes-with-salt-and-fresh-thyme-leaves-square-FS.jpg" },
  { name: "Roast Carrots (1 serving)", calories: 110, image: "https://www.spendwithpennies.com/wp-content/uploads/2018/10/Spend-With-Pennies-Roasted-Carrots-25.jpg" },
  { name: "Cauliflower cheese (1 serving)", calories: 250, image: "https://www.checkyourfood.com/content/blob/Meals/Cauliflower-cheese-recipe-calories-nutrition-facts.jpg" },
  { name: "Peas (1 serving)", calories: 81, image: "https://www.alphafoodie.com/wp-content/uploads/2023/03/Sauteed-Peas-square-500x500.jpeg" },
  { name: "Roast Parsnips (1 serving)", calories: 120, image: "https://www.cookingwithcamilla.com/wp-content/uploads/2021/12/maple-mustard-roast-parsnips-1x1-2_.jpg" },
  { name: "1 Pig in Blanket", calories: 90, image: "https://saltbuttersmoke.com/wp-content/uploads/2023/11/pigs-in-blankets-with-honey-mustard-e1727104692938.jpg" },
  { name: "Gravy (big splash)", calories: 50, image: "https://www.favfamilyrecipes.com/wp-content/uploads/2024/05/Beef-Gravy-pour.jpg" },
  { name: "Lager (pint)", calories: 200, image: "https://www.checkyourfood.com/content/blob/Ingredients/Lager-beer-nutritional-information-calories.jpg" },
  { name: "Ale (pint)", calories: 250, image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Real_Ale_2004-05-09_cropped.jpg" },
  { name: "White Wine (large glass)", calories: 120, image: "https://static.wixstatic.com/media/nsplsh_3258694d4e706c72357649~mv2_d_2480_2480_s_4_2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_3258694d4e706c72357649~mv2_d_2480_2480_s_4_2.jpg" },
  { name: "Red Wine (large glass)", calories: 125, image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/11042/52d0a1fb-8719-4750-ab10-b803edd20c5f.jpg" }
];

// Calories burned per minute for each hiking difficulty
const hikingRates = {
  flat: 7.5,
  hilly: 10,
  treacherous: 12.5
};

let totalCalories = 0;
let addedFoods = [];

// Function to update the output
function updateOutput() {
  const flatTime = (totalCalories / hikingRates.flat).toFixed(1);
  const hillyTime = (totalCalories / hikingRates.hilly).toFixed(1);
  const treacherousTime = (totalCalories / hikingRates.treacherous).toFixed(1);

  document.getElementById("flat-time").textContent = flatTime;
  document.getElementById("hilly-time").textContent = hillyTime;
  document.getElementById("treacherous-time").textContent = treacherousTime;

  const addedFoodsList = document.getElementById("added-foods-list");
  addedFoodsList.innerHTML = "";
  addedFoods.forEach((food, index) => {
    const listItem = document.createElement("li");

    const foodName = document.createElement("span");
    foodName.textContent = food;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.marginLeft = "10px";
    removeButton.onclick = () => {
      totalCalories -= foodData.find(f => f.name === food).calories;
      addedFoods.splice(index, 1);
      updateOutput();
    };

    listItem.appendChild(foodName);
    listItem.appendChild(removeButton);
    addedFoodsList.appendChild(listItem);
  });
}

// Function to create food buttons
function createFoodButtons() {
  const foodButtonsContainer = document.getElementById("food-buttons");
  foodButtonsContainer.style.display = "grid";
  foodButtonsContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
  foodButtonsContainer.style.gap = "20px";

  foodData.forEach((food) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.style.textAlign = "center";

    const button = document.createElement("button");
    button.classList.add("food-button");
    button.style.width = "160px";
    button.style.height = "160px";
    button.style.backgroundImage = `url(${food.image})`;
    button.style.backgroundSize = "cover";
    button.style.backgroundPosition = "center";
    button.style.borderRadius = "50%";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.onclick = () => {
      totalCalories += food.calories;
      addedFoods.push(food.name);
      updateOutput();
    };

    const label = document.createElement("div");
    label.classList.add("button-label");
    label.style.marginTop = "10px";
    label.style.fontSize = "16px";
    label.style.color = "#333";
    label.textContent = food.name;

    buttonContainer.appendChild(button);
    buttonContainer.appendChild(label);
    foodButtonsContainer.appendChild(buttonContainer);
  });
}

// Initialize the app
createFoodButtons();
