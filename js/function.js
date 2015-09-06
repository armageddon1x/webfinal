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
	// function game(){
	// 	var gameUpdate = setTimeout(function(){

	// 		console.log( "checking...");
	// 		menu();
	// 		submenu();
	// 		dragon();

	// 		if( HP_enemy <= 0 ){
	// 			alert( "You win");
	// 		}else if(HP_ally<=0){
	// 			alert('you lose');
	// 		}else{
	// 			game();
	// 		}

	// 	}, 5000)
	// }

	// game();

//counter for menu cycling
	var i=0;
	var turn=0;
	if (HP_enemy!==0 && HP_ally!==0){
		menu();
		submenu();
		turn++;
		alert(turn);
		alert("HP enemy"+HP_enemy);
		alert("HP ally"+HP_ally);
	}else if (HP_enemy<=0){
		alert("you win");
	}else{
		alert("you lose");
	}

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

/**************************************************************************/
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

	//battojutsu attack values
	var inazama=50;
	var shuntensatsu=50;
	var iaido=50;
	var ameterasu=50;

	//mana values
	var inazama_mana=5;
	var shuntensatsu_mana=5;
	var iaido_mana=5;
	var ameterasu_mana=5;

	//special attack values
	var swordslash=50;
	var bladebarrage=50;
	var pierce=50;
	var cutter=50;

	//mana values
	var swordslash_mana=5;
	var bladebarrage_mana=5;
	var pierce_mana=5;
	var cutter_mana=5;

	//program attack values
	var steelpunch=50;
	var platinumslash=50;
	var titaniumblow=50;
	var goldensmash=50;

	//mana values
	var steelpunch_mana=5;
	var platinumslash_mana=5;
	var titaniumblow_mana=5;
	var goldensmash_mana=5;

	

	var animation;

	// //this cycles through the menus
	// function menu(){
	// 	//

	// 	if(i===0){
	// 		console.log("0");
	// 		i=1;
	// 		//removes the none class from the first menu
	// 		$("#options").removeClass("none");
	// 	}else if (i===1){
	// 		console.log("1");
			
	// 		//removes the first menu
	// 		$("#options").addClass("none");
	// 		//displays the skills menu
	// 		$("#magic").removeClass("none");
	// 		//click on skills menu to make attack
	// 		$("#magic").click(function(){
	// 			i=2;

	// 		//this makes the skills menu disappear
	// 		$("#magic").addClass("none");
	// 		//this makes the next menu appear
	// 		$("#options2").removeClass("none");
	// 	});

	// 	}else if(i===2){
	// 		console.log("2");
			

	// 		//removes second menu
	// 		$("#options2").addClass("none");
	// 		//displays the skills menu
	// 		$("#batto").removeClass("none");
	// 		//click on skills menu to make attack
	// 		$("#batto").click(function(){
	// 			i=3;
	// 			//attack animation
	// 			$("#yuzu_attack").show();
	// 			setTimeout(function(){
	// 					$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
	// 		      $('#yuzu_attack').hide();
	// 				},2050);

	// 		//this makes the skills menu disappear
	// 		$("#batto").addClass("none");
	// 		//this makes the next menu appear
	// 		$("#options3").removeClass("none");
	// 	});
	// 	}else if(i===3){
	// 		console.log("3");

	// 		//removes third menu
	// 		$("#options3").addClass("none");
	// 		//displays the skills menu
	// 		$("#special").removeClass("none");
	// 		//click on skills menu to make attack
	// 		$("#special").click(function(){
	// 			i=4;
	// 		//this makes the skills menu disappear
	// 		$("#special").addClass("none");
	// 		//this makes the next menu appear
	// 		$("#options4").removeClass("none");
	// 		});
	// 	}else{
	// 		console.log("4");
			
	// 		//removes fourth menu
	// 		$("#options4").addClass("none");
	// 		//displays the skills menu
	// 		$("#program").removeClass("none");
	// 		//click on skills menu to make attack
	// 		$("#program").click(function(){
	// 			i=1;
	// 		//this makes the skills menu disappear
	// 		$("#program").addClass("none");
	// 		//this makes the first menu appear again
	// 		$("#options").removeClass("none");
	// 		});
	// 	};
	// 	//
	// };

