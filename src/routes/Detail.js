import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Img,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Badge,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";

function Detail() {
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoad(false);
    console.log(json.data.movie.title);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return load === true ? (
    <Center h={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.200"
        size="xl"
      />
    </Center>
  ) : (
    <SimpleGrid columns={2} spacingX="0px" spacingY="90px">
      <Img src={movie.large_cover_image}></Img>
      <Card>
        <CardHeader>
          <Heading size="md">{movie.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack p={"12px"}>
            <Text>Year: {movie.year}</Text>
            <Text>Language: {movie.language}</Text>
            <Text>Rating: {movie.rating}/10</Text>
            <Text>
              Runtime: {Math.round(movie.runtime / 60)} h {movie.runtime % 60} m
            </Text>
            <Text>Genres:</Text>
            <Wrap>
              {movie.genres.map((genre) => (
                <WrapItem key={genre}>
                  <Badge colorScheme="red">{genre}</Badge>
                </WrapItem>
              ))}
            </Wrap>
            <Button colorScheme="red"> Watch Now</Button>
            <StatGroup>
              <Stat>
                <StatLabel>Like</StatLabel>
                <StatNumber>345,670</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Dislike</StatLabel>
                <StatNumber>45</StatNumber>
              </Stat>
            </StatGroup>
            <Accordion allowToggle>
              <AccordionItem>
                <Text>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Description
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>{movie.description_full}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
export default Detail;
