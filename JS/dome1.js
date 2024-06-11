$(function () {
    // alert("宽："+$(window).width()+"高："+$(window).height());

    var p=navigator.userAgent;

    var w=$(window).width();
    var h=$(window).height();
    if(p.indexOf("Windows")<0){
        $("#imggg").css({"width":Math.min(w,h)/2,"height":Math.min(w,h)/2});
        $("#phone").css({"width":w,"height":h,"display":"flex"});
        $(".t1").css("display","none");
        $("#SUB_icon_box").css("display","none");
        $("#message").css("display","none");
        $("#mailbox").css("display","none");
    }

    // 输入时执行
   $("#ACC").bind('input propertychange', function(){
    check();
    HPcver();
   });

    //点击确认后执行    
   $("#SUB").click(function(){
        $(".round").css({"background-color":"#fff","box-shadow":"none"});
        $(".Login_box").css("opacity","0");
        setTimeout(
            function(){
                $(".Login_box").css("display","none");
                $(".page_2").css("display","flex")
                wakeup();
                message();
                mail();
            },1000
        );
   });

   //点击邮件时执行
   $(".mail").click(function () {
        fill();
        page3();
   });


   //点击邮票大白时执行
   var num=1;
   $("#stamp").click(
    function(){
        if(num%3===0){
            discolor();
        }else{
            stampblink();
        }
        num++;
   });
});

//账号内容数组
var qqArr=[[250512832,"My.jpg",["你小子小脑袋瓜里挺有想法的噢！恭喜解锁黑色忍者主题","-","-","-","-","-"]]]
var qq=["QQ.png"];

//判断账号并获取相关内容
function TFACC(){
    var value=$("#ACC").val();
    var TF=false;
    for (let i = 0; i < qqArr.length; i++) {
        if(value==qqArr[i][0]){
            TF=true;
            qq=qqArr[i];
            break;
        }else{
            qq=["QQ.png"];
        }
    }
    return TF;
}


// 判断账号是否正确打勾
function check(){
    if(TFACC()){
        $("#SUB_icon_left").css("transition-delay","0s");
        $("#SUB_icon_right").css("transition-delay","0.5s");
        $("#SUB_icon_left").css("height","25px");
        $("#SUB_icon_right").css("width","50px");
        $("#SUB").attr("disabled",false);
    }else{
        $("#SUB_icon_left").css("transition-delay","0.5s");
        $("#SUB_icon_right").css("transition-delay","0s");
        $("#SUB_icon_left").css("height","0px");
        $("#SUB_icon_right").css("width","0px");
        $("#SUB").attr("disabled",true);
    }
};



// 判断账号换头像
function HPcver() {

    if(TFACC()){
        $(".HP_box").attr("state","1");

        $(".HPinbox").css({"top":"45px","left":"0px"});

        setTimeout(
            function(){
                $("#x-1").css("transform","rotate(0deg)");
                $("#x-2").css("transform","rotate(120deg)");
                $("#x-3").css("transform","rotate(240deg)");
            },1000
        );

        setTimeout(
            function(){
                $("#x-1").css({"top":"90px","left":"0px"});
                $("#x-2").css({"top":"22.5px","left":"-39px"});
                $("#x-3").css({"top":"22.5px","left":"39px"});
                $(".HP_box").css("background-image","url(../img/"+qq[1]+")");
            },2000
        );

        setTimeout(
            function(){
                $(".HPinbox").css("transition-duration","0s");
                $("#x-1").css({"top":"90px","left":"0px"});
                $("#x-2").css({"top":"90px","left":"0px"});
                $("#x-3").css({"top":"90px","left":"0px"});
                $("#x-1").css("transform","rotate(0deg)");
                $("#x-2").css("transform","rotate(0deg)");
                $("#x-3").css("transform","rotate(0deg)");
            },3000
        );

        setTimeout(
            function(){
                $(".HPinbox").css("transition-duration","1s");
            },4000
        );
    }else{
        var HPstate=$(".HP_box").attr("state");
        if(HPstate==1){
            $(".HPinbox").css({"top":"45px","left":"0px"});

            setTimeout(
                function(){
                    $("#x-1").css("transform","rotate(0deg)");
                    $("#x-2").css("transform","rotate(120deg)");
                    $("#x-3").css("transform","rotate(240deg)");
                },1000
            );

            setTimeout(
                function(){
                    $("#x-1").css({"top":"90px","left":"0px"});
                    $("#x-2").css({"top":"22.5px","left":"-39px"});
                    $("#x-3").css({"top":"22.5px","left":"39px"});
                    $(".HP_box").css("background-image","url(../img/"+qq[0]+")");
                },2000
            );

            setTimeout(
                function(){
                    $(".HPinbox").css("transition-duration","0s");
                    $("#x-1").css({"top":"90px","left":"0px"});
                    $("#x-2").css({"top":"90px","left":"0px"});
                    $("#x-3").css({"top":"90px","left":"0px"});
                    $("#x-1").css("transform","rotate(0deg)");
                    $("#x-2").css("transform","rotate(0deg)");
                    $("#x-3").css("transform","rotate(0deg)");
                },3000
            );

            setTimeout(
                function(){
                    $(".HPinbox").css("transition-duration","1s");
                },4000
            );
            $(".HP_box").attr("state","0");
        }
    }
}

