var app = angular.module("whelk", ["ngSanitize"]);


angular.module('whelk').directive(["ngAnimate"]);


app.controller('MainController', ['$scope', function($scope) {
	$scope.h1 = 'ptere hralk';
	$scope.activeSection = 0;
	$scope.activePoem = 0;
	
	$scope.changeActiveSection = function(index) { 
	    $scope.activeSection = index;
		$scope.sections[index].showContent = false;
	};	
	
	$scope.navs = [ 
	{
	    link: 'home'
	},
	{
		link : 'poetry'
	},
	{
		link : 'whelk'
	},
	{
		link : 'films'
	},	
	{
		link : 'space sloth'
	},		
	{
		link : 'stories'
	},		
	{
		link : 'pics'
	},		
	]

	
	$scope.sections = [
	{
	  name : 'Welcome the flip to my thought trolley!',
	  href: '',
	  cover: '/img/welcometoJsteve.jpg',
	  alt: 'welcome to jsteve.uk',
	  desc: "<p>Who am I, you sweet sweet sack of lovely? Caster of Hexes, cuckolder of mind-kettles, vin de table. I am none of these things.</p>" +
	      "<p>Poet, Dovahkiin, mage, film director, astral projectionist, part-time badger farmer, moth-worrier and table." +
	  "These are just some of the things that people can be. Some of them are also a Jon Stevens, which is what I usually am too.</p>"+
	  "<p>-- this is where my mind shouts fall out -- </p><br><p>FEEL FREE TO HAVE A LOOK ABOUT you coagulated glove-toaster. Sometimes things " +
	  "here aren't that rubbish. </p><p>you can SWIPE the screen like you was goin nutz on the Tinder. Or click the navigations. OR " +
	  " go away. Or wotevs. <h3>New Things</h3><p>NEW THINGS ---> </p><br><p><a class='link' href='/films/index.html#solitude'>Solitudes - a 5 hour one-man stageplay </a></p>" +
      "<p><a class='link' href='junk/buzzfeedheadlinegenerator.html'>Buzzfeeds Generator Thing</a></p><p><a class='link' href='pics/#bean'>Bean of Ambivalence (Tate)" +
        "</a></p><img src='/img/beanOfAmbivalence.jpg' alt='Bean of Ambivalence'/>",
	  templateUrl: '',
	  showContent: false
    },
	{
	  name : 'Poetries',
	  href: 'http://www.thevaguewhelk.com/poetry',	  
	  cover: '/img/banners/poetry.jpg',
	  alt: 'welcome to jsteve.uk',
	  desc : "<p>When the poetries falls out of my face part, approximately 39% gets caught in my beard, so I shake it off into the flip-matrix where it can lead a happier life. " +
             "(The rest I hide where the moth-bodies are)If the Twitter is 300 million identical souls shouting desperately and incoherently into the enormous black void of the eternal gulf of cosmic nihility, my poetry hive is a sweet " + "meaningful sherbet lemon tree humming quiet sense in a profound but moderately-sized corn field with a nice cat in it.<br>" +
				"<p class='go'>Go and look at some of the poetries you lovely lovely barrel of bitch --></p><br>",
	  templateUrl: 'poetry/index.html',
	  showContent: false
	},
	{
	  name : 'Bio of a fully Jon Stevens',
	  href: 'http://www.thevaguewhelk.com/bio',	  
	  cover: '/img/hallwayPosters1.jpg',
	  alt: 'welcome to jsteve.uk',
	  desc : "<p>Poetician, Guru, night-time Russian boxer, Liverpool striker, Man About Town 1998 (Croydon), sometime-moth-destroying trouserless sage:  I am many things to many people. Let me die in in the barrel!</p>" +
			"<p class='go'>My life story you string of ham holding a bitch --></p>",
	  templateUrl: 'bio/index.html',
	  showContent: false
	},
	{
	    name: 'Films',
	    href: 'http://www.thevaguewhelk.com/bio',
	    cover: '/img/films/war-badger2.jpg',
	    alt: 'War Badger 2',
	    desc: "<p>A series of films spanning a deflating 12 year career as a screenwriter/director in papua new guinea.</p><br> " +
            "<p>Some of these films were severely not that good, but that all came from deep within, like heart-coal, so judge not negatively, lest yea" +
            "be buried in some crows outside the Penge Conservative Club with all the benefits people.</p><p class='go'>Go and look at the films you lovely pile of bitch --></p>",
	    templateUrl: 'poetry/index.html',
	    showContent: false
	},
	{
	    name: 'Space Sloth',
	    href: 'http://www.thevaguewhelk.com/spaceSloth/index.html',
	    cover: '/img/spaceSloth/insignificance.jpg',
	    alt: 'The Space Sloth speeketh!',
	    desc: "<p>Wisdimz from the Great Space Sloth! He will blow your mind like a sex-worker therapist with a stun-enema. That is a mind properly blown. His words will almost certainly make your wig go back son!</p>" +
			  "<p class='go'>Go and heed the Space Sloth's words you radish patch and herb garden bitch --></p><br>",
	    templateUrl: 'poetry/index.html',
	    showContent: false
	},
	{
	    name: 'Short stories',
	    href: 'http://www.thevaguewhelk.com/stories/index.html',
	    cover: '/img/films/war-badger2.jpg',
	    alt: 'The Space Sloth speeketh!',
	    desc: "<p>Fables from the broken witterings of a troubled sleep that occasionally make wet and always eventually engage like a troubled gear.</p><br>" +
				"<p class='go'>Go and look at some of the stories you uncultured but attractive bitch! --></p>",
	    templateUrl: 'poetry/index.html',
	    showContent: false
	},
	{
	    name: 'Doodles',
	    href: 'http://www.thevaguewhelk.com/pics/index.html',
	    cover: '/img/biscuitTrousers3.jpg',
	    alt: 'Biscuit Trousers',
	    desc: "<p>Pictures can engage you like a jealous rage, or they can pass by unnoticed like a shopping trolley with new wheels. Either way, potatoes.</p><br>	" +						
			  "<p class='go'>Go and look on the doodles --></p><br>",
	    templateUrl: 'poetry/index.html',
        showContent: false
	}
	]

	$scope.showContent = function (index) {
	    $scope.sections[index].showContent = !$scope.sections[index].showContent;
	}
	
	
	$scope.poems = [
		{
		title: 'My face',
		content: '<p>ALL OVER MY FACE<br>'+
			'<em>like a finger</em><br>'+
			'MY FACE IS NOT BRAILLE, MADAM<br>'+
			'please evacuate my face<br>'+
			'<em>Do not linger</em><br>'+
			'YOU READ ME INCORRECTLY<br>'+
			'I am for the fully sighted and the polite only<br>'+
			'SEE MY FACE, SEE IT CLEARLY<br>'+
			'for it is a FACE, round thing on a neck part<br>'+
			'<em>not a resting place for digits of the lonely!</em><br><br>'
		},
		{
		title: 'A chimeric music man',
		content: '<h3><em>Wouldst thou discredit me with your fibs?</em></h3>'+
			'<p>A man with features<br>'+
			'taken from instrument (crept onto a face)<br>'+
			'I little understand<br>'+
			'what he but meant<br>'+
			'"Wouldst thou buy my frogs?"<br>'+
			'"Your nose is a trumpet?"<br>'+
			'"Wouldst thou buy my socks?<br>'+
			'"Your mouth reedy clarinet!?"<br>'+
			'<em>"Circumcise your insensitive jibes, and speak of business matters alone, lest I strike you down like a weasel earthquake!"</em></p>	'+
			'<p>my suspicion allayed<br>'+
			'as warm concrete batter<br>'+
			'(with no apparent incline)<br>'+
			'I would buy many elements<br>'+
			'it would attempt to flatter<br>'+
			'to assign any real function<br>'+
			'trinkets, a trifle, a bibelot<br>'+
			'"This molecule scraper, it lacks for a handle"<br>'+
			'"Mine pancreas resembles a hammond organ?"<br>'+
			'"Your vibrating paintbursh, perhaps missold?"<br>'+
			'"You of weakened wit may not comprehend functions beyond your field, desist your ignoble ignominy and cease your libellous leakage, '+'lest I smite you as a bongo botherer"</p>'+
		
			'<p>It was thus I was misled<br>'+
			'bereft of money and reputation<br>'+
			'(that I deserved mostly)<br>'+
			'laughed out of town<br>'+
			'home and even yet police station<br>'+
			'"His face was banjolele!"<br>'+
			'"You speak asunder."<br>'+
			'"His eyes mere flaps of tamborine"<br>'+
			'"Your insolence a wonder. Cease your witterings lest I set about you like a warren-full of beavers; Get out!"<br><br>'+
			'It was thus I learned I was irretrievably, inescapably insane.'+
			'<em>fin</em>'+
			'</p>'+
			'<img class="img-responsive" src="/img/chimericmusicman.jpg" alt="chimerica music man, poem"/>'    	
		},
		{
		title: 'Dental Negligence',
		content: '<p>Dental Negligence<br>'+
			'is not a hippo<br>'+
			'<em>despite all evidence to the contrary</em><br><br>'+
			'<em>fin</em></p>'
		},
		{
		title:'What',
		content: '<p>fate, loftily conspired<br>'+
			'lucidity had yet fluffed those pillows <br>'+
			'called upon like some pavement<br>'+
			'with a face lacking grip, stability and litter<br>'+
			'he expected very little from that encounter<br>'+
			'setting fire to the moth was the only way out<br>'+
			'sorry<br><br>'+
			'<em>fin</em>'+
			'</p>'
		},
    	{	
		title: 'Fourth Trouser and Sadly the moth',
		content: '<p>A stride beyond his usual dominion<br>'+
			'legs confounded, pockets compounded<br>'+
			'incapable of valued opinion - <br>'+
			'being so wrought<br>'+
			'Fourth Trouser had thought, <br>'+
			'VERY LITTLE OF NOTE, <br>'+
			'for three hundred years.<br><br>'+

			'he finished eating the moth Sadly<br>'+
			'and sliced himself in the seat several times before hiding the body from the authorities.<br><br>'+
			'<em>fin</em></p>'
		}
	]

	$scope.changeActivePoem = function(index) { 
	    $scope.activePoem = index;
	};		
}]);


