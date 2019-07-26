const story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ["really", "very", "basically"];

const unnecessaryWords = ["extremely", "literally", "actually"];

console.log(story);
const storyWords = story.split(/\s+/gm);
console.log(`Inital story has ${storyWords.length} words.`);
const betterWords = storyWords.filter(
  word => unnecessaryWords.indexOf(word) === -1
);
console.log(betterWords.join(" "));
console.log(`A fixed story has ${betterWords.length} words.`);
const overusedWordsCount = Array(overusedWords.length).fill(0);
betterWords.forEach(word => {
  const id = overusedWords.indexOf(word);
  
  if (id !== -1) overusedWordsCount[id] += 1;
});
overusedWords.forEach((word, index) =>
  console.log(
    `Unnecessary word "${word}" is used ${overusedWordsCount[index]} times.`
  )
);

const sentenceCount = story.match(/[\.!\?]/gm).length;
console.log(`This story has ${sentenceCount} sentences.`);
