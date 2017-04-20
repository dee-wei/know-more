window.onload = function () {
//--------------------��������---------------------
    //1.1��ȡԪ��
    var box = document.querySelector('.tab');
    var ul = document.querySelector('.nav-tab');
    var currentX = 0; //��¼��ǰul��λ��
    //1.2��¼��������
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

//-----------------------�����ٽ�ֵ-------------------
    //2.�����ٽ�ֵ��λ�ƶ���
    var maxLeft = 0;
    var minLeft = box.offsetWidth-ul.offsetWidth;
//---------------------����ulλ��---------------------
    var setTranslateX = function (x) {
        ul.style.transform = 'translateX(' + x + 'px)';
        ul.style.webkitTransform = 'translateX(' + x + 'px)';
    }
//---------------------��ӹ���------------------------
    var addTransition = function () {
        ul.style.transition  = "all, 0.3s";
        ul.style.webkitTransition = "all 0.3s";
    }
//----------------------�󶨴����¼�---------------------
    //3.1������ʼ�¼�
    box.addEventListener('touchstart', function (e) {
        //��¼��ʼ��������
        startX = e.targetTouches[0].clientX;
    });
    //3.2�����ƶ��¼�
    box.addEventListener('touchmove', function (e) {
        //��¼�ƶ���������
        moveX = e.targetTouches[0].clientX;

        //�����ƶ�ǰ��ľ����
        distanceX = moveX - startX;

        //��ulλ�� ����= currentX + distanceX;
        var x = currentX + distanceX;

        //�������ݼ��
        if(x>maxLeft){
            x = maxLeft;
        }
        if(x<minLeft){
            x = minLeft;
        }
        setTranslateX(x);
    });
    //3.3���������¼�
    box.addEventListener('touchend', function (e) {
        currentX = currentX + distanceX; //���±���ul��ǰ�ƶ���λ��

        //�жϾ�����ul���ı��ƶ�
        //Խ�� �������λ�ٽ�ֵ С�� ��С�Ķ�λ�ٽ�ֵ  ������ȥ
        if(currentX>maxLeft){
            currentX = maxLeft;
        }
        if(currentX<minLeft){
            currentX = minLeft;
        }

        addTransition();//��ӹ���
        setTranslateX(currentX);//��ulλ��
        //��������
        startX = 0;
        moveX = 0;
        distanceX = 0;

    });
}
