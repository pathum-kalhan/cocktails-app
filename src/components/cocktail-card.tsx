import { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Cocktail } from "../types/cocktail";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FavoriteCocktailsContext } from "../context/FavoriteCocktailsContext";
import { useSnackbar } from "notistack";
export default function CocktailCard(props: Cocktail) {
  const { enqueueSnackbar } = useSnackbar();

  const { addFavoriteCocktail, removeFavoriteCocktail, favoriteCocktails } =
    useContext(FavoriteCocktailsContext);

  const handleAddFavorite = () => {
    // Check if cocktail is already in favorites
    const isFavorite = favoriteCocktails.find(
      (item) => item.idDrink === props.idDrink
    );

    if (isFavorite) {
      return enqueueSnackbar(`${props.strDrink} is already in favorites`, {
        variant: "warning",
      });
    }

    addFavoriteCocktail({
      ...props,
      showFavoriteBtn: false,
      showRemoveBtn: true,
    });

    enqueueSnackbar(`${props.strDrink} added to favorites`, {
      variant: "success",
    });
  };

  const handleRemoveFavorite = () => {
    removeFavoriteCocktail(props);
    enqueueSnackbar(`${props.strDrink} removed from favorites`, {
      variant: "error",
    });
  };

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    showFavoriteBtn,
    showRemoveBtn,
  } = props;
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} alignItems="stretch">
      <Card sx={{ height: "100%" }} data-testid="cocktail-card">
        <CardMedia
          component="img"
          height="250"
          sx={{ objectFit: "cover" }}
          image={strDrinkThumb}
          alt={strDrink}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {strDrink}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {strCategory}
          </Typography>
          {showFavoriteBtn && (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              startIcon={<AddIcon />}
              onClick={handleAddFavorite}
            >
              Add to favorites
            </Button>
          )}
          {showRemoveBtn && (
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              startIcon={<RemoveIcon />}
              onClick={handleRemoveFavorite}
            >
              Remove from favorites
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
