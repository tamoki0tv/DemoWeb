const searchElement = document.getElementById('fix');
const discountsElement = document.getElementById('container2');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  
  if (scrollY >= 400 && scrollY <1100) {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.add('ctn-fixed');
  } else if (scrollY >= 1100) {
    searchElement.classList.remove('ctn-fixed');
    searchElement.classList.add('ctn-absolute');
  } else {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.remove('ctn-fixed');
  }
  
  
});

// Lấy thông tin user từ tệp JSON hoặc cơ sở dữ liệu
const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

// Hiển thị tên người dùng trong phần header
const headerUser = document.getElementById('headerUser');
headerUser.textContent = user.fullName;