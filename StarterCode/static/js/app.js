//Create the path to read in the json file
path = "/data/samples.json"

//Use d3 to pull in the data
d3.json("samples.json").then(function(data){
    console.log(data)
});