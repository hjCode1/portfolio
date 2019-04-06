$(document).ready(function(){
    //메뉴 버튼
    $('#menu_ico').click(function(){
        $(this).toggleClass('open');

        setTimeout(function() {
            $('#side_nav_bg').toggleClass('on');
        }, 300);

        if ($('#side_nav_bg').hasClass('on')) {
            $('#side_nav').removeClass('on');
        } else {
            setTimeout(function() {
                $('#side_nav').addClass('on');
            }, 500);
        }
    });

    //헤더 스크롤 show / hide
    function headerShow(){
        let lastScroll = 0;
        $(window).scroll(function(){
            const st = $(this).scrollTop();
            if( st > lastScroll ){
                $('header').addClass('on');
            }
            else{
                $('header').removeClass('on');
            }
            lastScroll = st;
        });
    };
    headerShow();
    //work move
    function moveObj(){
        const move = 3;
        const rotate = 3;

        $('.layer').each(function() {
            $(this).mousemove(function(e) {
                const docX = $(this).width();
                const docY = $(this).height();
                let moveX = (e.offsetX - docX / 2) / (docX / 2) * - move;
                let moveY = (e.offsetY - docY / 2) / (docY / 2) * - move;
                let rotateY = (e.offsetX / docX * rotate * 2) - rotate;
                let rotateX = -(e.offsetY / docY * rotate * 2) - rotate;
                
                $(this).children('a').css({
                    'left': moveX + 'px',
                    'top': moveY + 'px',
                    'transform': 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)'
                });
                
                $(this).children('.work_title').css({
                    'right': moveX + 'px',
                    'bottom': moveY + 'px',
                    'transform': 'rotateX(' + rotateX + ' deg) rotateY(' + rotateY + ' deg)'
                });
            });
        });
    }
    $('.layer').mouseenter(function(){
        moveObj();
        $(this).children('a').css({
            'willChange': 'transform, left, top'
        });
    });
    $('.layer').mouseleave(function () {
        $(this).children('a').css({
            'left': 0,
            'top': 0,
            'transform': 'rotateX(0) rotateY(0)',
            'willChange': 'auto'
        });
     });

});