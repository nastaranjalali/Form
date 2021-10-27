import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 10
  },
  label: {
    marginLeft: 7,
    marginBottom: 8,
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    padding: 7,
    borderRadius: 7,
    borderWidth: 0.5,
    fontSize: 15,
    color: '#8b8b8b',
    fontFamily: ' Nunito, sans-serif',
    fontWeight: 400,
    borderColor: 'rgb(195,195,195)'
  },
  option: {
    fontSize: 15,
    color: '#444',
    fontFamily: ' Nunito, sans-serif',
    fontWeight: 400
  },
  helperText: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: ' Nunito, sans-serif'
  }
}))

export default useStyles