/**************************************************************************/
	//this cycles through the menus
	function menu(){
		//begin

		if(i===0){

			console.log("i is "+i);

			//counter
			i=1;

			//removes the none class from the first menu
			$("#options").removeClass("none");

		}else if (i===1){

			console.log("i is "+i);

			$("#magecraft").click(function(){
				//removes the first menu
				$("#options").addClass("none");
				//displays the skills menu
				$("#magic").removeClass("none");
				//counter
				i=2;
			});
			
			//click on skills menu to make attack
			$("#magic").click(function(){

				console.log("i is "+i);

				//this makes the skills menu disappear
				$("#magic").addClass("none");
				//this makes the next menu appear
				$("#options2").removeClass("none");
				//counter
				i=3;
			});

		}else if(i===3){

			console.log("i is "+i);

			$("#battojutsu").click(function(){
				//removes second menu
				$("#options2").addClass("none");
				//displays the skills menu
				$("#batto").removeClass("none");
				//counter
				i=4;
			});
			
			//click on skills menu to make attack
			$("#batto").click(function(){

				console.log("i is "+i);

				//attack animation
				$("#yuzu_attack").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
					},2050);
				//end animation

				//this makes the skills menu disappear
				$("#batto").addClass("none");
				//this makes the next menu appear
				$("#options3").removeClass("none");
				//counter
				i=5;
			});

		}else if(i===5){

			console.log("i is "+i);

			$("#special_moves").click(function(){
				//removes third menu
				$("#options3").addClass("none");
				//displays the skills menu
				$("#special").removeClass("none");
				//counter
				i=6;
			});
			
			//click on skills menu to make attack
			$("#special").click(function(){

				console.log("i is "+i);

				//this makes the skills menu disappear
				$("#special").addClass("none");
				//this makes the next menu appear
				$("#options4").removeClass("none");
				//counter
				i=7;
			});

		}else{

			console.log("i is "+i);

			$("#program_exe").click(function(){
				//removes fourth menu
				$("#options4").addClass("none");
				//displays the skills menu
				$("#program").removeClass("none");
				//counter
				i=8;
			});
			
			//click on skills menu to make attack
			$("#program").click(function(){

				console.log("i is "+i);

				//this makes the skills menu disappear
				$("#program").addClass("none");
				//this makes the first menu appear again
				$("#options").removeClass("none");
				//counter
				i=1;
			});

		};
		//end
	};

/**************************************************************************/
	//clicking first on the magic selector and then click on the spell to use
	function submenu(){
		//selects the second child from the options menu since those lead to 
		//another menu of skills  (ex: #magecraft -> #magic)
		$("ul li:nth-child(2)").click(function(){

		//makes each magic click only happen once
		$(".submenu li").unbind('click');

		//runs menu function for menu cycling
		menu();

		//this get the attack name once you click on the attack
		$(".submenu li").click(function(){
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

			//progress bar for meters
			progress(MP_ally, $('#MP_ally_progress_bar'));
			progress(((HP_enemy*100)/HP_enemy_max), $("#HP_enemy_progress_bar"));

			//end

			$("#magic").addClass("none");
		});
	});

	};

	var dragon_attack;

/**************************************************************************/
	function dragon(){
		//beginning

		//dragon attacks
		var dark_purge=50;			//selector numbers will be 0,1,2,3,4,5,6
		var starfall=75;				//7,8,9,10,11
		var grand_cross=100;		//12,13,14
		var armageddon=200;			//15

		//dragon mana costs
		var dark_purge=50;
		var starfall=75;
		var grand_cross=100;
		var armageddon=200;

		//selects random number for launching attack
		var x = Math.floor((Math.random() * 15));
		console.log(x);

		//dark purge from 0-6
		if (x<7){
			console.log("dark purge")
		//starfall from 7-11
		}else if(x>6&&x<12){
			console.log("starfall")
		//grand cross from 12-14
		}else if(x>11&&x<15){
			console.log("grand cross")
		//armageddon is 15
		}else{
			console.log("armageddon")
		};

		//end
	};

/**************************************************************************/
	//progress bar
	function progress(percent, $element) {
    var progress_bar_width=percent*$element.width()/100;
    $element.find('div').animate({width: progress_bar_width});
	}

/**************************************************************************/
	//audio loop
	// var audio_file = new Audio('sounds/bgm.mp3');
	// audio_file.play();
	// audio_file.addEventListener('timeupdate', function(){
 //  var buffer = 4
 //  if(this.currentTime>(this.duration-buffer)){
 //      this.currentTime = 25
 //      this.play()
 //      console.log(this.currentTime);
 //      console.log(this.duration-buffer);
 //      console.log(this.duration);
 //      console.log(buffer);
 //  }}, false);

	//end
});