let tinhdiem = (...listId) => {
    let formELE = document.querySelectorAll(".basic-slide");
    let sum = 0;
    for (let i = 0; i < formELE.length; i++) {
        let { id, value } = formELE[i];
        listId.map((e) => {
            if (id == e) {
                sum += Number(value);
            }
        }) 
    }
    return sum / listId.length
}

let firtinhkhoi1 = () => {
    document.querySelector("#tbKhoi1").innerHTML = tinhdiem("inpToan","inpLy","inpHoa");
}

let firtinhkhoi2 = () => {
    document.querySelector("#tbKhoi2").innerHTML = tinhdiem("inpVan","inpSu","inpDia","inpEnglish");
}

document.querySelector("#btnKhoi1").onclick = firtinhkhoi1;
document.querySelector("#btnKhoi2").onclick = firtinhkhoi2;


