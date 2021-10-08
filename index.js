const express = require("express");
const app = express();

/*
an api to return a name from an array of names
*/

/* 
app.get takes 2 parameters
1st parameter is our route name/endpoint
2nd parameter is a callback function
*/

/* 
JSON -> Javascript Object Notation

{
    params: {
        index: 
    }
}

Mongodb
mongoose

*/

app.get("/fetchNames", (request, response) => {
	const names = ["Karen", "Joshua", "Pius", "Kwame", "Ama", "Bright"];

	response.json(names);
});

app.get("/fetchName/:index", (request, response) => {
	const parameter = request.params.index;
	const names = ["Karen", "Joshua", "Pius", "Kwame", "Ama", "Bright"];

	response.json(names[parameter]);
});

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
