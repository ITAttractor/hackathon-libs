function run(){
    var svg = d3.select("svg");

    svg.selectAll("rect")
        .data([127, 61, 256])
        .transition()
        .duration(1500) // 1.5 seconds
        .attr("x", 0)
        .attr("y", function(d,i) { return i*90+50; })
        .attr("width", function(d,i) { return d; })
        .attr("height", 20)
        .style("fill", "steelblue")
        .transition()
        .duration(1500) // 1.5 seconds
        .attr("x", 0)
        .attr("y", function(d,i) { return i*30+30; })
        .attr("width", function(d,i) { return i*30+d; })
        .attr("height", 20)
        .style("fill", "green");

}