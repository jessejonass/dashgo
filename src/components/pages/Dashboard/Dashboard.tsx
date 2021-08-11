import { FC } from "react";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

// Import with lazyloading | load component with func
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // ever loading in client-side
});

// Chart styles
import { chartOptions } from './chart';

// Chart data
const series = [{ name: "series1", data: [31, 150, 20, 13, 113, 70, 55] }];

const Dashboard: FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="large">Inscritos da semana</Text>
            <Chart
              options={chartOptions}
              series={series}
              type="area"
              height={160}
              pb="4"
            />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large">Taxa de abertura</Text>
            <Chart
              options={chartOptions}
              series={series}
              type="area"
              height={160}
              pb="4"
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
