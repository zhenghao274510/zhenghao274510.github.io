
// banner图
var mySwiper = new Swiper ('.swiper-container', {
    autoplay:true,
   loop: true, // 循环模式选项
   
   // 如果需要分页器
   pagination: {
     el: '.swiper-pagination',
     type:'fraction'
   },
 }) 
   // 百度地图API功能
   var map = new BMap.Map("map");    // 创建Map实例
   map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //  获取当前位置
  //  var geolocation = new BMap.Geolocation();
  //  geolocation.getCurrentPosition(function(r){
  //      if(this.getStatus() == BMAP_STATUS_SUCCESS){
  //          var mk = new BMap.Marker(r.point);
  //          map.addOverlay(mk);
  //          map.panTo(r.point);
  //         //  alert('您的位置：'+r.point.lng+','+r.point.lat);
  //      }
  //      else {
  //          alert('failed'+this.getStatus());
  //      }
  //  },{enableHighAccuracy: true});
   //添加地图类型控件
//    map.addControl(new BMap.MapTypeControl({
//        mapTypes:[
//            BMAP_NORMAL_MAP,
//            BMAP_HYBRID_MAP
//        ]}));	  
  //  map.setCurrentCity("郑州");          // 设置地图显示的城市 此项是必须设置的
   map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


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
