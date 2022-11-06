function show(){
    var aj = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    aj.open('get','http://127.0.0.1:3000/report/hot');
    aj.send();

    aj.onreadystatechange = function(){
        if(aj.readyState== 4){
            if(aj.status == 200){
                var data = JSON.parse(aj.responseText);
             
                render(data)
            }else{
                console.log('失败');
            }
        }
    }
}


// 渲染数据
function render(data_){
console.log('render函数');
console.log(data_);

var str = "";
for (var item of data_){

    str +=`
    <li>
    <a href="../pen.html">
        <img src="${item.img}" alt="">

        <div class="kuang3">
            <p class="zt3">${item.text}</p>
            <div class="kuang4">
                <div class="ss">
                    <span class="tp">
                    </span>
                    <span class="ss1">苏苏</span>
                    <span class="sjian">
                        2016-01-25
                    </span>

                </div>


          
                <div class="tub3">
                    <span class="x3">3</span>
                    <span class="x4">3</span>
                </div>

            </div>
        </div>

        
    </a>
</li>

<li>
    <a href="../pen.html">
        <p class="li2">
            关于格林威特空气净化器还有 8 篇报告，点击查看
        </p>
    </a>
</li>
    
    `

}

var ul2 = document.querySelector('.liii');
ul2.innerHTML += str;
}


var img2 = document.getElementsByClassName('img4')
var no1 = document.getElementById('tg')
no1.onclick = function () {
  
    img2.src = '../img/loading-icon.gif'
    setTimeout(show, 2000)
  }