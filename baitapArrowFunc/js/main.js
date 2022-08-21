const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let printColor = () => {
    let listColor = "";
    for (let i in colorList) {
        if (i == 0) {
            listColor += `<button class="color-button ${colorList[i]} active"></button>`;
        }
        else {
            listColor += `<button class="color-button ${colorList[i]}"></button>`;
        }
    }
    document.querySelector("#colorContainer").innerHTML = listColor;
}
printColor();

let house = document.getElementById("house");
let getClass = document.getElementsByClassName("color-button");
let addClass = (ELE,index) => {
    for (let i = 0; i < getClass.length; i++) {
        getClass[i].classList.remove("active");
    }
    ELE.classList.add("active");
    house.className="house "+ colorList[index];
 
}
for (let i in getClass) {
    getClass[i].addEventListener("click", function () {
        addClass(getClass[i], i);
    })
}






