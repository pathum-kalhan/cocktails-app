import { render, screen } from "@testing-library/react";
import CocktailCard from "./cocktail-card";

const cocktailItem = {
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
  strCategory: "Ordinary Drink",
  strDrink: "Margarita",
  idDrink: "11007",
  showFavoriteBtn: false,
  isFavorite: false,
  showRemoveBtn: false,
};

describe("cocktail-card", () => {
  test("renders cocktail card", () => {
    render(<CocktailCard {...cocktailItem} />);
    const cocktailCard = screen.getByTestId("cocktail-card");
    expect(cocktailCard).toBeInTheDocument();
  });

  test("renders cocktail image", () => {
    render(<CocktailCard {...cocktailItem} />);
    const cocktailImage = screen.getByRole("img");
    expect(cocktailImage).toBeInTheDocument();
  });

  test("renders cocktail name", () => {
    render(<CocktailCard {...cocktailItem} />);
    const cocktailName = screen.getByText("Margarita");
    expect(cocktailName).toBeInTheDocument();
  });

  test("renders cocktail category", () => {
    render(<CocktailCard {...cocktailItem} />);
    const cocktailCategory = screen.getByText("Ordinary Drink");
    expect(cocktailCategory).toBeInTheDocument();
  });

  test("renders add to favorites button if showFavoriteBtn is true", () => {
    render(<CocktailCard {...cocktailItem} showFavoriteBtn={true} />);
    const addToFavoritesButton = screen.getByRole("button", {
      name: "Add to favorites",
    });
    expect(addToFavoritesButton).toBeInTheDocument();
  });

  test("does not render add to favorites button if showFavoriteBtn is false", () => {
    render(<CocktailCard {...cocktailItem} showFavoriteBtn={false} />);
    const addToFavoritesButton = screen.queryByRole("button", {
      name: "Add to favorites",
    });
    expect(addToFavoritesButton).not.toBeInTheDocument();
  });

  test("renders remove from favorites button if showRemoveBtn is true", () => {
    render(<CocktailCard {...cocktailItem} showRemoveBtn={true} />);
    const removeFromFavoritesButton = screen.getByRole("button", {
      name: "Remove from favorites",
    });
    expect(removeFromFavoritesButton).toBeInTheDocument();
  });

  test("does not render remove from favorites button if showRemoveBtn is false", () => {
    render(<CocktailCard {...cocktailItem} showRemoveBtn={false} />);
    const removeFromFavoritesButton = screen.queryByRole("button", {
      name: "Remove from favorites",
    });
    expect(removeFromFavoritesButton).not.toBeInTheDocument();
  });
});
