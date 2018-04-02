var oArr=[
    "新的一年，平安喜乐",
    "表现自我，好运来临",
    "表现勇敢，成为超人",
    "表现幽默，靠近幸福",
    "种下新的梦醒",
    "收获一些",
    "感受一些",
    "成长一些",
    "计划一些",
    "兴奋一些",
    "成长多多",
    "快乐更长"
    
    




]
window.onload=function(){
var oLi=document.getElementsByTagName('li');
var oDiv=document.getElementsByClassName('text')[0];



for(var i=0;i<oLi.length;i++){
   oLi[i].index=i;

   oLi[i].onmouseover=function(){
       for(i=0;i<oLi.length;i++){
           oLi[i].className='';

       }
       this.className='active';

       oDiv.innerHTML='<h3>'+(this.index+1)+'月寄语</h3><p>'+oArr[this.index]+'</p>';

   
   }
}
}