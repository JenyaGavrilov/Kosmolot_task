var allBets = document.getElementById('all-bets');
	myBets = document.getElementById('my-bets');
	addDiv = document.createElement('div');
	leftColumnInfoTitle = document.getElementsByClassName('left-column-info-title')[0];
	winners = document.getElementById('winners');
	default500 = document.getElementById('default500');
	default1000 = document.getElementById('default100');
	default5000 = document.getElementById('default500');
	leftColumnInfo = document.getElementById('left-column-info');
	leftColumnContent = document.getElementById('left-column-info-content');
	player = document.getElementById('player');
	firstContentLine = document.getElementsByClassName('content-line1');
	bet = document.getElementById('bet');
	betValue = document.getElementById('bet-value');
	playerName = document.getElementById('player-name');
	win = document.getElementById('win');
	winValue = document.getElementById('win-value');
	coeff = document.getElementById('coeff');
	coeffValue = document.getElementById('coeff-value');
	leftColumnNav = document.getElementById('left-column-nav');
	smallText = document.getElementById('small-text');
	leftColumn = document.getElementById('left-column');
	



var titles1 = ["Дата", "Ставка", "Коэфф.", "Выигрыш"];
	titles2 = ["Игрок", "Ставка", "Коэфф.", "Выигрыш"];
	values = ["02.02.2019", "120 UAH", "1.25x", "100", "500 UAH",
	"3.82x",'crocodil'];

var allBetsTmpl = document.getElementsByClassName('content-line1')[0];
	docFrag5 = allBetsTmpl.cloneNode(true);
	docFrag5.querySelector('div.player-name').innerText = titles2[0];


myBets.addEventListener("click", function open () {
	allBets.classList.remove('active');
	winners.classList.remove('active');
	myBets.classList.add('active');
	winnersContent.classList.add('invisible');
	leftColumnInfo.classList.add('invisible');
	

	
	
}
, true);

var winnersContent = document.getElementsByClassName('winners-tmpl')[0];
	avatarImage = document.getElementById('image');
	avatarText = document.getElementById('text').innerText= "crokodil";
	betTitle = document.getElementById('bet-title').innerText = titles1[1];
	betVal = document.getElementById('bet-val').innerText = values[1];
	winTitle = document.getElementById('win-title').innerText = titles1[3];
	winVal = document.getElementById('win-val').innerText = values[4];
	coefTitle = document.getElementById('coeff-title').innerText = titles1[2];
	coeffVal = document.getElementById('coeff-val').innerText = values[5];
	docFrag2 = winnersContent.cloneNode(true);
   	docFrag3 = winnersContent.cloneNode(true);
   	docFrag4 = winnersContent.cloneNode(true);
	docFrag = document.createDocumentFragment();
    divTitle = document.createElement('div').innerHTML = "Top wins in last 24H";


winners.addEventListener("click", function open2 () {
	leftColumnInfo.classList.remove('invisible')
	allBets.classList.remove('active');
	myBets.classList.remove('active');
	winners.classList.add('active');
	leftColumnInfo.insertBefore(leftColumnInfoTitle, leftColumnContent);
	leftColumnInfoTitle.innerText = divTitle;
	leftColumnInfoTitle.style.cssText = "padding-top: 4px; box-sizing: border-box;";
	leftColumnContent.innerHTML = "";
	leftColumnContent.appendChild(docFrag2);
	leftColumnContent.appendChild(docFrag3);
	leftColumnContent.appendChild(docFrag4);
	leftColumnInfo.style.cssText = "height: 450px;";

}, true);


allBets.addEventListener("click", function open3 () {
	allBets.classList.add('active');
	myBets.classList.remove('active');
	winners.classList.remove('active');
	winnersContent.classList.add('invisible');
	leftColumnInfo.appendChild(allBetsTmpl);
	
}
, true)




   


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






/*
var openChat = document.getElementById('open-chat');
	openChat.onclick = function(event) { 
		var chatOnline = document.getElementById('chat-online');
		var target = event.target;
		if (target.id = 'open-chat') {
			chatOnline.classList.add('chat-open');
			openChat.innerHTML= '&#10006';
			openChat.style = "padding-bottom: 5px;"
		} 

		if (chatOnline.style == "background-color: #180732;") {
				chatOnline.classList.remove('chat-open');
			openChat.innerHTML= "&#9660";
		}
		}
-------------------------------------------------------------

Функция клонирования контента 

function cloning () {
	var takeContentFrom = document.querySelector('div.player');
	var cloneContent = takeContentFrom.cloneNode(true);
	leftColumnContent.appendChild(cloneContentFrom); 
}




--------------------------------------------------------



/*var openChat = document.getElementById('open-chat');
	chatOnline = document.getElementById('chat-online');

openChat.addEventListener('click', function () {
	chatOnline.classList.add('chat-open');
	openChat.innerHTML= '&#10006';
	openChat.style = "padding-bottom: 5px;"

	openChat.addEventListener('click', function() {
		chatOnline.classList.remove('chat-open');
		openChat.innerHTML= "&#9660";

	})
})


// Открытие вкладок "все ставки", "Мои ставки", "победители"//

var open = function () {
		allBets.style.cssText = "background-color: #2a105a; color: #e4307a; border-radius: 15px";
		var titles = ['Игрок', 'Ставка', 'Коэфф.', 'Выигрыш'];
		var classes = ['player', 'bet', 'coeff', 'win'];
		for (var i = 0; i < 4; i++) {
		var div = document.createElement('div');
		div.className = classes[i];
		div.innerHTML = titles[i];
		leftColumn.appendChild(div);
		}
	}

var open2 = function () {
		winners.style.cssText = "background-color: #2a105a; color: #e4307a; border-radius: 15px";
		var div = document.createElement('div');
		div.className = 'top-wins';
		div.innerHTML = 'Top wins in last 24 H';
		leftColumn.appendChild(div);
}







*/