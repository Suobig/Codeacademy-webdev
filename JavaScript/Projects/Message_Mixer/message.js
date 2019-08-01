import * as Mixer from "./messageMixer.js";

function displayMessage() {
  console.log(Mixer.countCharacter("What is the color of the sky?", "t"));
  console.log(Mixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(Mixer.reverseWord("What is the color of the sky?"));
  console.log(Mixer.reverseAllWords("What is the color of the sky?"));
  console.log(
    Mixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water")
  );
  console.log(Mixer.encode("What is the color of the sky?"));
  console.log(Mixer.palindrome("Аргентина манит негра"));
  console.log(Mixer.palindrome("А роза упала на лапу Азора"));
}

displayMessage();