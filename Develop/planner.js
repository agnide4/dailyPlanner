m = moment();
console.log(m.startOf("hour").toString());
console.log(m.hour().toString());
currh = m.hour().toString();
console.log(currh);
//variables needed for functions
//let sButton = $(".sButton");
let tArea = $(".description");
let tBlock = $(".time-block");

//console.log(tArea.length);





//functions start here
$(".sButton").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
});

currtime();

function currtime(){
    
    for (let i=9; i<tBlock.length; i++){
        console.log(i);
        if (i === currh){
            tBlock[i].addClass("present");
        }else if (i<currh){
            tBlock[i].addClass("future");

        }else {
            tBlock[i].addClass("past");
        }
            
        }
        
       
}   



