function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/740YjiLB6/model.json', modelReady);
    console.log("startClassification()");
}

function modelReady() {
    classifier.classify(gotResult);
    console.log("modelReady");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
    random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_b + " ," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_b + " ," + random_number_b + ")";

        img = document.getElementById('img');

        if (results[0].label == "Mooing") {
            img.src = 'img-02.gif';
        } else if(results[0].label == "Roaring"){
            img.src = 'img-03.gif';
        } else if(results[0].label == "Meowing"){
            img.src = 'img-04.gif';
        } else if(results[0].label == "Barking"){
            img.src = 'img-05.gif';
        } else if(results[0].label == "Background Noise")
        { 
            img.src = 'img-01.gif';
        }
}