import React, { Component, useEffect, useState } from 'react';
import './XP.css';
import './AffirmationWindow.css';

const affirmations = [
    "I am worthy.","I am successful.","I am wealthy.","I am happy.","I am blessed.","I am a blessing.","I am beautiful, inside and out.","I am strong.","I am patient.","I am resilient.","I am rich.","I am loved.","I am grateful.","I am compassionate.","I am making a difference in this world.","I am a force to be reckoned with.","I am capable.","I am aware of my strengths.","I am peaceful.","I am breathing in relaxation.","I am deeply motivated to work towards my goals.","I am achieving more and more success.","I am taking time for self-care.","I am grateful that I understand what matters to me.","I am reliable.","I am loyal.","I am immensely creative.","I am a go-getter.","I am always the first to appreciate other people.","I am kind and caring.","I am succeeding in life.","I am full of vitality.","I am worthy enough to follow my dreams and manifest my desires.","I am prepared for my wildest dreams to come true.","I am the architect of my fate.","I am harder than all the challenges and hurdles lying in my way.","I am blessed to have everything in my life to make it successful.","I am capable of attracting daily abundance.","I am attuned to the abundance of success.","I am my best source of motivation.","I am capable of achieving greatness.","I am open to receiving unexpected opportunities.","I am grateful for the abundance that I have and the abundance that's on its way.","I am a strong individual who attracts success and happiness.","I am worthy of all the good life has to offer, and I deserve to be successful.","I am always open-minded and eager to explore new avenues to success.","I am a powerful creator. I create the life I want and enjoy it.","I am surrounded by positive, supportive people who believe in me.","I am living my life in a state of complete abundance.","I am worthy of my dream job and am creating the career of my dreams.","I am committed to achieving success in every area of my life.","I am feeling healthy and strong today.","I am a healthy and happy person.","I am grateful that my life is so happy and successful.","I am excited to wake up today and experience this beautiful life that I am creating with my thoughts and visions.","I am the creator of my best reality.","I am filled with gratitude and kindness for another wonderful day on this earth.","I am full of positive loving energy.","I am living in a state of gratitude.","I am grateful now, and that is keeping the door open for more blessings.","I am always finding something to appreciate around me.","I am grateful for this moment.","I am grateful for the abundance in my life.","I am worthy of being loved, being happy, and doing what brings me joy.","I am joyfully embracing each new day with gratitude.","I am experiencing gratitude for everything I have in my life.","I am giving thanks for each exquisite moment.","I am appreciating every blessing, no matter how small.","I am grateful for my sense of gratitude.","I am living my life with awareness and gratitude.","I am finding gratitude and joy every day.","I am capable of unconditional love.","I am willing to be at peace with myself and everyone.","I am healthy, happy, and radiant.","I am kind to myself and others.","I am surrounded by healing energy.","I am happy to be alive.","I am grateful for my body.","I am worthy of good health.","I am a willing participant in my own wellness plan.","I am open to new ways of improving my health.","​​I am a friend to my body.","I am always happy, hale, and hearty.","I am vigorous, energetic, and full of vitality.","I am treating my body as a temple.","I am my greatest well-wisher.","I am at peace with my body, heart, mind, and soul.","I am releasing all that is not in alignment with me.","I am worthy of beautiful endings and exciting beginnings.","I am at peace. I choose to see others with forgiving eyes, especially those who have hurt me. I understand the bigger reason and accept all things as they are.","I am focusing on the joy of living my life and helping others where and when I can.","I am grateful to others for the kindness they show me. I am filled with praise and gratitude.","I am in the process of becoming the best version of myself.","I am forever grateful for all the technologies that allow me to keep in touch with my loved ones.","I am grateful for another day to make a positive contribution.","I am learning valuable lessons from myself every day.","I am a beautiful, unique soul and I acknowledge that my existence and contribution to this planet are needed.","I am more than enough.","I am in complete control of my thoughts.","I am solely responsible for making intelligent decisions to drive success in my personal life.","I am a unique and special child of this universe.","I am always in the right place at the right time.","I am fully capable of success.","I am worthy of love and appreciation.","I can forgive myself for past mistakes.","I am at peace with my past.","I am surrounded by so much love.","I am responsible for the energy I put out into the world.","I am capable of attracting abundance daily.","I am grateful for what I do have in my life.","I am confident in myself and my ability to manifest a better life.","I am determined to attract happiness into my life.","I am stronger than I appear.","I am a humble individual.","I can let go of negative patterns.","I can be present in life.","I am committed to putting positive energy into the world.","I am blessed to have a family that loves me.","I am determined to be my healthiest self in mind, body, and spirit.","I am grateful to be alive.","I am ready to explore all my passions.","I am aligned to my higher purpose.","I am vibrant in both spirit and mind.","I am attuned to the flow of the universe.","I can provide my body with all it needs to be healthy.","I am fully responsible for my own happiness.","I am content with the relationships I have in my life.","I can understand opposing perspectives.","I am grateful for each opportunity that comes my way.","I am a leader and will use my influence to inspire positivity.","I am attracting money and wealth into my life.","I am constantly expanding my belief in what is possible.","I am capable of achieving my goals with determination.","I am ready for all that is to come.","I am daring to be different and unapologetically myself.","I am self-assured.","I am proud of my life choices.","I am proud of the person I am becoming.","I am striving to be a better person every day.","I am a good role model to younger generations.","I am going to put some good into the world today.","I am open to letting love enter my life.","I am worthy of receiving love.","I am practicing self-love each day.","I can step back from difficult situations.","I am ever-evolving and constantly learning.","I can find comfort in my own skin.","I am free to grow at my own pace.","I am perfect, just the way I am.","I am in control of my actions.","I am giving myself the love I deserve to have.","I am committed to taking my needs seriously.","I am listening to my gut.","I am letting my body heal.","I can forgive myself and others.","I can release all negative energy that hurts me.","I am going to treat everyone the way I want to be treated.","I can trust the journey ahead.","I am taking each day as it comes.","I am grateful for my immune system's ability to heal.","I am grateful for my body.","I am observing my emotions without attaching myself to them.","I am sending love and light to all beings on the earth, even those that have done me wrong.","I am grateful for the air in my lungs.","I can see the opportunities that come my way.","I am attracting the perfect career.","I am influential in my field of work or study.","I am prepared for all that is to come.","I am aware that my success has no limits.","I am open to all new experiences.","I am putting my health first.","I am complete on my own.","I can say no.","I am accountable for my own actions.","I can see that everything happens for a reason.","I am trusting of my abilities.","I am striving to be the best version of myself.","I am at peace with my imperfections.","I can change what I can't accept and accept what I can't change.","I can stand for what I believe in.","I am a reflection of my highest self.","I am beautiful both inside and out.","I am not going to compare myself to others.","I am choosing to not let anger control me.","I am doing my best.","I can see the glass half full.","I am the pilot of my own life.","I can be introspective.","I am tending to my needs.","I am a positive influence.","I am not defined by my worst decisions."
];

let affirmation = '';

function getAffirmation() {
    let temp = affirmations[Math.floor(Math.random() * affirmations.length)];
    while (temp === affirmation) {
        temp = affirmations[Math.floor(Math.random() * affirmations.length)];
    }
    return temp;
}

affirmation = getAffirmation();

function characterTyped() {
    const text = document.getElementById('text21').value;
    if (text.toLowerCase() === affirmation.toLowerCase()) {
        affirmation = getAffirmation();
        document.getElementById('text21').value = "";
    }
}

export default function AffirmationWindow() {
    
    const [input, setInput] = useState('');
    return(
        
        <div className='Message-box'>
            <div style={{ width: 600 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Your Affirmation</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="Window-body">
                    <p key={affirmation} id="affirmationLabel" style={{ textAlign: "center"}}>{affirmation}</p>
                    <div className="field-row" style={{ justifyContent: "center"}}>
                        <input id="text21" type="text" value={input} onInput={characterTyped} onChange={e => setInput(e.target.value)} />
                    </div>
                    <div className="field-row" style={{ justifyContent: "center"}}>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
