function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function mFunction() {
var x = document.getElementById("myDIV");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}

function aFunction() {
var x = document.getElementById("myDIVv");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}


// let updeat = document.querySelectorAll("img")[0];
// //how to create loop?
// if(updeat.hasAttribute("alt")){
//     if(updeat.getAttribute("alt")=== ""){
//     updeat.removeAttribute("alt")
// }else{
//     updeat.setAttribute("alt","is not imge")

// }

// }else{
//     console.log("not found")
// }
