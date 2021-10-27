import { FC, FocusEventHandler } from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { ReactComponent as IranFlag } from '../assets/icons/flag.svg'
import useStyles from './Selector.styles'

interface Props extends React.HTMLProps<HTMLSelectElement> {
  label: string
  helperText?: string
  icon?: boolean
  options: string[]
  name: string
  error?: boolean
  onBlur?: FocusEventHandler<HTMLSelectElement>
}

export const Selector: FC<Props> = ({
  label,
  icon,
  options,
  name,
  error,
  helperText,
  onBlur,
  ...otherProps
}) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4} className={classes.root}>
      <label htmlFor={label} className={classes.label}>
        <Typography variant={'h2'}>{label}</Typography>
        {icon ? <IranFlag /> : null}
      </label>
      <select {...otherProps} id={name} className={classes.input}>
        {options.map((element, index) => (
          <option value={element} key={index} className={classes.option}>
            {element}
          </option>
        ))}
      </select>
      {helperText ? (
        <span
          className={classes.helperText}
          style={{ color: error ? '#D41518' : '#444' }}>
          {helperText}
        </span>
      ) : null}{' '}
    </Grid>
  )
}
