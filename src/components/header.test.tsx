import { render, screen } from "@testing-library/react";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";

describe("header", () => {
  test("renders heading as Cocktails in bigger screens", () => {
    render(<Header isBigScreen={true} />, {
      wrapper: BrowserRouter,
    });
    const headerElement = screen.getByRole("heading", { name: "Cocktails" });

    expect(headerElement).toBeInTheDocument();
  });

  test("renders heading as Cocktails in smaller screens", () => {
    render(<Header isBigScreen={false} />, {
      wrapper: BrowserRouter,
    });
    const headerElement = screen.getByRole("heading", { name: "Cocktails" });

    expect(headerElement).toBeInTheDocument();
  });

  test("renders search button in bigger screens", () => {
    render(<Header isBigScreen={true} />, {
      wrapper: BrowserRouter,
    });
    const searchButton = screen.getByRole("button", { name: "Search" });

    expect(searchButton).toBeInTheDocument();
  });

  test("renders favorites button in bigger screens", () => {
    render(<Header isBigScreen={true} />, {
      wrapper: BrowserRouter,
    });
    const favoritesButton = screen.getByRole("button", { name: "Favorites" });

    expect(favoritesButton).toBeInTheDocument();
  });

  test("renders search icon button in smaller screens", () => {
    render(<Header isBigScreen={false} />, {
      wrapper: BrowserRouter,
    });
    const searchIcon = screen.getByTestId("SearchIcon");

    expect(searchIcon).toBeInTheDocument();
  });

  test("renders favorites icon button in smaller screens", () => {
    render(<Header isBigScreen={false} />, {
      wrapper: BrowserRouter,
    });
    const favoritesIcon = screen.getByTestId("FavoriteIcon");

    expect(favoritesIcon).toBeInTheDocument();
  });

  test("small screens block should not be visible in bigger screens", () => {
    render(<Header isBigScreen={true} />, {
      wrapper: BrowserRouter,
    });
    const smallScreensBlock = screen.queryByTestId("small-screens");

    expect(smallScreensBlock).not.toBeInTheDocument();
  });

  test("big screens block should not be visible in smaller screens", () => {
    render(<Header isBigScreen={false} />, {
      wrapper: BrowserRouter,
    });
    const bigScreensBlock = screen.queryByTestId("big-screens");

    expect(bigScreensBlock).not.toBeInTheDocument();
  });

  

  // test("user is in the search page when search button is clicked", () => {
  //   render(<Header isBigScreen={true} />, {
  //     wrapper: BrowserRouter,
  //   });
  //   const searchButton = screen.getByRole("button", { name: "Search" });
  //   searchButton.click();
  //   const searchPage = screen.getByTestId("search-page");

  //   expect(searchPage).toBeInTheDocument();
  // }
  // );

  // test("user is in the favorites page when favorites button is clicked", () => {
  //   render(<Header isBigScreen={true} />, {
  //     wrapper: BrowserRouter,
  //   });
  //   const favoritesButton = screen.getByRole("button", { name: "Favorites" });
  //   favoritesButton.click();
  //   const favoritesPage = screen.getByTestId("favorites-page");

  //   expect(favoritesPage).toBeInTheDocument();
  // }
  // );  



});
