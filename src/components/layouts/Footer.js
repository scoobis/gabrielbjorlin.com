import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  footer: {
    boxShadow: '15px 15px 15px 15px black',
    padding: '60px 30px',
    overflowX: 'hidden',
    color: '#aaa',
    textAlign: 'center'
  },
  icon: {
    fontSize: '35px',
    marginRight: '10px'
  },
  footerText: {
    fontSize: '20px'
  }
}))

function Footer() {
  const classes = useStyles()
  const currentYear = new Date().getFullYear()

  return (
    <div className={classes.footer}>
      <Grid container spacing={3} justify='center'>
        <Grid item md={4}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <i className={`fa fa-map-marker ${classes.icon}`} aria-hidden='true'></i>
            Kalmar, Sweden
          </Typography>
        </Grid>
        <Grid item md={4}>
          hej
        </Grid>
        <Grid item md={4}>
          hej
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
