var choco = [{"Year":20,"Year":80},
{"Year":40,"HomeRuns":60},
{"Year":60,"HomeRuns":40},
{"Year":80,"HomeRuns":20}];

var margin = {top: 20, right: 30, bottom: 70, left: 90};

var width = 600 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

var x = d3.scale.linear()
	.domain([0,90,80])
    .range([0, width]);

var y = d3.scale.linear()
	.domain([0,90,80])
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
		      .style("font-size", "20px")
		      .text("Home Runs");

var Year = svg.append("text")
		      .attr("y", 600)
		      .attr("x", 300)
		      .style("font-size", "20px")
		      .text("Year");

var chart = svg
			.append("g")
			.attr("width", 500)
			.attr("height", 500)
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

chart.append("g")
  .attr("class", "y axis")
  .call(yAxis);

var colorScale = d3.scale.linear()
    .range(['#231508','#754719'])
    .domain([20, 80]);

var myTool = d3.select("body")

                      .append("div")
                      .attr("class", "mytooltip")
                      .style("opacity", "0")
                      .style("display", "none");

var bars = chart.selectAll(".bar")
	      .data(choco)
		    .enter().append("rect")
		      .attr("class", "bar")
		      .style("fill", function(d) { return colorScale(d.HomeRuns)})
		      .attr("x", function(d) { return x(d.Year) - 20; })
		      .attr("width", 40)
		      .attr("y", function(d) { return y(d.HomeRuns); })
		      .attr("height", function(d) { return height - y(d.HomeRuns); })
		      .on("mouseover", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.attr("x", function(d) { return x(d.HomeRuns) - 30; })
		  			.style("cursor", "pointer")
		  			.attr("width", 60)
		  			myTool
                      .transition()
                      .duration(500)
                      .style("opacity", "1")
                      .style("display", "block")

                    myTool
                      .html(
                      "<div id='thumbnail'><span>" + d.name + "</span><img src='" + d.image + "'/></div>"
                      )
                      .style("left", (d3.event.pageX - 113) + "px")
                      .style("top", (d3.event.pageY - 190) + "px")

		      })
		      .on("mouseout", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.attr("x", function(d) { return x(d.HomeRuns) - 20; })
		  			.style("cursor", "normal")
		  			.attr("width", 40)
		  			myTool.transition()
                        .duration(500)
                        .style("opacity", "0")
                        .style("display", "none")

		      });
