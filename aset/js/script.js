document.getElementById('loginform'.addEventListener('submit', function(event){
    event.preventDefault();

    const correctUsername = 'nafi';
    const correctPassword = 'nafiganteng';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === correctUsername && password === correctPassword){
        alert('Login Berhasil');
        window.location.href = 'index.html';
    }else{
        alert('login gagal')
    }
}))