$(function(){

    //定义一个全局变量来实现函数之间的操作
    var CateDatas;
    var LeftScorll;
    init();

    function init(){
        getClassificationData();
        leftListEvent();
    }

    function getClassificationData(){
        $.get('categories',function(res){
            if(res.meta.status == 200){
                 // 把数据存到全局变量中
                 CateDatas = res.data;
                 renderLeft();
                 renderRight(0);
            }
        })
    }

    //渲染左侧栏
    function renderLeft(){
        $('.classification_view_left').html(template('classificationNavTpl',{data:CateDatas}));
        //初始化左侧栏滚动条
         LeftScorll = new IScroll(".classification_view_left");
    }

    //渲染右边
    function renderRight(index){
        $('.classification_view_right').html(template('classificationTpl',{data:CateDatas[index].children}))
        //初始化右侧栏滚动条
        //获取要加载的图片的长度
        var time = $('.classification_view_right img').length
        $('.classification_view_right img').on('load',function(){
            time--;
            if(time == 0){
                var RigthScorll = new IScroll(".classification_view_right");
            }
        })
        
    }
    //给左侧栏绑定点击事件tap
    function leftListEvent(){
        $('.classification_view_left').on('tap','li',function(){
            $(this).addClass("active").siblings().removeClass("active");
           var index = $(this).index();
           renderRight(index);
            //点击左侧导航栏某个li置顶
            LeftScorll.scrollToElement(this);
        })
    }

})