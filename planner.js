m = moment();
console.log(m.startOf("hour").toString());

currh = parseInt(m.hour().toString());
console.log(currh);
//variables needed for functions
//let sButton = $(".sButton");
let tArea = $(".description");
let tBlock = $(".time-block");
console.log(tBlock.length);

//console.log(tArea.length);





//functions start here
$(".sButton").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
});

currtime();
let interval = setInterval(currtime, 15000);
getskd();

function currtime(){
    console.log("currtime here");
    console.log("tblock length" + tBlock.length)
    for (let i=0; i<tBlock.length; i++){
        var element = document.getElementById(i+9)
        if (i+9 === currh){
            element.classList.add("present");
        }else if (i+9 < currh){
            element.classList.add("past");
        } else {
            element.classList.add("future");
        }       
    }
}

function getskd(){
    for (let i=0; i<tBlock.length; i++){
        $("#i+9 .description").val(localStorage.getItem("i+9"));
        

    }
}
