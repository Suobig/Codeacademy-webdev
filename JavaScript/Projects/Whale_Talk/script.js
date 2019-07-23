const input = 'Hello. Is there anybody in here?';
const upperInput = input.toUpperCase();
const vowels = ['A', 'E', 'I', 'O', 'U'];
const doubleVowels = ['E', 'U'];
const result = [];

for (let i = 0; i < upperInput.length; i++) {
  const char = upperInput[i];
  if(vowels.includes(char)) {
    result.push(char);

    if(doubleVowels.includes(char)) {
      result.push(char);
    }
  }
}

console.log(result.join(""));