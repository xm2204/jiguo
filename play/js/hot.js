// 使用ajax渲染数据
//酷玩-最热
let box = $("#box");
let str = ""
$(function () {
    $.ajax({
        url: "http://127.0.0.1:3000/play/hot", //api接口
        type: 'get', //传输方式 get post
        dataType: "json",  // 传入对象类型json txt 
        success: function (data) {   //数据返回成功的一个回调函数
            let users = data;
            for (let i = 0; i <= users.length - 1; i++) {
                let datas = users[1];
                datas.length = 4;
                for (let j = 0; j <= datas.length - 1; j++) {
                    str = ` 
                                    <li>
                                    <a href="../product.html">   
                                            <img src="${datas[j].img}"/>
                                            <div class="info">
                                                <p class="name">${datas[j].description}</p> 
                                                <p class="text">${datas[j].text}</p> 
                                                
                                                <div class="tip">
                                                     <span class="left-price">${datas[j].price}</span>
                                                    <div class="right-icons">
                                                        <div class="like">
                                                            <img class="pic" src="../play/img/xin.png" onclick="Switching()"/>
                                                            <span class="num1">${datas[j].like}</span>
                                                        </div>
                                                       <div class="conment">
                                                            <img src="../play/img/reply.png"/>
                                                            <span class="num2">${datas[j].words}</span>
                                                       </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        </a>   
                                    </li>
                                `
                    $("#box").append(str)
                }

            }

        },
        //数据返回不成功提示
        error: function (e) {
            alert("数据显示失败")
        }
    })
    // 加载更多
    $('#btn').on('click', function () {
        setTimeout(() => {
            $.ajax({
                url: "http://127.0.0.1:3000/play/hot", //api接口
                type: 'get', //传输方式 get post
                dataType: "json",  // 传入对象类型json txt 
                success: function (data) {   //数据返回成功的一个回调函数
                    let users = data;
                    for (let i = 0; i <= users.length - 1; i++) {
                        let datas = users[1];
                        datas.length = 4;
                        for (let j = 0; j <= datas.length - 1; j++) {
                            str = ` 
                                    <li>
                                    <a href="../product.html">         
                                            <img src="${datas[j].img}"/>
                                            <div class="info">
                                                <p class="name">${datas[j].description}</p> 
                                                <p class="text">${datas[j].text}</p> 
                                                
                                                <div class="tip">
                                                     <span class="left-price">${datas[j].price}</span>
                                                    <div class="right-icons">
                                                        <div class="like">
                                                            <img class="pic" src="../play/img/xin.png" onclick="Switching()"/>
                                                            <span class="num1">${datas[j].like}</span>
                                                        </div>
                                                       <div class="conment">
                                                            <img src="../play/img/reply.png"/>
                                                            <span class="num2">${datas[j].words}</span>
                                                       </div>    
                                                    </div>
                                                </div>
                                            </div>
                                        </a>   
                                    </li>
                                `
                            $("#box").append(str)
                        }

                    }

                },
                //数据返回不成功提示
                error: function (e) {
                    alert("数据显示失败")
                }
            })
        }, 2000);
    })
})
// 点赞小心心变色 数量+1
function Switching() {
    var img = document.getElementsByClassName('pic');
    var flag = 0;
    for (var i = 0; i < img.length; i++) {
        img[i].onclick = function () {
            // var n1=this.firstElementChild.nextElementSibling; 
            var n1 = this.nextElementSibling;
            // var img=this.firstElementChild;
            if (flag == 0) {
                n1.innerHTML++;
                this.src = '../play/img/xinRedh.png';
            } else if (flag == 1) {
                n1.innerHTML--;
                this.src = '../play/img/xin.png';
            } else {
                n1.innerHTML++;
                this.src = '../play/img/xinRedh.png';
                flag = 0;
            }
            flag++;
        }
    }
}
