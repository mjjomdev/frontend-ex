// Import stylesheets
import "./style.css";
import $ from "jquery";

// Write JQuery code here!
const $wrapper = $('.wrapper');
const $items = $wrapper.find('.item');
const $body = $('body');

// method 1

// $wrapper.on('click', '.item', function(e){
//   e.stopPropagation();
//   $(this).toggleClass('open').siblings().removeClass('open');
// })

// $body.on('click', function(e){
//   $items.removeClass('open');
// })


// method 2
$body.on('click', function(e){
  const item = $(e.target);
  if (item.is('.item')){
    item.toggleClass('open').siblings().removeClass('open');
  } else {
    $items.removeClass('open');
  }
})
