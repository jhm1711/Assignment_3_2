import * as d3 from "d3";

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

const data = [
  { name: "apple", x: 40, y: 120, radius: 20, text: "Apple" },
  { name: "banana", x: 80, y: 80, radius: 15, text: "Banana" },
  { name: "cherry", x: 120, y: 250, radius: 25, text: "Cherry" },
  { name: "strawberry", x: 160, y: 180, radius: 10, text: "Strawberry" },
  { name: "grape", x: 200, y: 200, radius: 20, text: "Grape" },
];

const circles = svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function (d) {
    return d.x;
  })
  .attr("cy", function (d) {
    return d.y;
  })
  .attr("r", function (d) {
    return d.radius;
  })
  .attr("stroke", "gray")
  .style("fill", function (d) {
    if (d.name === "apple") {
      return "red";
    } else if (d.name === "banana") {
      return "yellow";
    } else if (d.name === "cherry") {
      return "red";
    } else if (d.name === "strawberry") {
      return "red";
    } else if (d.name === "grape") {
      return "purple";
    }
  });

const texts = svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", function (d) {
    return d.x;
  })
  .attr("y", function (d) {
    return d.y;
  })
  .text(function (d) {
    return d.text;
  })
  .style("text-anchor", "middle")
  .style("font-size", "8px")
  .style("font-family", "Arial")
  .style("font-weight", "bold");

circles.on("mouseover", function () {
  d3.select(this)
    .transition()
    .duration(500)
    .attr("r", (d) => d.radius * 2)
    .style("opacity", 0.5);
});

circles.on("mouseout", function () {
  d3.select(this)
    .transition()
    .duration(500)
    .attr("r", (d) => d.radius)
    .style("opacity", 1);
});
