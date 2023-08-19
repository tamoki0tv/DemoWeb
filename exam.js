const searchElement = document.getElementById('fix');
const discountsElement = document.getElementById('container2');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  
  if (scrollY >= 100 && scrollY <700) {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.add('ctn-fixed');
  } else if (scrollY >= 700) {
    searchElement.classList.remove('ctn-fixed');
    searchElement.classList.add('ctn-absolute');
  } else {
    searchElement.classList.remove('ctn-absolute');
    searchElement.classList.remove('ctn-fixed');
  }
  
  
});




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

