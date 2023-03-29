import { render, screen } from "@testing-library/react";
import Home from "./home";
import { server } from "../mocks/server";
import { rest } from "msw";
describe("home", () => {
  test("renders refresh button", () => {
    render(<Home />);
    const refreshButton = screen.getByRole("button", { name: /Refresh/i });
    expect(refreshButton).toBeInTheDocument();
  });

  test("renders cocktail list", async () => {
    render(<Home />);
    const cocktailList = await screen.findAllByTestId("cocktail-card");

    expect(cocktailList).toHaveLength(5);
  });

  test("renders data loading message while fetching data", async () => {
    render(<Home />);
    const loadingMessage = screen.getByTestId("loading-msg");

    expect(loadingMessage).toBeInTheDocument();
  });

  test("renders error message when fetch fails", async () => {
    server.use(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Home />);
    const errorMessage = await screen.findByText("Failed to load cocktails");

    expect(errorMessage).toBeInTheDocument();
  });

 
});
