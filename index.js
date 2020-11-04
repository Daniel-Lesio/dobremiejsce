import { scrolling } from './scripts/scrolling'
import { jumps } from './scripts/jumps'
import { mobilemenu } from './scripts/mobilemenu'
import { swipers } from './scripts/swipers'
jumps()
scrolling()
mobilemenu()
swipers()
import 'bootstrap-4-grid'

const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav")
menuFixedIcon.addEventListener("click",()=>{
  menuFixedNav.classList.toggle("show-menu-fixed-nav")
})