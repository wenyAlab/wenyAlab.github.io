import './style/common.css';
import './style/detials.css';
let str = '';
            
const  data = [
        [
            { title : 'list'},
            { url : 'product/todolist/index.html', title : '验证用户' },
           
            
        ],
        [
            { title : 'image'},
            { url : 'product/todolist/index.html', title : '可添加的下拉选项' },
            { url : 'product/todolist/index.html', title : '图片放大镜效果' },
            
        ],
        [
            { title : 'content'},
            { url : 'product/todolist/index.html', title : '单元行上鼠标悬停提示' },
            
            
        ],
        [
            { title : 'carousel'},
            { url : 'product/todolist/index.html', title : '百度爱玩 - 图片轮换' },
            { url : 'product/todolist/index.html', title : '百度爱玩 - 遮罩' },
            { url : 'product/todolist/index.html', title : '百度爱玩 - 榜单tab切换' },
            
        ],
        
        [
            { title : 'data'},
            { url : 'product/todolist/index.html', title : '全日历' },
            { url : 'product/todolist/index.html', title : 'canvas实现' }
        ],
        [
            { title : 'todoList'},
            { url : 'product/todolist/index.html', title : 'todoList--react' }
        ],
        [
            {title:'waiting...'}
        ]
    ];
     
        for(var i = 0; i < data.length; i++){
            var items = data[i];
            var sub = '';
            var subItem = '';
            for(var j=0; j<items.length; j++){
                var son = items[j];
                
                sub = subItem += j==0 
                    ? '<li><span><a href="javascript:;" title="press it">' + son.title + '</a></span><dl class="sub-dl">'
                    : '<dd><a href="' + son.url + '" target="_blank" title="' + son.title + '">' + son.title + '</a></dd>'
                


                sub += j== items.length -1 && '</dl></li>'
            }
            str += sub;
        }
        var ol = document.getElementById('ol');
        ol.innerHTML = str;
        var span = ol.getElementsByTagName('span');
        var dl = ol.getElementsByTagName('dl');
        var tmp = -1;
        var open = false;
        for(var i=0; i < span.length; i++){
            span[i].index = i;
            span[i].onclick = function(e){
                e.preventDefault();
                for(var i=0; i<span.length; i++){
                    dl[i].style.display = 'none';
                }
                if(tmp == this.index && open){
                    dl[this.index].style.display = 'none';
                    open = false;
                } else {
                    dl[this.index].style.display = 'block';
                    open = true;
                }
                tmp = this.index;
            }
        }
