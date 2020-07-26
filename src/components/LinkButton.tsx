import React from "react";
import { Link } from "react-router-dom";
import { Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "1.3rem",
    background: "#444444",
    color: "#C0C0C0",
    borderRadius: theme.spacing(4),
    minWidth: 300,
    height: 52,
  },
}));

const LinkButton = ({
  label,
  to,
  className = "",
}: {
  label: string;
  to: string;
  className?: string;
}) => {
  const classes = useStyles();

  return (
    <Button
      component={Link}
      to={to}
      size="large"
      variant="contained"
      className={`${classes.root} ${className}`}
    >
      <Box m={2}>{label}</Box>
    </Button>
  );
};

export default LinkButton;
