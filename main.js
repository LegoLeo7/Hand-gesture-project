prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
png_qualtiy:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()

{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image"  src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/T08wH6NAc/model.json/model.json',modeLoaded);

function modelLoaded() {
    console.log('Model Loaded!');  
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_1 = "and second prediction is " + prediction_2;
    var utterthis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}



function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else { 
        console.log(results) ;
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
            if(results[0].label == "Ok symbol")
            {
                document.getElementById("update_emoji").innerHTML = "&#128076";
            }
            if(results[0].label == "Good symbol")
            {
                document.getElementById("update_emoji").innerHTML = "&#128077";
            }
            if(results[0].label == "bad symbol")
            {
                document.getElementById("update_emoji").innerHTML = "&#128076";
            }
            if(results[1].label == "ok symbol")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128076";
            }
            if(results[1].label == "Good symbol")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128077";
            }
            if(results[1].label == "bad symbol")
            {
                document.getElementById("update_emoji2").innerHTML = "&#128076";
            }
          

    
        }
    }
