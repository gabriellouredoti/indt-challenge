// PieChart.tsx
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface PieChartProps {
	data: {
		profile_description: string;
		count_active: number;
		count_canceled: number;
	}[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

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

		const radius = Math.min(dimensions.width, dimensions.height) / 2;

		const total = data.reduce(
			(acc, curr) => acc + curr.count_active + curr.count_canceled,
			0
		);

		const color = d3
			.scaleOrdinal()
			.domain(
				data.flatMap((d) => [
					d.profile_description + " - Ativos",
					d.profile_description + " - Cancelados",
				])
			)
			.range(["steelblue", "orange", "lightblue", "red"]);

		const pieData: any = data.flatMap((d) => [
			{
				label: `${d.profile_description} - Ativos`,
				value: d.count_active,
			},
			{
				label: `${d.profile_description} - Cancelados`,
				value: d.count_canceled,
			},
		]);

		const pie = d3.pie().value((d: any) => d.value);

		const arc = d3.arc().innerRadius(0).outerRadius(radius);

		const g = svg
			.append("g")
			.attr(
				"transform",
				`translate(${dimensions.width / 2}, ${dimensions.height / 2})`
			);

		const arcs: any = g
			.selectAll(".arc")
			.data(pie(pieData))
			.enter()
			.append("g")
			.attr("class", "arc");

		arcs.append("path")
			.attr("d", arc)
			.attr("fill", (d: any) => color(d.data.label));

		arcs.append("text")
			.attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
			.attr("dy", "-1.2em")
			.style("text-anchor", "middle")
			.style("fill", "white")
			.style("font-size", "10px")
			.style("font-weight", "600")
			.text((d: any) => d.data.label.split(" - ")[0]);

		arcs.append("text")
			.attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
			.attr("dy", "0.2em")
			.style("text-anchor", "middle")
			.style("fill", "white")
			.style("font-size", "10px")
			.style("font-weight", "600")
			.text((d: any) => {
				if (d.data.label.includes("Ativos")) {
					const percentage = ((d.data.value / total) * 100).toFixed(
						1
					);
					return `Ativos\n(${percentage}%)`;
				}
				return "";
			});

		arcs.append("text")
			.attr("transform", (d: any) => `translate(${arc.centroid(d)})`)
			.attr("dy", "1em")
			.style("text-anchor", "middle")
			.style("fill", "white")
			.style("font-size", "10px")
			.style("font-weight", "600")
			.text((d: any) => {
				if (d.data.label.includes("Cancelados")) {
					const percentage = ((d.data.value / total) * 100).toFixed(
						1
					);
					return `Cancelados\n(${percentage}%)`;
				}
				return "";
			});
	}, [data, dimensions]);

	return (
		<svg
			ref={svgRef}
			width={dimensions.width}
			height={dimensions.height}
		></svg>
	);
};

export default PieChart;
