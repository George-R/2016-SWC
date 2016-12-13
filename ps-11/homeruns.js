var data = [
{"year":1, "avg": 204, "HomeRuns":0, "RBI": 2, "Awards": "N/A", "obp":241 , "ops":.445, "war":-0.2, "walk": 3},
{"year":2, "avg": 232,"HomeRuns":5, "RBI": 19, "Awards": "N/A", "obp":264 , "ops":.672, "war":-0.4, "walk": 6},
{"year":3, "avg": 358,"HomeRuns":36, "RBI": 123, "Awards": "All-Star, Silver Slugger", "obp":414 , "ops":1.045, "war":9.4, "walk": 59},
{"year":4, "avg": 300,"HomeRuns":23, "RBI": 84, "Awards": "All-Star", "obp":350 , "ops":.846, "war":5.6, "walk": 41},
{"year":5, "avg": 310,"HomeRuns":42, "RBI": 124, "Awards": "All-Star, Silver Slugger", "obp":360 , "ops":.919, "war":8.5, "walk": 45},
{"year":6, "avg": 285,"HomeRuns":42, "RBI": 111, "Awards": "Silver Slugger", "obp":357 , "ops":.943, "war":4.7, "walk": 56},
{"year":7, "avg": 316,"HomeRuns":41, "RBI": 132, "Awards": "All-Star, Silver Slugger", "obp":420 , "ops":1.026, "war":10.4, "walk": 100},
{"year":8, "avg": 318,"HomeRuns":52, "RBI": 145, "Awards": "All-Star, Silver Slugger", "obp":399 , "ops":1.021, "war":8.3, "walk": 75},
{"year":9, "avg": 300,"HomeRuns":57, "RBI": 142, "Awards": "All-Star, Silver Slugger, Golden Glove", "obp":392 , "ops":1.015, "war":8.8, "walk": 87},
{"year":10, "avg": 298,"HomeRuns":47, "RBI": 118, "Awards": "All-Star, Silver Slugger, Golden Glove, MVP", "obp":396 , "ops":.995, "war":8.4, "walk": 87},
{"year":11, "avg": 286,"HomeRuns":36, "RBI": 106, "Awards": "All-Star", "obp":375 , "ops":.888, "war":15, "walk": 80},
{"year":12, "avg": 321,"HomeRuns":48, "RBI": 130, "Awards": "All-Star, Silver Slugger, MVP", "obp":421 , "ops":1.031, "war":7.6, "walk": 91},
{"year":13, "avg": 290,"HomeRuns":35, "RBI": 121, "Awards": "All-Star", "obp":392 , "ops":.914, "war":9.4, "walk": 90},
{"year":14, "avg": 314,"HomeRuns":54, "RBI": 156, "Awards": "All-Star, Silver Slugger, MVP", "obp":422 , "ops":1.067, "war":4.5, "walk": 95},
{"year":15, "avg": 302,"HomeRuns":35, "RBI": 103, "Awards": "All-Star, Silver Slugger", "obp":392 , "ops":.965, "war":9.4, "walk": 65},
{"year":16, "avg": 286,"HomeRuns":30, "RBI": 100, "Awards": "N/A", "obp":402 , "ops":.933, "war":6.8, "walk": 80},
{"year":17, "avg": 270,"HomeRuns":30, "RBI": 125, "Awards": "All-Star", "obp":341 , "ops":.847, "war":4.1, "walk": 59},
{"year":18, "avg": 276,"HomeRuns":16, "RBI": 62, "Awards": "All-Star", "obp":362 , "ops":.823, "war":4.1, "walk": 47},
{"year":19, "avg": 272,"HomeRuns":18, "RBI": 57, "Awards": "N/A", "obp":353 , "ops":.783, "war":3.9, "walk": 51},
{"year":20, "avg": 244,"HomeRuns":17, "RBI": 19, "Awards": "N/A", "obp":348 , "ops":.771, "war":2.2, "walk": 23},
{"year":21, "avg": 0,"HomeRuns":0, "RBI": 0, "Awards": "N/A", "obp":0 , "ops":0, "war":15, "walk": 0.3},
{"year":22, "avg": .250,"HomeRuns":33, "RBI": 86, "Awards": "N/A", "obp":356 , "ops":.842, "war":3.1, "walk": 84},
{"year":23, "avg": .200,"HomeRuns":9, "RBI": 31, "Awards": "N/A", "obp":247 , "ops":.598, "war":-1.2, "walk": 14}
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
			.attr("width", width + margin.right)
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

											.html(
												"<br/> Avg: ."
												+d.avg
												+"<br/> RBIs: "
											              + d.RBI
											                                                        + "<br/> HRs: "
											                                                        + d.HomeRuns
																																							+" <br/> Walks: "
																																							+d.walk
																																							+" <br/> OBP: ."
																																							+d.obp

																																							+"<br/> OPS: "
																																							+d.ops
																																							+"<br/> WAR: "
																																							+d.war
											                                                        + "<br/> "
																																							+ "<br/> "
																																							+"<br/> Awards: "
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



	d3.selectAll('svg')
					      .append('image')
					      .attr('xlink:href','https://cdn2.iconfinder.com/data/icons/medical-line-5/512/syringe_injection_drug_steroid-512.png')
					      .attr('height', '100')
					      .attr('width', '100')
					      .attr('x', '750')
					      .attr('y', '0')
								.on ("mouseover", function (d){
									d3.select('narrtive')
									.transition()
									.style("opacity", "1")
								});
