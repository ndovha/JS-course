

// for(let i=1; i< 7;i++)
// {
// image.innerHTML('<li><a href="image' + i + '.jpeg"><img src="image' + i + '.jpeg" ></a></li>');
// }
// let image = document.createElement('img')
//     image.setAttribute('class', 'images')

//     document.body.appendChild(image);
//     let im = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg', 'image/6.jpg']
//    console.log(im) 
//     for(let i = 0; i < im.length; i++) {
//         image.src = im[i];
//         if(i < 7) break;
//     }

let im = ['image/1.jpg', 'image/2.jpg', 'image/3.jpg', 'image/4.jpg', 'image/5.jpg', 'image/6.jpg']
for(let i = 0; i < im.length; i++) {
    let image = document.createElement('img')
    image.setAttribute('class', 'images')
    document.body.appendChild(image);
    image.src = im[i];
}
    


// function loadImages(i){
//       i = i || 1;
//  image.onload = function(){
//          loadImages(++i) 
//          if(i == 6) {
//             return;
//         } 
//     }
//     // image.setAttribute('src', 'image/'+ i +'.jpg')
    
// }

// loadImages();
