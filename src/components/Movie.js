import {
  Card,
  Heading,
  Img,
  Stack,
  Text,
  Badge,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, genres, id }) {
  return (
    <Card as={Link} to={`/movie/${id}`} boxShadow="md">
      <Img src={coverImg} alt={title} />
      <Stack p={"12px"}>
        <Heading size="md" colorScheme="telegram">
          {title}
        </Heading>
        <Text as="samp">Genres:</Text>
        <Wrap>
          {genres.map((genre) => (
            <WrapItem key={genre}>
              <Badge colorScheme="green">{genre}</Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>
    </Card>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
