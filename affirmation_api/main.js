const aff_url = "https://www.affirmations.dev";
async function getAff() {
    const response = await fetch(aff_url);
    const data = await response.json();
    const { affirmation } = data;

    document.getElementById('affirmation').textContent = affirmation;
    
    // var msg = new SpeechSynthesisUtterance();
    // msg.text = affirmation;
    // window.speechSynthesis.speak(msg);

    function speak() {
        speechSynthesis.speak(new SpeechSynthesisUtterance(affirmation));
      }
      speak();
}

  
getAff();

// if ('speechSynthesis' in window) {
//     // Speech Synthesis supported 🎉
//    }else{
//      // Speech Synthesis Not Supported 😣
//      alert("Sorry, your browser doesn't support text to speech!");
//    }


