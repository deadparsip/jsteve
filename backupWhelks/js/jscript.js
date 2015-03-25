function Calippo(cakes, stoppers) {

	var cakes, $w,$d,$b,width,$next,$prev, $boxes; // Closures stole my hamsters!
	
	var loc = window.location.href.indexOf('poetry') > 0 ? 'poetry' : 
			window.location.href.indexOf('stories') > 0 ? 'stories' : 
			window.location.href.indexOf('films') > 0 ? 'films' :
			window.location.href.indexOf('news') > 0 ? 'news' :
			window.location.href.indexOf('pics') > 0 ? 'pics' : 
			window.location.href.indexOf('pics') > 0 ? 'blog' : 'blog';
	
	function init(loc) {
	   var $istouchdevice = (typeof window.ontouchstart != 'undefined') ? true : false;
	   
	    $d = $(document), $w=$(window), $b=$('body'), 
	    width = $w.width(), $next = $('#next'), $prev = $('#prev'), $botty = $('#botty'),
	    $boxes = $('.boxes');
	    timer=1;
		
	
	    $botty.on('mouseover touchstart',function(){
	        $(this).addClass("upIt");
	    }).on('mouseout',function(){
	        $(this).removeClass("upIt");
	    });
		   
		$b.css('width',width);
		
		var box = window.localStorage.getItem('box'+loc);
		if (box != null) {
				var match = false;
				$boxes.each(function(){
					if ($(this).find('h2').text() == box) {
						$(this).show().addClass('fadeInRightBig visible');
						cakes = $(this);
						$('#prev.opac').removeClass('opac');
						match = true;
					}
				});
				if (match == false) {					
					localStorage.setItem('box'+loc,null);
					cakes = $('.boxes').eq(0).show().addClass('fadeInRightBig');
				}
		} else {
			cakes = $('.boxes').eq(0).show().addClass('fadeInRightBig');
		}
		
		$next.on('click', nextItem);
		$prev.on('click', prevItem);
		
		$d.on("swiperight", prevItem);
		$d.on("swipeleft", nextItem);
		
		
    	$w.on('resize',function (event) {
        	clearTimeout(timer);
        	timer = setTimeout(getSizes, 200);
    	});
		
		if ($istouchdevice) {
			$('.helper').show();
		}
		
	}
	
	function nextItem(e) {
		e.preventDefault();
			
		if (cakes.next().length) {
			console.log(cakes.next());
			cakes.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutLeftBig').on('animationend webkitAnimationEnd',function(){
				cakes = $(this).next();
				window.localStorage.setItem('box'+loc,cakes.find('h2').text());
				$(this).hide().removeClass('fadeOutLeftBig').off('animationend webkitAnimationEnd')
				.next('.boxes').show().addClass('fadeInRightBig');
				if (!cakes.next().length) {
					$next.addClass('opac');
				}
			});	
			$('#prev.opac').removeClass('opac');
		}
	}
	
	function prevItem(e) {
		e.preventDefault();
			
		console.log(loc);
		if (cakes.prev().length) {
			cakes.removeClass('fadeInLeftBig fadeInRightBig').addClass('fadeOutRightBig').on('animationend webkitAnimationEnd',function(){
				cakes = $(this).prev();
				window.localStorage.setItem('box'+loc,cakes.find('h2').text());
				$(this).hide().removeClass('fadeOutRightBig').off('animationend webkitAnimationEnd')
				.prev('.boxes').show().addClass('fadeInLeftBig');
				if (!cakes.prev().length) {
					$prev.addClass('opac');
				}
			});			
			$('#next.opac').removeClass('opac');
		}
	}	
	
	function getSizes() {
		width = $w.width();
		console.log(width);
		window.location.reload();
	}
	
	return {
		init: init
	}

} 

var trouser = new Calippo(1,3);



