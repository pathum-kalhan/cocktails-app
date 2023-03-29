import {useContext} from "react";
import { Grid, Alert } from "@mui/material";

import { FavoriteCocktailsContext } from "../context/FavoriteCocktailsContext";
import CocktailCard from "../components/cocktail-card";
import { Box } from "@mui/system";

export default function Favorites() {
  const { favoriteCocktails } = useContext(FavoriteCocktailsContext);

  return (
    <Grid container spacing={1} data-testid="favorites-page">
      {favoriteCocktails.map((cocktail) => (
        <CocktailCard {...cocktail} showRemoveBtn={true} key={cocktail.idDrink} />
      ))}

      {favoriteCocktails.length === 0 && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box >
            <Alert severity="info">No favorite cocktails yet</Alert>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
