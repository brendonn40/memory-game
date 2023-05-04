import { Box, Image, Text } from "@mantine/core";

function Card({
  image,
  name,
  onClick,
}: {
  image: string;
  name: string;
  onClick: () => void;
}) {
  return (
    <div style={{ display: `inline-block`, cursor: `pointer` }} onClick={onClick}>
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
