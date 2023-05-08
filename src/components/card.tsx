import { Box, Image, Text } from "@mantine/core";
import { useState } from "react";

function Card({
  image,
  name,
  onClick,
  setCurrent,
  setBest,
  best,
  current
}: {
  image: string;
  name: string;
  onClick: () => void;
  setCurrent:(v:any)=> void
  current:number
  setBest: (v:any)=> void
  best: number
}) {
  const [used,setUsed] = useState<string[]>([]);

  return (
    <div style={{ display: `inline-block`, cursor: `pointer` }} onClick={()=>{
      onClick();
      if(used.includes(name)){
        setUsed([])
        if(current >= best){
          setBest(current)
        }
        setCurrent(0)
      }else{
        setUsed([...used,name])
        setCurrent(current +1)
        
      }
    }}>
      <Box
        bg={`blue`}
        style={{ borderRadius: `20px` }}
        sx={{
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Image maw={150} src={image} />
        <Text align="center">{name}</Text>
      </Box>
    </div>
  );
}

export default Card;
