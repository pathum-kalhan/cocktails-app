import { Grid, useMediaQuery, Theme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  const matches = useMediaQuery((theme: Theme) => theme?.breakpoints?.up("md"));

  return (
    <div>
      <Header isBigScreen={matches} />
      <Grid container spacing={1} sx={{ px: matches ? 10 : 2, py: 2 }}>
        <Outlet />
      </Grid>
    </div>
  );
}
