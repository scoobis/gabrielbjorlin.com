import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Container, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import InboxIcon from '@material-ui/icons/Inbox'

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

      <Typography variant='h3'>Skills</Typography>
      <List>
        <ListItem button component='a' target='_blank' href='https://www.java.com/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='java'
              className={`svg-inline--fa fa-java fa-w-12 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='grey'
                d='M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='Java' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.javascript.com/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='js-square'
              className={`svg-inline--fa fa-js-square fa-w-14 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='grey'
                d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='JavaScript' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://nodejs.org/en/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='node'
              className={`svg-inline--fa fa-node fa-w-20 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
            >
              <path
                fill='grey'
                d='M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5 3.8-1.3 4.6-1.6 8.7-4 .4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7zm46.7-65.8c0-12.5-8.4-15.8-26.2-18.2-18-2.4-19.8-3.6-19.8-7.8 0-3.5 1.5-8.1 14.8-8.1 11.9 0 16.3 2.6 18.1 10.6.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5.3-.4.5-.8.4-1.3-1.2-13.8-10.3-20.2-28.8-20.2-16.5 0-26.3 7-26.3 18.6 0 12.7 9.8 16.1 25.6 17.7 18.9 1.9 20.4 4.6 20.4 8.3 0 6.5-5.2 9.2-17.4 9.2-15.3 0-18.7-3.8-19.8-11.4-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7 0 9.7 5.3 21.3 30.6 21.3 18.5 0 29-7.2 29-19.8zm54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1 6-.1 11.1 4.8 11.1 11.1zm-1.8 0c0-5.2-4.2-9.3-9.4-9.3-5.1 0-9.3 4.1-9.3 9.3 0 5.2 4.2 9.4 9.3 9.4 5.2-.1 9.4-4.3 9.4-9.4zm-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3 0 2.3-1.5 2.8-2.4 3.1 1.7.1 1.8 1.2 2.1 2.8.1 1 .3 2.7.6 3.3zm-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8zM137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2 1.1.7 2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1 1.3 0 2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0 1.1-.6 1.8-1.9 1.8-3.2l.2-95zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4zm-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2l36.7-21.3zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0L559 219zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7.1-.5.2-1.1.2-1.7zm-74.3-124.9l-.8.5h1.1l-.3-.5zm76.2 130.2l-.4-.7v.9l.4-.2z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='Node.js' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://expressjs.com/'>
          <ListItemIcon>
            <i className={`fa fa-code`} style={{ fontSize: '30px' }}></i>
          </ListItemIcon>
          <ListItemText primary='Express.js' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://reactjs.org/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='react'
              className={`svg-inline--fa fa-react fa-w-16 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='grey'
                d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='React' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.w3schools.com/html/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='html5'
              class={`svg-inline--fa fa-html5 fa-w-12 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='grey'
                d='M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='HTML' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/CSS'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='css3-alt'
              class={`svg-inline--fa fa-css3-alt fa-w-12 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
            >
              <path
                fill='grey'
                d='M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='CSS' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.docker.com/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='docker'
              class={`svg-inline--fa fa-docker fa-w-20 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 512'
            >
              <path
                fill='grey'
                d='M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='Docker' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://kubernetes.io/'>
          <ListItemIcon>
            <i className={`fa fa-code`} style={{ fontSize: '30px' }}></i>
          </ListItemIcon>
          <ListItemText primary='Kubernetes' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.linux.org/'>
          <ListItemIcon>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='linux'
              className={`svg-inline--fa fa-linux fa-w-14 ${classes.svgImg}`}
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='grey'
                d='M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='Linux' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.mysql.com/'>
          <ListItemIcon>
            <svg viewBox='0 0 256 252' version='1.1' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' className={classes.svgImg}>
              <path
                d='M235.648276,194.211632 C221.729851,193.864559 210.942872,195.257272 201.895604,199.083964 C199.285899,200.127406 195.109927,200.128498 194.761767,203.433458 C196.154498,204.826189 196.328034,207.087716 197.546096,209.001055 C199.635192,212.479551 203.287247,217.178343 206.593317,219.614507 C210.246461,222.397748 213.900691,225.180989 217.727416,227.617153 C224.513092,231.793125 232.168625,234.22817 238.779677,238.404123 C242.608577,240.838067 246.434123,243.971711 250.261934,246.581411 C252.176407,247.971926 253.393381,250.234545 255.829549,251.104446 L255.829549,250.582732 C254.611442,249.016479 254.263282,246.754952 253.046308,245.015144 C251.307592,243.275341 249.566702,241.709083 247.826899,239.96928 C242.781025,233.1847 236.518133,227.268984 229.732547,222.397748 C224.166065,218.56995 211.986355,213.35055 209.724764,206.913051 C209.724764,206.913051 209.55014,206.73951 209.376604,206.56597 C213.204371,206.217787 217.727416,204.82618 221.381691,203.781623 C227.297466,202.215374 232.690457,202.563548 238.779677,200.998382 C241.562919,200.30203 244.347292,199.432129 247.130533,198.562222 L247.130533,196.997075 C244.00022,193.864532 241.737588,189.689684 238.431517,186.731778 C229.558965,179.075113 219.815379,171.595269 209.724764,165.332394 C204.330685,161.852792 197.371472,159.590151 191.630412,156.633369 C189.543536,155.587729 186.062797,155.06712 184.845823,153.327299 C181.713302,149.499523 179.973499,144.45476 177.711982,139.930579 C172.668329,130.360605 167.794863,119.749306 163.44541,109.658665 C160.315096,102.872993 158.400651,96.0872892 154.572862,89.8245233 C136.653166,60.2479054 117.167095,42.3281102 87.242308,24.7554574 C80.8048232,21.1023052 73.1503779,19.5360541 64.9730628,17.6227124 C60.6246649,17.4480683 56.2740469,17.1009966 51.9245072,16.9263525 C49.1412661,15.7082579 46.3569195,12.4033092 43.9207465,10.8370441 C34.0058755,4.5730961 8.42942301,-8.99607108 1.1220548,8.92370237 C-3.57563582,20.2324516 8.08126754,31.366477 12.0825475,37.1086812 C15.041536,41.1100178 18.8682195,45.6330512 20.9562053,50.1572463 C22.1742941,53.1129226 22.5213621,56.2465484 23.7394509,59.3779766 C26.523793,67.031339 29.1323922,75.5578744 32.7866404,82.691806 C34.7010855,86.3449577 36.7879657,90.1727422 39.2241297,93.477666 C40.6157457,95.3910055 43.0508086,96.2620126 43.5736286,99.3934363 C41.1385747,102.873029 40.9639284,108.092452 39.5711977,112.441992 C33.3083548,132.101492 35.7445143,156.4588 44.617071,170.89889 C47.4003121,175.247297 54.0124069,184.818421 62.8850316,181.164182 C70.7141415,178.032744 68.9743337,168.115626 71.2358604,159.41661 C71.7586894,157.327523 71.4105022,155.937017 72.4539446,154.545383 C72.4548508,154.718924 72.4539446,154.893561 72.4539446,154.893561 C74.8901041,159.764788 77.3251715,164.46251 79.5866891,169.333656 C84.980736,177.858025 94.3750434,186.731674 102.204103,192.647503 C106.381181,195.777808 109.686136,201.171877 114.905523,203.086313 L114.905523,202.563484 L114.557345,202.563484 C113.512801,200.997231 111.947645,200.301958 110.55602,199.083892 C107.424591,195.952463 103.943884,192.124665 101.50883,188.645081 C94.2025447,178.901486 87.7639408,168.115635 82.0228486,156.980496 C79.2396075,151.587555 76.8034481,145.671734 74.5419214,140.278811 C73.497378,138.189729 73.497378,135.059406 71.7575748,134.015973 C69.1478745,137.842647 65.3211911,141.148717 63.4067461,145.846417 C60.1028916,153.327344 59.7536034,162.548097 58.5355192,172.116947 C57.8402503,172.291598 58.187332,172.116947 57.8391493,172.465138 C52.2726627,171.072408 50.3582176,165.332394 48.2701955,160.460052 C43.0507905,148.107926 42.1808935,128.273684 46.7050387,114.008236 C47.923123,110.353988 53.142528,98.8717128 51.0545422,95.3921019 C50.0110998,92.0860273 46.5303924,90.1726969 44.6170529,87.5629967 C42.3555262,84.2569266 39.9193668,80.082065 38.35421,76.4278576 C34.1782383,66.6853811 32.0902615,55.898411 27.5672354,46.1548154 C25.4792496,41.6306665 21.8261069,36.9340837 18.8682195,32.7592063 C15.563264,28.0615284 11.9090067,24.7554574 9.29927023,19.1878506 C8.43046966,17.2745089 7.21128439,14.1430915 8.60290945,12.0550966 C8.95109211,10.6634847 9.64634733,10.1417599 11.0390689,9.79357497 C13.3005955,7.87912949 19.7380848,10.3152907 21.9995616,11.3587363 C28.4370509,13.9673251 33.8300058,16.4046087 39.2240527,20.0577513 C41.6591111,21.7975523 44.2688113,25.1036232 47.4002396,25.9735239 L51.0544833,25.9735239 C56.6220709,27.1905053 62.8849274,26.3216898 68.1043279,27.8868652 C77.3261638,30.843648 85.6758644,35.1942543 93.1579696,39.8919512 C115.95003,54.332049 134.738553,74.8626147 147.440063,99.3934454 C149.528049,103.39367 150.396845,107.04901 152.31129,111.22389 C155.965538,119.749365 160.488578,128.448376 164.14173,136.799218 C167.794872,144.975401 171.274474,153.327362 176.493861,160.113048 C179.104667,163.765094 189.542403,165.67953 194.240026,167.593975 C197.719632,169.159141 203.113711,170.551871 206.245112,172.465206 C212.159801,176.117243 218.075576,180.29433 223.643145,184.295646 C226.427474,186.382535 235.125402,190.733144 235.648231,194.21165 L235.648276,194.211632 L235.648276,194.211632 Z'
                fill='grey'
              ></path>
            </svg>
          </ListItemIcon>
          <ListItemText primary='MySQL' />
        </ListItem>

        <ListItem button component='a' target='_blank' href='https://www.mongodb.com/'>
          <ListItemIcon>
            <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' className={classes.svgImg}>
              <path
                d='m15.9.087.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z'
                fill='#3d3d3d'
              />
              <path
                d='m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z'
                fill='grey'
              />
              <path
                d='m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z'
                fill='grey'
              />
            </svg>
          </ListItemIcon>
          <ListItemText primary='MongoDB' />
        </ListItem>
      </List>
    </Container>
  )
}

export default Software
