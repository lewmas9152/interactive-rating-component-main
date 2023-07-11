let submitBtn = document.getElementsByClassName("submit");
let main_el= document.getElementsByClassName("main");
let thankYou_el = document.getElementsByClassName("thankYou");
let rate_el = document.getElementsByClassName("rate_btn");
let select_el = document.getElementById("select");
let clickedButton;

function setClickedValue(num){
    select_el.innerHTML = `You selected ${num} out of 5`;
}

for(let i = 0; i < rate_el.length; i++){
    rate_el[i].addEventListener("click", function(){
        for(let j = 0; j < rate_el.length; j++){
            rate_el[j].style.backgroundColor = "#ffffffb3";
        }
       clickedButton = this; 
       clickedButton.style.backgroundColor = "#fb7413";
       nextButton = rate_el[i-1];
       try{
        var prevButton = rate_el[i+1];
        prevButton.style.backgroundColor = "#7c8798";
       }
         catch(err){ }
        try{
            nextButton.style.backgroundColor = "#7c8798";
        }
        catch(err){}
        
        
       
    })
  
}

submitBtn[0].addEventListener("click", function(){

    main_el[0].style.display = "none";
    thankYou_el[0].style.display = "unset";
    
    
});