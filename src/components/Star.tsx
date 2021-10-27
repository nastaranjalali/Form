import StarIcon from '@material-ui/icons/Star'
import { FC, useMemo } from 'react'
import useStyles from './Star.styles'

interface Props {
  index: number
  rating: any
  hoverRating: any
  onMouseEnter: any
  onMouseLeave: any
  onSaveRating: any
}
export const Star: FC<Props> = ({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating
}) => {
  const classes = useStyles()

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return 'rgb(250,185,56)'
    } else if (!hoverRating && rating >= index) {
      return 'rgb(250,185,56)'
    }
    return 'rgb(189,189,189)'
  }, [rating, hoverRating, index])
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}>
      <StarIcon style={{ color: `${fill}` }} className={classes.star} />
    </div>
  )
}
