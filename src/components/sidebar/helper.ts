
import { RiTShirt2Line } from "react-icons/ri";
import { BiFootball } from "react-icons/bi";
import { GiDutchBike, GiSofa } from "react-icons/gi";
import { FiBook } from "react-icons/fi";
import { CgGames } from "react-icons/cg";
import { FaGuitar } from "react-icons/fa";

export const categories = [
  { classStyle: "games", name: "Jogos", icon: CgGames },
  { classStyle: "books", name: "Livros", icon: FiBook },
  { classStyle: "clothes", name: "Vestuários", icon: RiTShirt2Line },
  { classStyle: "bike", name: "Bicicletas", icon: GiDutchBike },
  { classStyle: "sports", name: "Esportes", icon: BiFootball },
  { classStyle: "instruments", name: "Instrumentos Musicais", icon: FaGuitar },
  { classStyle: "furniture", name: "Móveis", icon: GiSofa },
];