import * as React from "react";
import { Typography, Box, Fade, Link, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",

    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-4),
    marginRight: theme.spacing(-4),
    marginBottom: theme.spacing(1.5),

    backgroundColor: "#3A1781ee",
    color: "white",

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(-2),
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2),
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
  },
}));

const Banner = ({ show, onDismiss }: { show: boolean; onDismiss: () => void }) => {
  const classes = useStyles();

  return (
    <Fade in={show}>
      <Box className={classes.root}>
        <Box display="flex" alignItems="center">
          <Link href="//www.eve.tech">
            <img
              style={{ height: 40, width: 40, marginRight: 24 }}
              src="/assets/tech/eve.png"
            ></img>
          </Link>

          <Typography style={{ color: "#eee", fontSize: 20, fontWeight: 400 }}>
            A new era of virtual events
          </Typography>
        </Box>

        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          width={{ xs: "100%", sm: "auto" }}
          mt={{ xs: 1, sm: 0 }}
        >
          <Button href="//www.eve.tech" size="large" style={{ color: "white", fontWeight: "bold" }}>
            learn more
          </Button>
          <Button
            size="large"
            style={{ color: "#eee", fontWeight: "bold" }}
            onClick={() => onDismiss()}
          >
            dismiss
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default Banner;
