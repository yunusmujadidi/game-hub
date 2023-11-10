import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonList from "./SkeletonList";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5];

  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <SimpleGrid
          padding={10}
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 5,
          }}
          spacing={10}
        >
          {isLoading &&
            skeleton.map((skeleton) => <SkeletonList key={skeleton} />)}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
