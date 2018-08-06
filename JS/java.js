
var myImage = document.getElementById("mainImage");
var imageArray = ["assets/abadi.jpg","abdulla.jpg","abubakr.jpg"];
var imageIndex = 1;

function changeImage(){
	
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex > 3) {imageIndex = 0;}
}

if (typeof(Storage) !== "undefined") {
   
    localStorage.setItem("username", "abdulla");
   
    document.getElementById("local").innerHTML = localStorage.getItem("username");
} else {
    document.getElementById("local").innerHTML = "Sorry, your browser does not support Web Storage...";
}