// var a_ = document.querySelectorAll('.a1')
// console.log(a_);
// for (var i = 0; i < a_.length; i++) {
//     a_[i].setAttribute('d_a', i)
//     a_[i].onclick = function () {
//         var da = this.getAttribute('d_a');
//         for (var j = 0; j < a_.length; j++) {
//             a_[j].className = '';
//             a_[da].className = 'd_a';
//         }
//     }
// }
// for (var i = 0; i < a_.length; i++) {
//     a_[i].setAttribute('sx', i)
//     a_[i].onclick = function () {
//         var sx = this.getAttribute('d_a')
//         for (var j = 0; j < a.length) {

//         }
//     }
// }
// 创建ajax请求数据
function ajax_() {
    var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    xml.open("get", "http://127.0.0.1:3000/useing/public", true);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xml.status == 200) {
                datalist = JSON.parse(xml.response);
                // 遍历数组
                show();

            }
        }
    }
}
// 获取点击加载更多按钮
var jz = document.getElementsByClassName("jz")[0];
// 获取正在加载中按钮
var jzz = document.getElementsByClassName("jzz")[0];
// 获取没有更多提示信息
// var notMore = document.getElementsByClassName("notMore")[0];

// 点击时加载数据
jz.addEventListener("click", function () {
    jz.style.display = "none";
    jzz.style.display = "inline-block";
    setTimeout(function () {
        show();
        jz.style.display = "inline-block";
        jzz.style.display = "none";
    }, 1000);
});
