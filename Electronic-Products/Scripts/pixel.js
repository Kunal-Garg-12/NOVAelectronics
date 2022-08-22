function changeInfo(new_name, new_price){
    var name = document.getElementById("mob-name");
    name.innerHTML = new_name;
    var price = document.getElementById("mob-price");
    price.innerHTML = new_price;
}

function pixel6a(){
    var pic = document.getElementById("pixel-image");
    pic.src = "Google/pixel6a.png";
    changeInfo("Google Pixel 6a", "Rs 44,000");
}

function pixel6(){
    var pic = document.getElementById("pixel-image");
    pic.src = "Google/pixel6.png";
    changeInfo("Google Pixel 6", "Rs 60,000");
}

function pixel6pro(){
    var pic = document.getElementById("pixel-image");
    pic.src = "Google/pixel6pro.png";
    changeInfo("Google Pixel 6 Pro", "Rs 68,000");
}