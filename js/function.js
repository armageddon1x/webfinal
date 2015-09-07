$(document).ready(function(){
	//beginning

	//HP values for enemy
	var HP_enemy=500;
	var HP_enemy_max=HP_enemy;

	//HP values for allies
	var HP_ally_max=100;
	var HP_ally=HP_ally_max;

	//HP values for ragna
	var HP_ragna_max=100;
	var HP_ragna=HP_ragna_max;

	//HP values for yuzuriha
	var HP_yuzuriha_max=100;
	var HP_yuzuriha=HP_yuzuriha_max;

	//HP values for izanagi
	var HP_izanagi_max=100;
	var HP_izanagi=HP_izanagi_max;

	//HP values for justice
	var HP_justice_max=100;
	var HP_justice=HP_justice_max;

/**************************************************************************/
	//MP values for enemy
	var MP_enemy=100;
	var MP_enemy_max=MP_enemy;

	//MP value for allies
	var MP_ally_max=100;
	var MP_ally=MP_ally_max;

	//MP value for ragna
	var MP_ragna_max=100;
	var MP_ragna=MP_ragna_max;

	//MP value for yuzuriha
	var MP_yuzuriha_max=100;
	var MP_yuzuriha=MP_yuzuriha_max;

	//MP value for izanagi
	var MP_izanagi_max=100;
	var MP_izanagi=MP_izanagi_max;

	//MP value for allies
	var MP_justice_max=100;
	var MP_justice=MP_justice_max;

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

	if (HP_enemy >= 0 && HP_ally >= 0){
		turn++;
		alert("turn: "+turn);

		menu();
		submenu();
		dragon();

		console.log(HP_enemy);
		console.log(HP_ally);

};

	// if (HP_enemy!==0 && HP_ally!==0){
	// 	menu();
	// 	submenu();
	// 	turn++;
	// 	alert(turn);
	// 	alert("HP enemy"+HP_enemy);
	// 	alert("HP ally"+HP_ally);

	// 	if (HP_enemy<=0){
	// 	alert("you win");
	// 	}
	// 	if(HP_ally<=0){
	// 	alert("you lose");
	// 	}

	// };
	// if (HP_enemy<=0){
	// 	alert("you win");
	// }else{
	// 	alert("you lose");
	// }

/**************************************************************************/
	//assigning values to the bar values

	//HP and MP max number values for enemy
	$("#HP_enemy_max").html(HP_enemy_max);
	$("#MP_enemy_max").html(MP_enemy_max);

	//HP and MP current number values for enemy
	$("#HP_enemy").html(HP_enemy);
	$("#MP_enemy").html(MP_enemy);

	//HP and MP max number values for allies
	// $(".HP_ally_max").html(HP_ally_max);
	// $(".MP_ally_max").html(MP_ally_max);

	// //HP and MP current number values for allies
	// $(".HP_ally").html(HP_ally);
	// $(".MP_ally").html(MP_ally);

	//HP and MP max number values for ragna
	$("#HP_ragna_max").html(HP_ragna_max);
	$("#MP_ragna_max").html(MP_ragna_max);

	//HP and MP current number values for ragna
	$("#HP_ragna").html(HP_ragna);
	$("#MP_ragna").html(MP_ragna);

	//HP and MP max number values for yuzuriha
	$("#HP_yuzuriha_max").html(HP_yuzuriha_max);
	$("#MP_yuzuriha_max").html(MP_yuzuriha_max);

	//HP and MP current number values for yuzuriha
	$("#HP_yuzuriha").html(HP_yuzuriha);
	$("#MP_yuzuriha").html(MP_yuzuriha);

	//HP and MP max number values for izanagi
	$("#HP_izanagi_max").html(HP_izanagi_max);
	$("#MP_izanagi_max").html(MP_izanagi_max);

	//HP and MP current number values for izanagi
	$("#HP_izanagi").html(HP_izanagi);
	$("#MP_izanagi").html(MP_izanagi);

	//HP and MP max number values for justice
	$("#HP_justice_max").html(HP_justice_max);
	$("#MP_justice_max").html(MP_justice_max);

	//HP and MP current number values for justice
	$("#HP_justice").html(HP_justice);
	$("#MP_justice").html(MP_justice);


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
	var inazuma=50;
	var shuntensatsu=50;
	var iaido=50;
	var ameterasu=50;

	//mana values
	var inazuma_mana=5;
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

	var ragna_action="Ragna unleashed his rage! ";
	var yuzu_action="Yuzuriha drew her sword! ";
	var iza_action="Izanagi released his power! ";
	var just_action="Justice executed her code! ";

	var ragna_tech="<ruby>Magecraft<rt style='font-size:14px;'>Magic of the Zeroth Beast</rt></ruby>!!";
	var yuzu_tech="<ruby>Battojutsu<rt style='font-size:14px;'>Sword Draw Technique</rt></ruby>!!";
	var iza_tech="<ruby>Special Move<rt style='font-size:14px;'>Deity Strike</rt></ruby>!!";
	var just_tech="<ruby>program_exe<rt style='font-size:14px;'>Code Array Initiation</rt></ruby>!!";

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

				//attack message
				$("#message").show();
				$("#message p").html(ragna_action+ragna_tech+"<br>"+attack);

				//attack animation
				// $("#yuzu_attack").show();
				$("#lightbox").show();
				setTimeout(function(){
					// $("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
		   //    $('#yuzu_attack').hide();
		      $("#lightbox").hide();
		      $("#message").hide();
				},2050);
				//end animation

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

				//attack message
				$("#message").show();
				$("#message p").html(yuzu_action+yuzu_tech+"<br>"+attack);

				//attack animation
				$("#yuzu_attack").show();
				$("#lightbox").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
			      $("#lightbox").hide();
			      $("#message").hide();
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

				//attack message
				$("#message").show();
				$("#message p").html(iza_action+iza_tech+"<br>"+attack);

				//attack animation
				// $("#yuzu_attack").show();
				$("#lightbox").show();
				setTimeout(function(){
					// $("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
		   //    $('#yuzu_attack').hide();
		      $("#lightbox").hide();
		      $("#message").hide();
				},2050);
				//end animation

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

				//attack message
				$("#message").show();
				$("#message p").html(just_action+just_tech+"<br>"+attack);

				//attack animation
				// $("#yuzu_attack").show();
				$("#lightbox").show();
				setTimeout(function(){
					// $("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
		   //    $('#yuzu_attack').hide();
		      $("#lightbox").hide();
		      $("#message").hide();
				},2050);
				//end animation

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
			var name;
			$('.submenu li').hover(function(){
				name=$(this).attr("id");
				$('#description').show();
		 	  $('#'+name+"_des").show();
		 	  // alert("show"+name);
			}, function(){
				name=$(this).attr("id");
				$('#'+name+"_des").hide();
				$('#description').hide();
		 	  
		 	  // alert("hide"+name);
			});

			// $('.submenu li').hover(function() {
			// 	var name=$(this).attr("id");
		 //    clearTimeout($(this).data('timeout'));
		 //    $('#description').show();
		 //    $('#'+name+"_des").show();
			// }, function() {
		 //    var t = setTimeout(function() {
		 //        $('#description').hide();
		 //        $('#'+name+"_des").hide();
		 //    }, 2000);
		 //    $(this).data('timeout', t);
			// });

			//this get the attack name once you click on the attack
			$(".submenu li").click(function(){
				var attack_name=$(this).attr("id");
				var attack_person=$(this).attr("class")
				attack=$(this).html();

				//adding ruby text to attack names
				//ragna's attacks
				if(attack==="Fire"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Megiddo Flare</rt></ruby>!!!";
				};
				if(attack==="Water"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Deluge Storm</rt></ruby>!!!";
				};
				if(attack==="Air"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Zephyr Wing</rt></ruby>!!!";
				};
				if(attack==="Earth"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Tartarus Break</rt></ruby>!!!";
				};

				//yuzuriha's attacks
				if(attack==="Inazuma"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Lightning</rt></ruby>!!!";
				};
				if(attack==="Shuntensatsu"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Instant Heavenly Murder</rt></ruby>!!!";
				};
				if(attack==="Iaido"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Art of the Sword Draw</rt></ruby>!!!";
				};
				if(attack==="Ameterasu"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Goddess of the Sun</rt></ruby>!!!";
				};

				//izanagi's attacks
				if(attack==="Sword Slash"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Dimensional Rift</rt></ruby>!!!";
				};
				if(attack==="Blade Barrage"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Eighth Snake's Nest</rt></ruby>!!!";
				};
				if(attack==="Pierce"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Heart Stopper</rt></ruby>!!!";
				};
				if(attack==="Cutter"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Infinite Separation</rt></ruby>!!!";
				};

				//justice's attacks
				if(attack==="steel_punch.exe"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Fist of the Steel King</rt></ruby>!!!";
				};
				if(attack==="platinum_slash.exe"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Sword of the Platinum Queen</rt></ruby>!!!";
				};
				if(attack==="titanium_blow.exe"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Scepter of the Titanium Emperor</rt></ruby>!!!";
				};
				if(attack==="golden_smash.exe"){
					attack="<ruby>"+attack+"<rt style='font-size:14px;'>Regalia of the Golden Empress</rt></ruby>!!!";
				};

				// console.log(attack_name)

				//beginning
				// console.log("before attack "+HP_enemy);
				// console.log("mana reserve: "+MP_ally);
				
				//the attack value becomes the move that was chosen for the turn
				attack_ally=eval(attack_name);
				// alert("cast "+attack_name);
				// alert(attack_ally);

				//loss of enemy HP
				HP_enemy=HP_enemy-attack_ally;
				console.log("after attack "+HP_enemy);

				//mana usage

				//determines which ally is attacking
				if(attack_person==="ragna_atk"){
					// alert(attack_person);
					//mana usage
					MP_ragna=MP_ragna-eval(attack_name+"_mana");
					//update ally MP meter
					$("#MP_ragna").html(MP_ragna);
				}else if(attack_person==="yuzu_atk"){
					// alert(attack_person);
					//mana usage
					MP_yuzuriha=MP_yuzuriha-eval(attack_name+"_mana");
					//update ally MP meter
					$("#MP_yuzuriha").html(MP_yuzuriha);
				} else if(attack_person==="iza_atk"){
					// alert(attack_person);
					//mana usage
					MP_izanagi=MP_izanagi-eval(attack_name+"_mana");
					//update ally MP meter
					$("#MP_izanagi").html(MP_izanagi);
				}else{
					// alert(attack_person);
					//mana usage
					MP_justice=MP_justice-eval(attack_name+"_mana");
					//update ally MP meter
					$("#MP_justice").html(MP_izanagi);
				};
				//end

				// MP_ally=MP_ally-eval(attack_name+"_mana");

				// console.log("mana cost " +attack_name+"_mana");
				// console.log("mana cost " +eval(attack_name+"_mana"));
				// console.log("MP remaining: "+MP_ally)

				// console.log("hp enemy "+HP_enemy);
				// console.log("hp enemy max "+HP_enemy_max);
				// console.log("ratio"+((HP_enemy*100)/HP_enemy_max));

				//update enemy HP meter
				$("#HP_enemy").html(HP_enemy);

				//progress bar for meters
				// progress(MP_ally, $('.MP_ally_progress_bar'));

				progress(MP_ragna, $("#ragna_mp"));
				progress(MP_yuzuriha, $("#yuzu_mp"));
				progress(MP_izanagi, $("#iza_mp"));
				progress(MP_justice, $("#just_mp"));

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