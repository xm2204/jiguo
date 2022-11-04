// 获取点击加载更多按钮
var jz = document.getElementsByClassName("jz")[0];
// 获取正在加载中按钮
var jzz = document.getElementsByClassName("jzz")[0];
var jzw = document.getElementsByClassName("jzw")[0];
// 点击时加载数据
jz.onclick = function () {
    jz.style.display = "none";
    jzz.style.display = "inline-block";
    function show_() {
        var ajax_ = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
        ajax_.open("get", "http://127.0.0.1:3000/useing/public");
        ajax_.send();
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState === 4) {
                if (ajax_.status === 200) {
                    var data = JSON.parse(ajax_.responseText);
                    console.log(data);
                    show(data);
                }
            }
        }
        function show(data) {
            var str = '';
            for (item of data) {
                str += `
        <div class='m_m'>
        <a href="../product.html">
        <span class='m_r'>首发</span>
        <img src="${item.img}">
        <h3>${item.text}</h3>
        <p class='m_nn'>
        <i class='gray_ '>23台</i> 
       <span class='gray_'>2032</sapn>
       </p>
       
        <p class="m_mp"><span>1932</span>申请</p>
        <p class="gray"><span>报告数量：8</span></p>
        </a>
        </div>
        `
            }
            var ma = document.getElementById('ad')
            var div = document.createElement('div')
            ma.appendChild(div)
            div.className = 'm_a'
            div.innerHTML = str

            // ma.appendChild(div)

        }
    }
    setTimeout(function () {
        show_();
        jzz.style.display = "none";
        jzw.style.display = "inline-block";
        jzw.style.color = "rgb(136, 126, 126)"
    }, 1000);
}

