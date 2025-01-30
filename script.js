document.getElementById('loveButton').addEventListener('click', function() {
    const messages = [
        "You are loved!",
        "Happy Valentine's Day!",
        "Sending you lots of love!",
        "You make the world a better place!",
        "Love is in the air!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('specialMessage').textContent = randomMessage;
});
