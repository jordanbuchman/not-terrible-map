
var tl = new TimelineLite({onUpdate:updateSlider}),
    circle = document.getElementById("two");
tl.to(circle, 1, {morphSVG:"#three"}, "+=1")
.to(circle, 1, {morphSVG:"#four"}, "+=1")
.to(circle, 1, {morphSVG:"#five"}, "+=1")
.to(circle, 1, {morphSVG:"#six"}, "+=1")
.to(circle, 1, {morphSVG:"#seven"}, "+=1")
.to(circle, 1, {morphSVG:"#eight"}, "+=1")
.to(circle, 1, {morphSVG:"#nine"}, "+=1")








/* controls */

$("#slider").slider({
  range: false,
  min: 0,
  max: 1,
  step:.001,
  slide: function ( event, ui ) {
    tl.progress( ui.value ).pause();
  },
  stop: function () {
    tl.play();
  }
});	

function updateSlider() {
  $("#slider").slider("value", tl.progress());
} 
