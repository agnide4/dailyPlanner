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
//function to check if time us current/ past or future
function currtime(){
    console.log("currtime here");
    console.log("tBlock length: " + tBlock.length)
    for (let i=0; i<tBlock.length; i++){
        console.log(i);
        console.log(tBlock.length);
        if (i+9 === currh){
            tBlock[i].addClassList("present");
        }else if (i+9 <currh){
            tBlock[i].addClassList("future");

        }else {
            tBlock[i].addClassList("past");
        }
            
        }
        
       
}   



