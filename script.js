let accordion = $('.accordion');
let accordionMini = $('.accordion-mini');
let video = $('.career-video');
console.log(accordion)
console.log(video)
let i;

$('.video-button').on( 'click', function() {
 	$('.career-video').css('display', 'inline-block');
});

$('.hide-button').on('click', function(){
	console.log('function reachedddd')
	$('.career-video').css('display', 'none');
});


for(i=0; i<accordion.length; i++) {
	accordion[i].addEventListener('click', function(){
		this.classList.toggle('active');

		var panel = this.nextElementSibling;
		if(panel.style.display === 'block') {
			panel.style.display = 'none';
		}else{
			panel.style.display = 'block';
		}
	});
}

for(i=0; i<accordionMini.length; i++){
	accordionMini[i].addEventListener('click', function(){
		this.classList.toggle('active-mini');
		var panel = this.nextElementSibling;
		if(panel.style.display === 'block') {
			panel.style.display = 'none';
		}else{
			panel.style.display = 'block';
		}
	});
}

