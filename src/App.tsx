/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Flex, SimpleGrid, Title } from "@mantine/core";
import Cards from "./components/cards";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <ThemeProvider>
      <Title>Current score:{current}</Title>
      <Title>Best score:{best}</Title>
      <SimpleGrid cols={4}>
        <Cards setBest={setBest} setCurrent={setCurrent} current={current} best={best}/>

      </SimpleGrid>
    </ThemeProvider>
  );
}
