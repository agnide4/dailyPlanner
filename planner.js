
///Variables

m = moment();
currh = parseInt(m.hour().toString());
let tArea = $(".description");
let tBlock = $(".time-block");



//FUNCTIONS START HERE

//Show date and time on top of the page
$("#currentDay").text(moment().toString());


//store skd to local storage
$(".sButton").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
});

//clear screen and delete local storage on click
$(".dButton").on("click", function(){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    if (value === null){
        return
    }
    else{
        localStorage.removeItem(time, value);
        var value = $(this).siblings(".description").val("");
        this.value = "";

    }
     
    

    
});

currtime();
let interval = setInterval(currtime, 15000);
getskd();

function currtime(){
    
    for (let i=0; i<tBlock.length; i++){
       
        if (i+9 === currh){
            tBlock[i].classList.add("present");
            
        }else if (i+9 < currh){
            tBlock[i].classList.add("past");
            
        } else {
            tBlock[i].classList.add("future");
            
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
