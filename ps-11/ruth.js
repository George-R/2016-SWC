var data = [
{"year":1,"HomeRuns":0, "Awards": "N/A", "obp":200 , "ops":.500, "war":0.0, "walk": 0, "avg": 200, "RBI": 0 },
{"year":2,"HomeRuns":4, "Awards": "N/A", "obp":376 , "ops":.952, "war":1.8, "walk": 9, "avg": 315, "RBI": 20},
{"year":3,"HomeRuns":3, "Awards": "N/A", "obp":322 , "ops":.741, "war":1.7, "walk":10 , "avg": 272 , "RBI": 16},
{"year":4,"HomeRuns":2 , "Awards": "N/A", "obp":385 , "ops":.857, "war":2.1, "walk": 12, "avg": 325, "RBI": 14},
{"year":5,"HomeRuns":11, "Awards": "N/A", "obp":411 , "ops":.966, "war":5.1, "walk": 58, "avg": 300, "RBI": 61},
{"year":6,"HomeRuns":29, "Awards": "N/A", "obp":456 , "ops":1.114, "war":9.4, "walk": 101, "avg": 322, "RBI": 113},
{"year":7,"HomeRuns":54, "Awards": "N/A", "obp":532 , "ops":1.379, "war":11.9, "walk": 150, "avg": 376, "RBI": 135},
{"year":8,"HomeRuns":59, "Awards": "N/A", "obp":512 , "ops":1.359, "war":12.9, "walk": 145, "avg": 378, "RBI": 168},
{"year":9,"HomeRuns":35, "Awards": "N/A", "obp":434 , "ops":1.106, "war":6.3, "walk": 84, "avg": 315, "RBI": 96},
{"year":10,"HomeRuns":41, "Awards": "MVP", "obp":545 , "ops":1.09, "war":14.1, "walk": 170, "avg": 393, "RBI": 130},
{"year":11,"HomeRuns":46, "Awards": "N/A", "obp":513 , "ops":1.252, "war":11.7, "walk": 142, "avg": 378, "RBI": 124},
{"year":12,"HomeRuns":25, "Awards": "N/A", "obp":393 , "ops":.936, "war":3.5, "walk": 59, "avg": 290, "RBI": 67},
{"year":13,"HomeRuns":47, "Awards": "N/A", "obp":516 , "ops":1.253, "war":11.5, "walk": 144, "avg": 372, "RBI": 153},
{"year":14,"HomeRuns":60, "Awards": "N/A", "obp":486 , "ops":1.258, "war":12.4, "walk": 137, "avg": 356, "RBI": 165},
{"year":15,"HomeRuns":54, "Awards": "N/A", "obp":463 , "ops":1.172, "war":10.1, "walk": 137, "avg": 323, "RBI": 146},
{"year":16,"HomeRuns":46, "Awards": "N/A", "obp":430 , "ops":1.128, "war":8.0, "walk": 72, "avg": 345, "RBI": 154},
{"year":17,"HomeRuns":49, "Awards": "N/A", "obp":493 , "ops":1.225, "war":10.3, "walk": 136, "avg": 359, "RBI": 153},
{"year":18,"HomeRuns":46, "Awards": "N/A", "obp":495 , "ops":1.195, "war":10.3, "walk": 128, "avg": 373, "RBI": 162},
{"year":19,"HomeRuns":41, "Awards": "N/A", "obp":489 , "ops":1.150, "war":8.3, "walk": 130, "avg": 341, "RBI": 137},
{"year":20,"HomeRuns":34, "Awards": "All-Star", "obp":442 , "ops":1.023, "war":6.4, "walk": 114, "avg": 301, "RBI": 104},
{"year":21,"HomeRuns":22, "Awards": "All-Star", "obp":448 , "ops":.985, "war":5.1, "walk": 104, "avg": 288, "RBI": 84},
{"year":22,"HomeRuns":6, "Awards": "N/A", "obp":359 , "ops":.789, "war":0.2, "walk": 20, "avg": 181, "RBI": 12},

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
    .range(['#000066','#808080'])
    .domain([20, 80]);

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
                      .text(
                      "Hello"
                      )
											.html("<br/> Avg: ."
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
												.attr('xlink:href','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cursed_Seal_Kidoumaru_(Anime).svg/2000px-Cursed_Seal_Kidoumaru_(Anime).svg.png')
												.attr('height', '100')
												.attr('width', '100')
												.attr('x', '840')
												.attr('y', '0')
												.on ("mouseover", function (d){

												});
