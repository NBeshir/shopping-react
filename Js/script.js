$(window).on("load", function () {
  $(".loader").fadeOut(500);
});
// if ((document.readyState = "loading")) {
//   $(".loader").fadeOut(500);
//   document.addEventListener("DOMContebtLoaded", ready);
// } else {
//   ready();
// }
function googleTranslateElementInit(){
  new google.translate.TranslateElement({pageLanguage: 'en',layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
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
  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

  function purchaseClicked() {
    alert("Thank you for your purchase");

    var cartItems = document.getElementsByClassName("cart-items")[0];
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
  }

  function removeCartItem(event) {
    var buttonClicked = event.target;
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
    console.log(title, price, imageSrc);

    addItemToCart(title, price, imageSrc);
    updateCartTotal();
  }

  

  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div"); //create an empty div by cart-items
    cartRow.classList.add(".cart-row"); // added cart-row class to the new div
    var cartItems = document.getElementsByClassName(".cart-items")[0];
    var cartItemNames = document.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already in your cart");
        return;
      }
    }
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartRowContents = `
              <div class="col-sm-6 cart-item cart-column">
                   
                        <img
                        class="cart-item-image"
                        src=${imageSrc}
                        width="100"
                        height="100"
                        />
                        
                   
                    <span class="cart-item-title">${title}</span>
                </div>
                  <span class="cart-price cart-column">${price}</span>
                
                <div class="col-sm-6 cart-quantity cart-column">
                 
                    
                        <input class="cart-quantity-input" type="number" value="1" />
                        <button class="btn btn-danger" type="button">REMOVE</button>
                   
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
      console.log(total);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "$" + total;
     
  }
  

