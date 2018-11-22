$(function(){
    init();
    function init(){
        getSwiperdata();
        getNavData();
        getGroup();
    }

    //获取轮播图
    function  getSwiperdata(){
        $.get('http://api.pyg.ak48.xyz/api/public/v1/home/swiperdata',function(result){
            if(result.meta.status == 200){
                var html = template('swiperTpl',{data:result.data});
                $('.pyg_slides').html(html);
                //设置轮播图
                var gallery = mui('.mui-slider');
                gallery.slider({
                interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
                });
                gallery.addEventListener('slide', function(event) {
                    //注意slideNumber是从0开始的；
                    document.getElementById("info").innerText = "你正在看第"+(event.detail.slideNumber+1)+"张图片";
                });
            }
        });
    }
    //获取导航栏
    function getNavData(){
        $.get('http://api.pyg.ak48.xyz/api/public/v1/home/catitems',function(result){
            if(result.meta.status == 200){
                $('.pyg_nav').html(template('navTpl',{data:result.data}));
            }
        })
    }
    //获取商品列表
    function getGroup(){
        $.get('http://api.pyg.ak48.xyz/api/public/v1/home/goodslist',function(result){
            if(result.meta.status == 200){
                $('.pyg_list').html(template('listTpl',{data:result.data}));
            }
        })
    }
})