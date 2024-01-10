import Movie from "../components/Movie";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year `
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Box>
      {loading ? (
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
        <Box>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <SimpleGrid minChildWidth="200px" spacing={10} padding={"40px"}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
              />
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

export default Home;
