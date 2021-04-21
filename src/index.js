const d3 = require("d3");
d3.select("body").style("background-color", "lightyellow");


var data = d3.csv("shooter-data.csv").then(function(data) {
  data.forEach(function(d) {
    if (d.STATISTICAL_MURDER_FLAG == "true") {
      console.log("yes");
    } else {
      console.log("no");
    }
  });
});

var height = 500;
var width = 500;

var svg = d3.select("#container").append('svg').attr('width', width + 'px').attr('height', height + 'px');

svg.append("rect").attr('x', 120).attr('y', 120).attr('width', width + 'px').attr('height', height + 'px').attr("fill", "white");