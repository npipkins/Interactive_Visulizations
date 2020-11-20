//Use d3 to pull in the data
d3.json("data/samples.json").then((data) => {

//Create the bar chart trace
  var trace1 = {
    x: data.map(row => samples.sample_values),
    y: data.map(row => samples.otu_ids),
    type: "bar",
  };

//Make the data array
var data = [trace1];

//Define the layout
var layout = {
    title: "Bar Chart"
};

//Plot the chart
Plotly.newPlot("bar", data, layout);
});

//Create the bubble chart trace
var trace2 = {
    x: data.map(row => samples.otu_ids),
    y: data.map(row => samples.samples_values),
    type: "bubble",
  };

//Make the data array
var data = [trace2];

//Define the layout
var layout = {
    title: "Bubble Chart"
};

//Plot the chart
Plotly.newPlot("bubble", data, layout);
});