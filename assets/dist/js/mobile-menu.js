let CloseMenu = () => {
};

const trigger = document.getElementById("custom-menu-trigger");
const backdrop = document.getElementById("custom-menu-backdrop");
if (trigger)
    trigger.onclick = () => {
        backdrop.classList.add("menu-open")
    }
backdrop.onclick = (e) => {
    e.stopPropagation();
    CloseMenu = () => backdrop.classList.remove("menu-open");
    if (e.srcElement.classList.contains("custom-mobile-menu")
        || e.srcElement.nodeName.toLowerCase() === "a"
    ) {
        backdrop.classList.remove("menu-open")
    } else {
        console.log({element: e.srcElement})
    }
}

