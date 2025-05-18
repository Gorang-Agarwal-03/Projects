let tablelinks = document.getElementsByClassName("tab-link")
let tableContaints = document.getElementsByClassName("tab-containts")

function opentab(tablname){
    for(tablink of tablelinks){
        tablink.classList.remove("active_link")
    }
    for(tabcontaint of tableContaints){
        tabcontaint.classList.remove("active_tab")
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tablname).classList.add("active_tab");

}