var data = [
{"year":1,"HomeRuns":13, "RBI": 69, "Awards": "N/A", "obp":322 , "ops":.769, "war":1.3, "walk": 28, "avg": 280},
{"year":2,"HomeRuns":27, "RBI": 106, "Awards": "All-Star", "obp":366 , "ops":.906, "war":6.2, "walk": 49, "avg": 314},
{"year":3,"HomeRuns":26, "RBI": 92, "Awards": "All-Star", "obp":365 , "ops":.923, "war":7.1, "walk": 37, "avg": 328},
{"year":4,"HomeRuns":44, "RBI": 132, "Awards": "All-Star, MVP", "obp":378 , "ops":.978, "war":8.0, "walk": 57, "avg": 322},
{"year":5,"HomeRuns":30, "RBI": 95, "Awards": "All-Star, Golden Glove", "obp":386 , "ops":.931, "war":7.3, "walk": 59, "avg": 326},
{"year":6,"HomeRuns":39, "RBI": 123, "Awards": "All-Star, Golden Glove", "obp":401 , "ops":1.037, "war":8.6, "walk": 51, "avg": 355},
{"year":7,"HomeRuns":40, "RBI": 126, "Awards": "All-Star, Golden Glove", "obp":352 , "ops":.919, "war":8.0, "walk": 60, "avg": 292},
{"year":8,"HomeRuns":34, "RBI": 120, "Awards": "All-Star", "obp":381 , "ops":.974, "war":9.4, "walk": 56, "avg": 327},
{"year":9,"HomeRuns":45, "RBI": 128, "Awards": "All-Star", "obp":390 , "ops":1.008, "war":8.5, "walk": 66, "avg": 323},
{"year":10,"HomeRuns":44, "RBI": 130, "Awards": "All-Star", "obp":391 , "ops":.977, "war":9.1, "walk": 78, "avg": 319},
{"year":11,"HomeRuns":24, "RBI": 95, "Awards": "All-Star", "obp":393 , "ops":.907, "war":6.8, "walk": 62, "avg": 328},
{"year":12,"HomeRuns":32, "RBI": 89, "Awards": "All-Star", "obp":379 , "ops":.938, "war":7.8, "walk": 60, "avg": 318},
{"year":13,"HomeRuns":44, "RBI": 127, "Awards": "All-Star", "obp":356 , "ops":.895, "war":7.8, "walk": 76, "avg": 279},
{"year":14,"HomeRuns":39, "RBI": 109, "Awards": "All-Star", "obp":369 , "ops":.943, "war":8.5, "walk": 63, "avg": 307},
{"year":15,"HomeRuns":29, "RBI": 86, "Awards": "All-Star", "obp":354 , "ops":.852, "war":6.8, "walk": 64, "avg": 287},
{"year":16,"HomeRuns":44, "RBI": 97, "Awards": "All-Star", "obp":396 , "ops":1.003, "war":8.0, "walk": 87, "avg": 300},
{"year":17,"HomeRuns":38, "RBI": 118, "Awards": "All-Star", "obp":385 , "ops":.958, "war":5.0, "walk": 74, "avg": 298},
{"year":18,"HomeRuns":47, "RBI": 118, "Awards": "All-Star", "obp":410 , "ops":1.079, "war":7.2, "walk": 71, "avg": 327},
{"year":19,"HomeRuns":34, "RBI": 77, "Awards": "All-Star", "obp":390 , "ops":.904, "war":3.9, "walk": 92, "avg": 265},
{"year":20,"HomeRuns":40, "RBI": 96, "Awards": "All-Star", "obp":402 , "ops":1.045, "war":4.7, "walk": 68, "avg": 301},
{"year":21,"HomeRuns":20, "RBI": 69, "Awards": "All-Star", "obp":341 , "ops":.832, "war":2.1, "walk": 39, "avg": 268},
{"year":22,"HomeRuns":12, "RBI": 60, "Awards": "All-Star", "obp":332 , "ops":.687, "war":0.0, "walk": 70, "avg": 234},
{"year":23,"HomeRuns":10, "RBI": 35, "Awards": "All-Star", "obp":315 , "ops":.684, "war":0.4, "walk": 35, "avg": 229}

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
    .range(['#8B0000','#000080'])
    .domain([20, 50]);

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
												.attr('xlink:href','https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png')
												.attr('height', '100')
												.attr('width', '100')
												.attr('x', '840')
												.attr('y', '0')
												.on ("mouseover", function (d){

												});
