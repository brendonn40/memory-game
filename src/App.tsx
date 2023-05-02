import { ThemeProvider } from "./ThemeProvider";
import Card from "./components/card";
import { Flex, Grid, SimpleGrid } from '@mantine/core';
const characters = [
  {image:'/HomerSimpson.webp',name:'Homer Simpson'},
  {image:'/lisa.png',name:'Lisa Simpson'},
  {image:'/bart.png',name:'Bart Simpson'},
  {image:'/abraham.webp',name:'Abraham Simpson'},
  {image:'/sideshow_bob.webp',name:'Sideshow Bob'},
  {image:'/Edna Krabappel.png',name:'Edna Krabappel'},
  {image:'/Waylon Smithers.png',name:'Waylon Smithers'},
  {image:'/Krustytheclown.png',name:'Krusty'},
  {image:'/sanders.png',name:'Ned Flanders'},
  {image:'/nelson.png',name:'Nelson Muntz'},
  {image:'/Milhouse_Van_Houten_TS.webp',name:'Milhouse Van Houten'},
  {image:'/Marge_Simpson.webp',name:'Marge Simpson'},
]
export default function App() {
  return (
    <ThemeProvider>
      <SimpleGrid cols={4}>
      {characters.map((item)=>(
        <Flex justify={`center`} align={`center`}>

          <Card image={item.image} name={item.name}/>
        </Flex>
      ))}
      </SimpleGrid>
      
    </ThemeProvider>
  );
}
