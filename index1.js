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

const menuIcon = document.querySelector('.menu-icon');
const leftMenu = document.querySelector('.left');
const rightMenu = document.querySelector('.right');

menuIcon.addEventListener('click', function () {
    leftMenu.classList.toggle('active'); // Hiển thị hoặc ẩn menu trái
    rightMenu.classList.toggle('active'); // Hiển thị hoặc ẩn menu phải
});

// Lấy thông tin user từ tệp JSON hoặc cơ sở dữ liệu
const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);

if (user) {
  const userFullName = user.fullName;
  const userUsername = user.username;
  const userPhone = user.phone;

  const userInfoDiv = document.getElementById('userInfo');
  userInfoDiv.innerHTML = `
    <p><strong>Full Name:</strong> ${userFullName}</p>
    <p><strong>Username:</strong> ${userUsername}</p>
    <p><strong>Phone:</strong> ${userPhone}</p>
  `;
}


function loadItem() {
  fetch("item-uudai.json").then(res => res.json()).then(data => {
    let h = "";
    for (let p of data)
      h+=`
                            <div class="item">
                                <a href="#">
                                    <div class="img-item">
                                        <img src="${p.img}">
                                    </div>
                                    <div class="info-item">
                                        <div class="item-address">
                                            <h4>${p.name}</h4>
                                            <div class="address">Giá ${p.price}</div>
                                        </div>
                                        <p class="type">
                                            <i class="fa-solid fa-tag"></i>
                                            Giảm ${p.type}
                                        </p>
                                    </div>
                                </a>
                            </div>
                                `;
    let e = document.getElementById("list-item");
    e.innerHTML = h;
    
  })
}
window.onload = () => {
  loadItem();
}