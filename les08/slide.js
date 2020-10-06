
const im = [
    'image/1.jpg',
     'image/2.jpg', 
     'image/3.jpg', 
     'image/4.jpg',
      'image/5.jpg',
      'image/6.jpg']
// for(let i = 0; i < im.length; i++) {
//     let image = document.createElement('img')
//     image.setAttribute('class', 'images')
//     document.body.appendChild(image);
//     image.src = im[i];
// }
    
const dom = {
	btnNext : document.querySelector('.btn-next'),
	btnPrev	: document.querySelector('.btn-prev'),
	imgContainer : document.querySelector('.images'),
	cur : 0,
	imgWidth : 1280 
};

dom.imgContainer.innerHTML = im.map(url=>`<img src="${url}" alt="slider image">`).join('');

dom.btnNext.addEventListener('click',()=>changeImage());
dom.btnPrev.addEventListener('click',()=>changeImage('prev'));

function changeImage(dir = 'next'){
	if(dir == 'next'){
		dom.cur++;
		if(dom.cur >= im.length){
			dom.cur = 0;
		}
	}else{
		dom.cur--;
		if(dom.cur < 0){
			dom.cur = im.length - 1;
		}
	}	
	
	dom.imgContainer.style.left = -1 * dom.imgWidth * dom.cur + 'px'; 
	dom.btnNext.innerText = `${dom.cur + 1}: Next`;
	dom.btnPrev.innerText = `${dom.cur + 1}: Prev`;
}
