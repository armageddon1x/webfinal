/**************************************************************************/
//initial function (shorthand for $(document).ready() function)
/***************************************************************************/
$(function(){
/***************************************************************************/
//all game functions will go in here
/***************************************************************************/

/***************************************************************************/
//hashes (associative arrays with key:value pairs) for all characters
/***************************************************************************/
	//hashes for each character with all relevant attributes
	
	//ragna
	var Ragna={
		//name
		name:"Ragna",
		//subtitle
		subtitle:"The Bloodedge",

		//HP and MP values
		HP_max:1000,
		HP:1000,

		MP_max:1000,
		MP:1000,

		//technique
		skill:"Magecraft",
		//ruby text for technique
		skill_ruby:"Magic of the Zeroth Beast",
		//action
		action:"Ragna unleashed his rage! ",

		//attack 1 and all attributes
		fire:"Fire",
		fire_display:"Megiddo Flare",
		fire_dmg:500,
		fire_MP:50,

		//attack 2 and all attributes
		water:"Water",
		water_display:"Deluge Storm",
		water_dmg:500,
		water_MP:50,

		//attack 3 and all attributes
		air:"Air",
		air_display:"Zephyr Wing",
		air_dmg:500,
		air_MP:50,

		//attack 4 and all attributes
		earth:"Earth",
		earth_display:"Tartarus Break",
		earth_dmg:500,
		earth_MP:50,
	}
	//yuzuriha
	var Yuzuriha={
		//name
		name:"Yuzuriha",
		//subtitle
		subtitle:"The Heaven's Sword",

		//HP and MP values
		HP_max:1000,
		HP:1000,

		MP_max:1000,
		MP:1000,

		//technique
		skill:"Batt&omacr;jutsu",
		//ruby text for technique
		skill_ruby:"Sword Draw Technique",
		//action
		action:"Yuzuriha drew her sword! ",

		//attack 1 and all attributes
		inazuma:"Inazuma",
		inazuma_display:"Lightning",
		inazuma_dmg:500,
		inazuma_MP:50,

		//attack 2 and all attributes
		shuntensatsu:"Shuntensatsu",
		shuntensatsu_display:"Instanteous Heavenly Murder",
		shuntensatsu_dmg:500,
		shuntensatsu_MP:50,

		//attack 3 and all attributes
		iaido:"Iaido",
		iaido_display:"Art of the Sword Draw",
		iaido_dmg:500,
		iaido_MP:50,

		//attack 4 and all attributes
		ameterasu:"Ameterasu",
		ameterasu_display:"Goddess of the Sun",
		ameterasu_dmg:500,
		ameterasu_MP:50,
	}
	//izanagi
	var Izanagi={
		//name
		name:"Izanagi",
		//subtitle
		subtitle:"The Shadow",

		//HP and MP values
		HP_max:1000,
		HP:1000,

		MP_max:1000,
		MP:1000,

		//technique
		skill:"Special Move",
		//ruby text for technique
		skill_ruby:"Deity Strike",
		//action
		action:"Izanagi released his power! ",

		//attack 1 and all attributes
		swordslash:"Sword Slash",
		swordslash_display:"Dimensional Rift",
		swordslash_dmg:500,
		swordslash_MP:50,

		//attack 2 and all attributes
		bladebarrage:"Blade Barrage",
		bladebarrage_display:"Eighth Snake's Nest",
		bladebarrage_dmg:500,
		bladebarrage_MP:50,

		//attack 3 and all attributes
		pierce:"Pierce",
		pierce_display:"Heart Stopper",
		pierce_dmg:500,
		pierce_MP:50,

		//attack 4 and all attributes
		cutter:"Cutter",
		cutter_display:"Infinite Separation",
		cutter_dmg:500,
		cutter_MP:50,
	}
	//justice
	var Justice={
		//name
		name:"Justice",
		//subtitle
		subtitle:"The Lawbringer",

		//HP and MP values
		HP_max:1000,
		HP:1000,

		MP_max:1000,
		MP:1000,

		//technique
		skill:"Program",
		//ruby text for technique
		skill_ruby:"Code Array Initiation",
		//action
		action:"Justice executed her code! ",

		//attack 1 and all attributes
		steelpunch:"steel_punch.exe",
		steelpunch_display:"Fist of the Steel King",
		steelpunch_dmg:500,
		steelpunch_MP:50,

		//attack 2 and all attributes
		platinumslash:"platinum_slash.exe",
		platinumslash_display:"Sword of the Platinum Queen",
		platinumslash_dmg:500,
		platinumslash_MP:50,

		//attack 3 and all attributes
		titaniumblow:"titanium_blow.exe",
		titaniumblow_display:"Scepter of the Titanium Emperor",
		titaniumblow_dmg:500,
		titaniumblow_MP:50,

		//attack 4 and all attributes
		goldensmash:"golden_smash.exe",
		goldensmash_display:"Regalia of the Golden Empress",
		goldensmash_dmg:500,
		goldensmash_MP:50,
	}

	//hashes for each enemy with all relevant attributes
	//dragon
	var Dragon={
		//name
		name:"Chaos Dragon",
		//subtitle
		subtitle:"Engine of Destruction",

		//HP and MP values
		HP_max:9999,
		HP:9999,

		MP_max:9999,
		MP:9999,

		//technique
		skill:"Chaos Arts",
		//ruby text for technique
		skill_ruby:"Ein Soph Aur",
		//action
		action:"Chaos Dragon readies its attack! ",

		//attack 1 and all attributes
		purge:"Dark Purge",
		purge_display:"Dark Purge: Ataraxia",
		purge_dmg:50,
		purge_MP:200,

		//attack 2 and all attributes
		star:"Starfall",
		star_display:"Starfall: Heavenfall",
		star_dmg:100,
		star_MP:200,

		//attack 3 and all attributes
		cross:"Grand Cross",
		cross_display:"Grand Cross: Eclipse",
		cross_dmg:150,
		cross_MP:200,

		//attack 4 and all attributes
		arma:"Armageddon",
		arma_display:"Armageddon: Sheol",
		arma_dmg:200,
		arma_MP:200,
	}

	//attacks for the turn
	var current_attacks={}

	//HP and MP max number values for enemy
	$("#HP_enemy_max").html(Dragon.HP_max);
	$("#HP_enemy").html(Dragon.HP);

	$("#MP_enemy_max").html(Dragon.MP_max);
	$("#MP_enemy").html(Dragon.MP);

	//HP and MP max number values for ragna
	$("#HP_ragna_max").html(Ragna.HP_max);
	$("#HP_ragna").html(Ragna.HP);

	$("#MP_ragna_max").html(Ragna.MP_max);
	$("#MP_ragna").html(Ragna.MP);

	//HP and MP max number values for yuzuriha
	$("#HP_yuzuriha_max").html(Yuzuriha.HP_max);
	$("#HP_yuzuriha").html(Yuzuriha.HP);

	$("#MP_yuzuriha_max").html(Yuzuriha.MP_max);
	$("#MP_yuzuriha").html(Yuzuriha.MP);

	//HP and MP max number values for izanagi
	$("#HP_izanagi_max").html(Izanagi.HP_max);
	$("#HP_izanagi").html(Izanagi.HP);

	$("#MP_izanagi_max").html(Izanagi.MP_max);
	$("#MP_izanagi").html(Izanagi.MP);

	//HP and MP max number values for justice
	$("#HP_justice_max").html(Justice.HP_max);
	$("#HP_justice").html(Justice.HP);

	$("#MP_justice_max").html(Justice.MP_max);
	$("#MP_justice").html(Justice.MP);

	var i=0;


/***************************************************************************/
//functions
/***************************************************************************/
	//***************code to edit here
	// menu();
	// submenu();
	// menu();
	// menu();

		function game(){
		var gameUpdate = setTimeout(function(){

			// console.log( "checking...");

			menu();
			submenu();
			update();
			dragon();

			

			if( Dragon.HP <= 0 ){
				alert( "You win");
			}else if(Ragna.HP<=0 && Yuzuriha.HP<=0 && Izanagi.HP<=0 && Justice.HP<=0){
				alert('you lose');
			}else{
				game();
			}

		}, 3000)
	}

	game();

	// win(Dragon.HP, Ragna.HP, Yuzuriha.HP, Izanagi.HP, Justice.HP);

	// function win(Dragon_HP, Ragna_HP, Yuzu_HP, Iza_HP, Just_HP){
		
	// 	menu();
	// 	submenu();

	// 	if(Dragon_HP<=0){	
	// 		alert( "You win");
	// 	}else if(Ragna_HP<=0 && Yuzu_HP<=0 && Iza_HP<=0 && Just_HP<=0){
	// 		alert("lose");
	// 	}else{
	// 		win(Dragon.HP, Ragna.HP, Yuzuriha.HP, Izanagi.HP, Justice.HP);
	// 	};

	// }

	//function for cycling through the menus
	function menu(){
		if(i===0){
			console.log("i is: "+i+" before");
			setTimeout(function(){
				$("#placeholder").addClass("none");
				$("#option_1").removeClass("none");
			},1000);
			i++;
			console.log("i is: "+i+" after");
		}else if(i===1){
			console.log("i is: "+i+" before");
			$("#magecraft").click(function(){
				console.log("click magecraft");
				$("#option_1").addClass("none");
				$("#magic").removeClass("none");
				$("#magic").click(function(){
					console.log("click magic");
					$("#magic").addClass("none");
					$("#option_2").removeClass("none");
					i=2;
					console.log("i is: "+i+" after");
				});
			});
		} else if(i===2){
			console.log("i is: "+i+" before");
			$("#battojutsu").click(function(){
				console.log("click battojutsu");
				$("#option_2").addClass("none");
				$("#batto").removeClass("none");
				$("#batto").click(function(){
					console.log("click batto");
					$("#batto").addClass("none");
					$("#option_3").removeClass("none");
					
					i=3;
					console.log("i is: "+i+" after");
				});
			});
		}else if(i===3){
			console.log("i is: "+i+" before");
			$("#specialskill").click(function(){
				console.log("click special skill");
				$("#option_3").addClass("none");
				$("#special").removeClass("none");
				$("#special").click(function(){
					console.log("click special");
					$("#special").addClass("none");
					$("#option_4").removeClass("none");
					
					i=4;
					console.log("i is: "+i+" after");
				});
			});
		}else{
			console.log("i is: "+i+" before");
			$("#programcode").click(function(){
				console.log("click programcode");
				$("#option_4").addClass("none");
				$("#program").removeClass("none");
				$("#program").click(function(){
					console.log("click program");
					$("#program").addClass("none");
					$("#option_1").removeClass("none");
					
					i=1;
					console.log("i is: "+i+" after");
				});
			});
		}
	};

	//function for submenu attack selection
	function submenu(){

		//***************code to edit here

		//selects the second child from the options menu since those lead to 
		//another menu of skills  (ex: #magecraft -> #magic)
		// $(".menu:nth-child(2)").click(function(){

		//makes each magic click only happen once
		$(".menu div").unbind('click');
		menu();
		//runs menu function for menu cycling

		//this get the attack name once you click on the attack
		$(".submenu div").click(function(){
			var attack_name=$(this).attr("id");
			var attack_person=$(this).attr("class")

			var attack_mana=attack_person+"_mana";
			var attack_damage=attack_person+"_damage";
			var attack_display=attack_person+"_display"
			// console.log("name of attack: "+attack_name);
			// console.log("person of attack: "+attack_person);
			// console.log("object: "+eval(attack_person));
			// console.log(Ragna);

			// console.log(attack_person+"."+attack_name);
			// console.log(eval(attack_person+"."+attack_name));

			var ATK_NAME=eval(attack_person+"."+attack_name);
			var ATK_DMG=eval(attack_person+"."+attack_name+"_dmg");
			var ATK_MP=eval(attack_person+"."+attack_name+"_MP");
			var ATK_DIS=eval(attack_person+"."+attack_name+"_display");

			// console.log("ATK NAME "+ATK_NAME);
			// console.log("ATK DMG "+ATK_DMG);
			// console.log("ATK MP "+ATK_MP);
			// console.log("ATK DIS "+ATK_DIS);

			if(attack_person==="Ragna"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				// console.log("inside ragna");

				// console.log(Ragna.MP);
				Ragna.MP=Ragna.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;
				// console.log(Ragna.MP);

				// console.log(current_attacks);
				// console.log("inside current_attacks "+current_attacks[attack_person])
				// console.log("inside current_attacks "+current_attacks[attack_damage])
				// console.log("inside current_attacks "+current_attacks[attack_mana])
				// console.log("inside current_attacks "+current_attacks[attack_display])
			};
			if(attack_person==="Yuzuriha"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				// console.log("inside yuzu");

				// console.log(ATK_NAME);
				// console.log(ATK_DMG);
				// console.log(ATK_MP);
				// console.log(ATK_DIS);

				Yuzuriha.MP=Yuzuriha.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;

				// console.log(current_attacks);
				// console.log("inside current_attacks "+current_attacks[attack_person])
				// console.log("inside current_attacks "+current_attacks[attack_damage])
				// console.log("inside current_attacks "+current_attacks[attack_mana])
				// console.log("inside current_attacks "+current_attacks[attack_display])
			};
			if(attack_person==="Izanagi"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				// console.log("inside iza");

				Izanagi.MP=Izanagi.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;
			};
			if(attack_person==="Justice"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				// console.log("inside just");

				Justice.MP=Justice.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;
			};
		});
		// });
	};
	//function for dragon attacks
	function dragon(){
		//beginning

		//selects random number for launching attack
		//0,1,2,3,4,5,6 for dark purge
		//7,8,9,10,11 for starfall
		//12,13,14 for grand cross
		//15 for armageddon
		var x = Math.floor((Math.random()*15));
		console.log(x);
		var d_name="Dragon";
		var d_atk;
		//dark purge from 0-6
		if (x<7){
			d_atk="purge";
			// $("#message").show();
			// $("#message p").html("Chaos Dragon gathers its energy! "+"Chaos Arts!!!"+"<br>"+dragon_attack);
			// setTimeout(function(){
		 //      $("#message").hide();
			// 	},2050);	
		//starfall from 7-11
		}else if(x>6&&x<12){
			d_atk="star";
			// $("#message").show();
			// $("#message p").html("Chaos Dragon gathers its energy! "+"Chaos Arts!!!"+"<br>"+dragon_attack);
			// setTimeout(function(){
		 //      $("#message").hide();
			// 	},2050);	
		//grand cross from 12-14
		}else if(x>11&&x<15){
			d_atk="cross";
			// $("#message").show();
			// $("#message p").html("Chaos Dragon gathers its energy! "+"Chaos Arts!!!"+"<br>"+dragon_attack);
			// setTimeout(function(){
		 //      $("#message").hide();
			// 	},2050);			
		//armageddon is 15
		}else{
			d_atk="arma";
			// $("#message").show();
			// $("#message p").html("Chaos Dragon gathers its energy! "+"Chaos Arts!!!"+"<br>"+dragon_attack);
			// setTimeout(function(){
		 //      $("#message").hide();
			// 	},2050);	
		};

		var ATK_NAME=eval(d_name+"."+d_atk);
		var ATK_DMG=eval(d_name+"."+d_atk+"_dmg");
		var ATK_MP=eval(d_name+"."+d_atk+"_MP");
		var ATK_DIS=eval(d_name+"."+d_atk+"_display");

		// console.log("before"+Ragna.HP);
		Ragna.HP=Ragna.HP-ATK_DMG;
		// console.log("after"+Ragna.HP);
		Yuzuriha.HP=Yuzuriha.HP-ATK_DMG;
		Izanagi.HP=Izanagi.HP-ATK_DMG;
		Justice.HP=Justice.HP-ATK_DMG;

		// console.log("before "+Dragon.MP);
		Dragon.MP=Dragon.MP-ATK_MP;
		// console.log("after "+Dragon.MP);

		if(Dragon.MP>=0){

			var ratio_r=(Ragna.HP*100)/Ragna.HP_max;
			var ratio_y=(Yuzuriha.HP*100)/Yuzuriha.HP_max;
			var ratio_i=(Izanagi.HP*100)/Izanagi.HP_max;
			var ratio_j=(Justice.HP*100)/Justice.HP_max;

			var ratio_d=(Dragon.MP*100)/Dragon.MP_max;

			setTimeout(function(){
				$("#HP_ragna").html(Ragna.HP);
				$("#HP_yuzuriha").html(Yuzuriha.HP);
				$("#HP_izanagi").html(Izanagi.HP);
				$("#HP_justice").html(Justice.HP);

				$("#MP_enemy").html(Dragon.MP);

				progress(ratio_r, $("#HP_bar_ragna"));
				progress(ratio_y, $("#HP_bar_yuzuriha"));
				progress(ratio_i, $("#HP_bar_izanagi"));
				progress(ratio_j, $("#HP_bar_justice"));

				console.log("ratio "+ratio_d)
				progress(ratio_d, $("#MP_bar_enemy"));
			},2000);
		};

		// $("#MP_enemy").html(MP_enemy);
		// progress(MP_enemy, $("#MP_enemy_progress_bar"));
		// console.log(MP_enemy);

		//end
	};
	//function for updating ally MP and enemy HP after ally attacks
	function update(){
		//changes the value of the numbers and the progress bar

		//ratio for the progression of the progress bar when HP/MP is not 100
		var r_ratio;
		var y_ratio;
		var i_ratio;
		var j_ratio;

		var d_ratio;

		setTimeout(function(){
			//ally HP/MP
			if(Ragna.MP>=0){
				$("#MP_ragna").html(Ragna.MP);
				// console.log("Ragna MP: "+Ragna.MP);
				// console.log("Ragna MP max: "+Ragna.MP_max);
				// console.log(("Ragna MP ratio: "+Ragna.MP*100)/Ragna.MP_max)
				r_ratio=(Ragna.MP*100)/Ragna.MP_max;
				// console.log(ratio);
				progress(r_ratio, $("#MP_bar_ragna"));
			}
			else{
				alert("no mp!");
			}

				if(Yuzuriha.MP>=0){
				$("#MP_yuzuriha").html(Yuzuriha.MP);
				// console.log("Yuzuriha MP: "+Yuzuriha.MP);
				// console.log("Yuzuriha MP max: "+Yuzuriha.MP_max);
				// console.log(("Yuzuriha MP ratio: "+Yuzuriha.MP*100)/Yuzuriha.MP_max)
				y_ratio=(Yuzuriha.MP*100)/Yuzuriha.MP_max;
				// console.log(y_ratio);
				progress(y_ratio, $("#MP_bar_yuzuriha"));
			}
			else{
				alert("no mp yuzu!");
			}

				if(Izanagi.MP>=0){
				$("#MP_izanagi").html(Izanagi.MP);
				// console.log("Ragna MP: "+Ragna.MP);
				// console.log("Ragna MP max: "+Ragna.MP_max);
				// console.log(("Ragna MP ratio: "+Ragna.MP*100)/Ragna.MP_max)
				i_ratio=(Izanagi.MP*100)/Izanagi.MP_max;
				// console.log(ratio);
			}else{
				alert("no mp!");
			}

				progress(i_ratio, $("#MP_bar_izanagi"));

				if(Justice.MP>=0){
				$("#MP_justice").html(Justice.MP);
				// console.log("Ragna MP: "+Ragna.MP);
				// console.log("Ragna MP max: "+Ragna.MP_max);
				// console.log(("Ragna MP ratio: "+Ragna.MP*100)/Ragna.MP_max)
				j_ratio=(Justice.MP*100)/Justice.MP_max;
				// console.log(ratio);
				progress(j_ratio, $("#MP_bar_justice"));
			}else{
				alert("no mp!");
			}

				//enemy HP/MP
				if(Dragon.HP>=0){
					$("#HP_enemy").html(Dragon.HP);
					d_ratio=(Dragon.HP*100)/Dragon.HP_max;
					// alert(d_ratio);
					// alert(Dragon.HP);
					progress(d_ratio, $("#HP_bar_enemy"));
			}else{
				alert("no mp!");
			}
		});
	}
	
	// }

	//function for menu
	//function for win condition

/**************************************************************************/
//Progress Bar and Progress Numbers
/**************************************************************************/
	//progress bar
	function progress(percent, $element) {
    var progress_bar_width=percent*$element.width()/100;
    $element.find("div").animate({width: progress_bar_width},500);
	}

	//progress numbers
	function progress_number(number, number_max, $number_div){
		//if number is below 50%, number will turn yellow
		if(number<=(.5*number_max) && number>=(.3*number_max)){
			//number color change
			$number_div.css("color","yellow");
		//if number is below 30%, number will turn orange 
		}else if(number<=(.3*number_max) && number>=(.1*number_max)){
			//number color change
			$number_div.css("color","orange");
		//if number is below 10%, number will turn red
		}else if(number<=(.1*number_max) && number>=0){
			//number color change
			$number_div.css("color","red");
		//if number is zero, number will turn gray
		}else if(number<=0){
			//this makes the HP always be zero instead of a negative number
			number=0;
			//number color change
			$number_div.css("color","grey");
		}else{}
	}
/**************************************************************************/
//sound
/**************************************************************************/

	//audio loop
	//load audio
	var audio_file = new Audio('sounds/bgm.mp3');
	//play audio at page start
	audio_file.play();
	//listens to audio, triggers when the audio gets to a certain time
	audio_file.addEventListener('timeupdate', function(){
		//buffer for the loop to start
		var buffer = 3.39
		//this loop stops playing at the time that is determined by the duration
		//of the song minus the buffer, then it starts the song again at a set
		//time ,making the loop complete
		if(this.currentTime>(this.duration-buffer)){
				//start of new loop
		    this.currentTime = 24.5
		    //plays song
		    this.play()
		    console.log(this.currentTime);
		    console.log(this.duration-buffer);
		    console.log(this.duration);
		    console.log(buffer);
		}}, false);

/**************************************************************************/
//End
/**************************************************************************/
})
/**************************************************************************/
//close the overall function
/*************************************************************************/