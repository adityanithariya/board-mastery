import React from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const OutlinePieChart = () => {
	const pieData = [
		{ name: "Overview", value: 93, fill: "#7086FD" },
		{ name: "Exploring the Innovations of Labs", value: 26, fill: "#988AFC" },
		{ name: "Role in ACHPN", value: 43, fill: "#1FB8CF" },
		{ name: "Enhanced ACHPN Monitoring", value: 53, fill: "#FFAE4C" },
		{ name: "A Case Study in ACHPN Applications", value: 85, fill: "#6FD195" },
	];
	return (
		<div className="w-fit shadow rounded-2xl px-4 md:px-8 py-3 mt-10 ml-1 border border-slate-100">
			<h3 className="border-b border-[#07dbfa]">Pie</h3>
			<div className="flex items-center flex-col md:flex-row">
				<PieChart className="hidden md:block" width={360} height={350}>
					<Pie
						dataKey="value"
						data={pieData}
						cx="50%"
						cy="50%"
						outerRadius={140}
						fill="#8884d8"
						label
					>
						{pieData.map((entry, index) => (
							<Cell key={entry.name} fill={entry.fill} />
						))}
					</Pie>
					<Tooltip />
				</PieChart>
				<PieChart className="md:hidden" width={260} height={220}>
					<Pie
						dataKey="value"
						data={pieData}
						cx="50%"
						cy="50%"
						outerRadius={80}
						fill="#8884d8"
						label
					>
						{pieData.map((entry, index) => (
							<Cell key={entry.name} fill={entry.fill} />
						))}
					</Pie>
					<Tooltip />
				</PieChart>
				<div className="ml-2 md:ml-10">
					{pieData.map((entry) => (
						<div key={entry.name} className="flex items-center mb-3">
							<div
								className="size-4 rounded-full mr-3"
								style={{ backgroundColor: entry.fill }}
							/>
							<span className="text-xs md:text-sm">{entry.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OutlinePieChart;
