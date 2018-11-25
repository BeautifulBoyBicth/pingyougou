$(function () {


  // ajax发送前被调用  拦截器 
  // 属于 框架的配置的部分 懂得怎么去使用就可以了。 
  $.ajaxSettings.beforeSend = function (xhr, ajaxObj) {
    // xhr 原生ajax对象
    // ajaxObj = $.ajax({对象})

    // console.log(ajaxObj);
    ajaxObj.url = "http://api.pyg.ak48.xyz/api/public/v1/" + ajaxObj.url;
  
    // console.log("触发");

    $("body").addClass("loadding");
  }

  // 发送成功后被调用的拦截器
  $.ajaxSettings.complete = function () {
    // console.log("请求成功了");
    $("body").removeClass("loadding");


  }

})