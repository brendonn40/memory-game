/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { ThemeProvider } from "./ThemeProvider";
import Card from "./components/card";
import { Flex, SimpleGrid, Title } from "@mantine/core";
const characters = [
  { image: "/HomerSimpson.webp", name: "Homer Simpson" },
  { image: "/lisa.png", name: "Lisa Simpson" },
  { image: "/bart.png", name: "Bart Simpson" },
  { image: "/abraham.webp", name: "Abraham Simpson" },
  { image: "/sideshow_bob.webp", name: "Sideshow Bob" },
  { image: "/Edna Krabappel.png", name: "Edna Krabappel" },
  { image: "/Waylon Smithers.png", name: "Waylon Smithers" },
  { image: "/Krustytheclown.png", name: "Krusty" },
  { image: "/sanders.png", name: "Ned Flanders" },
  { image: "/nelson.png", name: "Nelson Muntz" },
  { image: "/Milhouse_Van_Houten_TS.webp", name: "Milhouse " },
  { image: "/Marge_Simpson.webp", name: "Marge Simpson" },
];
export default function App() {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [data, setData] = useState(characters);
  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const start = () => {
    console.log(`click`)
    setData(shuffle(characters));
    console.log(`data->`,data)
  };
  return (
    <ThemeProvider>
      <Title>Current score:{current}</Title>
      <Title>Best score:{best}</Title>
      <SimpleGrid cols={4}>
        {data.map((item) => (
          <Flex justify={`center`} align={`center`} key={item.name}>
            <Card image={item.image} name={item.name} onClick={start} />
          </Flex>
        ))}
      </SimpleGrid>
    </ThemeProvider>
  );
}
