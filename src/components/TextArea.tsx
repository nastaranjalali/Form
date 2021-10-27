import { FC, FocusEventHandler } from 'react'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { ReactComponent as IranFlag } from '../assets/icons/flag.svg'
import useStyles from './TextArea.styles'

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  label: string
  helperText?: string
  icon?: boolean
  error?: boolean
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

export const TextArea: FC<Props> = ({
  label,
  icon,
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
      <textarea
        {...otherProps}
        id={label}
        rows={8}
        className={classes.textarea}></textarea>
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
