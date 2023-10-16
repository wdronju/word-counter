// Selector 
const textArea = document.getElementById("wordinputBox");

const numberOfWord = document.getElementById("numberOfWord");

const numberOfCharacters = document.getElementById("numberOfCharacters");

const maxNumberOfTwitter300 = document.getElementById("maxNumberOfTwitter300");

const wordApp = ()=>{
    // console.log("typing.........");
    // setting number of charectar 
    let numberofCarecterOutput = textArea.value.split("");
    numberOfCharacters.innerHTML=numberofCarecterOutput.length;

    // setting number of word
    let numberofWordOutput = textArea.value.split(" ").length;
    numberOfWord.innerHTML=numberofWordOutput;
    if(textArea.value.length === 0){
        numberOfWord.innerHTML = 0;
    }
    
    // settings for twitter words 
       let twitterMinusValue = 50 - numberofWordOutput;
       maxNumberOfTwitter300.innerHTML = twitterMinusValue;

       if(twitterMinusValue < 0){

       let alertMessage = document.getElementById("alertMessage");

       alertMessage.innerHTML="You just Cross your limit of word limit.";

            if (alertMessage) {
                setTimeout(function() {
                alertMessage.style.display = "none";
                }, 5000); // 5000 milliseconds = 5 seconds
            }
       

       }


    // console.log(numberofWordOutput);
}

textArea.addEventListener("input", wordApp);