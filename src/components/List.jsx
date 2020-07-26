import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ListItem from "components/ListItem";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const List = ({ data, alternateLayout = true, className = "", itemClassName = "" }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={8} className={classes.root + " " + className}>
      {data &&
        data.map((item, index) => {
          return (
            <ListItem
              className={itemClassName}
              key={index}
              titles={item.titles}
              url={item.url}
              imageUrl={item.thumbUrl}
              flipLayout={alternateLayout ? index % 2 !== 0 : false}
            />
          );
        })}
    </Grid>
  );
};

export default List;
