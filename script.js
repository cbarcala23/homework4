console.log("test");
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

function display_question() {
    var h1El = document.createElement("h1");
    h1El.textContent = questions[currentquestion].title;
    contentEl.append(h1El);

    for(var i = 0; i < questions[currentquestion].choices.length; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = i+1 + "." + questions[currentquestion].choices[i];
        contentEl.append(buttonEl);

        buttonEl.addEventListener("click", function(event) {
            console.log(event);
            
        });

    }

}





display_start();