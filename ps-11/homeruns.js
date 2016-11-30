var data = [{"year":1,"HomeRuns":0},
{"year":2,"HomeRuns":5},
{"year":3,"HomeRuns":36},
{"year":4,"HomeRuns":23},
{"year":5,"HomeRuns":42},
{"year":6,"HomeRuns":42},
{"year":7,"HomeRuns":41},
{"year":8,"HomeRuns":52},
{"year":9,"HomeRuns":57},
{"year":10,"HomeRuns":47},
{"year":11,"HomeRuns":36},
{"year":12,"HomeRuns":48},
{"year":13,"HomeRuns":35},
{"year":14,"HomeRuns":54},
{"year":15,"HomeRuns":35},
{"year":16,"HomeRuns":30}];

var margin = {top: 20, right: 30, bottom: 70, left: 90};

var width = 1000 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear()
	.domain([0,20])
    .range([0, width]);

var y = d3.scale.linear()
	.domain([0,60])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg =	d3.select("body")
			.append("svg")
			.attr("class", "chart")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom);

var HomeRuns = svg.append("text")
		      .attr("transform", "rotate(-90)")
		      .attr("y", 20)
		      .attr("x", -300)
		      .text("Home Runs");

var year = svg.append("text")
		      .attr("y", 600)
		      .attr("x", 500)
		      .text("Year");

var chart = svg
			.append("g")
			.attr("width", 1000)
			.attr("height", 600)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

chart.append("g")
  .attr("class", "y axis")
  .call(yAxis);

var colorScale = d3.scale.linear()
    .range(['#070923','#6d4ca3'])
    .domain([20, 80]);

var Tool = d3.select("body")

                      .append("div")
                      .attr("class", "mytooltip")
                      .style("opacity", "0")
                      .style("display", "none");

var bars = chart.selectAll(".bar")
	      .data(data)
		    .enter().append("rect")
		      .attr("class", "bar")
		      .style("fill", function(d) { return colorScale(d.HomeRuns)})
		      .attr("x", function(d) { return x(d.year) - 20; })
		      .attr("width", 20)
		      .attr("y", function(d) { return y(d.HomeRuns); })
		      .attr("height", function(d) { return height - y(d.HomeRuns); })
		      .on("mouseover", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.attr("x", function(d) { return x(d.year) - 30; })
		  			.style("cursor", "pointer")
		  			.attr("width", 40)
            .style("fill", "yellow")
		  			Tool
                      .transition()
                      .duration(500)
                      .style("opacity", "0.5")
                      .style("display", "block")


                    Tool
                      .text(
                      "Hello"
                      )
                      .style("left", (d3.event.pageX - 113) + "px")
                      .style("top", (d3.event.pageY - 190) + "px")

		      })
		      .on("mouseout", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
            .style("fill", function(d) { return colorScale(d.HomeRuns)})
		  			.attr("x", function(d) { return x(d.year) - 20; })
		  			.style("cursor", "normal")
		  			.attr("width", 20)
		  			Tool.transition()
                        .duration(500)
                        .style("opacity", "0")
                        .style("display", "none")

		      });
