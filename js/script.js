console.log("Hello, my friend!");
console.log("How do you?");
//
document.querySelectorAll('a').forEach((elem) => {
	elem.onmouseenter =
	elem.onmouseleave = (e) => {
		const tolerance = 10
		const left = 0
		const right = elem.clientWidth
		let x = e.pageX - elem.offsetLeft
		if (x - tolerance < left) x = left
		if (x + tolerance > right) x = right
		elem.style.setProperty('--x', `${ x }px`)
	}
});

$(document).ready(function(){
 $.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 150 * i);
   });
  });
 };
 $('#example').show();
 $('#example').animate_Text();
});

function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[1];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};