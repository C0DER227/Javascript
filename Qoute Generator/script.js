let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Success can come to you by courageous devotion to the task lying in front of you."`,
    person: ` CV Raman`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
}, {
    quote: `"My success will not depend on what A or B thinks of me. My success will be what I make of my work"`,
    person: `Homi J Bhabha`
}, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`
}, {
    quote: `"An equation means nothing to me unless it expresses a thought of God."`,
    person: ` Srinivasa Ramanujan`
}, {
    quote: `"He who can listen to the music in the midst of noise can achieve great things."`,
    person: `Vikram Sarabhai`
}, {
    quote: `"If there has been any success in my life, that was built on the unshakable foundation of failure…"`,
    person: `JC Bose`
}, {
    quote: `"Imagination is more important than knowledge. Knowledge is limited. Imagination circles the world."`,
    person: `Albert Einstien`
}, {
    quote: `"To any action there is always an opposite and equal reaction."`,
    person: `Sir Isaac Newton`
}, {
    quote: `"Intelligence is the ability to adapt to change."`,
    person: `stephen hawking`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})