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
       
        if (i+9 === currh){
            tBlock[i].classList.add("present");
            //console.log(tBlock[i])
        }else if (i+9 < currh){
            tBlock[i].classList.add("past");
            //element.classList.add("past");
            //console.log(tBlock[i])
        } else {
            tBlock[i].classList.add("future");
            //element.classList.add("future");
            //console.log(tBlock[i])
        }       
    }
}

function getskd(){
    for (let i=0; i<tBlock.length; i++){
        //set p to base 9 since hour starts @9am
        let p = i+9;
        //use tilde to make sure string is being read as an ID//remember quotes will pass strings not variables
        $(`#${p} .description`).val(localStorage.getItem(p));
        
        

    }
}
