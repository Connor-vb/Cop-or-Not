console.log("hey guys I work")
function displayRandomImages()   
{  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
     //address URL of the image  
     src: "https://publish.one37pm.net/wp-content/uploads/2021/02/punks.png?fit=600%2C600",  
     //size for the image to be display on webpage  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "https://publish.one37pm.net/wp-content/uploads/2021/02/EwKNWFRXIAA94V4.png?fit=600%2C600",  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "https://lh3.googleusercontent.com/1odSUagF0-kjM8wJbY-oyNjyZWVvQWxmpRmFms92PWb_upzODfMOagpuv5rdl_5livW8svL5d3wgA0ciCCic8gpJu0xQCkDfMK6S=w600",  
     width: "200",  
     height: "200"  
   },  
   {  
     src: "https://www.larvalabs.com/cryptopunks/cryptopunk2460.png",  
     width: "200",  
     height: "200"  
    } ];  
      
    //find the length of the array of images  
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
     
  // create random image number  
  function getRandomNum(min, max)   
  {  
      // generate and return a random number for the image to be displayed   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  // 0 is first image and (preBuffer.length - 1) is last image of the array  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
  // remove the previous images  
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  // display the new random image    
  document.getElementById("btn1").appendChild(newImage);  
  

}  
displayRandomImages();

console.log("hey guys I work")


 function displayRandomImagesTwo()   
{  
   //array of images with image location, height, and width  
   var imageArray = [  
   {   
     //address URL of the image  
     src: "https://www.reuters.com/resizer/m2Eze1n30GaqsQDKILr2Ukc9304=/631x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg",  
     //size for the image to be display on webpage  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "https://lh3.googleusercontent.com/-2lJuLt70dQwg1OHy1TfKt3Wsc0zO6hSKHxsRlBDLIOsanPq9TF-e91oCrBivatUX-g3oFUFwf7FnhVIqTV3CB6fJcJ2mbdo1W5KuQ",  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZfngM3Hlhl1dEiDLa8g-V8Es242YzfwMIIL4BQE9FJmar_UrdFBzaGoTvscPVTavUFI&usqp=CAU",  
     width: "200",  
     height: "200"  
   },  
   {  
     src: "https://lh3.googleusercontent.com/zXcV_BJqVPf0IZZUrffjKD_cZpgFzYD8jsUYgZwGzhyhTF5hmQrOGMQQ7mEEjNUujRvtLeemeO2bpl4HL2uuoLrLMwpWmAZCgsU66A=w1400-k",  
     width: "200",  
     height: "200"  
    } ];  
      
    //find the length of the array of images  
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height;  
    }  
     
  // create random image number  
  function getRandomNum(min, max)   
  {  
      // generate and return a random number for the image to be displayed   
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  // 0 is first image and (preBuffer.length - 1) is last image of the array  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
  // remove the previous images  
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
  // display the new random image    
  document.getElementById("btn2").appendChild(newImage);  

}  
displayRandomImagesTwo();
console.log("hey guys I work")