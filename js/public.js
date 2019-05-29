$('#close').on('tap',function(){
    $(this).parents('.advert-flex').remove();
});
// 图片加载
var imgs=document.getElementsByClassName('imgs');
function load(){

    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
    for(var i=0;i<imgs.length;i++){
        if(scrollTop+clientHeight>imgs[i].offsetTop&&imgs[i].hasAttribute('data-url')){
           
      imgs[i].src=imgs[i].getAttribute('data-url');
      imgs[i].removeAttribute('data-url');
        }
    }
}
window.onscroll=window.onload=function(){
  
    setTimeout(load,300);

   

};
$('#home').on('tap',function(){
    $('.ui-loading').show();
  
    setTimeout(function() {
       
        window.location.href = '../html/index.html';
    }, 1000);
})
