$(window).on("load", function () {
  $(".loader").fadeOut(500);
});
// if ((document.readyState = "loading")) {
//  // $(".loader").fadeOut(500);
//   document.addEventListener("DOMContebtLoaded", ready);
// } else {
//   ready();
// }
//function ready(){
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

var removeCartItemButtons = document.getElementsByClassName("btn-danger");

for (var i = 0; i < removeCartItemButtons.length; i++) {
  removeCartItemButtons[i].addEventListener("click", removeCartItem);
}
var quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener("change", quantityChanged);
}

var addToCartButtons = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCartClicked);
}
var purchClicked = document.getElementsByClassName("btn-purchase");
for (var i = 0; i < purchClicked.length; i++) {
  purchClicked[i].addEventListener("click", purchaseClicked);
}

var stripeHandler = StripeCheckout.configure({
  key: stripePublicKey,
  locale: "auto",
  token: function (token) {
    var items = [];
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");

    //inside is information on how we want to respond when stripes sends us information
    // happens after a customer clicks on the purchase button and fills out all the checkout information

    //and stripe verifies all the information and sends us and calls this method for us
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];

      var quantityElement = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
      var quantity = quantityElement.value;
      var id = cartRow.dataset.itemId;
      items.push({
        id: id,
        quantity: quantity,
      });
    }
    fetch("/purchase", {
      method: "POST",
      headers: {
        Content_Type: "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        stripeTokenId: token.id,
        items: items,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(data.message);
        var cartItems = document.getElementsByClassName("cart-items")[0];
        while (cartItems.hasChildNodes()) {
          cartItems.removeChild(cartItems.firstChild);
        }
        undateCartTotal();
      })
      .catch(function (error) {
        console.error(error);
      });
  },
});

function purchaseClicked() {
  var priceElement = document.getElementsByClassName("cart-total-price")[0];
  var price = parseFloat(priceElement.innerText.replace("$", "")) * 100;
  stripeHandler.open({
    amount: price,
  });
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  //var trashButtons = document.getElementsByClassName('fa-trash')[0]
  //for (var i = 0; i < trashButtons.length; i++) {
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var quantityInput = event.target;
  if (isNaN(quantityInput.value) || quantityInput.value <= 0) {
    quantityInput.value = 1;
  }
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    //checking if the input value is a number and not a negative number
    input.value = 1; // we set it to one incase of invalid input values lowest number customers can purchase
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  var id = shopItem.dataset.itemId; //data-item-id will be read as camel case by Javascript

  addItemToCart(title, price, imageSrc, id);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc, id) {
  var cartRow = document.createElement("div"); //create an empty div by cart-items
  cartRow.classList.add("cart-row"); // added cart-row class to the new div
  cartRow.dataset.itemId = id;
  cartRow.classList.add("row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = document.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already in your cart");
      return;
    }
  }
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartRowContents = `
              <div class="col cart-item cart-cut-item cart-column  mx-auto  ">
                  
                   
                        <img
                        class="cart-item-image"
                        src=${imageSrc}
                        width="70"
                        height="70"
                        />
                        
                   
                    <span class="cart-item-title text-center  " >${title}</span><hr>
                </div>
                  <span class=" col cart-price cart-cut-price cart-column   text-center">${price}<hr></span>
                
                <div class="col  cart-quantity cart-column  cart-cut-quantity text-center mb-5  ">
                 
                    
                        <input class="cart-quantity-input " type="number" value="1" />
                        <button class="btn btn-danger" type="button">remove</button><hr>
                    
                                   </div>
                                   
        
                
                  
        
  `;

  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

//calculates price by quantity for all items and adds the total
function updateCartTotal() {
  var cartRows = document.getElementsByClassName("cart-row");
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    if (priceElement == null || quantityElement == null) continue; //if quantity is not selected it wont execute
    var price = parseFloat(priceElement.innerText.replace("$", "")); //remove the dollar sign
    var quantity = parseInt(quantityElement.value); //getting the quantity from input

    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

// var stripe = Stripe('pk_test_51I8aCNGJEMrXK4I2jDEDszVIf8i83hJRJa6erNp7ibKfDCwk6S0JNHAdSzdoXAfhg6wqV5A2tY5p9zvkkbGjlQoB000VkBcJq0');

// var checkoutButton = document.getElementById('btn-purchase');

// checkoutButton.addEventListener('click', function() {
//   stripe.redirectToCheckout({
//     // Make the id field from the Checkout Session creation API response
//     // available to this file, so you can provide it as argument here
//     // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
//     sessionId: '{{CHECKOUT_SESSION_ID}}'
//   }).then(function (result) {
//     // If `redirectToCheckout` fails due to a browser or network
//     // error, display the localized error message to your customer
//     // using `result.error.message`.
//   });
// });
