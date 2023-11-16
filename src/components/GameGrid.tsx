import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonList from "./SkeletonList";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5];

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
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <SkeletonList />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
