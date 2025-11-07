// welcomeMessage();

function welcomeMessage() {
    let name = prompt("Please enter your name:");
    if (name != null) {
    document.getElementById('welcome-speech').innerText = 'Halo, ' + name + ' Selamat Datang di Mie Gacoan, Rasanya Jagoan!';
    }
}