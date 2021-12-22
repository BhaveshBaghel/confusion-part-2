function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);}

    function preload(){
        img=loadImage('images.jpg');   
       }

       function modelLoaded(){
        console.log("model Loaded!");
    projectstatus = true;
    objectDetector.detect(img , gotResult);
    }

    function gotResult(error, results){
        if(error){
            console.log(error);
        }
        console.log(results);
        object=results;
    }