import React from "react";
import { Cocktail } from "../types/cocktail";
//
export type FavoriteCocktailsContextType = {
  favoriteCocktails: Cocktail[];
  addFavoriteCocktail: (cocktail: Cocktail) => void;
  removeFavoriteCocktail: (cocktail: Cocktail) => void;
};

export const FavoriteCocktailsContext =
  React.createContext<FavoriteCocktailsContextType>({
    favoriteCocktails: [],
    addFavoriteCocktail: () => {},
    removeFavoriteCocktail: () => {},
  });

interface Props {
  children: React.ReactNode;
}

export const FavoriteCocktailsProvider: React.FC<Props> = ({ children }) => {
  const [favoriteCocktails, setFavoriteCocktails] = React.useState<Cocktail[]>(
    []
  );

  const addFavoriteCocktail = (cocktail: Cocktail) => {
    setFavoriteCocktails([...favoriteCocktails, cocktail]);
  };

  const removeFavoriteCocktail = (cocktail: Cocktail) => {
    setFavoriteCocktails(
      favoriteCocktails.filter((c) => c.idDrink !== cocktail.idDrink)
    );
  };

  return (
    <FavoriteCocktailsContext.Provider
      value={{ favoriteCocktails, addFavoriteCocktail, removeFavoriteCocktail }}
    >
      {children}
    </FavoriteCocktailsContext.Provider>
  );
};
