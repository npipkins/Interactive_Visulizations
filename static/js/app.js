//Use d3 to pull in the data
d3.json("http://localhost:8000/samples.json").then(data);
    console.log(data);