var movieName = [
{
	title : "Tagru",
	hasWatched : true,
	rating : 5
},
{
	title : "Taraka",
	hasWatched : false,
	rating : 5 
},
{
title : "Tagru",
	hasWatched : false,
	rating : 5 
}
]
movieName.forEach(function (Move){
	var results = "you have ";
	if(Move.hasWatched){
		results += "watched ";

	}
	else
	{
		results += "not seen";

	}
	results += "\"" + Move.title + "\" - ";
	results += Move.rating +  "Stars";
	console.log(results);
})
// console.log("You watched 'Tagru' - 5 stars");
// console.log("You watched 'Ramboo' - 4.5 stars");
// console.log("You watched 'Chamak' - 3.5 stars");
// console.log("You watched 'Tharak' - 5 stars");
