// todo add all relative paths to this array
// todo make sure you rename before this!!!
var allImages =["assets/images/carousel/Screen Shot 2022-01-04 at 8.54.07 PM.png"];


    // could have two img folders
    
    
    // function
    function newImages() {
        // math random
        Math.floor(Math.random() * allImages.length);
        
        
        // target buttons
        
        var btn1 = document.getElementById("btn1");
        
        
        vardocument.getElementById("btn1")
        // for loop
        for (var i = 0; i < allImages.length; i++) {
            // interate through the array
            btn1.innerHTML = allImages[Math.floor(Math.random() * allImages.length)];
            
            console.log("does this work?")
        }
        
        
        
        
    // todo repeat document.getElemntById for both btn1 and btn2
    var btn2 = document.getElementById("btn2");
    }

    // on click of the carousel button, the carousel slides to the next image
$(".carousel-button").click(function () {
    // get the current image
    var currentImage = $(".carousel-image").attr("src");
    // get the index of the current image
    var currentIndex = allImages.indexOf(currentImage);
    // get the next image
    var nextImage = allImages[currentIndex + 1];
    // set the next image as the current image
    $(".carousel-image").attr("src", nextImage);
    
    // call newImages function
    newImages();
    
}
);

console.log("carousel.js loaded");