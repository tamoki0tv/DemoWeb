
  function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (fullName === "") {
        document.getElementById("fullNameError").style.display = "block";
    } else {
        document.getElementById("fullNameError").style.display = "none";
    }
    
    if (username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else {
        document.getElementById("usernameError").style.display = "none";
    }
    
    if (password === "") {
        document.getElementById("passwordError").style.display = "block";
    } else {
        document.getElementById("passwordError").style.display = "none";
    }
}

// Ví dụ lưu thông tin đăng kí vào tệp JSON
const user = {
  fullName: document.getElementById('fullName').value,
  username: document.getElementById('username').value,
  // ...Thêm các thông tin khác cần lưu
};

// Chuyển đổi đối tượng user thành chuỗi JSON
const userJSON = JSON.stringify(user);

// Lưu userJSON vào tệp JSON bằng cách sử dụng API của trình duyệt (localStorage, IndexedDB, ...)
localStorage.setItem('user', userJSON);