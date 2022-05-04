window.addEventListener("load", () => {
    //slide_banh_hàng ngay
    const SELL_ICON = `<div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50" height="50" viewBox="0 0 256 256" xml:space="preserve">
    <desc>Created with Fabric.js 1.7.22</desc>
    <defs>
    </defs>
    <g transform="translate(128 128) scale(0.72 0.72)" style="">
        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
        <rect x="-0.52" y="24.81" rx="0" ry="0" width="50.28" height="2.05" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;" transform=" matrix(0.8108 -0.5853 0.5853 0.8108 -10.4623 19.2942) "/>
        <rect x="64.36" y="0.69" rx="0" ry="0" width="2.05" height="50.28" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;" transform=" matrix(0.5853 -0.8109 0.8109 0.5853 6.1723 63.7304) "/>
        <path d="M 84.868 82.504 H 5.132 C 2.298 82.504 0 80.207 0 77.372 V 43.678 c 0 -2.834 2.298 -5.132 5.132 -5.132 h 79.736 c 2.834 0 5.132 2.298 5.132 5.132 v 33.695 C 90 80.207 87.702 82.504 84.868 82.504 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,78,58); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <circle cx="45.003" cy="11.123000000000001" r="3.623" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
        <path d="M 60.783 72.464 H 49.156 c -0.553 0 -1 -0.447 -1 -1 V 49.748 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 v 20.716 h 10.627 c 0.553 0 1 0.447 1 1 S 61.336 72.464 60.783 72.464 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,242,242); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 18.927 72.464 H 11.84 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 7.086 c 1.528 0 2.771 -1.243 2.771 -2.771 v -3.315 c 0 -1.528 -1.243 -2.771 -2.771 -2.771 h -3.946 c -2.631 0 -4.772 -2.141 -4.772 -4.771 V 53.52 c 0 -2.631 2.141 -4.771 4.772 -4.771 h 7.086 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 h -7.086 c -1.528 0 -2.772 1.243 -2.772 2.771 v 3.314 c 0 1.528 1.244 2.771 2.772 2.771 h 3.946 c 2.631 0 4.771 2.141 4.771 4.771 v 3.315 C 23.698 70.323 21.558 72.464 18.927 72.464 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,242,242); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 38.019 48.748 h -4.115 c -3.133 0 -5.682 2.549 -5.682 5.682 v 17.034 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 v -9.858 h 11.479 v 9.858 c 0 0.553 0.448 1 1 1 s 1 -0.447 1 -1 V 54.43 C 43.701 51.297 41.152 48.748 38.019 48.748 z M 30.222 59.605 V 54.43 c 0 -2.03 1.652 -3.682 3.682 -3.682 h 4.115 c 2.03 0 3.682 1.651 3.682 3.682 v 5.176 H 30.222 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,242,242); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
        <path d="M 78.791 61.605 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 68.164 v -8.857 h 10.627 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 67.164 c -0.553 0 -1 0.447 -1 1 v 21.716 c 0 0.553 0.447 1 1 1 h 11.627 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 68.164 v -8.858 H 78.791 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,242,242); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
    </g>
    </g>
    </svg></div>`
    slide_banh_tuoi = () => {
        let indexSlide = 0
        const btn_left = document.querySelector("#btn_left_slides_banh_tuoi")
        const btn_right = document.querySelector("#btn_right_slides_banh_tuoi")
        slides = document.querySelectorAll(".slide_banh_tuoi")
        slides[indexSlide].style.display = "block"
        slides[indexSlide].style.position = "relative"
        let is_Auto_slider = false

        function showSlise(n) {
            let i = 0
            if (n >= slides.length) indexSlide = 0
            if (n < 0) indexSlide = slides.length - 1
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
                slides[indexSlide].style.position = "absolute"
            }
            slides[indexSlide].style.display = "block"
            slides[indexSlide].style.position = "relative"
                // setTimeout(() => {
                //     if (is_Auto_slider) {
                //         indexSlide--
                //         for (i = 0; i < slides.length; i++) {
                //             slides[i].style.animation = "1s line-left"
                //         }
                //         showSlise(indexSlide)
                //     }
                // }, 5000)
        }
        btn_left.addEventListener("click", () => {
            is_Auto_slider = !is_Auto_slider
            indexSlide++
            for (i = 0; i < slides.length; i++) {
                slides[i].style.animation = "0.5s line-right"
            }
            showSlise(indexSlide)
        });
        btn_right.addEventListener("click", () => {
            is_Auto_slider = !is_Auto_slider
            indexSlide--
            for (i = 0; i < slides.length; i++) {
                slides[i].style.animation = "0.5s line-left"
            }
            showSlise(indexSlide)
        })
    }
    loadElemet_banh_tuoi = () => {
        Banhs = document.getElementById("id_Sp_noi_bat")
        slide_do_uong1 = document.getElementById("slide_do_uong_1");
        var s = ""
        var danhgia = ''
        fetch("data.json")
            .then(response => response.json())
            .then((json) => {

                for (i = 0; i < 25; i++) {
                    danhgia = `<div class="info_price">
                    <div>
                        <span><br>${json[i].price}</i></span>
                        <span class="danh_gia"><br><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></span>
                    </div>
                    <div class="icon_in_item">
                        <div class="like" onclick="setLike(this)">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </div>
                        <div class="add">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>`;
                    if (i % 2 == 0) {
                        s += `<li class="item_banh_tuoi"> <div ><div class = "container_item_banh_tuoi"> <a href = "${json[i].link}"> <div><img src = "${json[i].image}"alt = " "></div> <div class = "text_icon"> <span>${json[i].name}</span> </div> </a> ${danhgia}</div> </div></li>`;
                    } else {
                        s += `<li class="item_banh_tuoi"> <div><div class = "container_item_banh_tuoi"> <a href = "${json[i].link}"> <div> <img src = "${json[i].image}"alt = " "> </div> <div class = "text_icon"> <span>${json[i].name}</span>  </div> </a>${danhgia} </div> </div></li>`;
                    }
                }
                Banhs.innerHTML += s
            });
    }
    loadElemet_banh_tuoi();
    slide_banh_tuoi();
})

function setLike(item) {
    if (item.style.color === "red") {
        item.style.color = "#555050"
        return;
    }
    item.style.color = "red"
    return false;
}