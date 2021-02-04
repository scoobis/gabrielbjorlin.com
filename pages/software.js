import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '900px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))

const Software = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant='h1'>Software</Typography>
    </Container>
  )
}

export default Software
