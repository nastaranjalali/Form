import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import { FC, useMemo } from "react";

const useStyles = makeStyles({
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
  index: number;
  rating: any;
  hoverRating: any;
  onMouseEnter: any;
  onMouseLeave: any;
  onSaveRating: any;
}
export const Star: FC<Props> = ({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating,
}) => {
  const classes = useStyles();

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "rgb(250,185,56)";
    } else if (!hoverRating && rating >= index) {
      return "rgb(250,185,56)";
    }
    return "rgb(189,189,189)";
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon style={{ color: `${fill}` }} className={classes.star} />
    </div>
  );
};
