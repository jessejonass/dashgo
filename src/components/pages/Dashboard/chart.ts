import { Props } from 'react-apexcharts';
import { theme } from "@chakra-ui/react";

// Chart styles
export const chartOptions: Props = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false, // styles
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-08-11T00:00:00.00Z",
      "2021-08-12T00:00:00.00Z",
      "2021-08-13T00:00:00.00Z",
      "2021-08-14T00:00:00.00Z",
      "2021-08-15T00:00:00.00Z",
      "2021-08-16T00:00:00.00Z",
      "2021-08-17T00:00:00.00Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};