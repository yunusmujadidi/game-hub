import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return <Text>Failed to load genres</Text>;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h2" fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => onSelectedGenre(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                  marginRight="10px"
                />
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
