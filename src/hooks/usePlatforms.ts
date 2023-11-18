import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/platforms/lists/psarents");

export default usePlatforms;
