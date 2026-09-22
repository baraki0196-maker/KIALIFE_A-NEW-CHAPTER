// ========= header =========

document.addEventListener("DOMContentLoaded", () => {
    const revealTargets = document.querySelectorAll(
        ".driving-spot .spot-card, .coruse-card, .wide-card, .visual-grid article, .care-cards article"
    );

    revealTargets.forEach(el => el.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
});

// CAR CARE  이벤트 경고창

document.addEventListener('DOMContentLoaded', () => {
    const careCards = document.querySelectorAll('.care-cards article');

    careCards.forEach((card) => {
        card.addEventListener('click', () => {
            alert('진행중인 이벤트가 아닙니다.');
        });
    });
});



//GOTOP BUTTON

$(function(){
    $(window).scroll(function(){
        if($('.course-cta').offset().top - 280 <= $(window).scrollTop()){
            $('.gotop').css({
                bottom : '480px',
                position : 'fixed'
            })
        }else{
            $('.gotop').css({
                bottom : '30px',
                position : 'fixed',
            })
        }
    })

    // gotop 버튼
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },800)
    })

    // header 효과
    $(window).on("scroll", function () {
        const st = $(this).scrollTop();

        if (st === 0) {
            $('header').removeClass('on none');
        } else {
            $('header').addClass('on').removeClass('none');
        }
    });

    $('header').mouseenter(function(){
        $('.headerbg').slideDown(200)
        $('.sub').slideDown(100)
        $('header').addClass('on')
    })
    $('header').mouseleave(function(){
        $('.headerbg').slideUp(200)
        $('.sub').slideUp(100)
        // $('header').removeClass('on')
    })

    $("header").mouseleave(function () {
        const st = $(window).scrollTop();

        if (st === 0) {
        $("header").removeClass("on");
        } else {
        $("header").addClass("on");
        }
    });
})