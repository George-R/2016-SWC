var data = [
{"year":1,"HomeRuns":20, "Awards": "Rookie of the Year", "obp":356 , "ops":.828, "war":3.9, "walk": 57, "avg": 274, "RBI": 68 },
{"year":2,"HomeRuns":4, "Awards": "N/A", "obp":326 , "ops":.736, "war":1.2, "walk": 16, "avg": 236, "RBI": 23},
{"year":3,"HomeRuns":0, "Awards": "N/A", "obp":0 , "ops":0, "war":0, "walk":0 , "avg": 0 , "RBI": 0},
{"year":4,"HomeRuns":41 , "Awards": "All-Star, MVP", "obp":411 , "ops":1.078, "war":10.6, "walk": 66, "avg": 345, "RBI": 110},
{"year":5,"HomeRuns":51, "Awards": "All-Star", "obp":400 , "ops":1.059, "war":9.0, "walk": 79, "avg": 319, "RBI": 127},
{"year":6,"HomeRuns":36, "Awards": "All-Star", "obp":369 , "ops":.926, "war":7.6, "walk": 68, "avg": 296, "RBI": 84},
{"year":7,"HomeRuns":35, "Awards": "All-Star, Golden Glove ", "obp":407 , "ops":1.033, "war":8.3, "walk": 76, "avg": 333, "RBI": 97},
{"year":8,"HomeRuns":29, "Awards": "All-Star, Golden Glove", "obp":419 , "ops":1.002, "war":10.2, "walk": 78, "avg": 347, "RBI": 96},
{"year":9,"HomeRuns":34, "Awards": "All-Star, Golden Glove", "obp":381 , "ops":.964, "war":7.8, "walk": 65, "avg": 313, "RBI": 104},
{"year":10,"HomeRuns":29, "Awards": "All-Star, Golden Glove", "obp":381 , "ops":.936, "war":9.5, "walk": 61, "avg": 319, "RBI": 103},
{"year":11,"HomeRuns":40, "Awards": "All-Star, Golden Glove", "obp":393 , "ops":.977, "war":8.7, "walk": 81, "avg": 308, "RBI": 123},
{"year":12,"HomeRuns":49, "Awards": "All-Star, Golden Glove", "obp":384 , "ops":.999, "war":10.5, "walk": 78, "avg": 304, "RBI": 141},
{"year":13,"HomeRuns":38, "Awards": "All-Star, Golden Glove", "obp":380 , "ops":.962, "war":10.6, "walk": 66, "avg": 314, "RBI": 103},
{"year":14,"HomeRuns":47, "Awards": "All-Star, Golden Glove", "obp":383 , "ops":.990, "war":11.0, "walk": 82, "avg": 296, "RBI": 111},
{"year":15,"HomeRuns":52, "Awards": "All-Star, Golden Glove", "obp":398 , "ops":1.043, "war":11.2, "walk": 76, "avg": 317, "RBI": 112},
{"year":16,"HomeRuns":37, "Awards": "All-Star, Golden Glove", "obp":368 , "ops":.924, "war":9.0, "walk": 70, "avg": 288, "RBI": 103},
{"year":17,"HomeRuns":22, "Awards": "All-Star, Golden Glove", "obp":334 , "ops":.787, "war":4.3, "walk": 51, "avg": 263, "RBI": 70},
{"year":18,"HomeRuns":23, "Awards": "All-Star, Golden Glove", "obp":372 , "ops":.860, "war":6.2, "walk": 67, "avg": 289, "RBI": 79},
{"year":19,"HomeRuns":13, "Awards": "All-Star", "obp":362 , "ops":.798, "war":3.0, "walk": 49, "avg": 283, "RBI": 58},
{"year":20,"HomeRuns":28, "Awards": "All-Star", "obp":390 , "ops":.897, "war":5.2, "walk": 79, "avg": 291, "RBI": 83},
{"year":21,"HomeRuns":18, "Awards": "All-Star", "obp":425 , "ops":.907, "war":6.3, "walk": 112, "avg": 271, "RBI": 61},
{"year":22,"HomeRuns":8, "Awards": "All-Star", "obp":400 , "ops":.802, "war":0.9, "walk": 60, "avg": 250, "RBI": 22},
{"year":23,"HomeRuns":6, "Awards": "All-Star", "obp":303 , "ops":.647, "war":-0.0, "walk": 27, "avg": 211, "RBI": 25}

];

var margin = {top: 20, right: 30, bottom: 70, left: 90};

var width = 950 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear()
	.domain([0,23])
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

					var ref = svg.append("text")
												      .attr("y", 580)
												      .attr("x", 800)
															.style("font-size", "10px")
												      .text("baseball-reference.com");

															var title = svg.append("text")
																														.attr("y", 50)
																														.attr("x", 370)
																														.style("font-size", "30px")
																														.text("Home Runs by Season");


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
    .range(['#000000','#B8860B'])
    .domain([10, 70]);

var Tool = d3.select("body")

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
            .style("fill", "#EDE3D1")
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
												.attr('xlink:href','https://upload.wikimedia.org/wikipedia/commons/d/d3/Army_logo.png')
												.attr('height', '100')
												.attr('width', '100')
												.attr('x', '840')
												.attr('y', '0')
												.on ("mouseover", function (d){

												});
