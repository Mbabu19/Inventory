function is_empty(string) {
    if (string.length == 0) {
        return true;
    }
    return false;
}

function getIndex(tbody) {
    let index = tbody.children.length || 0;
    return index;
}



function clearCurrentInventory() {
    document.querySelector("#current_inventory_list").innerHTML = "";
}
function clearOutgoingOrder() {
    document.querySelector("#outgoing_inventory_list").innerHTML = "";
}

function addCurrentInventory() {
    let productName = document.querySelector("#current_order_product_name").value;
    let productBrand = document.querySelector(
        "#current_order_product_brand"
    ).value;
    let productQuantity = document.querySelector(
        "#current_order_product_quantity"
    ).value;
    let productPrice = document.querySelector(
        "#current_order_product_price"
    ).value*`${productQuantity}`;
    

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productQuantity) ||
        is_empty(productPrice)
    ) {
        alert("Please fill out all fields");
        return;
    }

    let tbody = document.querySelector("#current_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>$${productPrice}</td>`;

    tbody.innerHTML += tr;
}

function addOutgoingOrder() {
    let productName = document.querySelector(
        "#outgoing_order_product_name"
    ).value;
    let productBrand = document.querySelector(
        "#outgoing_order_product_brand"
    ).value;
    let productQuantity = document.querySelector(
        "#outgoing_order_product_quantity"
    ).value;
    let productPrice = document.querySelector(
        "#outgoing_order_product_price"
    ).value*`${productQuantity}`;

    if (
        is_empty(productName) ||
        is_empty(productBrand) ||
        is_empty(productQuantity) ||
        is_empty(productPrice)

    ) {
        alert("Please fill out all fields");
        return;
    }
if((productName === document.querySelector("#current_order_product_name").value) && 
(productBrand === document.querySelector("#current_order_product_brand").value)){

 let tbody = document.querySelector("#outgoing_inventory_list");

    let tr = `<tr>
    <th scope='row'>${getIndex(tbody) + 1}</th>
    <td>${productName}</td>
    <td>${productBrand}</td>
    <td>${productQuantity}</td>
    <td>₹${productPrice}</td>`;

    tbody.innerHTML += tr;
 }
else{
    {
        alert("please follow the  inventery materials");
        return;
    }
}
}
getInvoice=()=>{
    document.querySelector("#outgoing_inventory_list").value;
}
