import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  activeStar: {
    color: 'rgb(250,185,56)'
  },

  deActiveStar: {
    color: 'rgb(189,189,189)'
  },
  starContainer: {
    display: 'flex',
    width: '60%'
  },
  star: {
    color: 'rgb(189,189,189)',
    fontSize: 32
  },
  iconBTN: {
    padding: 2
  }
}))

export default useStyles
