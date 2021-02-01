import React from 'react'
import { Container, Grid, Typography, Cell } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typical from 'react-typical'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh'
  },
  bold: {
    fontWeight: 'bold'
  },
  borderBottom: {
    borderBottom: '3px solid black'
  },
  shadowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: '45px',
    textDecoration: 'none',
    textShadow: `0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15)`
  }
}))

const Index = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid container justify='center' direction='row' spacing={0} alignItems='center' className={classes.container} m={4}>
        <Grid item sm={6}>
          <Typography variant='h3'>Hi!</Typography>
          <Typography variant='h1' className={classes.bold}>
            I'm Gabriel.
          </Typography>
          <h2>
            I'am a <Typical steps={['developer', 1000, 'full-stack', 1000, 'test', 1000]} loop={Infinity} wrapper='b' />
          </h2>
          <p className={classes.borderBottom}>hehjehe</p>
        </Grid>
        <Grid item sm={6}>
          <h3>
            <a className={classes.shadowText} href='https://github.com/scoobis' target='_blank'>
              Github
            </a>
          </h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index
