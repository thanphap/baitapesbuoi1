let jump = () => {
    let printText = "";
    let text = document.querySelector(".heading");
    let chars = [...text.innerHTML];
    console.log(chars);
    chars.map((char) => { 
        printText += `<span>${char}</span>`;
    });
    text.innerHTML = printText;
}

jump();