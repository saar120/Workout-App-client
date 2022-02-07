import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { COLORS } from "../../../../constants/colors.constants";
import { useMediaQuery } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels);

export default function Chart({ exerciseData, dataset }) {
  const isDesktop = useMediaQuery("(min-width:900px)");
  const dataSets = [
    {
      label: dataset.label,
      data: exerciseData.map((ex) => ex[dataset.value]),
      borderColor: COLORS.secondary,
      pointRadius: 4,
      borderWidth: 4,
      pointBackgroundColor: COLORS.secondary,
      pointHoverRadius: 6,
    },
  ];

  return (
    <div style={{ border: "2px solid " + COLORS.primary, borderRadius: "5px", height: "80%" }}>
      <Line
        options={{
          scales: {
            x: {
              offset: true,
            },
            y: {
              offset: true,
              ticks: {
                callback: function (label) {
                  return Math.round(label * 100) / 100;
                },
              },
            },
          },
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              display: isDesktop ? true : null,
              color: COLORS.primary,
              formatter(value) {
                return value + " " + dataset.des;
              },
              font: {
                size: isDesktop ? 14 : 11,
              },
              anchor: "start",
              align: "top",
              offset: 10,
            },
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: exerciseData.map((ex) => {
            return format(new Date(ex.date), "dd/MM/yy");
          }),
          datasets: dataSets,
        }}
      />
    </div>
  );
}
