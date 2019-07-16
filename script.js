var allBets = document.getElementsByClassName('all-bets')[0];
	myBets = document.getElementsByClassName('my-bets')[0];
	addDiv = document.createElement('div');
	leftColumnInfoTitle = document.getElementsByClassName('left-column-info-title')[0];
	winners = document.getElementsByClassName('winners')[0];
	default500 = document.getElementById('default500');
	default1000 = document.getElementById('default100');
	default5000 = document.getElementById('default500');
	leftColumnInfo = document.getElementById('left-column-info');




	var tab;
	var tabContent;

	window.onload = function () {
		tabContent = document.getElementsByClassName('tabContent');
		tab = document.getElementsByClassName('tab');
		hideTabsContent(1);
	};

	function hideTabsContent(a) {
		for (var i=a; i<tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('active');
		}
	}

	document.getElementById('tabs').onclick = function(event) {
		var target = event.target;
		if (target.className == "tab") {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabsContent(i);
					break;
				}
			}
		}
	}



function showTabsContent (b) {
	if(tabContent[b].classList.contains('hide')) {
		 hideTabsContent(0);
		 tab[b].classList.add('active');
		 tabContent[b].classList.remove('hide');
		 tabContent[b].classList.add('show');
	}
}

var count = 0;
  	countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.value = 500 + count * 100 + '.00';
    }
    function minus(){
      if (count >= 1) {
        count--;
        countEl.value = 500 + count*100 + '.00';
      }  
    }

var count2 = 0;
    var countEl2 = document.getElementById("bet-counter-right");
    function plus2(){
        count2++;
        countEl2.value = 500 + count2 * 100 + '.00';
    }
    function minus2(){
      if (count2 >= 1) {
        count2--;
        countEl2.value = 500 + count2*100 + '.00';
      }  
    }

    var showHide = function () {
    	var openChatField = document.getElementById('chat-field');
    		openChat = document.getElementById('open-chat');
    	if (openChatField.style.display === 'none') {
    		openChatField.style.display = 'block';
    		openChat.innerHTML = "&#10006";
    		openChat.style = "font-size: 10px; padding-bottom: 7px;"
    	}
    	else {
    		openChatField.style.display = "none";
    		openChat.innerHTML = "&#9660";
    		openChat.style = "";
    	}
    }

   
var parent = document.getElementById('left-bet-block');
    	var here = document.getElementById('left-block-1');
    	
    	var clone = parent.cloneNode(true);
    	clone.querySelector('div.bet-counter').classList.add('bet-counter-new');
    	clone.querySelector('div.headline h1').classList.add('headline-new');
    	here.appendChild(clone);



function progress () {
	var elem = document.getElementById('progress-line');
		width = 100;
		id = setInterval(progressStatus, 40); 
		function progressStatus () {
			if (width == 0) {
				clearInterval(id);
			}
			else {
				width--;
				elem.style.width = width + '%';
			}
		}
}

progress()


var timePeriodInMs = 4000;

setTimeout(function() 
{ 
    document.getElementsByClassName("preloader")[0].classList.add('done');
    document.getElementsByClassName("preloader")[0].classList.add('disactive');
}, 
timePeriodInMs);



 var count = 400;
    
    var counter = setInterval(timer, 10); //10 will  run it every 100th of a second
    
    function timer()
    {
        if (count <= 0)
        {
            clearInterval(counter);
            return;
         }
         count--;
         document.getElementsByClassName("timer")[0].innerHTML = count /100 ; 
     }




 setTimeout(display, 4000);

function display () {
  var outerWrapper = document.getElementsByClassName('svgEl')[0].classList.remove('disactive');
}

var rocketFlight = function() {

var counterSvg = 0;

/*  A boolean variable to keep track of the direction we want to travel in 
  true = move to the left, false move to the right */
var direction = true;

/*  First get a reference to the enclosing div and then to
  the 2 svg paths */
var svgContainer = document.getElementById("outerWrapper");
var ns = "http://www.w3.org/2000/svg";
var svg = svgContainer.getElementsByTagNameNS(ns, "path");
/*  the var 'svg' contains a reference to two paths so svg.length = 2
  svg[0] is the straight line and svg[1] is the curved lines */

/*  Now get the length of those two paths */

var curveLength = svg[0].getTotalLength();

/*  Also get a reference to the two star polygons */

var rockets = svgContainer.querySelector("rect");

setTimeout(moveStar,4000)


function moveStar() {
  /*  Check to see where the stars are journeys to determibne 
    what direction they should be travelling in */
  if (parseInt(counterSvg,10) === 1) {
    /* we've hit the end! */
    direction = false;
  } else if (parseInt(counterSvg,10) < 0) {
    /* we're back at the start! */
    direction = true;
  }

  /*  Based on the direction variable either increase or decrease the counter */
  if (direction) {
    counterSvg += 0.0045;
  } 

  /*  Now the magic part. We are able to call .getPointAtLength on the tow paths to return 
    the coordinates at any point along their lengths. We then simply set the stars to be positioned 
    at these coordinates, incrementing along the lengths of the paths */
  
  rockets.setAttribute("transform","translate("+ (svg[0].getPointAtLength(counterSvg * curveLength).x -15)  + "," + (svg[0].getPointAtLength(counterSvg * curveLength).y -15) + ")");
  /*  Use requestAnimationFrame to recursively call moveStar() 60 times a second
    to create the illusion of movement */
  requestAnimationFrame(moveStar);
}
requestAnimationFrame(moveStar);

}

setTimeout(rocketFlight, 4000);

/*-------------------------------------------------------------------*/
