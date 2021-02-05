import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL } from '../../utils/config'

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: '2px solid grey',
    marginRight: '20px',
    marginLeft: '20px',
    padding: '60px 30px',
    overflowX: 'hidden',
    color: '#aaa'
  },
  icon: {
    fontSize: '35px',
    marginRight: '10px'
  },
  footerText: {
    fontSize: '20px',
    color: 'grey'
  },
  linktext: {
    textDecoration: 'none',
    color: 'grey'
  }
}))

const Footer = () => {
  const classes = useStyles()
  const currentYear = new Date().getFullYear()

  return (
    <div className={classes.footer}>
      <Grid container spacing={0} justify='center'>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <i className={`fa fa-map-marker ${classes.icon}`} aria-hidden='true'></i>
            Kalmar, Sweden
          </Typography>
        </Grid>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <a href={GITHUB_URL} target='_blank' className={classes.linktext}>
              <i className={`fa fa-github ${classes.icon}`} aria-hidden='true'></i>
              Github
            </a>
          </Typography>
        </Grid>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <a href={LINKEDIN_URL} target='_blank' className={classes.linktext}>
              <i className={`fa fa-linkedin ${classes.icon}`} aria-hidden='true'></i>
              LinkedIn
            </a>
          </Typography>
        </Grid>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <a href={INSTAGRAM_URL} target='_blank' className={classes.linktext}>
              <i className={`fa fa-instagram ${classes.icon}`} aria-hidden='true'></i>
              Instagram
            </a>
          </Typography>
        </Grid>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <a href={`mailTo:${EMAIL}`} target='_blank' className={classes.linktext}>
              <i className={`fa fa-envelope-square ${classes.icon}`} aria-hidden='true'></i>
              {EMAIL}
            </a>
          </Typography>
        </Grid>
        <Grid item xl={2} lg={4} sm={6} xs={12}>
          <Typography variant='subtitle1' className={classes.footerText}>
            <i className={`fa fa-copyright ${classes.icon}`} aria-hidden='true'></i>
            Gabriel Björlin, {currentYear}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
