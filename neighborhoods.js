// var neighborhoods = []

d3.json("final_neighborhood_data.json").then(function(data) {
    console.log(data);
    console.log(data[0].neighbourhood_cleansed);
    
    function selectRoxbury(entry) {
        return entry.neighbourhood_cleansed === "Roxbury";
      }
    var roxbury = data.filter(selectRoxbury);
    console.log(roxbury);
    
    






        var trace1 = {
            y: roxbury.review_scores_rating,
            name: "Roxbury",
            type: "box",
            boxpoints: "all"
        };
        
        var data1 = [trace1];

        var layout = {
            title: "Temperature in New York and Houston, 2014-2015",
            yaxis: { title: "Degrees (F)"}
        };
      // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("rating", data1, layout);
})

