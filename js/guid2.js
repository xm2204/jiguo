function show(){
    var aj = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    aj.open('get','http://127.0.0.1:3000/guid/hot');
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
                        <div class="wz5">
                            <p>
                            ${item.text}
                            </p>
                           <div class="tub2">
                            <div class="tub3">
                                <span class="x3">3</span>
                                <span class="x4">3</span>
                            </div>
                           </div>
                        </div>
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