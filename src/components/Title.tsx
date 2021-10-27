import Typography from '@material-ui/core/Typography'
import useStyles from './Title.styles'

export interface Props {
  heading: string
}

function Title(props: Props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant={'h1'} className={classes.title}>
        {props.heading}
      </Typography>
    </div>
  )
}

export default Title
