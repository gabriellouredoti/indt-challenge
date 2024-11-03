import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface BarChartProps {
	data: {
		profile_description: string;
		count_active: number;
		count_canceled: number;
	}[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [dimensions, setDimensions] = useState({ width: 600, height: 400 });

	useEffect(() => {
		const handleResize = () => {
			const svg = d3.select(svgRef.current);
			const container = svg.node()?.getBoundingClientRect();
			if (container) {
				setDimensions({
					width: container.width,
					height: container.height,
				});
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove();

		const margin = { top: 20, right: 30, bottom: 40, left: 40 };
		const width = dimensions.width - margin.left - margin.right;
		const height = dimensions.height - margin.top - margin.bottom;

		const sortedData = data.sort(
			(a, b) =>
				b.count_active +
				b.count_canceled -
				(a.count_active + a.count_canceled)
		);

		const x = d3
			.scaleBand()
			.domain(sortedData.map((d) => d.profile_description))
			.range([0, width])
			.padding(0.1);

		const y = d3
			.scaleLinear()
			.domain([
				0,
				d3.max(
					sortedData,
					(d) => d.count_active + d.count_canceled
				) as number,
			])
			.range([height, 0]);

		const color: any = d3
			.scaleOrdinal()
			.domain(["Ativos", "Cancelados"])
			.range(["steelblue", "orange"]);

		const g = svg
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		g.selectAll(".bar-active")
			.data(sortedData)
			.enter()
			.append("rect")
			.attr("class", "bar-active")
			.attr("x", (d) => x(d.profile_description)!)
			.attr("y", (d) => y(d.count_active))
			.attr("width", x.bandwidth() / 2)
			.attr("height", (d) => height - y(d.count_active))
			.attr("fill", color("Ativos"))
			.on("mouseover", function () {
				d3.select(this).attr("fill", "darkblue");
			})
			.on("mouseout", function () {
				d3.select(this).attr("fill", color("Ativos"));
			});

		g.selectAll(".bar-canceled")
			.data(sortedData)
			.enter()
			.append("rect")
			.attr("class", "bar-canceled")
			.attr("x", (d) => x(d.profile_description)! + x.bandwidth() / 2)
			.attr("y", (d) => y(d.count_canceled))
			.attr("width", x.bandwidth() / 2)
			.attr("height", (d) => height - y(d.count_canceled))
			.attr("fill", color("Cancelados"))
			.on("mouseover", function () {
				d3.select(this).attr("fill", "darkorange");
			})
			.on("mouseout", function () {
				d3.select(this).attr("fill", color("Cancelados"));
			});

		g.append("g")
			.attr("transform", `translate(0,${height})`)
			.call(d3.axisBottom(x));

		g.append("g").call(
			d3.axisLeft(y).tickFormat(d3.format(".0f")).ticks(5)
		);

		g.selectAll(".text")
			.data(sortedData)
			.enter()
			.append("text")
			.attr("class", "text")
			.attr("x", (d) => x(d.profile_description)! + x.bandwidth() / 4)
			.attr("y", (d) => y(d.count_active) - 5)
			.attr("dy", "2em")
			.attr("text-anchor", "middle")
			.attr("font-size", "0.6vw")
			.attr("fill", "white")
			.attr("font-weight", "600")
			.text((d) => `Ativos: ${d.count_active}`);

		g.selectAll(".text-canceled")
			.data(sortedData)
			.enter()
			.append("text")
			.attr("class", "text-canceled")
			.attr(
				"x",
				(d) => x(d.profile_description)! + (x.bandwidth() * 3) / 4
			)
			.attr("y", (d) => y(d.count_canceled) - 5)
			.attr("dy", "2em")
			.attr("text-anchor", "middle")
			.attr("font-size", "0.6vw")
			.attr("fill", "white")
			.attr("font-weight", "600")
			.text((d) => `Cancelados: ${d.count_canceled}`);
	}, [data, dimensions]);

	return (
		<svg
			ref={svgRef}
			width={dimensions.width}
			height={dimensions.height}
		></svg>
	);
};

export default BarChart;
