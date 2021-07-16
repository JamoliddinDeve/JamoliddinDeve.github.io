window.addEventListener('load', function (e) {
    var header_button = document.querySelector(' .button_ob_havo h6');
    var body = document.querySelector('body');
    var html = document.querySelector('html');
    var ul_li_a = document.querySelectorAll('.nav_info ul li a');
    var header_top_row = document.querySelector('.header_top_row');
    var header_top_left_btn2 = document.querySelectorAll('.header_top_left_btn2');
    var button_ob_havo = document.querySelector('.button_ob_havo h6');
    var button_ob_havosun = document.querySelector('.button_ob_havo .sun');
    var input_search = document.querySelector('.search_input input');
    var input_search1 = document.querySelector('.search_input');
    var kirish = document.querySelector('.header_section_right .kirish h2');
    var tanlangan = document.querySelector('.header_section_right .tanlangan h2');
    var savatcha = document.querySelector('.header_section_right .savatcha h2');
    var katalog = document.querySelector('.katalog');
    var bars_katalog1 = document.querySelector('.box1');
    var bars_katalog2 = document.querySelector('.box2');
    var bars_katalog3 = document.querySelector('.box3');
    var katalogs = document.querySelector('.katalogs');
    var logo_header = document.querySelector('.logo_header');
    var katalog_ul = document.querySelectorAll('.katalog_ul li a');
    var box_right1 = document.querySelector('.box_right1');
    var kirish1 = document.querySelector('.kirish');
    var kirish_click = document.querySelector('.kirish_click');
    var stars = document.querySelectorAll('.star');
    var box_footer_p = document.querySelectorAll('footer p');
    var footer_ul = document.querySelectorAll('footer ul li a');
    var tel_footer = document.querySelector('.tel_footer');
    var tel_footer_h1 = document.querySelector('.tel_footer h2');
    var text_slide_h5 = document.querySelectorAll('.text_slide h5');
    var text_slide_h2 = document.querySelectorAll('.text_slide h2');
    var text_slide_h21 = document.querySelectorAll('section .text_slide h2');
    var text_slide_h6 = document.querySelectorAll('.text_slide h6');
    var text_slide_h4 = document.querySelectorAll('.text_slide h4');
    var text_slide_h1 = document.querySelectorAll('.text_slide h1');
    var swiper_slide = document.querySelectorAll('section .swiper-slide');
    var sect_img = document.querySelectorAll('section img');
    var narxxx = document.querySelector('.narxxx');
    var birboshidasotib = document.querySelector('.birboshidasotib');
    var sotib_olish_birmartada = document.querySelector('.sotib_olish_birmartada');
    var close = document.querySelector('.sotib_olish_birmartada .close');
    var barchasi = document.querySelector('.barchasi span');
    var barchaaa = document.querySelector('.barchasi');
    var barchasi_btn = document.querySelector('.barchasi button');
    var background_black = document.querySelector('.background_black');






    header_button.addEventListener('click', function () {
        for (var i = 0; i < ul_li_a.length; i++) {
            ul_li_a[i].classList.toggle("activecolor")
        }

        body.classList.toggle("activeee")
        header_top_row.classList.toggle("active1")
        for (var i = 0; i < header_top_left_btn2.length; i++) {
            header_top_left_btn2[i].classList.toggle("activecolor")
        }
        button_ob_havosun.classList.toggle("sun_toggle")
        button_ob_havo.classList.toggle("button_ob_havo_toggle")

        input_search.classList.toggle("inp_background_toggle")

        kirish.classList.toggle("kirish_toggle")
        tanlangan.classList.toggle("kirish_toggle")
        savatcha.classList.toggle("kirish_toggle")
        for (var i = 0; i < box_footer_p.length; i++) {
            box_footer_p[i].classList.toggle("toggle_footer")
        }
        for (var i = 0; i < footer_ul.length; i++) {
            footer_ul[i].classList.toggle("toggle_footer")
        }
        tel_footer.classList.toggle("tel_toggle")
        tel_footer_h1.classList.toggle("toggle_footer")
        for (var i = 0; i < text_slide_h5.length; i++) {
            text_slide_h5[i].classList.toggle("toggle_footer")
        }
        for (var i = 0; i < text_slide_h2.length; i++) {
            text_slide_h2[i].classList.toggle("toggle_footer")
        }
        for (var i = 0; i < text_slide_h6.length; i++) {
            text_slide_h6[i].classList.toggle("toggle_footer")
        }
        for (var i = 0; i < text_slide_h4.length; i++) {
            text_slide_h4[i].classList.toggle("toggle_footer")
        }
        for (var i = 0; i < text_slide_h1.length; i++) {
            text_slide_h1[i].classList.toggle("toggle_footer")
        }

        for (var i = 0; i < stars.length; i++) {
            stars[i].classList.toggle("toggle_footerbg")
        }
    })
    katalog.addEventListener('click', function () {
        katalogs.classList.toggle("katalog_togle")
        body.classList.toggle("opacity_toggle")
        input_search1.classList.toggle("aaaaaaaaaaaaaaaa")
        button_ob_havo.classList.toggle("aaaaaaaaaaaaaaaa")
        logo_header.classList.toggle("aaaaaaaaaaaaaaaa")
        bars_katalog2.classList.toggle("dnone")
        bars_katalog1.classList.toggle("bars_katalog1")
        bars_katalog3.classList.toggle("bars_katalog3")
        for (var i = 0; i < sect_img.length; i++) {
            sect_img[i].classList.toggle("img_toggle")
        }
        tel_footer.classList.toggle("img_toggle")
    })
    for (var i = 0; i < katalog_ul.length; i++) {
        katalog_ul[i].addEventListener('click', function () {
            box_right1.style.display = "block"
            box_right1.style.display = "flex"
        })
    }
    kirish1.addEventListener('click', function () {
        kirish_click.classList.toggle("kirish_click_toggle")
    })
    for (var i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function () {
            this.classList.toggle("star_toggle")
        })
    }
    input_search.addEventListener("input", function () {
        for (var i = 0; i < text_slide_h21.length; i++) {
            var links = text_slide_h21[i].innerHTML.toLowerCase()
            var input = this.value.toLowerCase()
            if (links.indexOf(input) == -1) {
                swiper_slide[i].classList.add('hide')
            }
            else {
                swiper_slide[i].classList.remove('hide')
            }
        }
    })


    for (var i = 0; i < swiper_slide.length; i++) {
        swiper_slide[i].addEventListener('click', function () {
            this.classList.toggle("boxshadow")
            barchasi.innerHTML = num() + " - so'm"
        })
    }
    function num () {
        var  sum = 0
        for(var i = 0; i < swiper_slide.length; i++){
            if(swiper_slide[i].classList.contains('boxshadow')){
                sum = sum + +swiper_slide[i].getAttribute('data-price')
            }
        }
        return sum
    }
    for (var i = 0; i < swiper_slide.length; i++) {
        swiper_slide[i].addEventListener('dblclick', function () {
            narxxx.classList.toggle("narx_tgl")
        })
    }
    birboshidasotib.addEventListener('click', function () {
        sotib_olish_birmartada.style.display = "block"
        background_black.style.display = "block"

        sotib_olish_birmartada.style.opacity = "1"
        this.style.zIndex = "99999991"

    })
    close.addEventListener('click', function () {
        sotib_olish_birmartada.style.display = "none"
        background_black.style.display = "none"
    })




    savatcha.addEventListener('click', function() {
        barchaaa.style.display = "block"
        background_black.style.display = "block"
       
    })
    barchasi_btn.addEventListener('click', function(aa) {
        sotib_olish_birmartada.style.display = "block"
        background_black.classList.toggle("background_black_tgl")
        barchaaa.style.display = "none"
        this.style.zIndex = "99999991"
    })


});