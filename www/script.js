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


/*

	creer les groupe en fonction du nombre souhaité

*/

stockage = localStorage;

var set_nb_groupes = document.getElementById("nb_groupes").value;

window.localStorage.setItem("nb_groupes", set_nb_groupes);

$('#get_nb_groupes').append("test nombre de groupes = " + window.stockage.getItem('nb_groupes'));

var nb_groupes = 5 ;

for( var i=0 ; i<set_nb_groupes ; i++ ) {
	/*

		Je distribue les personnes dans chaque groupe,
		d'abord g1, puis g2, g3, g4, puis on reprend
		à g1, etc...

	*/
	var num_groupe = i + 1
	var nb_personnes = tableau_melange.length / nb_groupes

	$('#groups').append(
		
		'<div class="groupe">' +
			'<h1>' + 'Groupe ' + num_groupe + '</h1></br> \
			<h3>' + 'Nombre de personne dans le groupe = ' + nb_personnes + '</h3></br> \
			<ul>' + 
				'<li>' + tableau_melange[0+(3*i)].prenom + '</li> \
				<li>' + tableau_melange[1+(3*i)].prenom + '</li> \
				<li>' + tableau_melange[2+(3*i)].prenom + '</li> \
			</ul> \
		</div>'
	);
	
};