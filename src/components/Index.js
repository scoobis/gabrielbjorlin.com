import React, { useState } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typical from 'react-typical'

import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL } from '../utils/config'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '85vh',
    paddingLeft: '25px'
  },
  bold: {
    fontWeight: 'bold',
    marginBottom: '-20px'
  },
  borderBottom: {
    borderBottom: '5px solid black'
  },
  shadowText: {
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontFamily: 'Helvetica',
    fontSize: '45px',
    textDecoration: 'none',
    textShadow: `0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15)`,

    [theme.breakpoints.down('sm')]: {
      fontSize: '35px'
    }
  },
  imgIcon: {
    boxShadow: '0 0 200px 1px grey',
    marginRight: '15px'
  },
  linkMargin: {
    marginTop: '5px'
  },
  gridBox: {
    width: '500px',
    maxWidth: '500px'
  },
  linkGridBox: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '40px'
    }
  },
  typingText: {
    fontSize: '30px',
    color: 'grey',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px'
    }
  },
  bottomContainer: {
    marginTop: '-80px',
    marginBottom: '40px',
    textAlign: 'center',
    color: 'grey',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px'
    }
  }
}))

const Index = () => {
  const classes = useStyles()

  const [description] = useState('Full-stack developer, that likes to work with the entire tech stack, including infrastructure and administration!')

  return (
    <Container>
      <Grid container justify='center' spacing={8} alignItems='center' className={classes.container}>
        <Grid item sm={12} md={6} className={classes.gridBox}>
          <Typography variant='h3'>Hi!</Typography>
          <Typography variant='h1' className={classes.bold} style={{ fontSize: '3.4rem' }}>
            I'm Gabriel.
          </Typography>
          <h3 className={classes.typingText}>
            <i className='fa fa-code' style={{ marginRight: '10px', fontWeight: 'bold' }}></i>
            <Typical steps={['Devops Engineer', 1500, 'Full-Stack Developer', 1500, 'Triathlete', 1500]} loop={Infinity} wrapper='b' />
          </h3>
          <p className={classes.borderBottom}>{description}</p>
        </Grid>
        <Grid item sm={12} md={6} className={classes.linkGridBox}>
          <Typography variant='h4' className={classes.linkMargin}>
            <a className={classes.shadowText} href={GITHUB_URL} target='_blank'>
              <i className={`fa fa-github ${classes.imgIcon}`}></i>
              GITHUB
            </a>
          </Typography>
          <Typography variant='h4' className={classes.linkMargin}>
            <a className={classes.shadowText} href={LINKEDIN_URL} target='_blank'>
              <i className={`fa fa-linkedin ${classes.imgIcon}`}></i>
              LINKEDIN
            </a>
          </Typography>
          <Typography variant='h4' className={classes.linkMargin}>
            <a className={classes.shadowText} href={INSTAGRAM_URL} target='_blank'>
              <i className={`fa fa-instagram ${classes.imgIcon}`}></i>
              INSTAGRAM
            </a>
          </Typography>
          <Typography variant='h4' className={classes.linkMargin}>
            <a className={classes.shadowText} href={`mailto:${EMAIL}`}>
              <i className={`fa fa-envelope-square ${classes.imgIcon}`}></i>
              EMAIL
            </a>
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.bottomContainer}>
        <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
          <a href='https://github.com/scoobis/gabrielbjorlin.com' target='_blank' style={{ color: 'grey', textDecoration: 'none' }}>
            View Source Code
          </a>
        </Typography>
      </div>
    </Container>
  )
}
export default Index
