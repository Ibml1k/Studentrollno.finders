function generateGreeting() {
    var studentName = document.getElementById("studentName").value;
    var schoolName = document.getElementById("schoolName").value;
    if (studentName && schoolName) {
        document.getElementById("inputContainer").style.display = "none";
        document.getElementById("greetingContainer").style.display = "block";
        document.getElementById("greeting").innerText = "Hey, " + studentName + "!";
        var audio = document.getElementById("backgroundAudio");
        audio.play();
        audio.loop = true; // Loop the audio
    } else {
        alert("Please enter both student and school names.");
    }
}
