var data = [{"year":1,"HomeRuns":20},
{"year":2,"HomeRuns":4, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":3,"HomeRuns":0, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":4,"HomeRuns":41 , "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48,}
{"year":5,"HomeRuns":51, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":6,"HomeRuns":36, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":7,"HomeRuns":35, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":8,"HomeRuns":29, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":9,"HomeRuns":34, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":10,"HomeRuns":29, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":11,"HomeRuns":40, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":12,"HomeRuns":49, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":13,"HomeRuns":38, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":14,"HomeRuns":47, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":15,"HomeRuns":52, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":16,"HomeRuns":37, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":17,"HomeRuns":22, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":18,"HomeRuns":23, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":19,"HomeRuns":13, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":20,"HomeRuns":28, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":21,"HomeRuns":18, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":22,"HomeRuns":8, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":23,"HomeRuns":0, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":24,"HomeRuns":8, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},
{"year":25,"HomeRuns":6, "Awards": "N/A", "obp":330 , "ops":.746, "war":3.5, "walk": 65, "avg": 223, "RBI": 48},

];

var margin = {top: 20, right: 30, bottom: 70, left: 90};

var width = 950 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear()
	.domain([0,25])
    .range([0, width]);

var y = d3.scale.linear()
	.domain([0,75])
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
		      .attr("y", 50)
		      .attr("x", -300)
		      .text("Home Runs");

var year = svg.append("text")
		      .attr("y", 580)
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
                      .style("opacity", "0.6")
                      .style("display", "none");

var Tool2 = d3.select("body")

										  .append("div")
		                  .attr("class", "mytooltip")
		                  .style("opacity", "0.6")
			                .style("display", "none");






var bars = chart.selectAll(".bar")
	      .data(data)
		    .enter().append("rect")
		      .attr("class", "bar")
		      .style("fill", function(d) { return colorScale(d.HomeRuns)})
		      .attr("x", function(d) { return x(d.year) - 10; })
		      .attr("width", 20)
		      .attr("y", function(d) { return y(d.HomeRuns); })
		      .attr("height", function(d) { return height - y(d.HomeRuns); })
		      .on("mouseover", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.attr("x", function(d) { return x(d.year) - 20; })
		  			.style("cursor", "pointer")
		  			.attr("width", 40)
            .style("fill", "yellow")
		  			Tool
                      .transition()
                      .duration(1000)
                      .style("opacity", "1")
                      .style("display", "block")






                    Tool
                      .text(
                      "Hello"
                      )
											.html("<br/> RBI: "
											              + d.RBI
											                                                        + "<br/> HR: "
											                                                        + d.HomeRuns
											                                                        + " <br/> Awards: "
											                                                        + d.Awards)

                      .style("right", (d3.event.pageX) + d3.event.pageX )
                      .style("top", (d3.event.pageY) + d3.event.pageY)




		      })
		      .on("mouseout", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
            .style("fill", function(d) { return colorScale(d.HomeRuns)})
		  			.attr("x", function(d) { return x(d.year) - 10; })
		  			.style("cursor", "normal")
		  			.attr("width", 20)
		  			Tool.transition()
                        .duration(500)
                        .style("opacity", "1")
                        .style("display", "block")

		      });
