import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import HomeIcon from '@material-ui/icons/Home'

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
  const [value, setValue] = React.useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label='Home' value='home' icon={<HomeIcon />} />
    </BottomNavigation>
  )
}
