var slider_img = document.querySelector('.slider-img');
var images = ['b2.jpg', 'b3.jpg', 'b4.jpg', 'b5.jpg'];
var i = 0;
function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}
function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}
function setImg(){
	return slider_img.setAttribute('src', "media/"+images[i]);
	
}