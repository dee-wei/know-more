window.onload = function () {
//--------------------触屏滑动---------------------
    //1.1获取元素
    var box = document.querySelector('.tab');
    var ul = document.querySelector('.nav-tab');
    var currentX = 0; //记录当前ul的位置
    //1.2记录滑动数据
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

//-----------------------滑动临界值-------------------
    //2.设置临界值和位移动画
    var maxLeft = 0;
    var minLeft = box.offsetWidth-ul.offsetWidth;
//---------------------设置ul位移---------------------
    var setTranslateX = function (x) {
        ul.style.transform = 'translateX(' + x + 'px)';
        ul.style.webkitTransform = 'translateX(' + x + 'px)';
    }
//---------------------添加过渡------------------------
    var addTransition = function () {
        ul.style.transition  = "all, 0.3s";
        ul.style.webkitTransition = "all 0.3s";
    }
//----------------------绑定触屏事件---------------------
    //3.1触屏开始事件
    box.addEventListener('touchstart', function (e) {
        //记录开始坐标数据
        startX = e.targetTouches[0].clientX;
    });
    //3.2触屏移动事件
    box.addEventListener('touchmove', function (e) {
        //记录移动坐标数据
        moveX = e.targetTouches[0].clientX;

        //计算移动前后的距离差
        distanceX = moveX - startX;

        //让ul位移 距离= currentX + distanceX;
        var x = currentX + distanceX;

        //滑动数据监测
        if(x>maxLeft){
            x = maxLeft;
        }
        if(x<minLeft){
            x = minLeft;
        }
        setTranslateX(x);
    });
    //3.3触屏结束事件
    box.addEventListener('touchend', function (e) {
        currentX = currentX + distanceX; //重新保存ul当前移动的位置

        //判断距离差看让ul往哪边移动
        //越界 大于最大定位临界值 小于 最小的定位临界值  吸附回去
        if(currentX>maxLeft){
            currentX = maxLeft;
        }
        if(currentX<minLeft){
            currentX = minLeft;
        }

        addTransition();//添加过渡
        setTranslateX(currentX);//让ul位移
        //数据重置
        startX = 0;
        moveX = 0;
        distanceX = 0;

    });
}
