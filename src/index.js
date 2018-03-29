import '../style/common.css';
import '../style/detials.css';
let str = '';
            
const  data = [
        [
            { title : 'list'},
            { url : 'e/1/index.html', title : '去除字符串' },
            { url : 'e/2/index.html', title : '验证用户' },
            { url : 'e/3/index.html', title : '禁止用户输入' },
            { url : 'e/4/index.html', title : '关闭用户中' },
            
        ],
        [
            { title : 'image'},
            { url : 'e/16/index.html', title : '可添加的下拉选项' },
            { url : 'e/17/index.html', title : '图片放大镜效果' },
            { url : 'e/18/index.html', title : '点击图片逐渐放大' }
        ],
        [
            { title : 'content'},
            { url : 'e/19/index.html', title : '单元行上鼠标悬停提示' },
            { url : 'c/6/index.html', title : '无刷新切换皮肤' },
            { url : 'e/20/index.html', title : '隔行换色鼠标经过换色' },
            { url : 'e/21/index.html', title : '添加或删除表格行' },
            
        ],
        [
            { title : 'carousel'},
            { url : 'slide/01/index.html', title : '百度爱玩 - 图片轮换' },
            { url : 'slide/02/bd02.html', title : '百度爱玩 - 遮罩' },
            { url : 'slide/03/bd03.html', title : '百度爱玩 - 榜单tab切换' },
            
        ],
        
        [
            { title : 'data'},
            { url : 'd/03/index.html', title : '全日历' },
            { url : 'd/04/index.html', title : 'canvas实现' }
        ],
        [
            { title : 'todoList'},
            { url : 'product/todolist/index.html', title : '乘法口诀输出' }
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
