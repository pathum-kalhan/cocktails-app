import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isBigScreen: boolean;
}

export default function Header(props: HeaderProps) {
  const { isBigScreen } = props;
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <AppBar sx={{ px: isBigScreen ? 10 : 2, py: 1 }} position="static">
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "&.MuiToolbar-root": {
            paddingLeft: 0,
            paddingRight: 0,
          },
        }}
      >
        <h1 onClick={navigateToHome} style={{ cursor: "pointer" }}>
          Cocktails
        </h1>
        {isBigScreen ? (
          <div data-testid="big-screens">
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              onClick={() => handleClick("search")}
            >
              Search
            </Button>
            <Button
              variant="contained"
              startIcon={<FavoriteIcon />}
              onClick={() => handleClick("favorites")}
              sx={{ ml: 1 }}
            >
              Favorites
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex" }} data-testid="small-screens">
            <IconButton onClick={() => handleClick("search")}>
              <SearchIcon />
            </IconButton>
            <IconButton onClick={() => handleClick("favorites")}>
              <FavoriteIcon />
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
