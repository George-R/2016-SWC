
var lines = [
  [{ "x":1, "y":0}, {"x":2, "y":5}],
  [{ "x": 2, "y": 5}, { "x": 3, "y": 36}],
  [{ "x": 3, "y": 36}, { "x": 4, "y": 23}],
  [{ "x": 4, "y": 23}, { "x": 5, "y": 42}],
  [{ "x": 5, "y": 42}, { "x": 6, "y": 42}],
  [{ "x": 6, "y": 42}, { "x": 7, "y": 41}],
  [{ "x": 7, "y": 41}, { "x": 8, "y": 52}],
  [{ "x": 8, "y": 52}, { "x": 9, "y": 57}],
  [{ "x": 9, "y": 57}, { "x": 10, "y": 47}],
  [{ "x": 10, "y": 47}, { "x": 11, "y": 36}],
  [{ "x": 11, "y": 36}, { "x": 12, "y": 48}],
  [{ "x": 12, "y": 48}, { "x": 13, "y": 35}],
  [{ "x": 13, "y": 35}, { "x": 14, "y": 54}],
  [{ "x": 14, "y": 54}, { "x": 15, "y": 35}],
  [{ "x": 15, "y": 35}, { "x": 16, "y": 30}],
  [{ "x": 16, "y": 30}, { "x": 17, "y": 30}],
  [{ "x": 17, "y": 30}, { "x": 18, "y": 16}],
  [{ "x": 18, "y": 16}, { "x": 19, "y": 18}],
  [{ "x": 19, "y": 18}, { "x": 20, "y": 7}],
  [{ "x": 20, "y": 7}, { "x": 21, "y": 0}],
  [{ "x": 21, "y": 0}, { "x": 22, "y": 33}],
  [{ "x": 22, "y": 33}, { "x": 23, "y": 9}],
  [{ "x": 23, "y": 9}, { "x": 23, "y": 9}],

]

var data = [
  [{ "x":1, "y":0}],
  [{ "x": 2, "y": 5}],
  [{ "x": 3, "y": 36}],
  [{ "x": 4, "y": 23}],
  [{ "x": 5, "y": 42}],
  [{ "x": 6, "y": 42}],
  [{ "x": 7, "y": 41}],
  [{ "x": 8, "y": 52}],
  [{ "x": 9, "y": 57}],
  [{ "x": 10, "y": 47}],
  [{ "x": 11, "y": 36}],
  [{ "x": 12, "y": 48}],
  [{ "x": 13, "y": 35}],
  [{ "x": 14, "y": 54}],
  [{ "x": 15, "y": 35}],
  [{ "x": 16, "y": 30}],
  [{ "x": 17, "y": 30}],
  [{ "x": 18, "y": 16}],
  [{ "x": 19, "y": 18}],
  [{ "x": 20, "y": 7}],
  [{ "x": 21, "y": 0}],
  [{ "x": 22, "y": 33}],
  [{ "x": 23, "y": 9}],
]




var margin = {top: 20, right: 80, bottom: 60, left: 50},
    width = 800 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0,width])
    .domain([0,25]);

var y = d3.scale.linear()
    .range([height,0])
    .domain([0,60]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function (d) { return x(d.x); })
    .y(function (d) { return y(d.y); });

var svg = d3.select("#graph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


svg.append("g")
  .attr("class", "xAxis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

svg.append("g")
  .attr("class", "yAxis")
  .call(yAxis);

  // text label for the y axis
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", margin.left-82)
    .attr("x", 0 - (height / 2))
    .style("text-anchor", "middle")
    .text("Number of HRs");

  // text label for the x axis
  svg.append("text")
    .attr("y", height - margin.bottom+98)
    .attr("x", width / 2)
    .style("text-anchor", "middle")
    .text("Year in League");

d3.selectAll('svg')
      .append('image')
      .attr('xlink:href','http://www.fitnessandfreebies.com/exercise/images/Hypodermic_Needle.png')
      .attr('height', '100')
      .attr('width', '100')
      .attr('x', '149')
      .attr('y', '50')

d3.selectAll('svg')
        .append('image')
        .attr('xlink:href','http://www.fitnessandfreebies.com/exercise/images/Hypodermic_Needle.png')
        .attr('height', '100')
        .attr('width', '100')
        .attr('x', '315')
        .attr('y', '50')

d3.selectAll('svg')
            .append('image')
            .attr('xlink:href','http://www.fitnessandfreebies.com/exercise/images/Hypodermic_Needle.png')
            .attr('class', 'pico')
            .attr('height', '100')
            .attr('width', '100')
            .attr('x', '60')
            .attr('y', '200')




/*d3.selectAll('svg')
      .append('image')
      .attr('xlink:href','http://workoutaid.work/wp-content/uploads/2015/06/hgh-anabolic-steroids-prescriptions-online.png')
      .attr('height', '100')
      .attr('width', '100')
      .attr('x', '525')
      .attr('y', '220')
      .attr('background-color', 'grey') */

d3.selectAll('svg')
  .append('image')
  .attr('xlink:href','https://cdn.shopify.com/s/files/1/0186/4338/products/Yankees---Alex-Rodriguez-Jersey.png?v=1467733237')

  .attr('height', '200')
  .attr('width', '200')
  .attr('x', '230')
  .attr('y', '250')

  d3.selectAll('svg')
    .append('image')
    .attr('xlink:href','http://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F0507%2FARodHR576.jpg&w=570')
    .attr('height', '250')
    .attr('width', '250')
    .attr('x', '530')
    .attr('y', '-35')



for (var i=0; i < lines.length; i++) {
    svg.append("path")
      .attr("class", "plot")
      .datum(lines[i])
      .attr("d", line);

}

var circles = svg.selectAll('dot')
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d){return x(d.x);})
    .attr("cy", function(d) {return y(d.y);})
    .attr("r", 3);
