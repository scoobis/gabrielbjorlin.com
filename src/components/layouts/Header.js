import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'

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
  const [value, setValue] = useState('home')

  const router = useRouter()

  const handleChange = (event, newValue) => {
    if (newValue === 'home') router.push('/')
    else router.push(`/${newValue}`)
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
      <BottomNavigationAction label='About' value='about' icon={<InfoIcon />} />
    </BottomNavigation>
  )
}
