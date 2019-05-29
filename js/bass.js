function setFont() {
    var html = document.getElementsByTagName('html')[0]; //   html 节点
    var newwidth = window.screen.width; //  屏幕宽度
    var minwidth = 320; //   设计稿宽度
    html.style.fontSize = newwidth / minwidth * 100 + "px"; //  设置新的字体大小
};
setFont();
window.addEventListener('resize', function () {
    clearTimeout(timer);
    var timer = setTimeout(function () {
        setFont();
    }, 100);

}, false);