import { FC, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Star } from "./Star";
const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    position: "relative",
    marginBottom: 10,
  },
  label: {
    marginLeft: 7,
    marginBottom: 8,
    display: "flex",
    justifyContent: "space-between",
  },

  activeStar: {
    color: "rgb(250,185,56)",
  },

  deActiveStar: {
    color: "rgb(189,189,189)",
  },
  starContainer: {
    display: "flex",
    width: "60%",
  },
  star: {
    color: "rgb(189,189,189)",
    fontSize: 32,
  },
  iconBTN: {
    padding: 2,
  },
});
interface Props {
  label: string;
  numberOfStars: number;
}

export const Stars: FC<Props> = ({ label, numberOfStars }) => {
  const classes = useStyles();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const onMouseEnter = (index: number) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index: number) => {
    setRating(index);
  };
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.root}>
      <label htmlFor={label} className={classes.label}>
        <Typography variant={"h2"}>{label}</Typography>
      </label>
      <Grid className={classes.starContainer}>
        {" "}
        {[1, 2, 3, 4, 5, 6, 7].map((index) => {
          return (
            <Star
              key={index}
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};
