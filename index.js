let submitBtn = document.getElementsByClassName("submit");
let main_el= document.getElementsByClassName("main");
let thankYou_el = document.getElementsByClassName("thankYou");
let rate_el = document.getElementsByClassName("rate_btn");
let select_el = document.getElementsByClassName("select");
let clickedButton;
for(let i = 0; i < rate_el.length; i++){
    rate_el[i].addEventListener("click", function(){
       clickedButton = this; 
       clickedButton.style.backgroundColor = "#fb7413";
       nextButton = clickedButton.previousElementSibling;
        nextButton.style.backgroundColor = "#7c8798";
        select_el = clickedButton.innerText;
       
    })
  
}



submitBtn[0].addEventListener("click", function(){

    main_el[0].style.display = "none";
    thankYou_el[0].style.display = "unset";
    
    
});