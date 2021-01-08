var h1 = document.querySelector("#print");
var x = h1.innerHTML;
h1.innerHTML = "";
var i = 0;
function write() {
    h1.innerHTML = h1.innerHTML + x[i];
    i++;
    if (i < x.length) {
        setTimeout(write, 100);
    }

}
setTimeout(function () {
    write();
}, 1500);




var time = 1, cc = 1;
$(window).scroll(function () {

    

    if ($(window).width() > 700) {
        $(".number").each(function () {
            var cPos = $(this).offset().top;
            var topWindow = $(window).scrollTop();
            if (cPos < topWindow + 700) {
                if (cc < 2) {
                    var i = 1;
                    let num = $(this).data('num');
                    var step = 1000 * time / num;
                    var that = $(this);
                    var int = setInterval(function () {
                        if (i <= num) {
                            that.html(i);
                        }
                        else {
                            cc = cc + 2;
                            clearInterval(int);
                        }
                        i++;
                    }, step);
                }
            }
        });
    }


    else {
        $(".number").each(function () {
                    let num = $(this).data('num');
                    $(this).text(num)
        });
    }

});



var positionscroll = $(window).scrollTop();

/* $(window).scroll(function () {

    if ($(window).scrollTop() > positionscroll) {
        // $('.head_div').fadeOut(500);  
        $('.head_div').slideUp(500);
    }
    else {
        // $('.head_div').fadeIn(500);
        $('.head_div').slideDown(500);
    }
    positionscroll = $(window).scrollTop();
}); */


const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}


$(document).ready(function () {
    $('.slide2').owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 1
            },
            750: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })

    $('.slide1').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1500,
        mouseDrag: false,
        animateOut: 'slideOutDown',
        animateIn: 'slideInDown',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});

$(".usl_title").click(function () {
    var b = $(this).attr("value");
    $(".usl_h3").text(b);
})







