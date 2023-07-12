/* 
BRIEF 

You can create the web app of your dreams!! Anything you can
think of, now’s your time to make it!

You should:
+ Get input from the user on a web page
+ Make changes to the HTML and/or CSS using JavaScript
+ Use an event to trigger a change to a web page

Bonus?
+ Add HTML elements to a web page using the DOM
+ Remove HTML elements from a web page using the DOM
+ Research and use other DOM events such as onmouseover
+ Use arrays, loops and/or conditional logic in JavaScript 
*/

//EVENT TRIGGER onclick="scrollPage(this)"
// Creates onclick event for Scroll page to menu section below
document.getElementById("scrollPage").onclick = function() {
  scrollPage();
}

// Scroll to menu function
function scrollPage() { // declares function 'scrollPage'
  document.getElementById("menu").scrollIntoView({block: "start", behavior: "smooth"}); // retrieves element 'id="menu"', and calls the 'scrollIntoView' method and sets its scroll behaviour and location
}

//EVENT TRIGGER onclick="flipCard(this)"
// Creates onclick event for multiple menu card's flip from front to back below
document.querySelectorAll(".flipCard").forEach(function(button) {
  button.addEventListener("click", function() {
    flipCard(this);
  });
});

// CHANGES TO CSS USING JAVASCRIPT
// Menu card flip to ingredients
function flipCard(button) { // declares the function 'flipCard' and creates the parameter 'button' 
  var card = button.parentElement.parentElement; // var 'card' refers to the nested button element (div.font diuv.back, and .card) - as the card element will next be used to apply the CSS class toggle.
  card.classList.toggle("flipped"); // The Element: classList property, is set to toggle the css class 'flipped' on the card element, toggling it from front to back.
}

// add to cart button

//picking up the add to cart buttons
let add_to_cart_btns = document.getElementsByClassName(`button add_to_cart`)
let main_cart = document.getElementsByTagName(`tbody`)[0]
let quantity_field = document.getElementsByClassName(`num`)
  
for (let i = 0; i < add_to_cart_btns.length; i++){
  add_to_cart_btns[i].addEventListener('click', addToCart)
   
}
grandTotal()

//referes to the button being clicked on add to cart
function addToCart(event){
  let btn = event.target;
  let btn_parent = btn.parentElement;
  let btn_grandparent = btn.parentElement.parentElement;
  let itemImage = btn_parent.children[0].src
  let itemName = btn_parent.children[1].innerText
  let itemPrice = btn_parent.children[2].innerText  
  
  
  let itemCart = document.createElement('tr')
  itemCart.innerHTML = `<td><input class="uk-checkbox" type="checkbox"></td>
                    <td><img class="uk-preserve-width uk-border-circle" src="${itemImage}" width="40" alt=""></td>
                    <td class="uk-table-link">
                        <h3 class = "item-name">${itemName}</h3>
                    </td>
                    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
                    <td><input type = "number" class = "num" value = '1'></td>
                    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
                    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>`
  
  
 main_cart.append(itemCart) 
 
  //adding multiple items to cart
  for (let i = 0; i < quantity_field.length; i++){
  quantity_field[i].addEventListener(`click`, updateTotal)
    
  }
  //console.log(itemName, itemImage)
}

//picking up the numbers in the text field
function updateTotal(event){
  number_of_items = event.target
  number_of_items_parent = number_of_items.parentElement.parentElement
  price_field = number_of_items_parent.getElementsByClassName("item-price")[0];
  total_field = number_of_items_parent.getElementsByClassName("total-price")[0];
 price_field_content = price_field.children[0].innerText.replace('£', '');
  total_field.children[0].innerText = "£" + number_of_items.value * price_field_content;
 // console.log(price_field_content)
  
  //inout cannot be less than 1
  if (isNaN(number_of_items.value) || number_of_items.value <=0){
    number_of_items.value = 1
  }
}

//total section looping through to add the item price - incrementing 0 as it goes through the loop

function grandTotal (){
  let total = 0
  let grand_total = document.getElementsByClassName(`grand-total`)[0]
  let total_price = document.getElementsByClassName(`total-price`)
  for (let i = 0; i < total_price.length; i++){
    total_price_content = Number(total_price[i].innerText.replace('£', ''))
     total += total_price_content
 
  }
   // grand_total.children[0].innerText = "£"+ total;   
 // console.log(total)
}
  
