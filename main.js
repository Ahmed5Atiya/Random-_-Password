let inputPassword = document.querySelector(".input");
let copy = document.querySelector(".copy");
let btn = document.querySelector(".btn");


let Password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&()_{}[]|\\;:\<>/?~";

btn.addEventListener("click" , ()=>{
    let passCount = 12 ;
    let outPassword = '';
    for (let i = 0; i < passCount; i++) {
        outPassword += Password[Math.floor( Math.random() * Password.length  )];
    }
    inputPassword.value= outPassword ;
})

copy.addEventListener("click" , ()=>{
    inputPassword.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(`${inputPassword.value}`) // anther way to copy the text
})