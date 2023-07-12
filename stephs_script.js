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

///////////////// Steph - add to cart button /////////////////

// create variable to link add to cart
var AddToCart = document.getElementsByClassName("button add_to_cart")

//introduce for loop and event listener
for (var i = 0; i < AddToCart.length; i++){
  var button = AddToCart[i]
  button.addEventListener('click', AddToCartClick)
}

//Add to cart event - working I checked with console log
function AddToCartClick(event) {
  var button = event.target
  var MenuItem = button.parentElement.parentElement
  var Title = MenuItem.getElementsByClassName("menu-item-title")[0].innerText
  var Price = MenuItem.getElementsByClassName("menu-item-price")[0].innerText
    AddToCart = (Title, Price)
}
//below not working
function AddToCart(Title, Price) {
  var CartRow = document.createElement("div")
  var CartItems = document.getElementsByClassName("cart-items")[0]
  var CartRowContents = `
          <div class="cart-item cart-column">
                       
                        <span class="menu-item">"${Title}"</span>
                    </div>
                    <span class="item-price cart-column">"${Price}"</span>
                    <div class="item-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="">
                 
                    </div>`
  CartRow.innerHTML = CartRowContents
  CartItems.append(CartRow)
  console.log(CartRow) //console not logging when you click add to cart
}

 
