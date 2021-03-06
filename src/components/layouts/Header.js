import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'
import ComputerIcon from '@material-ui/icons/Computer'
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun'

import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: '#f8f8f8',
    boxShadow: '5px 5px 5px grey',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '50px'
    }
  }
}))

export default function LabelBottomNavigation() {
  const classes = useStyles()
  const router = useRouter()

  // if pathname is index(/) value needs to be set to 'home'
  const [value, setValue] = useState(router.pathname === '/' ? 'home' : router.pathname.substring(1))

  const handleChange = (event, newValue) => {
    if (newValue === 'home') router.push('/')
    else router.push(`/${newValue}`)
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Software' value='software' icon={<ComputerIcon />} />
      <BottomNavigationAction label='Triathlon' value='triathlon' icon={<DirectionsRunIcon />} />
      <BottomNavigationAction label='About' value='about' icon={<InfoIcon />} />
    </BottomNavigation>
  )
}
