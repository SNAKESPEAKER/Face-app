//Webcam.set is a predefined function of Webcam.js library. It begins to show the live view of the webcam.
Webcam.set({
  width: 300,
  height: 300, 
  image_format: 'png',
  png_quality: 100 
});
camera= document.getElementById("camera"); //variable camera has the html DIV in which the live preview will be shown
Webcam.attach("#camera"); //Webcam.attach activates the user's camera, asks for the permission and begins showing 

function TakePic() {
  Webcam.snap(
    function (URI){
// we pass this URI variable to display the img. It generates a link for the picture
document.getElementById("result").innerHTML= '<img id= "Captured-img" src="'+URI+'">'//This src URI contains preview of the image which generates after taking the snapshot 

    }
  );
}

console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_6qYG--Kg/model.json", modelLoaded); //https://teachablemachine.withgoogle.com/models/FS4bR955o/
function modelLoaded() {
    console.log("Model Loaded!");
}

function IdentifyImg() {
  img= document.getElementById("Captured-img");
  classifier.classify(img, GotResult);

}

function GotResult(error, result) {
  if (error) {
    console.error(error);
  } else {
   console.log(result);
   document.getElementById("object-is").innerHTML= result[0].label;
   document.getElementById("accuracy-is").innerHTML= result[0].confidence.toFixed(3);

  }
}