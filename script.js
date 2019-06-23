var allBets = document.getElementById('all-bets');
	myBets = document.getElementsByClassName('my-bets');
	addDiv = document.createElement('div');
	leftColumn = document.getElementById('left-column-info2');
	winners = document.getElementById('winners');



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

allBets.addEventListener("click", open, false);


winners.addEventListener("click", open2, false);

 	var count = 0;
    var countEl = document.getElementById("count");
    function plus(){
        count++;
        countEl.value = 500 + count * 100;
    }
    function minus(){
      if (count >= 1) {
        count--;
        countEl.value = 500 + count*100;
      }  
    }

var count2 = 0;
    var countEl2 = document.getElementById("bet-counter-right");
    function plus2(){
        count2++;
        countEl2.value = 500 + count2 * 100;
    }
    function minus2(){
      if (count2 >= 1) {
        count2--;
        countEl2.value = 500 + count2*100;
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


/*
 var betCounter = document.getElementById('count');

 var count = 1;


 function plus() {
 	count++;
 	count.value = count;
 }

 function minus() {
 	if (count > 1) {
 	count--
 	count.value = count;
 }
 }


/*allBets.addEventListener('click', function (){
	allBets.style.cssText = "background-color: #2a105a; color: #e4307a; border-radius: 15px";
	var titles = ['Игрок', 'Ставка', 'Коэфф.', 'Выигрыш'];
	var classes = ['player', 'bet', 'coeff', 'win'];
	for (var i = 0; i < 4; i++) {
		var div = document.createElement('div');
		div.className = classes[i];
		div.innerHTML = titles[i];
		leftColumn.appendChild(div);
	}

	});


 

winners.addEventListener('click', function (){
	winners.style.cssText = "background-color: #2a105a; color: #e4307a; border-radius: 15px";

});

*/

	




