// 2. Create an HTML page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

let modal = document.getElementById("myModal");
let btn = document.getElementById("openBtn");
let close = document.getElementById("closeBtn");

open() {
  modal.style.display = "block";
}