// 睁眼动画
function wakeup(){
    setTimeout(
        function(){
            $("#bar").css("width","400px")
        },1000
    );
    setTimeout(
        function(){
            $(".eyes").css({"animation":"blink 5s ease-out 1s infinite","height":"80px"});
        },2000
    );
}

// 展示新年祝福动画
function message(){
    setTimeout(function(){
        $("#message").css("background-color","#fff");
        $("#message").text("您收到一份新年祝福")
    },2500
    );
}

// 展示邮件动画
function mail(){
    setTimeout(function(){
        $("#mailbox").css({"display":"flex","opacity":"1"});
    },2500
    );
}





//新春祝福填充
function fill (){
    $("#line_1").html(qq[2][0]);
    $("#line_2").html(qq[2][1]);
    $("#line_3").html(qq[2][2]);
    $("#line_4").html(qq[2][3]);
    $("#line_5").html(qq[2][4]);
    $("#line_6").html(qq[2][5]);
}




//变换至贺卡页面
function page3(){
    if(qq[0]==250512832){
        $("#mailbox").css({"animation":"none","background-color":"#000","width":"1536px","height":"713px","left":"0px","top":"0px","border-radius":"0px"});
        $("#stamp").css("background-color","#000");
    }else{
        $("#mailbox").css({"animation":"none","width":"1536px","height":"713px","left":"0px","top":"0px","border-radius":"0px"});
    }

    setTimeout(
        function(){
            $("#whitebox").css({"width":"1400px","height":"600px","border-radius":"30px"});
        },1000
    );

    setTimeout(
        function(){
            $(".smalleyes").css("height","0px");
            $("#smallbar").css("width","0px")
        },2000
    );

    setTimeout(
        function(){
            $("#whitebox").css("display","none");
            $("#whitebox_2").css("display","flex");
        },3000
    );

    setTimeout(
        function(){
            $("#demarcation").css("height","500px");
            $("#left").css("opacity","1");
            $("#right").css("opacity","1");
        },3500
    );
}


//邮票大白眨眼
function stampblink(){
    $(".smalleyes_2").css("height","0px");

    setTimeout(
        function(){
            $(".smalleyes_2").css("height","22px");
        },200
    );

    setTimeout(
        function(){
            $(".smalleyes_2").css("height","0px");
        },400
    );

    setTimeout(
        function(){
            $(".smalleyes_2").css("height","22px");
        },600
    );
}

//邮票大白眼眶变色
function discolor(){
    var rannum=Math.floor(Math.random()*2.99);
    // alert(rannum);
    if(rannum===0){
        $("#backbox1").css("box-shadow","-75px 0px 75px 75px #12c2e9,0px -75px 75px 75px #c471ed,75px 0px 75px 75px #f64f59,0px 75px 75px 75px #7F7FD5");
    }else if(rannum===1){
        $("#backbox1").css("box-shadow","-75px 0px 75px 75px #00C9FF,0px -75px 75px 75px #92FE9D,75px 0px 75px 75px #B3FFAB,0px 75px 75px 75px #12FFF7");
    }else if(rannum===2){
        $("#backbox1").css("box-shadow","-75px 0px 75px 75px #A770EF,0px -75px 75px 75px #FDB99B,75px 0px 75px 75px #FDB99B,0px 75px 75px 75px #CF8BF3");
    }
    $("#backbox1").css("opacity","1");
    setTimeout(
        function(){
            $("#backbox1").css("opacity","0");
        },2000
    );
}
