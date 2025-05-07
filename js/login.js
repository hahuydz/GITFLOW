function login() {
    let username = document.querySelectorAll('input')[0].value.trim();
    let password = document.querySelectorAll('input')[1].value.trim();
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    if (!storedUsername || !storedPassword) {
        alert('Chưa có tài khoản. Vui lòng đăng ký trước!');
        return;
    }

    if (username === storedUsername && password === storedPassword) {
        alert('Đăng nhập thành công!');
        window.location.href = '../pages/t1.html';
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}