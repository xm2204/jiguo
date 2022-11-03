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













// 获取点击加载更多按钮
var jz = document.getElementsByClassName("jz")[0];
// 获取正在加载中按钮
var jzz = document.getElementsByClassName("jzz")[0];
// 点击时加载数据
jz.addEventListener("click", function () {
    jz.style.display = "none";
    jzz.style.display = "inline-block";


    window.onload = function () {
        setTimeout(getData, 1000)
    }
    function getData() {
        var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
        ajax_.open("get", "http://127.0.0.1:3000/useing/public", true);
        ajax_.send();
        ajax_.onreadystatechange = function () {
            if (xml.readyState == 4) {
                if (xml.status == 200) {
                    datalist = JSON.parse(xml.response);
                    // 遍历数组
                    show();

                }
            }
        }
    }
    //index   起始下标
    var index = -1;
    var body = document.getElementsByTagName('body')[0];
    var flg = true;//开关
    var arr = []
    function show() {
        //节流阀
        if (flg) {
            index++;
            if (index >= arr.length) {
                var div_ = document.createElement('div');
                div_.className = 'm_a'
                div_.innerHTML = '数据已加载完毕'
                body.appendChild(div_);
                return flg = false
            }
            //显示加载中
            //   var loding = document.getElementsByClassName('loding')[0];
            //   if (!ul_) {
            //       loding.style.display = 'block'
            //   }
            //   var ul_ = document.createElement('ul');
            //   ul_.className = 'box'
            for (var item of arr[index]) {
                // console.log(item);
                var mm_ = document.createElement('div');
                var img_ = document.createElement('img');
                var a_ = document.createElement('a');
                // img_.className = 'pic'
                img_.src = item.src;
                a_.innerHTML = item.title;
                mm_.appendChild(img_);
                mm_.appendChild(p_);
                ul_.appendChild(mm_);
            }
            setTimeout(function () {
                if (ul_) {
                    loding.style.display = 'none'
                }
            }, 300)
            body.appendChild(ul_);
        }
    }



    setTimeout(function () {
        show();
        jz.style.display = "inline-block";
        jzz.style.display = "none";
    }, 1000);
});
