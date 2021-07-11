/*

	Dans un premier temps, on mélange les personnes

	bdd => tableau_melange

*/

var tableau_melange = [];

do {

	var j = Math.floor( Math.random() * bdd.length );
	var personne = bdd[j];

	tableau_melange.push(personne);

	bdd.splice(j,1);
}
while( bdd.length>0 );

console.log("nb_total_personnes_bdd = " + tableau_melange.length);

/*

	creer les groupe en fonction du nombre souhaité

*/

stockage = localStorage;

var set_nb_groupes = document.getElementById("nb_groupes").value;
console.log("nb_groupes = " + set_nb_groupes);

window.localStorage.setItem("nb_groupes", set_nb_groupes);

for(i=0 ; i<set_nb_groupes ; i++) {
	/*

		Je distribue les personnes dans chaque groupe,
		d'abord g1, puis g2, g3, g4, puis on reprend
		à g1, etc...

	*/
	var num_groupe = i + 1
	var nb_personnes = tableau_melange.length / set_nb_groupes
	
	console.log("nb_personnes_par_groupes = " + nb_personnes);

	$('#groupes').append(
		
		'<div class="groupe">' +
			'<h1>' + 'Groupe ' + num_groupe + '</h1></br> \
			<h3>' + 'Nombre de personne dans le groupe = ' + nb_personnes + '</h3></br> \
			<ul id="liste_membre_groupe"></ul> \
		</div>'
	);

	for(y=0 ; y<nb_personnes ; y++) {

		var personne = tableau_melange[0+(nb_personnes*y)]

		$('#liste_membre_groupe').append(
			'<li>' + personne.prenom + ' ' + personne.nom +'</li>'
		);
		console.log(personne.prenom);
	};
};

/*
	'<li>' + tableau_melange[0+(3*i)].prenom + '</li> \
	<li>' + tableau_melange[1+(3*i)].prenom + '</li> \
	<li>' + tableau_melange[2+(3*i)].prenom + '</li> \
*/