const searchElement = document.getElementById('fix');
const searchElement1 = document.getElementById('fix-img');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  
  if (scrollY >= 420 && scrollY <1250) {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.add('ctn-fixed');
    searchElement1.classList.remove('ctn-absolute');
    searchElement1.classList.add('ctn-fixed');
  } else if (scrollY >= 1250) {
    searchElement.classList.remove('ctn-fixed');
    searchElement.classList.add('ctn-absolute');
    searchElement1.classList.remove('ctn-fixed');
    searchElement1.classList.add('ctn-absolute');
  } else {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.remove('ctn-fixed');
    searchElement1.classList.remove('ctn-absolute');
    searchElement1.classList.remove('ctn-fixed');
  }
  
  
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
    <p><strong style="color: black;">Full Name:</strong> ${userFullName}</p>
    <p><strong style="color: black;">Username:</strong> ${userUsername}</p>
    <p><strong style="color: black;">Phone:</strong> ${userPhone}</p>
  `;
}


function loadItem() {
  fetch("item-uudai.json").then(res => res.json()).then(data => {
    let h = "";
    for (let p of data)
      h+=`
                            <div class="item">
                                <a href="index2.html">
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

document.addEventListener('DOMContentLoaded', function() {
    var goTopButton = document.querySelector('.go_top');

    if (goTopButton) {
        goTopButton.addEventListener('click', function() {
            scrollToTopSmooth(500);
        });
    }

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            goTopButton.style.display = 'block';
        } else {
            goTopButton.style.display = 'none';
        }
    });
});

function scrollToTopSmooth(duration) {
    var scrollStep = (-window.scrollY) / (duration / 15),
        scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
}