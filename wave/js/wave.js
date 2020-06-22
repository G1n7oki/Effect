$("button").click(function (e) {
  $(".ripple").remove(); // 每次先把之前添加的水波纹div删除

  let button_left = $(this).offset().left; // button距离页面左边的距离
  let button_top = $(this).offset().top; // button距离页面上边的距离
  let button_width = $(this).width(); // button的宽度
  let button_height = $(this).height(); // button的高度

  // 水波纹div为一个圆形，使得它的半径等于button的最长边，故在这里计算最长边是多少
  let ripple_width = 0;
  ripple_width = button_width > button_height ? button_width : button_height; 

  // e.pageX是click事件的鼠标触发点距离页面左边的距离
  // e.pageY是click事件的鼠标触发点距离页面上边的距离
  // 这里的算法是，算出鼠标点击点的坐标为 (e.pageX - button_left, e.pageY - button_top)
  // 但是由于`transform-origin`默认是center，所以这里再减去半径才是div应该的位置
  let ripple_x = e.pageX - button_left - ripple_width / 2;
  let ripple_y = e.pageY - button_top - ripple_width / 2;
 
  // 往button里面塞水波纹div
  $(this).prepend("<div class='ripple'></div>");
  
  // 给水波纹div应用样式和动画
  $(".ripple")
  .css({
    width: ripple_width + 'px',
    height: ripple_width + 'px',
    top: ripple_y + 'px',
    left: ripple_x + 'px'
  })
  .addClass("rippleEffect");

})