import { Image,Text } from "@mantine/core";

function Card({image,name}:{image:string,name:string}) {
    return ( <div style={{display:`inline-block`}}>
        <Image maw={150} src={image}/>
        <Text align="center">{name}</Text>
    </div> );
}

export default Card;