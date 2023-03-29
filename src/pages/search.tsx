import React, { useState } from "react";
import { Alert, Box, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Cocktail } from "../types/cocktail";
import { BASE_URL } from "../utils/consts";
import CocktailCard from "../components/cocktail-card";
export default function Search() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [noResults, setNoResults] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const resetState = () => {
    setNoResults(false);
    setError("");
  };

  const searchCocktail = async () => {
    setSearching(true);
    resetState();
    try {
      const response = await fetch(`${BASE_URL}search.php?s=${searchTerm}`);
      const data = await response.json();
      if (data.drinks === null) {
        setNoResults(true);
        setCocktails([]);
      } else {
        setCocktails(
          data.drinks.map((e: Cocktail) => ({
            ...e,
            showFavoriteBtn: true,
          }))
        );
      }
     
    } catch (error) {
      setError('Search failed');
    } finally {
      setSearching(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetState();
    setSearchTerm(event.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      container
      spacing={1}
      data-testid="search-page"
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Search for a Cocktail..."
            variant="filled"
            onChange={handleChange}
          />
          <LoadingButton
            onClick={searchCocktail}
            variant="contained"
            loading={searching}
            disabled={searching || searchTerm.length === 0}
            sx={{ ml: 1 }}
          >
            Search
          </LoadingButton>
        </Box>
      </Grid>
      {cocktails.map((cocktail) => (
        <CocktailCard {...cocktail} key={cocktail.idDrink} />
      ))}
      {noResults && (
        <Grid item xs={12} sm={12} md={12}>
          <Alert severity="info">No results found for {searchTerm}</Alert>
        </Grid>
      )}
      {error && (
        <Grid item xs={12} sm={12} md={12}>
          <Alert severity="error">{error}</Alert>
        </Grid>
      )}
    </Grid>
  );
}
