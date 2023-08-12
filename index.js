
  function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    
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
    
    if (phone === "") {
        document.getElementById("phoneError").style.display = "block";
    } else {
        document.getElementById("phoneError").style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Lấy tham chiếu đến các phần tử trong tài liệu HTML bằng cách sử dụng các lớp và ID
  const createAccountLink = document.querySelector('.create-account-link');
  
  const fullNameInput = document.getElementById('fullName');
  const usernameInput = document.getElementById('username');
  const phoneInput = document.getElementById('phone');

  // Thêm sự kiện click cho nút "Create an account"
  createAccountLink.addEventListener('click', function(event) {
    // Kiểm tra xem người dùng đã điền đầy đủ thông tin hay chưa
    if (fullNameInput.value !== '' && usernameInput.value !== '' && phoneInput.value !== '') {
      // Nếu đã điền đầy đủ, lưu thông tin người dùng vào localStorage
      const user = {
        fullName: fullNameInput.value,
        username: usernameInput.value,
        phone: phoneInput.value
      };
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      // Nếu chưa điền đầy đủ, ngăn chặn chuyển tới trang khác và hiển thị thông báo
      event.preventDefault();
      alert('Vui Lòng Nhập Đầy Đủ Thông Tin');
    }
  });
});