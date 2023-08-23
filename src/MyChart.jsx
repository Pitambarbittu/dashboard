import React from "react";

import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

// interface MyChartProps {

// totalLoggedTime: number;

// }

chartjs.register(ArcElement, Tooltip, Legend);

const MyChart = ({ totalLoggedTime }) => {
  const data = {
    labels: [],

    datasets: [
      {
        data: [totalLoggedTime, 100 - totalLoggedTime],

        backgroundColor: ["#5BAF76", "#D9D9DC"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default MyChart;
