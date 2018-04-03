import '../style/common.css';
let str = '';
            
const  data = [
        [
            { title : 'list'},
            { url : 'list/timer/index.html', title : '简单计数器--redux' },
            { url : 'list/dialog/index.html', title : '对话框--面向对象' },
            { url : 'list/default_menu/index.html', title : '自定义系统右键菜单' },


           
            
        ],
        [
            { title : 'image'},
            { url : 'image/index1.html', title : '图片罩层' }
            
        ],
        [
            { title:'movement'},
            { url:'movement/index1.html',title:'物体移动'},
            { url : 'movement/index2.html', title : '跟随鼠标移动' },
            { url : 'movement/index3.html', title : '分享至菜单' }


        ],
        [
            { title : 'content'},
            { url : 'content/tab/index.html', title : 'tab切换' },
            { url : 'content/mouseover/index.html', title : '鼠标移入显示移出隐藏' },
            { url : 'content/single_page/index.html', title : 'single-page react-router' }


            
            
        ],
        [
            {title:'css3'},
            { url : 'css3/loadingAnimation.html', title : 'css3实现loading动画' },

        ],
        [
            { title : 'carousel'},
            { url : 'carousel/seamless/index.html', title : '无缝滚动' },
            { url : 'carousel/singleslide/index.html', title : '滑动轮播' },
            { url : 'carousel/singleswitch/index.html', title : '切换轮播' },
            { url : 'carousel/carousel_3d/index.html', title : '3d轮播' },

            
        ],
        
        [
            { title : 'date'},
            { url : 'date/simple_calendar/index.html', title : '简单日历' },
            { url : 'date/calendar/index.html', title : '全日历' }
        ],
        [
            { title : 'other'},
            { url : 'something/todolist/index.html', title : 'todoList--react' },
            {url:'something/totop/index.html',title:'回到顶部按钮'}
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
