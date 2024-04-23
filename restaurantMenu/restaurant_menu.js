const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];

const breakfastPrices = [12, 22.99, 21.99, 15];
const mainCoursePrices = [25, 16.99, 12.99, 22];
const dessertMenuPrices = [7, 6.99, 5.99, 4];

const breakfastMenuItemsHTML = breakfastMenu
  .map(
    (item, index) =>
      `<p>Item ${index + 1}: ${item} -$${breakfastPrices[index]}</p>`
  )
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item} -$${
    mainCoursePrices[index]
  }</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]} -$${
    dessertMenuPrices[i]
  }</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;
