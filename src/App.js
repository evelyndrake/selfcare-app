import logo from './logo.svg';
import './App.css';
import './XP.css';
import React, { useEffect, useState } from "react";

const affirmations = [
  "Your smile is contagious. 😊",
      "You look great today. ❤",
      "You're a smart cookie (and a cute one too!).",
      "I like your style.",
      "You have the best laugh, I shapath! ❤",
      "You deserve to be appreciated so much more! ❤",
      "YOU are the most perfect YOU there is.❤",
      "You're so strong, I know you are.",
      "You're an awesome friend.",
      "All the rooms you've been in are the luckiest ones! ❤",
      "You are amazing & should be proud of yourself! 😘",
      "Is that your picture next to 'charming' in the dictionary? 😍",
      "Your kindness is a balm to all who encounter it.",
      "On a scale of 1 to 10, you're an 11.",
      "You are brave.",
      "You're even more beautiful on the inside than you are on the outside. (I don't lie!)",
      "You have the courage of your convictions.",
      "Your eyes are breathtaking.",
      "You're like sunshine on a rainy day.",
      "You bring out the best in other people. (Cause you are the best, duh!) 😍",
      "You're a great listener.",
      "How is it that you always look great? ❤",
      "Everything would be better if more people were like you!",
      "I bet you sweat glitter. 🌟",
      "That color is perfect on you!",
      "Hanging out with you is always a blast.",
      "You smell really good.",
      "You may dance like no one's watching, but everyone's watching because you're an amazing dancer!",
      "Being around you makes everything better!",
      "When you say, 'meant to do that,' I totally believe you.",
      "When you're not afraid to be yourself is when you're most incredible (& beautiful).",
      "Colors seem brighter when you're around.",
      "You're more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
      "You're wonderful.🌟",
      "You're better than a triple-scoop ice cream cone. With sprinkles.❄",
      "Your hair looks stunning.",
      "You're one of a kind!",
      "You're inspiring.",
      "You should be thanked more often. So thank you!!",
      "Our community is better because you're in it.",
      "Someone is getting through something hard right now because you've got their back. ",
      "You have the best ideas.",
      "You always know how to find that silver lining.",
      "Everyone gets knocked down sometimes, but you always get back up and keep going.",
      "You're a candle in the darkness.",
      "Being around you is like being on a happy little vacation.",
      "You're more fun than bubble wrap.",
      "Who raised you? They deserve a medal for a job well done!",
      "Your voice is magnificent! 🙈",
      "The people you love are lucky to have you in their lives. ❤",
      "You're like a breath of fresh air.",
      "You're so thoughtful.",
      "Your creative potential seems limitless.",
      "You're adorable when you blush.",
      "Actions speak louder than words, and yours tell an incredible story.",
      "Somehow you make time stop and fly at the same time. (How do you do that, seriously?)",
      "You seem to really know who you are.",
      "Any team would be lucky to have you on it.",
      "In high school I bet you were voted 'most likely to keep being awesome'.",
      "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer).",
      "There's ordinary, and then there's you.",
      "You're someone's reason to smile. (Thanks for that smile, yay!) ❤",
      "You're even better than a unicorn, because you're real.",
      "You're really something special. ❤",
      "You're a gift to those around you. ❤",
      "Thank you for existing & making everyone around you lucky! ❤",
      "You're a constant reminder that good (and cute) people exist in this world. ❤",
      "This world would be so boring without YOU! 😍",
      "If people were even half the human you are, this world would turn into a better & lovely place to be.",
      "You're more of a superhero than any Marvel/DC character out there! 🌟",
      "The very idea of YOU is enough to make anyone smile. 😊",
      "WOW!....YOU! 😍",
      "There should be a monument of you.",
      "Stay strong! Every day you're growing & evolving into a better, stronger version of who you were yesterday.",
      "You're not crazy nor are you weak, okay? ❤",
      "Some days you'll have setbacks, but just know that tomorrow is a new day with new possibilities.",
];

const getAffirmation = () => {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
};

function App() {
  let [affirmation, setAffirmation] = useState(0);
  affirmation = getAffirmation();
  return (
    <div className="App">
      <div className="Snow">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test.
        </p>n
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='App-body'>
        <div className='Message-box'>
          <div style={{ width: 300 }} className="window">
          <div className="title-bar">
            <div className="title-bar-text">Your Affirmation</div>
            <div className="title-bar-controls">
              <button aria-label="Close" />
            </div>
          </div>

          <div className="window-body">
            <p style={{ textAlign: "center" }}>{affirmation}</p>
            <div className="field-row" style={{ justifyContent: "center" }}>
            <button onClick={() => setAffirmation(getAffirmation())}>Tell me another!</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
