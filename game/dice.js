
function rollDice() {
    let maxValue = parselnt(document.getElementById('maxvalue').value);
    let diceCount = parselnt(document.getElementById('diceCount').value);
    let modifier = parselnt(document.getElementById('modifier').value);
    let total = 0

    for (let i = 0, i < diceCount; i++) {
    let roll = Math.floor(Math.random() * maxValue) + 1;
    total += roll;
    resultText += `[${roll}]`;
    }

    total += modifier;
    resultText += `+ ${modifier} = ${total}`;

    document.getElementById('result').innerText = resultText
}