import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Skills from '../src/components/software/Skills'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '900px',
    marginTop: '120px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  svgImg: {
    width: '32px'
  }
}))

const Software = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography variant='h1'>Software</Typography>

      <hr style={{ marginTop: '40px', marginBottom: '40px' }} />

      <Skills />
      <br />
    </Container>
  )
}

export default Software
