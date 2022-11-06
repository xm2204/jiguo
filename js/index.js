// 使用ajax渲染数据
//酷玩-最新
let box = $("#box");
let str = ""
$(function () {
    // 加载更多
    $('#btn').on('click', function () {
        setTimeout(() => {
            $.ajax({
                url: "http://127.0.0.1:3000/play/new", //api接口
                type: 'get', //传输方式 get post
                dataType: "json",  // 传入对象类型json txt 
                success: function (data) {   //数据返回成功的一个回调函数
                    let users = data;
                    for (let i = 0; i <= users.length - 1; i++) {
                        let datas = users[0];
                        datas.length = 4;
                        for (let j = 0; j <= datas.length - 1; j++) {
                            str = ` 
                            <li class='box-li'>
        <img src="${datas[j].img}">
        <div>
             <p>${datas[j].description}<br>
             <span>${datas[j].text}</span></p>                             
            <div>
                <span>${datas[j].price}</span>
                <div>
                    <span>
                         <img src="./img/xin.png"/>${datas[j].like}
                     </span>
                    <span>
                         <img src="./img/reply.png"/>${datas[j].words}</span> 
                </div>
            </div>
        </div>
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

// // 获取点击加载更多按钮
// var btn = document.getElementById('btn')
// // 点击时加载数据
// btn.onclick = function () {
//     function show_() {
//         var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
//         ajax_.open("get", "http://127.0.0.1:3000/useing/public");
//         ajax_.send();
//         ajax_.onreadystatechange = function () {
//             if (ajax_.readyState === 4) {
//                 if (ajax_.status === 200) {
//                     var data = JSON.parse(ajax_.responseText);
//                     console.log(data);
//                     show(data);
//                 }
//             }
//         }
//         function show(data) {
//             var str = '';
//             for (item of data) {
//                 str += `
//         <li>
//         <img src="${item.img}">
//         <div>
//              <p>${item.description}<br>
//              <span>${item.text}</span></p>                             
//             <div>
//                 <span>${item.price}</span>
//                 <div>
//                     <span>
//                          <img src="./img/xin.png"/>${item.like}
//                      </span>
//                     <span>
//                          <img src="./img/reply.png"/>${item.words}</span> 
//                 </div>
//             </div>
//         </div>
//         </li>
//         `
//             }
//             // ma.appendChild(div)
//             var box = document.getElementById('box')
//             // var li_ = document.createElement('li')
//             // li_.className = 'box-li'
//             box.appendChild(str)
//         }
//     }
//     show_();
// }
//申请改变
var a1_ = document.getElementsByClassName('a4')[0]
var shenqing = a1_.firstElementChild
var tai = shenqing.nextElementSibling.nextElementSibling
var index1 = 126
var index = 20
function fn() {
    if (index <= 0) {
        alert('已被抢完');
        index1 -= 1
        index += 1
    }
    console.log(shenqing)
    console.log(tai)
    shenqing.innerHTML = index1 + 1 + '人申请'
    tai.innerHTML = index - 1 + '台'
    index1 += 1
    index -= 1
}
//倒计时时间
var timer_ = document.getElementsByClassName('timer')[0];
setInterval(function () {
    timer_.innerHTML = '申请时间剩余：' + CountDown(2022, 11, 18, 24)
}, 1000)
function CountDown(year, month, day, hours) {
    let now = new Date();
    let endDate = new Date(year, month - 1, day, hours);
    let leftTime = endDate.getTime() - now.getTime();//计算剩余的毫秒数
    if (leftTime <= 0) {
        leftTime = 0;
    }
    let leftsecond = parseInt(leftTime / 1000);//计算剩余的秒数
    day = Math.floor(leftsecond / (60 * 60 * 24));
    let hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
    let minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
    let second = Math.floor(leftTime / 1000 % 60, 10);
    if (day == 0 && hour == 0 && minute == 0 && second == 0) {
        return `到时间了`
    } else {
        return `${day}天${hour}小时${minute}分钟${second}秒`;
    }
}
//直接调用即可
CountDown(2022, 11, 18, 24)
//轮播图
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    autoplay: {
        delay: 2000,
        // stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})