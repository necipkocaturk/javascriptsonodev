const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-15-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Menemen",
    category: "Turkey",
    price: 12.99,
    img: "https://im.haberturk.com/2020/02/07/ver1582289060/2576012_1200x627.jpg",
    desc: `Menemen is a popular traditional Turkish dish which includes eggs, tomato, green peppers, and spices such as ground black and red pepper cooked in olive oil.`,
  },
  {
    id: 11,
    title: "Baklava",
    category: "Turkey",
    price: 25.0,
    img: "http://www.livashop.com/Uploads/UrunResimleri/buyuk/fistikli-baklava-87a8.jpg",
    desc: `Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey.`,
  },
];

let filterButtonDOM = document.querySelector("#filterButton");
let menuItemDOM = document.querySelector("#menuItem");
//#region button olusturduk....
//#region kategori butonları
// burada category leri set içine atıp butonları oluşturdum id de atadım
const countryUniques = new Set();
countryUniques.add("All");

menu.forEach((element) => {
  countryUniques.add(element.category);
  //foodContainer(element)
});
countryUniques.forEach((item) => {
  createFilterButton(item);
});
//#endregion
//buttons yukarda tanımlayınca bulamıyor çünkü buttonları aşağıda oluşturuyouz ondan null oluyor
// let buttons = document.querySelectorAll("button")
// buttons.forEach((item) => {
//   item.addEventListener("click", foodCategory);
//});

document.querySelectorAll(".category").forEach((item) => {
  item.addEventListener("click", foodCategory);
});

function createFilterButton(item) {
  let categoryButton = document.createElement("button");
  categoryButton.setAttribute(
    "class",
    "category btn btn-lg btn-outline-dark m-2"
  );
  categoryButton.setAttribute("id", item);
  categoryButton.textContent = item;
  filterButtonDOM.appendChild(categoryButton);
}

//#endregion
function foodContainer(element) {
  let container = document.createElement("div");
  let foodImage = document.createElement("img");
  let menuInfoDiv = document.createElement("div");
  let menuTitleDiv = document.createElement("div");
  let menuTextDiv = document.createElement("div");
  let title = document.createElement("h4");
  let price = document.createElement("h4");
  container.setAttribute("class", " menu-items col-lg-6 col-sm-12");
  foodImage.setAttribute("src", element.img);
  foodImage.setAttribute("class", "photo");
  foodImage.setAttribute("alt", element.title);
  menuInfoDiv.setAttribute("class", "menu-info");
  menuTextDiv.setAttribute("class", "menu-text");
  menuTitleDiv.setAttribute("class", "menu-title");
  price.setAttribute("class", "price");
  title.textContent = element.title;
  price.textContent = element.price;
  menuTextDiv.textContent = element.desc;
  menuTitleDiv.append(title, price);
  menuInfoDiv.append(menuTitleDiv, menuTextDiv);
  container.append(foodImage, menuInfoDiv);

  menuItemDOM.appendChild(container);
}
function foodCategory(e) {
  menuItemDOM.innerHTML = "";

  menu.forEach((element) => {
    if (this.id == element.category) {
      foodContainer(element);
    }
    if (this.id == "All") {
      foodContainer(element);
    }
  });
}