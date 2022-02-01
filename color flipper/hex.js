const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



document.querySelector("#btn").addEventListener("click", function(){
    colorString = "#";
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*16);
        colorString = colorString + hex[random];
    }
    document.body.style.background = colorString;
    
    document.querySelector(".color").textContent = colorString;
})
