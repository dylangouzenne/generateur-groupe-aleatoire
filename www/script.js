

/*

	Dans un premier temps, on mélange les personnes

	bdd => tableau_melange

*/

var tableau_melange = [];

do
{
	var j = Math.floor( Math.random() * bdd.length );
	var personne = bdd[j];

	tableau_melange.push(personne);

	bdd.splice(j,1);
}
while( bdd.length>0 );






/*

	Je distribue les personnes dans chaque table,
	d'abord t1, puis t2, t3, t4, puis on reprend
	à t1, etc...

*/

var ntables = $('.table').length;

for( var i=0 ; i<ntables ; i++ )
{
	$('#t' + i).append('<li>' + tableau_melange[0+(3*i)].prenom + '</li>');
	$('#t' + i).append('<li>' + tableau_melange[1+(3*i)].prenom + '</li>');
	$('#t' + i).append('<li>' + tableau_melange[2+(3*i)].prenom + '</li>');
}


