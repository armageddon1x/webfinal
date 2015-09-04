$(document).ready(function(){
	//beginning

	//HP values
	var HP_enemy=500;
	var HP_enemy_max=HP_enemy;

	var HP_ally_max=100;
	var HP_ally=HP_ally_max;

	//MP values
	var MP_enemy=100;
	var MP_enemy_max=MP_enemy;

	var MP_ally_max=100;
	var MP_ally=MP_ally_max;

	//this checks for either enemy HP or ally HP is zero
	function game(){
		var gameUpdate = setTimeout(function(){

			console.log( "checking...");
			magecraft();
			dragon();

			if( HP_enemy <= 0 ){
				alert( "You win");
			}else if(HP_ally<=0){
				alert('you lose');
			}else{
				game();
			}

		}, 5500)
	}

	game();

	//assigning values to the bar values
	$("#HP_ally_max").html(HP_ally_max);
	$("#MP_ally_max").html(MP_ally_max);

	$("#HP_ally").html(HP_ally);
	$("#MP_ally").html(MP_ally);

	$("#HP_enemy_max").html(HP_enemy_max);
	$("#MP_enemy_max").html(MP_enemy_max);

	$("#HP_enemy").html(HP_enemy);
	$("#MP_enemy").html(MP_enemy);

	//var enemy=true;
	//var ally=true;

	//attack values (current attack stored here)
	var attack_enemy;
	var attack_ally;

	//magic attack values
	var fire=50;
	var water=200;
	var air=50;
	var earth=50;

	//mana values
	var fire_mana=5;
	var water_mana=5;
	var air_mana=5;
	var earth_mana=5;

	//clicking first on the magic selector and then click on the spell to use
	function magecraft(){
		$("ul li:nth-child(2)").click(function(){

		//makes each magic click only happen once
		$("#magic li").unbind('click');

		//makes magic menu appear
		$("#magic").removeClass("none");

		//click on magic menu
		$("#magic").click(function(){
			//this makes magic menu disappear
			$("#magic").addClass("none");
		});

		//this get the attack name once you click on the attack
		$("#magic li").click(function(){
			var attack_name=$(this).attr("id");
			console.log(attack_name)

			//beginning
			console.log("before attack "+HP_enemy);
			console.log("mana reserve: "+MP_ally);
			
			//the attack value becomes the move that was chosen for the turn
			attack_ally=eval(attack_name);
			alert("cast "+attack_name);
			alert(attack_ally);

			//loss of enemy HP
			HP_enemy=HP_enemy-attack_ally;
			console.log("after attack "+HP_enemy);

			//mana usage
			MP_ally=MP_ally-eval(attack_name+"_mana");
			console.log("mana cost " +attack_name+"_mana");
			console.log("mana cost " +eval(attack_name+"_mana"));
			console.log("MP remaining: "+MP_ally)

			console.log("hp enemy "+HP_enemy);
			console.log("hp enemy max "+HP_enemy_max);
			console.log("ratio"+((HP_enemy*100)/HP_enemy_max));

			//update HP and MP meters
			$("#MP_ally").html(MP_ally);
			$("#HP_enemy").html(HP_enemy);
			progress(MP_ally, $('#MP_ally_progress_bar'));
			progress(((HP_enemy*100)/HP_enemy_max), $("#HP_enemy_progress_bar"));

			//end

			$("#magic").addClass("none");
		});
	});

	};

	var dragon_attack;

	function dragon(){
		//beginning

		var dark_purge=50;			//selector numbers will be 0,1,2,3
		var starfall=75;				//4,5,6
		var grand_cross=100;		//7,8
		var armageddon=200;			//9

		var x = Math.floor((Math.random() * 10));
		console.log(x);

		if (x<4){
			alert("death purge")
		}else if(x<7&&x>3){
			alert("starfall")
		}else if(x===7||x===8){
			alert("grand cross")
		}else{
			alert("armageddon")
		};

		//end
	};

	//click on fire, attack executes
	/*$("#fire").click(function(){
		console.log("before attack "+HP_enemy);
		console.log("mana reserve: "+MP_ally);
		alert("cast Fire");
		//the attack value becomes the move that was chosen for the turn
		attack_ally=fire;

		//loss of enemy HP
		HP_enemy=HP_enemy-attack_ally;
		console.log("after attack "+HP_enemy);

		//mana usage
		MP_ally=MP_ally-fire_mana;
		console.log("MP remaining: "+MP_ally)

		console.log("hp enemy "+HP_enemy);
		console.log("hp enemy max "+HP_enemy_max);
		console.log("ratio"+((HP_enemy*100)/HP_enemy_max));

		//update HP and MP meters
		$("#MP_ally").html(MP_ally);
		$("#HP_enemy").html(HP_enemy);
		progress(MP_ally, $('#MP_ally_progress_bar'));
		progress(((HP_enemy*100)/HP_enemy_max), $("#HP_enemy_progress_bar"));

		//check to see if enemy has zero HP or less
		if (HP_enemy<0){
			alert("you defeated the enemy")
		};

		//check to see if ally has zero MP or less
		if (MP_ally<0){
			alert("not enough MP")
		};
	});*/

	//progress bar
	function progress(percent, $element) {
    var progress_bar_width=percent*$element.width()/100;
    $element.find('div').animate({width: progress_bar_width});
	}

	//audio loop
	var audio_file = new Audio('sounds/bgm.mp3');
	audio_file.play();
	audio_file.addEventListener('timeupdate', function(){
  var buffer = 4
  if(this.currentTime>(this.duration-buffer)){
      this.currentTime = 25
      this.play()
      console.log(this.currentTime);
      console.log(this.duration-buffer);
      console.log(this.duration);
      console.log(buffer);
  }}, false);

	//end
});