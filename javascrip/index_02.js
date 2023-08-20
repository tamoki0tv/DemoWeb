$(document) .ready (function() {
    $("#showtatca") .click (function() { 
        $("div#caphe") .show();
        $("div#tra") .show();
        $("div#cloud") .show();
        $("div#frosty") .show();
        $("div#snack") .show();
    })
    $("#showcaphe") .click (function() {
        $("div#caphe") .show();
        $("div#tra") .hide();
        $("div#cloud") .hide();
        $("div#frosty") .hide();
        $("div#snack") .hide();
       
    })
    $("#showcloud") .click (function() {
        $("div#tra") .hide();
        $("div#caphe") .hide();
        $("div#cloud") .show();
        $("div#frosty") .hide();
        $("div#snack") .hide();

    })
    $("#showfrosty") .click (function() {
        $("div#caphe") .hide();
        $("div#tra") .hide();
        $("div#cloud") .hide();
        $("div#frosty") .show();
        $("div#snack") .hide();

    })
    $("#showbanh") .click (function() {
        $("div#caphe") .hide();
        $("div#tra") .hide();
        $("div#cloud") .hide();
        $("div#frosty") .hide();
        $("div#snack") .show();
        
    })
    $("#showtra") .click (function() {
        $("div#caphe") .hide();
        $("div#tra") .show();
        $("div#cloud") .hide();
        $("div#frosty") .hide();
        $("div#snack") .hide();
    })

    $("ul#menulist li") .click (function(event) {
        var current = jQuery(event.target).attr('id');
        let a="#"+current;
        $("ul#menulist li") .css ("background-color", "transparent")
        $(a) .css ("background-color", "orange");
        $(a) .css ("color", "black");
    })

    $(".product") .click (function() {

        let data =document.getElementById($(this).attr("id")).innerHTML;

        localStorage.setItem('xlxx', JSON.stringify(data));
        location.assign("index3.html");
    })
   
    $("index3.html") .ready (function() {
        let dataproduct = JSON.parse(localStorage.getItem('xlxx'));
        document.getElementById('imgshoww').innerHTML = dataproduct;
        $(".thongbao").hide();

        var price = $(".price").text();
        document.getElementById("total").innerHTML = price + "  ";
       
       })

    $(".send").on ({
        click: function() {
                $(".thongbao").show();
                $(".thongbao") .css("z-index", "999");

        }

    })
    $(".yes").on ({
        click: function() {
                $(".thongbao").hide();
        }
    })

    $(".no").on ({
        click: function() {
                $(".thongbao").hide();
        }
    })

    $(".plus") .click (function() {
        let number = $("#result").text();
        var iNum = parseInt(number);
        iNum +=1;
        document.getElementById('result').innerHTML = iNum;

        var price = $(".price").text();
        var iprice = parseInt(price);
        iprice = iprice * iNum;
        document.getElementById("total").innerHTML = iprice +".000 vnđ  ";
    })

    $(".minus") .click (function() {
        let number = $("#result").text();
        var iNum = parseInt(number);
        if(iNum===1){
            console.log("Thấp Nhất Rồi!");
        }
        else {
            iNum -=1;
        document.getElementById('result').innerHTML = iNum;

        var price = $(".price").text();
        var iprice = parseInt(price);
        iprice = iprice * iNum;
        document.getElementById("total").innerHTML = iprice +".000 vnđ ";
        }
    })
});

// Lấy thông tin user từ tệp JSON hoặc cơ sở dữ liệu
document.addEventListener('DOMContentLoaded', function() {
  
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
})