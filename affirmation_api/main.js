if ('speechSynthesis' in window) {
  // Speech Synthesis supported 🎉
 }else{
   // Speech Synthesis Not Supported 😣
   alert("Sorry, your browser doesn't support text to speech!");
 }

const aff_url = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev"; // https://github.com/Rob--W/cors-anywhere
async function getAff() {
    const response = await fetch(aff_url);
    const data = await response.json();
    const { affirmation } = data;

    document.getElementById('affirmation').textContent = affirmation;

    function speak() {
        speechSynthesis.speak(new SpeechSynthesisUtterance(affirmation));
      }
      speak();
}

getAff();



