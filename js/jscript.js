'use strict';

function Calippo() {

	var loc = window.location.href.indexOf('poetry') > 0 ? 'poetry' : window.location.href.indexOf('stories') > 0 ? 'stories' : window.location.href.indexOf('films') > 0 ? 'films' : window.location.href.indexOf('news') > 0 ? 'news' : window.location.href.indexOf('pics') > 0 ? 'pics' : window.location.href.indexOf('blog') > 0 ? 'blog' : 'home',
		$istouchdevice = typeof window.ontouchstart != 'undefined',
        $ = jQuery,
		$helper = $('.helper'),
		$d = $(document),
		$w = $(window),
		$b = $('body'),
		width = $w.width(),
		height = $w.height(),
		$next = $('a.next'),
        $prev = $('a.prev'),
        $botty = $('#botty'),
        $boxes = $('.boxes'),
        timer = 1,
		$nav = $('nav'),
		_hash = window.location.hash,
		cacheDate = localStorage.getItem('cache'),
		cakes = {};    


		
    function nextItem(e) {
        window.location.hash = "";
        if (cakes.next('.boxes').length) {
            cakes.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd', function () {
                window.location.hash = "";
                cakes = $(this).next();
                window.localStorage.setItem('box' + loc, cakes.attr('class').split(" ")[0].replace('--', ''));
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
                window.localStorage.setItem('box' + loc, cakes.attr('class').split(" ")[0].replace('--', ''));
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
            window.localStorage.setItem('box' + loc, cakes.attr('class').split(" ")[0].replace('--', ''));
            $(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd');
            cakes.show().addClass('fadeInLeftBig');
        });
    }



    function getSizes() {
        width = $w.width().toString();
        var w = window.localStorage.getItem('widths');
        if ((w !== null && w !== width) || w === null) {
            window.localStorage.setItem('widths', width);
            window.location.reload();

        }
    }
	
	
	function init(loc) {
		
        $botty.on('mouseover touchstart', function () {
            $(this).addClass("upIt");
        }).on('mouseout', function () {
            $(this).removeClass("upIt");
        });

        $b.css({ 'width': width, 'height': height });

        if (cacheDate !== "badgerHarvest") {
            window.localStorage.clear();
            window.localStorage.setItem('cache', "badgerHarvest");
        }

        if (_hash !== "" && _hash !== "#") {
            localStorage.setItem('box' + loc, _hash.replace('#', '').toLowerCase());
        }

        var box = window.localStorage.getItem('box' + loc);
        if (box !== null) {
            cakes = $('.boxes.' + box).show().addClass('fadeInRightBig visible');
            if ($('.boxes').eq(0).hasClass(box)) {
				$prev.removeClass('opac');
			}
            $('nav li.' + box).addClass('selected');
        } else {
            cakes = $('.boxes').eq(0).show().addClass('fadeInRightBig');
            window.localStorage.setItem('box' + loc, cakes.attr('class').split(" ")[0].replace('--', ''));
            $('nav li:first').addClass('selected');
        }

        $next.on('click', nextItem);
        $prev.on('click', prevItem);
        $boxes.on("swiperight", prevItem);
        $boxes.on("swipeleft", nextItem);

        $w.on('resize', function (event) {
            clearTimeout(timer);
            timer = setTimeout(getSizes, 200);
        });

        if ($istouchdevice) {
            $('.helper').show();
            setTimeout(function () {
                $helper.fadeOut(500);
            }, 3000);
        }

        $($nav).on('click', function (event) {
            var link = ($(event.target).attr('class'));
            getItem(event, link);
            $(event.target).addClass('selected').siblings().removeClass('selected');
        });

        window.localStorage.setItem('widths', width);

        $('p.go').click(function (e) {
            e.preventDefault();
            $('body').addClass('fadeOutUpBig animated').on('animationend webkitAnimationEnd', function () {
                window.location.href = $(e.target).parents('a').attr('href');
            });
        });

    }

    return {
        init: init
    };

}

var trouser = new Calippo();