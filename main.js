let stars1 = document.getElementById("stars1");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountain3");
let mountains4 = document.getElementById("mountain4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let albokali = document.querySelector(".albokali");
console.log(stars1, moon2, mountains3, mountains4, river5, boat6, albokali);


window.onscroll = function(){
    let value = window.scrollY;
    stars1.style.left = value + "px";
    moon2.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 +"px";
    mountains4.style.top = value * 1.5 +"px";
    river5.style.top = value +"px";
    boat6.style.left = value * 3 +"px";
    albokali.style.fontSize = value + "px";
    if (value >= 67){
        albokali.style.fontSize = "67px";
        albokali.style.position = "fixed";

        if (value >= 460){
            albokali.style.display = "none";
         }else{
            albokali.style.display = "block";
            }
        if (value >= 127){
            document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)";
        }else{
            document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";


        }
     }
    };


