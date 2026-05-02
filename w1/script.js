// products list
let products = [
  {name:"Headphones", image:"https://via.placeholder.com/60", price:7999, desc:"Noise cancelling"},
  {name:"Smartwatch", image:"https://via.placeholder.com/60", price:12999, desc:"Fitness watch"},
  {name:"Mouse", image:"https://via.placeholder.com/60", price:2499, desc:"Gaming mouse"},
  {name:"Stand", image:"https://via.placeholder.com/60", price:1999, desc:"Laptop stand"}
];

// extra data
for(let i=0;i<12;i++){
  products.push(products[i%4]);
}

let page = 1;
let perPage = 10;

// show products
function show(){
  let start = (page-1)*perPage;
  let end = start + perPage;

  let text = "";

  for(let i=start; i<end && i<products.length; i++){
    text += "<tr>";
    text += "<td>"+products[i].name+"</td>";
    text += "<td><img src='"+products[i].image+"'></td>";
    text += "<td>₹"+products[i].price+"</td>";
    text += "<td>"+products[i].desc+"</td>";
    text += "</tr>";
  }

  document.getElementById("table").innerHTML = text;
}

// buttons
function createButtons(){
  let total = Math.ceil(products.length/perPage);
  let btn = "";

  for(let i=1;i<=total;i++){
    btn += "<button onclick='changePage("+i+")'>"+i+"</button>";
  }

  document.getElementById("pages").innerHTML = btn;
}

// change page
function changePage(p){
  page = p;
  show();
}

// start
show();
createButtons();