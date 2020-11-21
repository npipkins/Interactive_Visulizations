//READ IN JSON DATA FILE    
d3.json("samples.json").then((importeddata) => {
  var data = importedData;

  //SORT TO GET HIGHEST VALUES    
  var sortedData = data.samples.sample_values.sort((a,b) => b.sample_values - a.sample_values);
  
  //SLICE TO GRAB A CERTAIN AMOUNT OF OBJECTS
  var top10_OTU = sortedData.slice(0,10);
  //TRACE1 FOR BAR CHAR
  var trace1 = {
    type: "bar",
    orientation: "h",
    x: top10_OTU.map(d => d.otu_ids),
    y: top10_OTU.map(d => d.sample_values)
      };
  //TRACE2 FOR BUBBLE CHART
  var trace2 = {
      type: "bubble",
      x: top10_OTU.map(d => d.otu_ids),
      y: top10_OTU.map(d => d.sample_values)
  };
  //DATA ARRAY FOR BOTH SEPERATE CHARTS
  var dataBar = [trace1];
  var dataBubble = [trace2];
  
  //DEFINE PLOT LAYOUTS
  var layoutBar = {
      title: "Top 10 OTUs",
      xaxis: {
          title: "Bacteria"
      }
  };
  
  //PLOT THE BAR CHART TO THE BAR CHART DIV TAG
  Plotly.newPlot("bar", dataBar, layoutBar);
  
  //PLOT THE BAR CHART TO THE BUBBLE CHART DIV TAG
  Plotly.newPlot("bubble", dataBubble);

});