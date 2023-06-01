"use client";

import { Avatar, Switch, FormControlLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { blue, grey, purple } from "@mui/material/colors";
import Link from "next/link";
import { useState } from "react";

interface Props {
  switchTheme: () => void;
}

const Header = ({ switchTheme }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      padding={2}
      sx={{ bgcolor: "primary" }}
    >
      <Grid
        xs={6}
        display="flex"
        alignItems="center"
      >
        <p>We Should Watch...</p>
      </Grid>
      <Grid
        xs={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <p>searchbar</p>
      </Grid>
      <Grid
        xs={2}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <FormControlLabel
          control={<Switch onChange={switchTheme} />}
          label="Theme"
        />
      </Grid>
      <Grid
        xs={1}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link href="/profile">
          <Avatar sx={{ bgcolor: purple[500] }}>EW</Avatar>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
