// tab切换部分
$('.nav-tit>span').tap(function(){
    var i=$(this).index();
    if($(this).hasClass('color')){
        $(this).removeClass('color').find('i').removeClass().addClass('down');
       
        $(this).parents('.nav-list').removeClass('position').find('.beat'+i).removeClass('active');
        $('.warp').hide('slow');
    }else{
        $('.warp').show('slow');
        $(this).parents('.nav-list').addClass('position').find('.beat'+i).addClass('active').siblings().removeClass('active');;
       
        $(this).addClass('color').siblings().removeClass('color');
        $('.nav-tit>span i').removeClass('up').addClass('down');
        $(this).find('i').removeClass().addClass('up');
    
    }
  
});
$('.warp').tap(function(){
    $(this).hide();
    $('.nav-list').removeClass('position');
    $('.nav-hide').find('div').removeClass('active');
    $('.nav-tit').find('span').removeClass('color');
    $('.nav-tit').find('span>i').removeClass('up').addClass('down');
})


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
