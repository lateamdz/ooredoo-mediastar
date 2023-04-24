let openSupportMenu=false;
function openSupport(){
    console.log("supprt clicked")
    if(openSupportMenu){
        document.getElementById("support-menu").classList.remove("expanded")
        document.getElementById("support-btn").classList.remove("expanded")
    }else{
        document.getElementById("support-menu").classList.add("expanded")
        document.getElementById("support-btn").classList.add("expanded")
    }
    openSupportMenu=!openSupportMenu;
}
            









