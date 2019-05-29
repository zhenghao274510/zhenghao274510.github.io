// $('#resgiter').click(function(){
//     $.ajax({
//         url:"https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123654",
//         data:{
//             key:'00d91e8e0cca2b76f515926a36db68f5',

//             phone:$('#phone').value,
//             passwd:$('#psw').value
//         },
//         success:function(data){
//             console.log(data);
//         },
//         error:function(er){
//             alert(er);

//         }

//     })
// });
$('#resgiter').tap(function () {
    var phone = document.getElementById('phone').value;
    var psw = document.getElementById('psw').value;

    if (!(/^1[3|4|5|7|8]\d{9}$/.test(phone))) {
        alert("手机号码有误，请重填");
        return false;
    }
    if (!(/^[a-zA-Z0-9]{4,10}$/.test(psw))) {
        alert("密码有误，请重填");
        return false;

    }
    if ((/^1[34578]\d{9}$/.test(phone)) && (/^[a-zA-Z0-9]{6,}$/.test(psw))) {
        setCookie('use', phone, 100);
        setCookie('psw', psw, 100);
        var flag = confirm('恭喜你!注册成功,是否现在登录？')
        if (flag) {
            $('.ui-loading').show();
            setTimeout(function () {
                window.location.href = '../login/login.html';
            }, 1000)

        }

    }


});


//创建cookie

function setCookie(pvalue, value, time) {
    var d = new Date();
    d.setDate(d.getDate() + time);
    var expires = "expires=" + d;
    document.cookie = pvalue + "=" + value + ";" + expires;
}
