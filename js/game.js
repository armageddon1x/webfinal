/*********************************************************************/
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
		HP_max:2000,
		HP:2000,

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
		fire_dmg:800,
		fire_MP:50,
		fire_des:"The Fire of the Beast. Flames of Gehenna. Code 3.",

		//attack 2 and all attributes
		water:"Water",
		water_display:"Deluge Storm",
		water_dmg:800,
		water_MP:50,
		water_des:"The Water of the Beast. Waves of Poseidon. Code 6.",

		//attack 3 and all attributes
		air:"Air",
		air_display:"Zephyr Wing",
		air_dmg:800,
		air_MP:50,
		air_des:"The Air of the Beast. Winds of Boreas. Code 9.",

		//attack 4 and all attributes
		earth:"Earth",
		earth_display:"Tartarus Break",
		earth_dmg:800,
		earth_MP:50,
		earth_des:"The Earth of the Beast. Tremors of Gaia. Code 12.",
	}
	//yuzuriha
	var Yuzuriha={
		//name
		name:"Yuzuriha",
		//subtitle
		subtitle:"The Heaven's Sword",

		//HP and MP values
		HP_max:2000,
		HP:2000,

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
		inazuma_des:"A sword draw as fast as lightning.",

		//attack 2 and all attributes
		shuntensatsu:"Shuntensatsu",
		shuntensatsu_display:"Instanteous Heavenly Murder",
		shuntensatsu_dmg:600,
		shuntensatsu_MP:50,
		shuntensatsu_des:"This technique has speed rivaling the Amakakeru Ryu no Hirameki: Dragon Flight of Heaven.",

		//attack 3 and all attributes
		iaido:"Iaido",
		iaido_display:"Art of the Sword Draw",
		iaido_dmg:800,
		iaido_MP:50,
		iaido_des:"A fast sword draw that is also an art of discipline.",

		//attack 4 and all attributes
		amaterasu:"Amaterasu",
		amaterasu_display:"Goddess of the Sun",
		amaterasu_dmg:1000,
		amaterasu_MP:50,
		amaterasu_des:"An attack evoking the goddess of sun in all her majestic glory.",
	}
	//izanagi
	var Izanagi={
		//name
		name:"Izanagi",
		//subtitle
		subtitle:"The Shadow",

		//HP and MP values
		HP_max:2000,
		HP:2000,

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
		swordslash_dmg:400,
		swordslash_MP:50,
		swordslash_des:"A sword strike that can kill any foe.",

		//attack 2 and all attributes
		bladebarrage:"Blade Barrage",
		bladebarrage_display:"Eighth Snake's Nest",
		bladebarrage_dmg:600,
		bladebarrage_MP:50,
		bladebarrage_des:"A barrage of strikes that was used to take down the eight headed Yamata no Orochi: Eight-Branched Giant Snake.",
	
		//attack 3 and all attributes
		pierce:"Pierce",
		pierce_display:"Heart Stopper",
		pierce_dmg:500,
		pierce_MP:50,
		pierce_des:"A piercing attack that stops the heart.",

		//attack 4 and all attributes
		cutter:"Cutter",
		cutter_display:"Infinite Separation",
		cutter_dmg:900,
		cutter_MP:50,
		cutter_des:"A cutting attack that leaves no chance for survival.",
	}
	//justice
	var Justice={
		//name
		name:"Justice",
		//subtitle
		subtitle:"The Lawbringer",

		//HP and MP values
		HP_max:2000,
		HP:2000,

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
		steelpunch_des:"A punch with the hardness of steel.",

		//attack 2 and all attributes
		platinumslash:"platinum_slash.exe",
		platinumslash_display:"Sword of the Platinum Queen",
		platinumslash_dmg:600,
		platinumslash_MP:50,
		platinumslash_des:"A slash with the sharpness of platinum.",

		//attack 3 and all attributes
		titaniumblow:"titanium_blow.exe",
		titaniumblow_display:"Scepter of the Titanium Emperor",
		titaniumblow_dmg:800,
		titaniumblow_MP:50,
		titaniumblow_des:"A blow with the toughness of titanium.",

		//attack 4 and all attributes
		goldensmash:"golden_smash.exe",
		goldensmash_display:"Regalia of the Golden Empress",
		goldensmash_dmg:1100,
		goldensmash_MP:50,
		goldensmash_des:"A smash with the radiance of gold.",
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
		skill:"Chaos Arts!!!<br>",
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
		star_display:"Starfall: Heavenrend",
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

/***************************************************************************/
//initial HP/MP number input
/***************************************************************************/

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
	var turns=1;

	game();
	repeat();

/***************************************************************************/
//functions
/***************************************************************************/
	//function for checking for a win/lose condition
	function game(){
		
		menu();
		submenu();
		update();

		var gameUpdate = setTimeout(function(){
			//if statement checking for victory or lose condition
			if( Dragon.HP<=0 ){
				console.log("inside");
				setTimeout(function(){
					$("#message").show();
					$("#message p").html("You Win!!!");	
				},1000);
				
				setTimeout(function(){
					$("#message").hide();
				},5000);
			}else if(Ragna.HP<=0 && Yuzuriha.HP<=0 && Izanagi.HP<=0 && Justice.HP<=0){
				setTimeout(function(){
					$("#message").show();
					$("#message p").html("You Lose...");
				},1000);
				
				setTimeout(function(){
					$("#message").hide();
				},5000);
			}else{
				game();
			}
		}, 3000)
	};
	//function for cycling through the menus
	function menu(){
		if(i===0){
			setTimeout(function(){
				$("#placeholder").addClass("none");
				$("#option_1").removeClass("none");
			},500);
			i++;
		}else if(i===1){
			$("#magecraft").click(function(){
				$("#option_1").addClass("none");
				$("#magic").removeClass("none");
				$("#magic").click(function(){
					$("#magic").addClass("none");
					$("#option_2").removeClass("none");
					$("#ragna_section").css("background","transparent");
					i=2;
				});
			});
		} else if(i===2){
			$("#battojutsu").click(function(){
				$("#option_2").addClass("none");
				$("#batto").removeClass("none");
				$("#batto").click(function(){
					$("#batto").addClass("none");
					$("#option_3").removeClass("none");
					
					i=3;
				});
			});
		}else if(i===3){
			$("#specialskill").click(function(){
				$("#option_3").addClass("none");
				$("#special").removeClass("none");
				$("#special").click(function(){
					$("#special").addClass("none");
					$("#option_4").removeClass("none");
					i=4;
				});
			});
		}else{
			$("#programcode").click(function(){
				$("#option_4").addClass("none");
				$("#program").removeClass("none");
				$("#program").click(function(){
					$("#program").addClass("none");
					$("#option_1").removeClass("none");
					
					i=1;
					turns++;
				});
			});
		};
	};
	//function for submenu attack selection
	function submenu(){
		//makes each magic click only happen once
		$(".menu div").unbind('click');
		menu();
		//runs menu function for menu cycling

		var atk;
		var name;
		var ally;
		var atk_description;
		var atk_dmg;
		var atk_mp;
			$(".submenu div").hover(function(){
				atk=$(this).attr("id");
				name=$(this).parent().attr("id");
				
				if(name==="magic"){ally="Ragna";};
				if(name==="batto"){ally="Yuzuriha";};
				if(name==="special"){ally="Izanagi";};
				if(name==="program"){ally="Justice";};

				atk_description=eval(ally+"."+atk+"_des");
				atk_dmg=eval(ally+"."+atk+"_dmg");
				atk_mp=eval(ally+"."+atk+"_MP");

				$('#description').show();
				$("#description p").show();
		 	  $("#description p").html(atk_description+"<br>Damage: "+atk_dmg+" / Mana Cost: "+atk_mp);
			}, function(){
				name=$(this).attr("id");
				$("#description p").hide();
				$('#description').hide();
			});

		//this get the attack name once you click on the attack
		$(".submenu div").click(function(){
			// grab attack name and ally name
			var attack_name=$(this).attr("id");
			var attack_person=$(this).attr("class")

			// use ally and attack name for dynamically grabbing relevant variables
			// from the hashes
			var attack_mana=attack_person+"_mana";
			var attack_damage=attack_person+"_damage";
			var attack_display=attack_person+"_display";

			//storing the variables in the hashes in a new hash for the attacks
			//chosen for this turn
			var ATK_NAME=eval(attack_person+"."+attack_name);
			var ATK_DMG=eval(attack_person+"."+attack_name+"_dmg");
			var ATK_MP=eval(attack_person+"."+attack_name+"_MP");
			var ATK_DIS=eval(attack_person+"."+attack_name+"_display");
			var ATK_DES=eval(attack_person+"."+attack_name+"_des");

			//shows attack descriptions on hover
			var name;
			$("menu div").hover(function(){
				$('#description').show();
		 	  $("p").html(ATK_DES);
				}, function(){
				$("p").hide();
				$('#description').hide();
			});

			if(attack_person==="Ragna"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				Ragna.MP=Ragna.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;

				//message
				message(Ragna.action, Ragna.skill, Ragna.skill_ruby, current_attacks[attack_person], current_attacks[attack_display]);
				//animation
				animation(attack_name);
			};

			if(attack_person==="Yuzuriha"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				Yuzuriha.MP=Yuzuriha.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;

				//message
				message(Yuzuriha.action, Yuzuriha.skill, Yuzuriha.skill_ruby, current_attacks[attack_person], current_attacks[attack_display]);
				//animation
				animation(attack_name);

			};

			if(attack_person==="Izanagi"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				Izanagi.MP=Izanagi.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;

				//message
				message(Izanagi.action, Izanagi.skill, Izanagi.skill_ruby, current_attacks[attack_person], current_attacks[attack_display]);
				//animation
				animation(attack_name);
			};

			if(attack_person==="Justice"){
				current_attacks[attack_person]=ATK_NAME;
				current_attacks[attack_damage]=ATK_DMG;
				current_attacks[attack_mana]=ATK_MP;
				current_attacks[attack_display]=ATK_DIS;

				Justice.MP=Justice.MP-ATK_MP;
				Dragon.HP=Dragon.HP-ATK_DMG;

				//message
				message(Justice.action, Justice.skill, Justice.skill_ruby, current_attacks[attack_person], current_attacks[attack_display]);
				//animation
				animation(attack_name);
			};

		});
	};
	//function for attack message
	function message(action, skill, attack, attack_sub, display){
		$("#message").show();
		$("#message p").html(action+skill+": "+attack_sub+"!!<br>"+attack+": "+display+"!!!");
		setTimeout(function(){
      $("#message").hide();
		},2050);	
	}
	//function for ally animations
	function animation(attack){

		//attacks for yuzurihas
		if(attack==="fire"){
				$("#ragna_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#ragna_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#ragna_box").fadeIn();
					$("#ragna_box").css("background", "rgb(50,50,50)");
					$("#ragna_attack").show();
				},2050);
				setTimeout(function(){
					$("#ragna_box").css("background","red");
				}, 4000);
				setTimeout(function(){
					$("#ragna_box").css("background","black");
				}, 4500);
				setTimeout(function(){
					$("#ragna_box").css("background","red");
				}, 5000)
				setTimeout(function(){
					$("#megiddo").show();
					$("#megiddo").css("display","inline-block");
					$("#megiddo").css("float","left");
					$("#flare").show();
					$("#flare").css("display","inline-block");
					$("#flare").css("float","left");
					},5500);
				setTimeout(function(){
					$("#ragna_attack").attr('src', 'gifs/attack/ragna_attack.gif');
					$("#ragna_box").hide();
					$("#megiddo").hide();
					$("#flare").hide();
				},6850);
		};
		if(attack==="water"){
				$("#ragna_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#ragna_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#ragna_box").fadeIn();
					$("#ragna_box").css("background", "rgb(50,50,50)");
					$("#ragna_attack").show();
				},2050);
				setTimeout(function(){
					$("#ragna_box").css("background","blue");
				}, 4000);
				setTimeout(function(){
					$("#ragna_box").css("background","black");
				}, 4500);
				setTimeout(function(){
					$("#ragna_box").css("background","blue");
				}, 5000)
				setTimeout(function(){
					$("#deluge").show();
					$("#deluge").css("display","inline-block");
					$("#deluge").css("float","left");
					$("#storm").show();
					$("#storm").css("display","inline-block");
					$("#storm").css("float","left");
					},5500);
				setTimeout(function(){
					$("#ragna_attack").attr('src', 'gifs/attack/ragna_attack.gif');
					$("#ragna_box").hide();
					$("#deluge").hide();
					$("#storm").hide();
				},6850);
		};
		if(attack==="air"){
				$("#ragna_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#ragna_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#ragna_box").fadeIn();
					$("#ragna_box").css("background", "rgb(50,50,50)");
					$("#ragna_attack").show();
				},2050);
				setTimeout(function(){
					$("#ragna_box").css("background","rgb(225,225,225)");
				}, 4000);
				setTimeout(function(){
					$("#ragna_box").css("background","black");
				}, 4500);
				setTimeout(function(){
					$("#ragna_box").css("background","rgb(225,225,225)");
				}, 5000)
				setTimeout(function(){
					$("#zephyr").show();
					$("#zephyr").css("display","inline-block");
					$("#zephyr").css("float","left");
					$("#wing").show();
					$("#wing").css("display","inline-block");
					$("#wing").css("float","left");
					},5500);
				setTimeout(function(){
					$("#ragna_attack").attr('src', 'gifs/attack/ragna_attack.gif');
					$("#ragna_box").hide();
					$("#zephyr").hide();
					$("#wing").hide();
				},6850);
		};
		if(attack==="earth"){
				$("#ragna_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#ragna_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#ragna_box").fadeIn();
					$("#ragna_box").css("background", "rgb(50,50,50)");
					$("#ragna_attack").show();
				},2050);
				setTimeout(function(){
					$("#ragna_box").css("background","#663300");
				}, 4000);
				setTimeout(function(){
					$("#ragna_box").css("background","black");
				}, 4500);
				setTimeout(function(){
					$("#ragna_box").css("background","#663300");
				}, 5000)
				setTimeout(function(){
					$("#tartarus").show();
					$("#tartarus").css("display","inline-block");
					$("#tartarus").css("float","left");
					$("#break").show();
					$("#break").css("display","inline-block");
					$("#break").css("float","left");
					},5500);
				setTimeout(function(){
					$("#ragna_attack").attr('src', 'gifs/attack/ragna_attack.gif');
					$("#ragna_box").hide();
					$("#tartarus").hide();
					$("#break").hide();
				},6850);
		};

		//attacks for yuzurihas
		if(attack==="inazuma"){
				$("#yuzu_attack").show();
				$("#lightbox").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#yuzu_box").show();
					$("#yuzu_box").css("background", "yellow");
					$("#yuzu_batto").show();
				},2050);
				setTimeout(function(){
					$("#ina").show();
					$("#ina").css("display","block");
					},4000);
				setTimeout(function(){
					$("#ina").hide();
					$("#zuma").show();
					$("#zuma").css("display","block");
					},4500);
				setTimeout(function(){
					$("#zuma").hide();
				},5000);
				setTimeout(function(){
					$("#yuzu_box").css("background","black");
					$("#ina").show();
					$("#ina").css("display","inline-block");
					$("#ina").css("float","left");
					$("#zuma").show();
					$("#zuma").css("display","inline-block");
					$("#zuma").css("float","right");
					$("#atk_name2").show();
					$("#atk_name2").css("display","block");
					},6500);
				setTimeout(function(){
					$("#yuzu_batto").attr('src', 'gifs/attack/yuzu_batto.gif');
					$("#yuzu_box").hide();
					$("#ina").hide();
					$("#zuma").hide();
					$("#atk_name2").hide();
				},7500);
		};
		if(attack==="shuntensatsu"){
				$("#yuzu_attack").show();
				$("#yuzu_box").css("background","pink");
				$("#lightbox").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#yuzu_box").show();
					$("#yuzu_batto").show();
				},2050);
				setTimeout(function(){
					$("#shun").show();
					$("#shun").css("display","block");
					},4000);
				setTimeout(function(){
					$("#ten").show();
					$("#ten").css("display","block");
					},4500);
				setTimeout(function(){
					$("#satsu").show();
					$("#satsu").css("display","block");
					},5000);
				setTimeout(function(){
					$("#yuzu_box").css("background","black");
					$("#atk_name").show();
					},6500);
				setTimeout(function(){
					$("#yuzu_batto").attr('src', 'gifs/attack/yuzu_batto.gif');
					$("#yuzu_box").hide();
					$("#shun").hide();
					$("#ten").hide();
					$("#satsu").hide();
					$("#atk_name").hide();
					$("#yuzu_box").css("background","pink");
				},7500);
		};
		if(attack==="iaido"){
				$("#yuzu_attack").show();
				$("#yuzu_box").css("background","white");
				$("#lightbox").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#yuzu_box").show();
					$("#yuzu_batto").show();
				},2050);
				setTimeout(function(){
					$("#i").show();
					$("#i").css("display","block");
					},4000);
				setTimeout(function(){
					$("#ai").show();
					$("#ai").css("display","block");
					},4500);
				setTimeout(function(){
					$("#do").show();
					$("#do").css("display","block");
					},5000);
				setTimeout(function(){
					$("#yuzu_box").css("background","black");
					$("#atk_name3").show();
					},6500);
				setTimeout(function(){
					$("#yuzu_batto").attr('src', 'gifs/attack/yuzu_batto.gif');
					$("#yuzu_box").hide();
					$("#i").hide();
					$("#ai").hide();
					$("#do").hide();
					$("#atk_name3").hide();
					$("#yuzu_box").css("background","pink");
				},7500);
		};
		if(attack==="amaterasu"){
				$("#yuzu_attack").show();
				$("#yuzu_box").css("background","black");
				$("#lightbox").show();
				setTimeout(function(){
						$("#yuzu_attack").attr('src', 'gifs/attack/yuzu.gif');
			      $('#yuzu_attack').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#yuzu_box").show();
					$("#yuzu_batto").show();
				},2050);
				setTimeout(function(){
					$("#ama").show();
					$("#ama").css("display","inline-block");
					},4000);
				setTimeout(function(){
					$("#terasu").show();
					$("#terasu").css("display","inline-block");
					},4500);
				setTimeout(function(){
					$("#oo").show();
					$("#oo").css("display","inline-block");
					},5000);
				setTimeout(function(){
					$("#mikami").show();
					$("#mikami").css("display","inline-block");
					},5500);
				setTimeout(function(){
					$("#yuzu_box").css("background","red");
					$("#atk_name4").show();
					$("#atk_name4").css("display","block");
					},6500);
				setTimeout(function(){
					$("#yuzu_batto").attr('src', 'gifs/attack/yuzu_batto.gif');
					$("#yuzu_box").hide();
					$("#ama").hide();
					$("#terasu").hide();
					$("#oo").hide();
					$("#mikami").hide();
					$("#atk_name4").hide();
				},7500);
		};

		//attacks for izanagi
		if(attack==="swordslash"){
				$("#iza_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#iza_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#iza_box").fadeIn();
					// $("#iza_box").css("background", "black");
					$("#iza_attack").show();
					$("#slashing").show();
					// $("#slashing").css("display","block");
				},2050);
				setTimeout(function(){
					$("#sword").show();
					$("#sword").css("display","block");
					},3500);
				setTimeout(function(){
					$("#iza_attack").attr('src', 'gifs/attack/iza_attack.gif');
					$("#iza_box").hide();
					$("#sword").hide();
					// $("#slashing").hide();
				},5000);
		};
		if(attack==="bladebarrage"){
				$("#iza_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#iza_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#iza_box").fadeIn();
					$("#iza_attack").show();
				},2050);
				setTimeout(function(){
					$("#blade").show();
					$("#blade").css("display","block");
					},3500);
				setTimeout(function(){
					$("#iza_attack").attr('src', 'gifs/attack/iza_attack.gif');
					$("#iza_box").hide();
					$("#blade").hide();
				},5000);
		};
		if(attack==="pierce"){
				$("#iza_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#iza_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#iza_box").fadeIn();
					$("#iza_attack").show();
				},2050);
				setTimeout(function(){
					$("#pier").show();
					$("#pier").css("display","block");
					},3500);
				setTimeout(function(){
					$("#iza_attack").attr('src', 'gifs/attack/iza_attack.gif');
					$("#iza_box").hide();
					$("#pier").hide();
				},5000);
		};
		if(attack==="cutter"){
				$("#iza_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#iza_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#iza_box").fadeIn();
					$("#iza_attack").show();
				},2050);
				setTimeout(function(){
					$("#cut").show();
					$("#cut").css("display","block");
					},3500);
				setTimeout(function(){
					$("#iza_attack").attr('src', 'gifs/attack/iza_attack.gif');
					$("#iza_box").hide();
					$("#cut").hide();
				},5000);
		};

		//attacks for justice
		if(attack==="steelpunch"){
				$("#just_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#just_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#just_box").fadeIn();
					$('#just_box').addClass("steel");
					$("#just_attack").show();
					$("#just_attack").css("display","inline-block");
					$("#beam").show();
					$("#beam").css("display","inline-block");
				},2050);
				// setTimeout(function(){
				// 	$("#cut").css("display","block");
				// 	},3500);
				setTimeout(function(){
					$("#just_attack").attr('src', 'gifs/attack/just_attack.gif');
					$("#beam").attr('src', 'gifs/attack/two_beams2.gif');
					$("#just_box").hide();
					$("#just_attack").hide();
					$("#beam").hide();
				},4000);
		};
		if(attack==="platinumslash"){
				$("#just_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#just_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#just_box").fadeIn();
					$('#just_box').addClass("plat");
					$("#just_attack").show();
					$("#just_attack").css("display","inline-block");
					$("#beam").show();
					$("#beam").css("display","inline-block");
				},2050);
				// setTimeout(function(){
				// 	$("#cut").css("display","block");
				// 	},3500);
				setTimeout(function(){
					$("#just_attack").attr('src', 'gifs/attack/just_attack.gif');
					$("#beam").attr('src', 'gifs/attack/two_beams2.gif');
					$("#just_box").hide();
					$("#just_attack").hide();
					$("#beam").hide();
				},4000);
		};
		if(attack==="titaniumblow"){
				$("#just_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#just_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#just_box").fadeIn();
					$('#just_box').addClass("titan");
					$("#just_attack").show();
					$("#just_attack").css("display","inline-block");
					$("#beam").show();
					$("#beam").css("display","inline-block");
				},2050);
				// setTimeout(function(){
				// 	$("#cut").css("display","block");
				// 	},3500);
				setTimeout(function(){
					$("#just_attack").attr('src', 'gifs/attack/just_attack.gif');
					$("#beam").attr('src', 'gifs/attack/two_beams2.gif');
					$("#just_box").hide();
					$("#just_attack").hide();
					$("#beam").hide();
				},4000);
		};
		if(attack==="goldensmash"){
				$("#just_portrait").fadeIn(1500);
				$("#lightbox").show();
				setTimeout(function(){
			      $('#just_portrait').hide();
			      $("#lightbox").hide();
					},2050);
				setTimeout(function(){
					$("#just_box").fadeIn();
					$('#just_box').addClass("gold");
					$("#just_attack").show();
					$("#just_attack").css("display","inline-block");
					$("#beam").show();
					$("#beam").css("display","inline-block");
				},2050);
				// setTimeout(function(){
				// 	$("#cut").css("display","block");
				// 	},3500);
				setTimeout(function(){
					$("#just_attack").attr('src', 'gifs/attack/just_attack.gif');
					$("#beam").attr('src', 'gifs/attack/two_beams2.gif');
					$("#just_box").hide();
					$("#just_attack").hide();
					$("#beam").hide();
				},4000);
		};
	}
	//function for repeating the dragon attacks
	function repeat(){
		if(Dragon.HP<0){
			
		}else{
			setTimeout(function(){
				dragon();
				repeat();
			},12000);
		};
	};
	//function for dragon attacks
	function dragon(){
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
			$("#message").show();
			$("#message p").html(Dragon.action+Dragon.skill+Dragon[d_atk+"_display"]);
			setTimeout(function(){
		      $("#message").hide();
				},2050);	
		//starfall from 7-11
		}else if(x>6&&x<12){
			d_atk="star";
			$("#message").show();
			$("#message p").html(Dragon.action+Dragon.skill+Dragon[d_atk+"_display"]);
			setTimeout(function(){
		      $("#message").hide();
				},2050);	
		//grand cross from 12-14
		}else if(x>11&&x<15){
			d_atk="cross";
			$("#message").show();
			$("#message p").html(Dragon.action+Dragon.skill+Dragon[d_atk+"_display"]);
			setTimeout(function(){
		      $("#message").hide();
				},2050);			
		//armageddon is 15
		}else{
			d_atk="arma";
			$("#message").show();
			$("#message p").html(Dragon.action+Dragon.skill+Dragon[d_atk+"_display"]);
			setTimeout(function(){
		      $("#message").hide();
				},2050);	
		};

		var ATK_NAME=eval(d_name+"."+d_atk);
		var ATK_DMG=eval(d_name+"."+d_atk+"_dmg");
		var ATK_MP=eval(d_name+"."+d_atk+"_MP");
		var ATK_DIS=eval(d_name+"."+d_atk+"_display");

		

		if(Dragon.MP>=0){

			Ragna.HP=Ragna.HP-ATK_DMG;
			Yuzuriha.HP=Yuzuriha.HP-ATK_DMG;
			Izanagi.HP=Izanagi.HP-ATK_DMG;
			Justice.HP=Justice.HP-ATK_DMG;

			Dragon.MP=Dragon.MP-ATK_MP;

			var ratio_r=(Ragna.HP*100)/Ragna.HP_max;
			var ratio_y=(Yuzuriha.HP*100)/Yuzuriha.HP_max;
			var ratio_i=(Izanagi.HP*100)/Izanagi.HP_max;
			var ratio_j=(Justice.HP*100)/Justice.HP_max;

			var ratio_d=(Dragon.MP*100)/Dragon.MP_max;

			setTimeout(function(){
				if(Ragna.HP>0){
					$("#HP_ragna").html(Ragna.HP);
				}else{
					$("#HP_ragna").html("   0");
				};

				if(Yuzuriha.HP>0){
					$("#HP_yuzuriha").html(Yuzuriha.HP);
				}else{
					$("#HP_yuzuriha").html("   0");
				};

				if(Izanagi.HP>0){
					$("#HP_izanagi").html(Izanagi.HP);
				}else{
					$("#HP_izanagi").html("  0");
				};

				if(Justice.HP>0){
					$("#HP_justice").html(Justice.HP);
				}else{
					$("#HP_justice").html("0");
				};


				$("#MP_enemy").html(Dragon.MP);

				progress(ratio_r, $("#HP_bar_ragna"));
				progress(ratio_y, $("#HP_bar_yuzuriha"));
				progress(ratio_i, $("#HP_bar_izanagi"));
				progress(ratio_j, $("#HP_bar_justice"));

				console.log("ratio "+ratio_d)
				progress(ratio_d, $("#MP_bar_enemy"));
			});
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
				r_ratio=(Ragna.MP*100)/Ragna.MP_max;
				progress(r_ratio, $("#MP_bar_ragna"));
			};

			if(Yuzuriha.MP>=0){
				$("#MP_yuzuriha").html(Yuzuriha.MP);
				y_ratio=(Yuzuriha.MP*100)/Yuzuriha.MP_max;
				progress(y_ratio, $("#MP_bar_yuzuriha"));
			};

			if(Izanagi.MP>=0){
				$("#MP_izanagi").html(Izanagi.MP);
				i_ratio=(Izanagi.MP*100)/Izanagi.MP_max;
				progress(i_ratio, $("#MP_bar_izanagi"));
			};

			if(Justice.MP>=0){
				$("#MP_justice").html(Justice.MP);
				j_ratio=(Justice.MP*100)/Justice.MP_max;
				progress(j_ratio, $("#MP_bar_justice"));
			};

				//enemy HP/MP
			if(Dragon.HP>=0){
				$("#HP_enemy").html(Dragon.HP);
				d_ratio=(Dragon.HP*100)/Dragon.HP_max;
				progress(d_ratio, $("#HP_bar_enemy"));
			}
		},8000);
	};

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
		//if number is zero, number will turn gray
		if(number<=0){
			//number color change
			$number_div.css("color","grey");
		};
		//if number is below 10%, number will turn red
		if(number<(.1*number_max) && number>0){
			//number color change
			$number_div.css("color","red");
		};
		//if number is below 30%, number will turn orange
		if(number<(.3*number_max) && number>(.1*number_max)){
			//number color change
			$number_div.css("color","orange");
		};
		//if number is below 50%, number will turn yellow
		if(number<(.5*number_max) && number>(.3*number_max)){
			//number color change
			$number_div.css("color","yellow"); 
		};
	}

/**************************************************************************/
//Sound
/**************************************************************************/
	
	var song="sounds/bgm.mp3";

	bgm_loop(song);

	//audio loop
	function bgm_loop(song){
		//load audio
		var audio_file = new Audio(song);
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
	}
/**************************************************************************/
//End
/**************************************************************************/
});

//all characters, names, gifs, etc. DO NOT belong to me and I claim no
//ownership of them. this project is strictly for academic non-profit.
//all assets used belong to their rightful copyright owners/creators

/**************************************************************************/
//close the overall function
/*************************************************************************/