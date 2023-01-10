function clickCart() {
    alert("Your Cart is empty!");
}


var image1 = "images/assets/succulents-1.jpg";
var image2 = "images/assets/succulents-2.jpg";
function hoverOver() {
    document.querySelector("#succulentOne").src = image2;
}

function hoverOut() {
    document.querySelector("#succulentOne").src = image1;
}

function clickAccept() {
    var disclaimer = document.querySelector("#disclaimer");
    disclaimer.style.display = 'none';
}

