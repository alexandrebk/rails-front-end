import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("hello from navbar_controller!")
    console.log("windown inner heigh")
    console.log(window.innerHeight)
  }
  
  updateNavbar() {
    console.log("scrolling position")
    console.log(window.scrollY)
    if (window.scrollY >= window.innerHeight) {
      this.element.classList.add("navbar-lewagon-white")
    } else {
      this.element.classList.remove("navbar-lewagon-white")
    }
  }
}