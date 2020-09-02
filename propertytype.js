// set the dimensions and margins of the graph
var margin = {top: 40, right: 150, bottom: 60, left: 70},
    width = 700 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#pricebypropertytype")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json("final_neighborhood_data.json", function(data) {

var data = [{
    type: "sunburst",
    ids: [
      "Apartments", "House", "Condominium", "Other", "Bed & Breakfast",
      "Townhouse", "Loft", "Boat"
    ],
    labels: [
      "Apartments", "House", "Condominium", "Other", "Bed<br>&<br>Breakfast", "Townhouse", "Loft", "Boat"
    ],
    parents: [
      "", "", "", "Apartments", "House", "Condominium", "Other",
      "Bed & Breakfast", "Townhouse","Loft", "Boat"
    ],
    outsidetextfont: {size: 20, color: "#377eb8"},
    // leaf: {opacity: 0.4},
    marker: {line: {width: 2}},
  }];
  
  var layout = {
    margin: {l: 0, r: 0, b: 0, t:0},
    sunburstcolorway:["#636efa","#ef553b","#00cc96"],
  };
  Plotly.newPlot('pricebypropertytype', data, layout);
})