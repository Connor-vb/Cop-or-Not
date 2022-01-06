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
     src: "/assets/images/pexels-charles-parker-5859654.jpg",  
     //size for the image to be display on webpage  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "/assets/images/pexels-đàng-thiện-thanh-tài-6331533.jpg",  
     width: "200",  
     height: "200"  
   },   
   {  
     src: "https://wi.wallpapertip.com/wsimgs/156-1564140_free-puppy-wallpapers-for-computer-wallpaper-cave-cute.jpg",  
     width: "200",  
     height: "200"  
   },  
   {  
     src: "https://wi.wallpapertip.com/wsimgs/156-1566650_cute-puppies-desktop-wallpaper-cute-puppies.jpg",  
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