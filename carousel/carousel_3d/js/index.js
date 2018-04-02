var flag = {
    animateFlag: 1,
    mouseFlag: 1
  }
  function moveToRight () {
    if (flag.animateFlag !== 1) return
    flag.animateFlag = 0;
    // 4 => 5
    document.getElementById('fourth').setAttribute('id', 'fourth-fifth');
    // 3 => 4
    document.getElementById('third').setAttribute('id', 'third-fourth');
    // 2 => 3
    document.getElementById('second').setAttribute('id', 'second-third');
    // 1 => 2
    addDiv('first', 0);
    document.getElementById('first').setAttribute('id', 'first-second');
    setTimeout(function () {
      let node = document.getElementById('fourth-fifth');
      node.parentNode.removeChild(node);
      document.getElementById('third-fourth').setAttribute('id', 'fourth');
      document.getElementById('second-third').setAttribute('id', 'third');
      document.getElementById('first-second').setAttribute('id', 'second');
      flag.animateFlag = 1;
    }, 500);
  }
  function moveToLeft () {
    if (flag.animateFlag !== 1) return
    flag.animateFlag = 0;
    // 2 => 1
    document.getElementById('second').setAttribute('id', 'second-first');
    // 3 => 2
    document.getElementById('third').setAttribute('id', 'third-second');
    // 4 => 3
    document.getElementById('fourth').setAttribute('id', 'fourth-third');
    // 5 => 4
    addDiv('fifth', 1);
    document.getElementById('fifth').setAttribute('id', 'fifth-fourth');
    setTimeout(function () {
      let node = document.getElementById('second-first');
      node.parentNode.removeChild(node);
      document.getElementById('third-second').setAttribute('id', 'second');
      document.getElementById('fourth-third').setAttribute('id', 'third');
      document.getElementById('fifth-fourth').setAttribute('id', 'fourth');
      flag.animateFlag = 1;
    }, 500);
  }
  function addDiv (id, flag) {
    let newDiv = document.createElement('div');
    document.getElementsByClassName('banner-box')[0].appendChild(newDiv);
    newDiv.setAttribute('id', id);
    newDiv.setAttribute('class', 'banner');
    let newImg = document.createElement('img');
    newDiv.appendChild(newImg);
    newImg.setAttribute('class', 'img');
    newImg.style.backgroundImage = 'url(' + url() + ')'
    if (flag === 0) {
      indexAdd();
    } else {
      indexDes();
    }
  }
  // 图片url处理
  function getUrl () {
    var url = [ './img/1.png', './img/2.png','./img/4.png','./img/5.png','./img/6.png','./img/7.png','./img/8.png'];
    var index = 3;
    indexAdd = function () {
      index++;
      if(index > 6) {
        index = 0;
      }
    }
    indexDes = function () {
      index--;
      if (index < 0) {
        index = 6;
      }
    }
    function fn () {
      return url[index];
    }
    return fn;
  }
  let url = getUrl();
  window.onload = function () {
    let animate = setInterval(function () {
      if (flag.mouseFlag === 1) {
        moveToRight();
      }
    }, 3000);
    let left = document.getElementsByClassName('left-click')[0];
    let right = document.getElementsByClassName('right-click')[0];
    let center = document.getElementsByClassName('center')[0];
    left.addEventListener('click', moveToRight,false);
    right.addEventListener('click', moveToLeft,false);
    center.addEventListener('mouseover', function () {
      flag.mouseFlag = 0;
    });
    center.addEventListener('mouseout', function () {
      flag.mouseFlag = 1;
    }, false)
    left.addEventListener('mouseover', function () {
      flag.mouseFlag = 0;
    }, false);
    left.addEventListener('mouseout', function () {
      flag.mouseFlag = 1;
    }, false);
    right.addEventListener('mouseover', function () {
      flag.mouseFlag = 0;
    }, false);
    right.addEventListener('mouseout', function () {
      flag.mouseFlag = 1;
    }, false);
  }