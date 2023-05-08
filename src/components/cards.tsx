import { Flex } from "@mantine/core";
import { useState } from "react";
import Card from "./card";

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

function Cards({setCurrent,setBest,current,best}:{setCurrent:(v:any)=> void,setBest:(v:any)=> void,current:number,best:number}) {
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
    const chars = shuffle(characters)
    setData(chars);
    setCurrent(current + 1)
  };
 
  return (
    <>
      {data.map((item) => (
        <Flex justify={`center`} align={`center`} key={item.name}>
          <Card image={item.image} name={item.name} onClick={start}  setCurrent={setCurrent} current={current} setBest={setBest} best={best}/>
        </Flex>
      ))}
    </>
  );
}

export default Cards;
