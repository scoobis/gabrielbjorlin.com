import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, List, ListItemText, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  imgLogo: {
    width: '72px',
    borderRadius: '15px'
  }
}))

const Education = () => {
  const year1 = [
    'Introduction to Programming | 7,5 hp',
    'Web Technology 1 | 7,5 hp',
    'Client-based Web Programming | 7,5 hp',
    'Problem Solving and Programming | 7,5 hp',
    'Programming and Data Structures | 7,5 hp',
    'Software Technology | 7,5 hp',
    'System Administration 1 | 7,5 hp',
    'Individual Software Development Project | 7,5 hp'
  ]

  const year2 = [
    'System Administration 2 | 7,5 hp',
    'Object Oriented Analysis and Design using UML | 7,5 hp',
    'Software Testing | 7,5 hp',
    'Database Theory | 7,5 hp',
    'Software design | 7,5 hp',
    'Project in Software technology | 7,5 hp',
    'Server-based Web Programming | 7,5 hp',
    'statistics | 7,5 hp'
  ]
  const classes = useStyles()
  return (
    <>
      <Typography variant='h2' style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Education
      </Typography>
      <Box alignItems='flex-start' display='flex'>
        <Box style={{ marginRight: '25px' }}>
          <img src='/Images/Linneuniversitetet_logo.png' className={classes.imgLogo} />
        </Box>
        <Box display='flex' style={{ flexDirection: 'column' }}>
          <Box>
            <Typography variant='h4' style={{ fontWeight: 'bold' }}>
              Bachelor of Science, Computer Science
            </Typography>
          </Box>
          <Typography variant='h5'>Linnaeus University, Kalmar | 2018 - 2021 (ongoing)</Typography>
        </Box>
      </Box>

      <br />

      <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
        Year 1
      </Typography>
      <ul style={{ lineHeight: '40px' }}>
        {year1.map((year, i) => {
          return (
            <li key={i}>
              <Typography variant='body1'>{year}</Typography>
            </li>
          )
        })}
      </ul>

      <br />

      <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
        Year 2
      </Typography>
      <ul style={{ lineHeight: '40px' }}>
        {year2.map((year, i) => {
          return (
            <li key={i}>
              <Typography variant='body1'>{year}</Typography>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Education
