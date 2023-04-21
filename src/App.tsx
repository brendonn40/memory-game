import { ThemeProvider } from "./ThemeProvider";
import Card from "./components/card";

const characters = [
  {image:'/homer.png',name:'Homer Simpson'},
  {image:'/lisa.jpg',name:'Lisa Simpson'},
  {image:'/bart.png',name:'Bart Simpson'},
  {image:'/marge.png',name:'Marge Simpson'},
  {image:'/abraham.png',name:'Abraham Simpson'},
]
export default function App() {
  return (
    <ThemeProvider>
      {characters.map((item)=>(
        <Card image={item.image} name={item.name}/>
      ))}
      {/* <Card image="/homer.png" name="Homer Simpson"/> */}
    </ThemeProvider>
  );
}
