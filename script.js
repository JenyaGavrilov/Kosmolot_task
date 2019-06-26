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











