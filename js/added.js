function showusedbooks() {





    var usedbooks = document.getElementsByClassName('usedbooks');
    var newbooks = document.getElementsByClassName('newbooks')
    var usedbooksid = usedbooks.length;
    var newbooksid = newbooks.length;

    for (var i = 0; i < usedbooksid; i++) {
        usedbooks[i].style.display = 'block';
    }
    for (var i = 0; i < newbooksid; i++) {
        newbooks[i].style.display = 'none';
    }
}

function shownewbooks() {





    var usedbooks = document.getElementsByClassName('usedbooks');
    var newbooks = document.getElementsByClassName('newbooks')
    var usedbooksid = usedbooks.length;
    var newbooksid = newbooks.length;

    for (var i = 0; i < usedbooksid; i++) {
        usedbooks[i].style.display = 'none';
    }
    for (var i = 0; i < newbooksid; i++) {
        newbooks[i].style.display = 'block';
    }
}

// ================================================
// Cart Javascript Client Side 

// ===========================================
$(document).ready(function() {
    var productItem = [{
            productName: "EXP Portable Hard Drive",
            price: "800.00",
            photo: "external-hard-drive.jpg"
        },
        {
            productName: "Luxury Ultra thin Wrist Watch",
            price: "500.00",
            photo: "laptop.jpg"
        },
        {
            productName: "XP 1155 Intel Core Laptop",
            price: "1000.00",
            photo: "watch.jpg"
        }
    ];
    showProductGallery(productItem);
    showCartTable();
});

function addToCart(element) {
    var productParent = $(element).closest('div.product-item');

    var price = $(productParent).find('.newbooks span').text();


    var oldprice = $(productParent).find('.usedbooks span').text();


    var productName = $(productParent).find('.productname').text();
    var quantity = $(productParent).find('.product-quantity').val();
    var oldquantity = $(productParent).find('.oldproduct-quantity').val();

    var cartItem = {
        productName: productName,
        price: price,
        oldprice: oldprice,
        quantity: quantity,
        oldquantity: oldquantity
    };
    var cartItemJSON = JSON.stringify(cartItem);

    var cartArray = new Array();
    // If javascript shopping cart session is not empty
    if (sessionStorage.getItem('shopping-cart')) {
        cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
    }
    cartArray.push(cartItemJSON);

    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('shopping-cart', cartJSON);
    showCartTable();
}

function emptyCart() {
    if (sessionStorage.getItem('shopping-cart')) {
        // Clear JavaScript sessionStorage by index
        sessionStorage.removeItem('shopping-cart');
        showCartTable();
        document.getElementById("orderedproductdetails").value = " ";
    }
}



function removeCartItem(index) {
    if (sessionStorage.getItem('shopping-cart')) {
        var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));
        sessionStorage.removeItem(shoppingCart[index]);
        showCartTable();
    }
}

function showCartTable() {
    var cartRowHTML = "";
    var itemCount = 0;
    var grandTotal = 0;

    var price = 0;
    var oldprice = 0;
    var quantity = 0;
    var oldquantity = 0;
    var subTotal = 0;

    if (sessionStorage.getItem('shopping-cart')) {
        var shoppingCart = JSON.parse(sessionStorage.getItem('shopping-cart'));


        //Iterate javascript shopping cart array
        shoppingCart.forEach(function(item) {
            var cartItem = JSON.parse(item);
            price = parseFloat(cartItem.price);
            oldprice = parseFloat(cartItem.oldprice);
            quantity = parseInt(cartItem.quantity);
            oldquantity = parseInt(cartItem.oldquantity);
            subTotal = price * quantity + oldprice * oldquantity
            itemCount = quantity + oldquantity
            cartRowHTML += "<tr>" +
                "<td>" + cartItem.productName + "</td>" +
                "<td class='text-right'>₹" + price.toFixed(2) + "</td>" +
                "<td class='text-right'>" + quantity + "</td>" +
                "<td class='text-right'>₹" + oldprice.toFixed(2) + "</td>" +
                "<td class='text-right'>" + oldquantity + "</td>" +
                "<td class='text-right'>₹" + subTotal.toFixed(2) + "</td>" +
                "</tr>";

            grandTotal += subTotal;
            var productdetails = "";
            productdetails += " ✤" + cartItem.productName + " (" + "New= " + quantity + " ;" + "Old=" + oldquantity + ")" + " |";
            document.getElementById("orderedproductdetails").value += productdetails;

        });
        document.getElementById("price").value = grandTotal;


        // document.getElementById("orderedproductname").value = productName;

    }

    $('#cartTableBody').html(cartRowHTML);
    $('#itemCount').text(itemCount);
    $('#totalAmount').text("₹" + grandTotal.toFixed(2));

}


