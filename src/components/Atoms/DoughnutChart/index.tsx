import React from "react";
import { ArcElement, Chart, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { ChartData, DefaultDataPoint } from "chart.js/dist/types";
import { Doughnut } from "react-chartjs-2";

import { ChartWrap } from "@/components/Atoms/DoughnutChart/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({
  labels,
  percentages,
}: {
  labels: string[];
  percentages: number[];
}) {
  function getRandomGreenishColor() {
    const hue = Math.floor(Math.random() * 60 + 120); // 120부터 179 사이의 랜덤한 hue 값 (초록색 계열)
    const saturation = Math.floor(Math.random() * 40 + 60); // 60부터 99 사이의 랜덤한 saturation 값 (채도)
    const lightness = Math.floor(Math.random() * 40 + 30); // 30부터 69 사이의 랜덤한 lightness 값 (명도)

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  function getRandomGreenishColors() {
    const colors = [];
    for (let i = 0; i < labels?.length; i++) {
      colors.push(getRandomGreenishColor());
    }
    return colors;
  }

  const greenishColors = getRandomGreenishColors();
  const data = {
    labels: labels,
    datasets: [
      {
        data: percentages,
        backgroundColor: greenishColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          font: {
            size: 16,
            family: "Pretendard",
          },
          // generateLabels: function (chart: Chart) {
          //   const data = chart.data as ChartData<
          //     "doughnut",
          //     DefaultDataPoint<"doughnut">,
          //     string
          //   >;
          //   if (data.labels && data.datasets) {
          //     return data.labels?.map((label: string, index: number) => {
          //       const dataset = data.datasets[0];
          //       if (dataset.backgroundColor) {
          //         const iconColor = dataset.backgroundColor[index];
          //
          //         // 범례 아이콘 스타일 및 크기 조절
          //         const icon = {
          //           pointStyle: "circle", // 원 모양 아이콘
          //           backgroundColor: iconColor, // 아이콘 배경색
          //           borderColor: "white", // 아이콘 테두리 색
          //           borderWidth: 2, // 아이콘 테두리 두께
          //           radius: 5, // 원 크기 조절 (원의 반지름)
          //         };
          //
          //         return {
          //           text: label,
          //           fillStyle: "transparent", // 텍스트 색상
          //           fontColor: "black", // 텍스트 색상
          //           usePointStyle: true,
          //           pointStyle: icon, // 범례 아이콘 스타일
          //         };
          //       }
          //     });
          //   }
          //   return [];
          // },
        },
      },
    },
  };
  return (
    <ChartWrap>
      <Doughnut data={data} options={options} />
    </ChartWrap>
  );
}
