import { lighten, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
    marginBottom: 20
  },
  title: {
    position: 'relative',
    '&::before': {
      content: "''",
      width: '100%',
      height: '3px',
      backgroundColor: lighten('#484848', 0.7),
      position: 'absolute',
      top: 'auto',
      left: 0,
      bottom: 0,
      borderRadius: '100px'
    },

    '&::after': {
      content: "''",
      width: '60px',
      height: '3px',
      backgroundColor: '#534bab',
      position: 'absolute',
      top: 'auto',
      left: 0,
      bottom: 0,
      borderRadius: '100px'
    }
  }
}))

export default useStyles
