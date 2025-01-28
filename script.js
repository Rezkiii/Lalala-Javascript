document.addEventListener('DOMContentLoaded', function() {      
    const textContainer = document.getElementById('text-container');      
    const audioPlayer = document.getElementById('audio-player'); // Get the audio player  
    const startButton = document.getElementById('start-button'); // Get the start button  
  
    // Define message durations as constants      
    const DURATION_SHORT = 2000;      
    const DURATION_MEDIUM = 3200;      
    const DURATION_LONG = 6200;      
      
    const messages = [      
        { text: "i can't find", duration: DURATION_SHORT },      
        { text: "Your silver lining", duration: DURATION_SHORT },      
        { text: "I don't mean to judge", duration: DURATION_MEDIUM },      
        { text: "But when you read", duration: DURATION_SHORT },      
        { text: "Your speech, it's tiring", duration: DURATION_SHORT },      
        { text: "Enough is enough", duration: 3300 },      
        { text: "I'm covering", duration: 900 },      
        { text: "my ears", duration: 1000 },      
        { text: "like a kid", duration: 2100 },      
        { text: "When your words mean nothing,", duration: DURATION_SHORT },      
        { text: "I go la la la,", duration: 733 },      
        { text: "I go la la la,", duration: 733 },      
        { text: "I go la la la,", duration: 733 },      
        { text: "I'm turning up the volume,", duration: 1800 },      
        { text: "when you speak", duration: 1500 },      
        { text: "Cause if my heart", duration: 1000 },      
        { text: "can't stop it", duration: 1000 },      
        { text: "I find a way", duration: 1000 },      
        { text: "to block it", duration: 1000 },      
        { text: "I Go", duration: DURATION_LONG }      
    ];      
      
    let index = 0;      
    let isPlaying = false; // Track if the audio is playing  
    let loopCompleted = false; // Track if the loop has completed  
  
    function changeText() {      
        const currentMessage = messages[index];      
        textContainer.textContent = currentMessage.text;    
  
        // Change styles based on the current message    
        if (currentMessage.text === "Enough is enough") {      
            document.body.style.transition = "background-color 2s"; // Transition effect for white to red    
            document.body.style.backgroundColor = "red"; // Change background to red    
            textContainer.style.color = "darkred"; // Change font color to dark red  
            textContainer.style.textShadow = "0 0 10px white"; // Add glow effect  
        } else if (currentMessage.text === "I'm covering") {      
            textContainer.style.color = "white"; // Font color white    
            document.body.style.backgroundColor = "black"; // Background black    
            document.body.style.transition = "none"; // No transition    
        } else if (currentMessage.text === "my ears") {      
            textContainer.style.color = "black"; // Font color black    
            document.body.style.backgroundColor = "white"; // Background white    
            document.body.style.transition = "none"; // No transition    
        } else if (index >= 8 && index <= 17) { // From "like a kid" to "I Go"    
            if (currentMessage.text === "I go la la la,") {      
                if (index === 10) {    
                    textContainer.style.color = "black"; // Font color black    
                    document.body.style.backgroundColor = "white"; // Background white    
                    document.body.style.transition = "none"; // No transition    
                } else if (index === 11) {    
                    textContainer.style.color = "white"; // Font color white    
                    document.body.style.backgroundColor = "black"; // Background black    
                    document.body.style.transition = "none"; // No transition    
                } else if (index === 12) {    
                    textContainer.style.color = "black"; // Font color black    
                    document.body.style.backgroundColor = "white"; // Background white    
                    document.body.style.transition = "none"; // No transition    
                }    
            } else {    
                textContainer.style.color = "white"; // Font color white    
                document.body.style.backgroundColor = "black"; // Background black    
                document.body.style.transition = "none"; // No transition    
            }    
        } else {    
            textContainer.style.color = "#333"; // Reset font color    
            document.body.style.backgroundColor = "#f0f0f0"; // Reset background color    
            document.body.style.transition = "none"; // No transition    
        }    
  
        // Check if the current message is "i can't find" and if the loop has completed  
        if (currentMessage.text === "i can't find" && loopCompleted) {  
            audioPlayer.currentTime = 0; // Reset audio to start  
            audioPlayer.play(); // Play the audio  
            loopCompleted = false; // Reset the loop completion flag  
        }  
  
        // Check if we have completed the loop  
        if (index === messages.length - 1) {  
            loopCompleted = true; // Set the loop completion flag  
        }  
  
        index = (index + 1) % messages.length;    
        setTimeout(changeText, currentMessage.duration);    
    }    
  
    // Start the text and audio when the button is clicked  
    startButton.addEventListener('click', function() {  
        if (!isPlaying) {  
            audioPlayer.play(); // Play the audio  
            isPlaying = true; // Set the flag to true  
            textContainer.style.display = 'block'; // Show the text container  
            changeText(); // Start changing text  
            startButton.style.display = 'none'; // Hide the start button  
        }  
    });  
});  