// function showProductGallery(product) {
//  //Iterate javascript shopping cart array
//  var productHTML = "";
//  product.forEach(function(item) {
//      productHTML += '<div class="product-item">'+
//                  '<img src="product-images/' + item.photo + '">'+
//                  '<div class="productname">' + item.productName + '</div>'+
//                  '<div class="price">$<span>' + item.price + '</span></div>'+
//                  '<div class="cart-action">'+
//                      '<input type="text" class="product-quantity" name="quantity" value="1" size="2" />'+
//                      '<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />'+
//                  '</div>'+
//              '</div>';
//              "<tr>";

//  });
//  $('#product-item-container').html(productHTML);
// }
// =================================================================
//ebook Order confirmation box alert
// ================================================
// document.getElementById("ebookorderform").style.display="block";


// function openorderform(){
//     document.getElementById("ebookorderform").style.display="block";


// }
// function closeorderform(){
//     document.getElementById("ebookorderform").style.display="none";
// }


// ebook cart

// ===========================================
$(document).ready(function() {
    var productItem = [{
            productName: "EXP Portable Hard Drive",
            price: "800.00",
            photo: "external-hard-drive.jpg"
        },
        {
            productName: "Luxury Ultra thin Wrist Watch",
            price: "500.00",
            photo: "laptop.jpg"
        },
        {
            productName: "XP 1155 Intel Core Laptop",
            price: "1000.00",
            photo: "watch.jpg"
        }
    ];
    showProductGallery(productItem);
    showebookCartTable();
});

function addToebookCart(element) {
    var productParent = $(element).closest('div.product-item');
    var productName = $(productParent).find('.productname').text();
    var cartItem = {
        productName: productName,

    };
    var cartItemJSON = JSON.stringify(cartItem);

    var cartArray = new Array();
    // If javascript shopping cart session is not empty
    if (sessionStorage.getItem('ebookshopping-cart')) {
        cartArray = JSON.parse(sessionStorage.getItem('ebookshopping-cart'));
    }
    cartArray.push(cartItemJSON);

    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('ebookshopping-cart', cartJSON);
    showebookCartTable();
}

function emptyebookCart() {
    if (sessionStorage.getItem('ebookshopping-cart')) {
        // Clear JavaScript sessionStorage by index
        sessionStorage.removeItem('ebookshopping-cart');
        showebookCartTable();
        document.getElementById("ebookname").value = " ";
    }
}



function removeebookCartItem(index) {
    if (sessionStorage.getItem('ebookshopping-cart')) {
        var shoppingCart = JSON.parse(sessionStorage.getItem('ebookshopping-cart'));
        sessionStorage.removeItem(ebookshoppingCart[index]);
        showebookCartTable();
    }
}

function showebookCartTable() {
    var ebookcartRowHTML = "";


    if (sessionStorage.getItem('ebookshopping-cart')) {
        var ebookshoppingCart = JSON.parse(sessionStorage.getItem('ebookshopping-cart'));


        //Iterate javascript shopping cart array
        ebookshoppingCart.forEach(function(item) {
            var ebookcartItem = JSON.parse(item);
            ebookcartRowHTML += "<tr>" +
                "<td>" + ebookcartItem.productName + "</td>" +
                "</tr>";

            var productdetails = "";
            productdetails += ebookcartItem.productName + " |";
            document.getElementById("ebookname").value += productdetails;

        });


        // document.getElementById("orderedproductname").value = productName;

    }

    $('#ebookcartTableBody').html(ebookcartRowHTML);


}

function ebookorderconfirmed() {
    alert("Your order has been placed succesfully.You will receive the ebook within 24 hours at your email-id")

}
function assignment(){
    alert("You will get the solution to your assignments over email and whatsapp message at your given contact details. ");
}
