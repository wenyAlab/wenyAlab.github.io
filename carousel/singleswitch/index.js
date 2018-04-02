window.onload = function() {
    var imgBox = document.getElementById('img-box');
    var imgList = document.getElementsByClassName('img-list')[0];
    var imgItem = document.getElementsByClassName('img-item');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var buttons = document.getElementById('ico');
    var icon = buttons.getElementsByTagName('a');
    var index = 0;
    var timer = null;
    autoPlay();



    imgList.style.width = imgItem[0].offsetWidth * imgItem.length + 'px';
    item = imgItem[0].offsetWidth;
    function buttonPlay (){
        for(var i = 0;i<icon.length;i++){
            if(icon[i].className = 'active'){
                icon[i].className = '';
            }
        }
        icon[index].className = 'active';
    }
    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(imgList.style.left) + offset;
        imgList.style.left = newLeft + 'px';
        
        if(newLeft<-(item * (imgItem.length - 1))){
            imgList.style.left = 0 + 'px'
        }
        if(newLeft>0){
             imgList.style.left = -(item * (imgItem.length - 1)) + 'px';
        }
    }

    function autoPlay(){
        timer = setInterval(function(){
            next.onclick();
        },3000)
    }

    

    
    

    prev.onclick = function() {
        index--;
        if(index < 0){
            index = icon.length - 1;
        }  
        buttonPlay();           
        animate(item);
    }
    next.onclick = function() {
        index++;
        if(index>icon.length - 1){
            index = 0;
        } 
        buttonPlay(); 
        animate(-item);
    }
    
}