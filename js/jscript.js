'use strict';

(function ($) {
    $.fn.whelkit = function (text) {
        return text.replace(/[^a-z,^A-Z]/g, '').replace('selected', '').replace('circle', '').slice(0, 20);
    };
}(jQuery));



function Calippo() {

    var loc = window.location.href.indexOf('poetry') > 0 ? 'poetry' : 
        window.location.href.indexOf('stories') > 0 ? 'stories' :
        window.location.href.indexOf('films') > 0 ? 'films' : 
        window.location.href.indexOf('news') > 0 ? 'news' : 
        window.location.href.indexOf('pics') > 0 ? 'pics' : 
        window.location.href.indexOf('blog') > 0 ? 'blog' : 'home',
        
        $istouchdevice = typeof window.ontouchstart !== 'undefined',
        $helper = $('.helper'),
        $d = $(document),
        $b = $('body'),
        $next = $('a.next'),
        $prev = $('a.prev'),
        $botty = $('#botty'),
        $boxes = $('.boxes'),
        timer = 1,
        $nav = $('nav'),
		$go = $('p.go'),
        _hash = window.location.hash,
        cacheDate = localStorage.getItem('cache'),
        cakes = {};



    function nextItem(e) {
        window.location.hash = "";
        if (cakes.next('.boxes').length) {
            cakes.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                window.location.hash = "";
                cakes = $(this).next();
                $('.selected').removeClass('selected');
                $nav.find('.' + cakes.attr('class').split(" ")[0].replace('--', '')).addClass('selected');
                //window.localStorage.setItem(`box  ${loc}`, cakes.attr('class').split(" ")[0].replace('--', ''));
                $(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd')
                    .next('.boxes').show().addClass('fadeInRightBig');
                if (!cakes.next('.boxes').length) {
                    $next.addClass('opac');
                }
            });
            $prev.removeClass('opac');
        }
    }



    function prevItem(e) {
        window.location.hash = "";
        if (cakes.prev('.boxes').length) {
            cakes.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutRightBig').on('animationend webkitAnimationEnd', function () {
                cakes = $(this).prev();
                $('.selected').removeClass('selected');
                $nav.find('.' + cakes.attr('class').split(" ")[0].replace('--', '')).addClass('selected');
                //window.localStorage.setItem(`box  ${loc}`, cakes.attr('class').split(" ")[0].replace('--', ''));
                $(this).hide().removeClass('fadeOutRightBig').off('animationend webkitAnimationEnd')
                    .prev('.boxes').show().addClass('fadeInLeftBig');
                if (!cakes.prev('.boxes').length) {
                    $prev.addClass('opac');
                }
            });
            $next.removeClass('opac');
        }
    }



    function getItem(e, item) {
        e.preventDefault();
        window.location.hash = "";
        $('.fadeInRightBig, .fadeInLeftBig').removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
            cakes = $('.boxes.' + item);
            //window.localStorage.setItem(`box  ${loc}`, item.replace('.boxes.', ''));
            $(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
            cakes.show().addClass('fadeInLeftBig');
        });
    }

	

    function init(loc) {

        if (_hash !== "" && _hash !== "#") {
            var aHash = _hash.replace('#', '').toLowerCase();
            if ($('.boxes.' + aHash).length) {
                cakes = $('.boxes.' + aHash).show().addClass('fadeInRightBig visible');
                if ($boxes.eq(0).hasClass(aHash.toLowerCase()) && $prev.length) {
                    $prev.removeClass('opac');
                }
                $nav.find('.'+aHash).addClass('selected');
            } else {
                cakes = $boxes.eq(0).show().addClass('fadeInRightBig');
            }
        } else {
            cakes = $('.boxes').eq(0).show().addClass('fadeInRightBig');
        }

        $next.on('click', nextItem);
        $prev.on('click', prevItem);
        $boxes.on("swiperight", prevItem);
        $boxes.on("swipeleft", nextItem);

        setTimeout(function () {
            $helper.fadeOut(500);
        }, 3000);

        $nav.on('click', function (event) {
            var link = ($(event.target).attr('class'));
            if (link.indexOf('selected') > 0) {
                return
            }
            getItem(event, link);
            $(event.target).addClass('selected').siblings().removeClass('selected');
        });


        $(document).on('click', '.go', function (e) {
            e.preventDefault();
            $b.addClass('fadeOutUpBig animated').on('animationend webkitAnimationEnd', function () {
                window.location.href = $(e.target).parents('a').attr('href');
            });
        });

    }

    return {
        init: init
    };

}

var trouser = new Calippo();