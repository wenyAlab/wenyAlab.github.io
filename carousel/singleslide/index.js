window.onload = function(){
    var imgList = document.getElementsByClassName('img-list')[0];
    var imgItem = document.getElementsByClassName('img-item');
    var pressBtn = document.getElementsByClassName('press-btn');
    var icon = document.getElementById('ico').getElementsByTagName('a');
    imgList.style.width = imgItem[0].offsetWidth * imgItem.length + 'px';
   
    var item = imgItem[0].offsetWidth;
    var count = 0;
    var left = false;
    var timer;

    showTime();
    function showTime(){
        timer = setInterval(function(){
            if(left == false){
                count++;
                imgList.style.transform = 'translate(' + (-item) * count + 'px)';
                if(count >= imgItem.length - 1){
                    count = imgItem.length -1;
                    left = true;
                }
            }else{
                count --;
                imgList.style.transform = 'translate(' + (-item) * count + 'px)';
                if(count <= 0){
                    count = 0;
                    left = false;
                }
            }

            for(var i = 0;i< icon.length;i++){
                icon[i].className = '';
            }

            icon[count].className = 'active';
            console.log(imgItem.length)
        },4000)
    }


    for(var i = 0;i< pressBtn.length;i++){
        pressBtn[i].onmouseover = function(){
            clearInterval(timer)
        }

        pressBtn[i].onmouseout   = function(){
            showTime();
        }

        pressBtn[i].onclick = function(){
            if(this.title == 0){
                count ++;
                if(count > 4){
                    count = 0;
                }
            }else{
                count --;
                if(count <0){
                    count = 4;
                }
            }

            imgList.style.transform = 'translate(' + (-item) * count + 'px)';

            for(var i = 0;i<icon.length;i++){
                icon[i].className = '';
            }
            icon[count].className = 'active';
        }
    }


    for(var b = 0; b< icon.length;b++){
        icon[b].index = b;
        icon[b].onmouseover = function(){
            clearInterval(timer);

            for(var a = 0;a<icon.length;a++){
                icon[a].className = '';

            }
            icon[this.index].className = 'active';

            if(this.index == 4){
                left = true;
            }
            if(this.index == 0){
                left = false;
            }

            count = this.index;
            imgList.style.transform = 'translate(' + (-item) *this.index + 'px)';
        }
        icon[b].onmouseout = function(){
            showTime();
        }
    }

}