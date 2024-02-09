import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend
);

const pieChartLabels = ["Red", "Blue", "Yellow", "Green", "Purple"];
const data = {
  labels: pieChartLabels,
  datasets: [
    {
      label: "# of Votes",
      data: pieChartLabels.map((item) => Math.ceil(Math.random() * 10)),
      backgroundColor: [
        "rgb(220 252 231)",
        "rgb(187 247 208)",
        "rgb(134 239 172)",
        "rgb(74 222 128)",
        "rgb(34 197 94)",
      ],
      borderWidth: 1,
    },
  ],
};

export const PieChart = () => {
  return <Pie data={data} />;
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart",
    },
  },
};

const lineChartData = {
  labels,
  datasets: [
    {
      label: "First one",
      data: labels.map((item) => Math.ceil(Math.random() * 20)),
      borderColor: "rgb(96 165 250)",
      backgroundColor: "rgb(96 165 250)",
      tension: 0.4,
      borderWidth: 2,
    },
  ],
};

export const LineChart = () => {
  return <Line data={lineChartData} options={LineChartOptions} />;
};
