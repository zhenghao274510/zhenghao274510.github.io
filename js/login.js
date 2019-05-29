//获取cookie值

$('#login').on('tap', function () {

  var Nphone = document.getElementById('phone').value;
  var Npsw = document.getElementById('psw').value;

  var Ou = getCookie('use');
  var Op = getCookie(' psw');
  console.log(Ou, Op);

  if (Ou !== Nphone && Op == Npsw) {
    alert('手机号码输入错误');

  } else if (Ou == Nphone && Op !== Npsw) {
    alert('密码输入错误');
  } else if (Ou !== Nphone && Op !== Npsw) {
    var flag = confirm('你还没有注册，是否前往注册？');
    if (flag) {
      window.location.href = '../login/resgiter.html';
    }
  } else {
    $('.ui-loading').show();
  
    setTimeout(function() {
       
        window.location.href = '../html/index.html';
    }, 1000);

  }
});


function getCookie(key) {


  var cookies = document.cookie.split(';');
  console.log(cookies);
  for (var i = 0; i < cookies.length; i++) {
    var arr = cookies[i].split('=');
    if (arr[0] == key) {
      return arr[1];
    }
  }
}

// $('#loading3').click(function(){
 
// });