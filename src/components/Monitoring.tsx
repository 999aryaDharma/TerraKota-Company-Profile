import React, { useState, useEffect } from "react";
import { Plane as Plant, Droplets, Sun, Wind, Thermometer, Activity, Leaf, Sprout, Recycle, Battery, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// Generate random data for the charts
const generateData = (hours: number) => {
	return Array.from({ length: hours }, (_, i) => ({
		time: `${String(i).padStart(2, "0")}:00`,
		ph: (Math.random() * (7.5 - 6.0) + 6.0).toFixed(1),
		nutrient: Math.floor(Math.random() * (800 - 600) + 600),
		temperature: (Math.random() * (28 - 22) + 22).toFixed(1),
		humidity: Math.floor(Math.random() * (85 - 65) + 65),
		water: Math.floor(Math.random() * (100 - 70) + 70),
		energy: Math.floor(Math.random() * (95 - 75) + 75),
	}));
};

const MetricCard = ({ icon: Icon, title, value, unit, trend }: { icon: any; title: string; value: string; unit: string; trend?: { value: number; isPositive: boolean } }) => (
	<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
		<div className="flex items-center space-x-4">
			<div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
				<Icon className="h-6 w-6 text-emerald-600" />
			</div>
			<div>
				<p className="text-sm text-gray-600">{title}</p>
				<div className="flex items-center">
					<p className="text-2xl font-bold text-emerald-900">
						{value}
						<span className="text-lg font-normal text-gray-600 ml-1">{unit}</span>
					</p>
					{trend && (
						<span className={`ml-2 text-sm ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
							{trend.isPositive ? "↑" : "↓"} {trend.value}%
						</span>
					)}
				</div>
			</div>
		</div>
	</div>
);

const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="bg-white p-6 rounded-xl shadow-sm">
		<h3 className="text-lg font-semibold text-emerald-900 mb-4">{title}</h3>
		{children}
	</div>
);

const Explore = () => {
	const [data, setData] = useState(generateData(24));

	// Simulate real-time updates
	useEffect(() => {
		const interval = setInterval(() => {
			setData((prev) => {
				const newData = [
					...prev.slice(1),
					{
						time: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
						ph: (Math.random() * (7.5 - 6.0) + 6.0).toFixed(1),
						nutrient: Math.floor(Math.random() * (800 - 600) + 600),
						temperature: (Math.random() * (28 - 22) + 22).toFixed(1),
						humidity: Math.floor(Math.random() * (85 - 65) + 65),
						water: Math.floor(Math.random() * (100 - 70) + 70),
						energy: Math.floor(Math.random() * (95 - 75) + 75),
					},
				];
				return newData;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const currentMetrics = [
		{
			icon: Thermometer,
			title: "Suhu",
			value: data[data.length - 1].temperature,
			unit: "°C",
			trend: { value: 2.5, isPositive: true },
		},
		{
			icon: Droplets,
			title: "Kelembaban",
			value: data[data.length - 1].humidity.toString(),
			unit: "%",
			trend: { value: 1.2, isPositive: true },
		},
		{
			icon: Battery,
			title: "Level Air",
			value: data[data.length - 1].water.toString(),
			unit: "%",
			trend: { value: 0.8, isPositive: false },
		},
		{
			icon: Zap,
			title: "Energi",
			value: data[data.length - 1].energy.toString(),
			unit: "%",
			trend: { value: 3.1, isPositive: true },
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 pt-20">
			{/* Hero Section */}
			<div className="relative h-[40vh] flex items-center justify-center">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: 'url("https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
					}}
				>
					<div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-sm" />
				</div>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Dashboard Monitoring</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">Pantau kondisi greenhouse secara real-time</p>
				</div>
			</div>

			{/* Dashboard */}
			<section className="py-12 px-4">
				<div className="max-w-7xl mx-auto">
					{/* Current Metrics */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						{currentMetrics.map((metric, index) => (
							<MetricCard key={index} {...metric} />
						))}
					</div>

					{/* Charts Grid */}
					<div className="grid lg:grid-cols-2 gap-6">
						<ChartCard title="pH & Nutrisi">
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart data={data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="time" />
										<YAxis yAxisId="left" />
										<YAxis yAxisId="right" orientation="right" />
										<Tooltip />
										<Line yAxisId="left" type="monotone" dataKey="ph" stroke="#059669" name="pH" />
										<Line yAxisId="right" type="monotone" dataKey="nutrient" stroke="#0891b2" name="Nutrisi (ppm)" />
									</LineChart>
								</ResponsiveContainer>
							</div>
						</ChartCard>

						<ChartCard title="Suhu & Kelembaban">
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart data={data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="time" />
										<YAxis />
										<Tooltip />
										<Area type="monotone" dataKey="temperature" stroke="#059669" fill="#059669" fillOpacity={0.2} name="Suhu (°C)" />
										<Area type="monotone" dataKey="humidity" stroke="#0891b2" fill="#0891b2" fillOpacity={0.2} name="Kelembaban (%)" />
									</AreaChart>
								</ResponsiveContainer>
							</div>
						</ChartCard>

						<ChartCard title="Penggunaan Air">
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<AreaChart data={data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="time" />
										<YAxis />
										<Tooltip />
										<Area type="monotone" dataKey="water" stroke="#059669" fill="#059669" fillOpacity={0.2} name="Level Air (%)" />
									</AreaChart>
								</ResponsiveContainer>
							</div>
						</ChartCard>

						<ChartCard title="Konsumsi Energi">
							<div className="h-[300px]">
								<ResponsiveContainer width="100%" height="100%">
									<LineChart data={data}>
										<CartesianGrid strokeDasharray="3 3" />
										<XAxis dataKey="time" />
										<YAxis />
										<Tooltip />
										<Line type="monotone" dataKey="energy" stroke="#059669" name="Penggunaan Energi (%)" />
									</LineChart>
								</ResponsiveContainer>
							</div>
						</ChartCard>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Explore;
