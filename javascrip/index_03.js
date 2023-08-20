$("index3.html") .ready (function() {
     
    $("#dumano").click (function() {
        alert("hello");
    })
})

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