$(document).ready(function(){
	//beginning

	//HP values
	var HP_enemy=500;

	var HP_ally_max=100;
	var HP_ally=HP_ally_max;

	//MP values
	var MP_enemy=100;

	var MP_ally_max=100;
	var MP_ally=MP_ally_max;

	$("#HP_ally_max").html(HP_ally_max);
	$("#MP_ally_max").html(MP_ally_max);

	$("#HP_ally").html(HP_ally);
	$("#MP_ally").html(MP_ally);

	progress(MP_ally, $('#progressBar'));


	//var enemy=true;
	//var ally=true;

	//attack values (current attack stored here)
	var attack_enemy;
	var attack_ally;

	//magic attack values
	var fire=50;
	var water=50;
	var air=50;
	var earth=50;

	//mana values
	var fire_mana=5;
	var water_mana=5;
	var air_mana=5;
	var earth_mana=5;

	$("#magecraft").click(function(){
		if (true) {
			$("#magic").removeClass("none");
		}
		$("#magic").click(function(){
			$("#magic").addClass("none");
		});
	});

	$("#fire").click(function(){
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

		//update HP and MP meters
		$("#HP_ally").html(HP_ally);
		$("#MP_ally").html(MP_ally);
		progress(MP_ally, $('#MP_ally_progress_bar'));

		//check to see if enemy has zero HP or less
		if (HP_enemy<0){
			alert("you defeated the enemy")
		};

		//check to see if ally has zero MP or less
		if (MP_ally<0){
			alert("not enough MP")
		};

	});

	function progress(percent, $element) {
    var progress_bar_width=percent*$element.width()/100;
    $element.find('div').animate({width: progress_bar_width});
}

	//end
});