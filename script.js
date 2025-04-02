function greet() {
    const name = document.getElementById('nameInput').value;
    const message = `Hello, ${name || 'Guest'}!`;
    document.getElementById('greetingMessage').textContent = message;
}