const openMenuBtn = document.querySelector("#open-menu")
const mobileMenu  = document.querySelector("#mobile-menu")
const closeIcon =document.querySelector(".close-icon")
const mobilemenu = ()=>{
    openMenuBtn.addEventListener("click",()=>{
        mobileMenu.classList.add("showMobileMenu")
    })
    closeIcon.addEventListener("click",closeMenu)

    function closeMenu(){
        mobileMenu.classList.remove("showMobileMenu")    
    }

}

export { mobilemenu }