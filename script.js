let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

let qrImage = document.querySelector("img");

let inputText = document.querySelector("#qrinfo");

let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    qrImage.src = `${url}${inputText.value}`;
    qrImage.style.display = "block";
})