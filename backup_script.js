

//getelementid into a variable
var contentEl = document.querySelector("#content");
var currentquestion = 0;

//start function
function display_start() {
    var h1El = document.createElement("h1");
    h1El.textContent = "Coding Quiz Challenge";
    contentEl.append(h1El);

    var pEl = document.createElement("p")
    pEl.textContent = "description goes herelaskjdfldskjflkdjslfkjsdlfkjsdf";
    contentEl.append(pEl);

    var buttonEl = document.createElement("button");
    buttonEl.textContent = "Start Quiz";
    contentEl.append(buttonEl);

    buttonEl.addEventListener("click", function() {
        contentEl.removeChild(h1El);
        contentEl.removeChild(pEl);
        contentEl.removeChild(buttonEl);
        display_question();
    });
}

//display question function
function display_question() {
    //create h1 element for question
    var h1El = document.createElement("h1");
    //give h1 element title from array
    h1El.textContent = questions[currentquestion].title;
    //append h1 element to content area
    contentEl.append(h1El);
    //create p element for area where buttons go
    var buttonareaEl = document.createElement("p");
    contentEl.append(buttonareaEl);
    
    for(var i = 0; i < questions[currentquestion].choices.length; i++) {
        //create button
        var buttonEl = document.createElement("button");
        //give button data from choices in array
        buttonEl.textContent = i+1 + "." + questions[currentquestion].choices[i];
        //append button to button area
        buttonareaEl.append(buttonEl);

        //add event listener for each button in loop
        buttonEl.addEventListener("click", function(event) {
            console.log(event);
            
        });

    }

}




//Start calling functions to start quiz
display_start();