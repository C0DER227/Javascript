const checkAnswer = () => {
    var answer = document.getElementById('answer').value;
    if (answer.toLowerCase() === 'blockchain') {
        alert('Correct! You are a human.');
    } else {
        alert('Incorrect. You may be a bot.');
    }
}