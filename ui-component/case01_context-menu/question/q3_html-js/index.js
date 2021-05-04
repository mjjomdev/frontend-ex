// Import stylesheets
import "./style.css";

// Write Javascript code here!
const details = document.querySelectorAll('details');
document.body.addEventListener('click', function (e) {
  if (e.target.nodeName !== "SUMMARY" && e.target.nodeName !== "P") {
    details.forEach(function (detail) {
      detail.removeAttribute('open');
    })
  }
  details.forEach(function (detail) {
    if (detail !== e.target.parentElement) {
      detail.removeAttribute('open');
    }
  })
})