import { useState, useEffect, Fragment } from "react";
import { Alert,  Grid } from "@mui/material";
import CocktailCard from "../components/cocktail-card";
import { Cocktail } from "../types/cocktail";
import RefreshIcon from "@mui/icons-material/Refresh";
import { BASE_URL } from "../utils/consts";
import LoadingButton from "@mui/lab/LoadingButton";

const url = BASE_URL + "random.php";

export default function Home() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const loadCocktails = async () => {
    
    try {
      setLoading(true);
      setError("");
      const [random1, random2, random3, random4, random5] = await Promise.all([
        fetch(url),
        fetch(url),
        fetch(url),
        fetch(url),
        fetch(url),
      ]);
      const cocktailsList: Cocktail[] = [];
      const random1Data = await random1.json();
      const random2Data = await random2.json();
      const random3Data = await random3.json();
      const random4Data = await random4.json();
      const random5Data = await random5.json();
     
      random1Data.drinks.forEach((drink: Cocktail) =>
        cocktailsList.push(drink)
      );
      random2Data.drinks.forEach((drink: Cocktail) =>
        cocktailsList.push(drink)
      );
      random3Data.drinks.forEach((drink: Cocktail) =>
        cocktailsList.push(drink)
      );
      random4Data.drinks.forEach((drink: Cocktail) =>
        cocktailsList.push(drink)
      );
      random5Data.drinks.forEach((drink: Cocktail) =>
        cocktailsList.push(drink)
      );
      setCocktails(cocktailsList);
    } catch (error) {
      setError("Failed to load cocktails");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadCocktails();
  }, []);

  return (
    <Fragment>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        justifyContent="flex-end"
      >
        <LoadingButton
          variant="contained"
          onClick={loadCocktails}
          startIcon={<RefreshIcon />}
          loading={loading}
            disabled={loading}
        >
          Refresh
        </LoadingButton>
      </Grid>

      {error && (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Alert severity="error">{error}</Alert>
        </Grid>
      )}

      {loading ? (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p data-testid="loading-msg">Please wait while we load the cocktails</p>
        </Grid>
      ) : (
        cocktails.map((cocktail) => (
          <CocktailCard {...cocktail} key={cocktail.idDrink} />
        ))
      )}
    </Fragment>
  );
}
