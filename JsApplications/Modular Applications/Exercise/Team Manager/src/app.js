import { render } from "../node_modules/lit-html/lit-html.js"
import page from "../node_modules/page/page.mjs"

import { homePage } from "./views/home.js"
import { browsePage } from "./views/browse.js"

const main = document.querySelector("main")

page("/", decorateContext, homePage)
page("/index.html", decorateContext, homePage)
page("/browse", decorateContext, browsePage)

setUserNav()
page.start()

function decorateContext(ctx, next) {
  ctx.setUserNav = setUserNav
  ctx.render = (content) => render(content, main)

  next()
}

function setUserNav() {
  const userId = sessionStorage.getItem("uesrId")
  if(userId != null){
    Array.from(document.querySelectorAll("nav > a.user")).forEach(a => a.style.display = "block")
    Array.from(document.querySelectorAll("nav > a.guest")).forEach(a => a.style.display = "none")
  }else{
    Array.from(document.querySelectorAll("nav > a.user")).forEach(a => a.style.display = "none")
    Array.from(document.querySelectorAll("nav > a.guest")).forEach(a => a.style.display = "block")
  }
}