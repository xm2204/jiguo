//申请改变
var a1_ = document.getElementsByClassName('a1')[0]
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