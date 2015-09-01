$(document).ready(function(){
	//beginning

	var HP_enemy=500;
	var HP_ally=100;

	//var enemy=true;
	//var ally=true;

	var attack_enemy;
	var attack_ally;

	var fire=50;

	$("#fire").click(function(){
		console.log("before attack "+HP_enemy);
		alert("cast Fire");
		attack_ally=fire;
		HP_enemy=HP_enemy-attack_ally;
		console.log("after attack "+HP_enemy);

		if (HP_enemy<0){
			alert("you defeated the enemy")
		};

	});

	//end
});