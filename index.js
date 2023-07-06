let submitBtn = document.getElementsByClassName("submit");
let main_el= document.getElementsByClassName("main");
let thankYou_el = document.getElementsByClassName("thankYou");
let rate_el = document.getElementsByClassName("rate_btn");
let select_el = document.getElementsByClassName("select");

rate_el[0].addEventListener("click", function(){
    main_el[0].style.display = "none";
    thankYou_el[0].style.display = "unset";
});

submitBtn[0].addEventListener("click", function(){

    main_el[0].style.display = "none";
    thankYou_el[0].style.display = "unset";
    select_el[0].innerHTML = rate_el[0].value;
});