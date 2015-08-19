(function Calippo($) {
    'use strict';

    var $boxes = $('.boxes'),
        $currentBox = $boxes.eq(0),
        $nextBox = $boxes.eq(1),
        $prevBox = $boxes.eq(0),
        $nav = $('nav'),
        $currentNav = $nav.find('li').eq(0),
        _hash = window.location.hash.replace('#', '').toLowerCase(),
		pause = false;


    function nextItem(e) {
        window.location.hash = "";
        if ($nextBox.length > 0) {
            $prevBox = $currentBox;
            $currentBox = $currentBox.next();
            $nextBox = $currentBox.next().length ? $currentBox.next() : "";
            $currentNav = $currentNav.hasClass('selected') ? $currentNav.next().addClass('selected') : $currentNav.addClass('selected');
            $currentNav.siblings().removeClass('selected');
            $prevBox.removeClass('fadeInUp').addClass('fadeOutDown').on('animationend webkitAnimationEnd', function () {
                window.location.hash = "";
                $prevBox.hide().removeClass('fadeOutDown').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInUp');
            });
        }
    }

    function prevItem(e) {
        if ($prevBox.length > 0) {
            $nextBox = $currentBox;
            $currentBox = $currentBox.prev();
            $prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
            $currentNav = $currentNav.prev().length ? $currentNav.prev().addClass('selected') : $currentNav.removeClass('selected');
            $currentNav.siblings().removeClass('selected');
            window.location.hash = "";
            $nextBox.removeClass('fadeInUp').addClass('fadeOutDown').on('animationend webkitAnimationEnd', function () {
                $nextBox.hide().removeClass('fadeOutDown').off('animationend webkitAnimationEnd');
                $currentBox.show().addClass('fadeInUp');
            });
        }
    }

    function getItem(e) {        								
		if (pause == false) {
			pause = true;
			console.log(pause)
			var $t = $(e.target),
				item = $t.attr('class');
			if ($t.hasClass('selected')) return;		
			$currentNav = $(e.target);
			$currentNav.addClass('selected').siblings().removeClass('selected');			
			$currentBox.addClass('fadeOutDown').on('animationend webkitAnimationEnd', function () {
				console.log($t);
				$currentBox = $('.boxes.'+item);
				$nextBox = $currentBox.next();
				$prevBox = $currentBox.prev('article').length ? $currentBox.prev() : "";
				$(this).hide().removeClass('fadeOutDown').off('animationend webkitAnimationEnd');
				$currentBox.show().addClass('fadeInUp');				
			});		
		}
		setTimeout(function() {
			pause = false;
		},500)			
    }
	
	(function hashLinking(){
		if (_hash.length > 0) { //hash navigations.. might want to deep link or sth
            var $hashBox = $("article:contains('" + _hash + "')");
            if ($hashBox.length) {
                $currentNav = $nav.find("li:contains('" + _hash + "')").addClass('selected');
                $nextBox = $hashBox.next();
                $prevBox = $hashBox.prev();
                $currentBox.removeClass('fadeInUp').addClass('fadeOutDown').on('animationend webkitAnimationEnd', function () {
                    $currentBox.hide().removeClass('fadeOutDown').off('animationend webkitAnimationEnd');
                    $currentBox = $hashBox;
                    $currentBox.show().addClass('fadeInUp');
                });
            }
        }
	})();	
	
    (function initThoBlud() {
        if (!!('ontouchstart' in window)) {
			$boxes.on("swiperight", prevItem);
			$boxes.on("swipeleft", nextItem);
		}
        $nav.on('click', function (event) { getItem(event); });
    })();

})(jQuery);