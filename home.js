// var item = document.querySelector(".item");
// var img = document.querySelector(".item img");


// ************** for simple solution**************
// item.addEventListener("mousemove", function (cod) {
//     console.log("say Helo");
//     img.style.left = cod.x+"px";

//     console.log("Moved");
// });

// item.addEventListener("mouseenter", function () {
//     img.style.opacity = 1;    
//     console.log("Entered");
// });
// item.addEventListener("mouseleave", function () {
//     img.style.opacity = 0;
//     console.log("Leaved");
// });
// ************** for simple solution**************


// for all 

var item = document.querySelectorAll(".item");

item.forEach(function(val) {
    // console.log(val.lastElementChild);

    val.addEventListener("mouseenter", function () {
        val.lastElementChild.style.opacity = 1;    
        // console.log("Entered");
    });
    val.addEventListener("mouseleave", function () {
        val.lastElementChild.style.opacity = 0;    
        // console.log("Leaved");
    });
    val.addEventListener("mousemove", function (cod) {
        val.lastElementChild.style.left = cod.x+"px";    
        // console.log("Entered");
    });

});