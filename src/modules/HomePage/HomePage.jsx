import React, { useState, useCallback } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey'
import { styled } from '@material-ui/core';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

const useStyles = makeStyles({
    background: {
        backgroundColor: 'rgb(70, 23, 143)',
        width: '100%',
        height: '100%'
    },
    container: {
        height: '100%',
        width: '100%'
    },
    square: {
        position: 'fixed',
        backgroundColor: 'rgb(0, 0, 0)',
        transform: 'rotate(45deg)',
        opacity: '0.1',
        top: '-15vmin',
        left: '-15vmin',
        minWidth: '75vmin',
        minHeight: '75vmin',
    },
    circle: {
        position: 'fixed',
        borderRadius: '50%',
        backgroundColor: 'rgb(0, 0, 0)',
        opacity: '0.1',
        minWidth: '75vmin',
        minHeight: '75vmin',
        bottom: '-15vmin',
        right: '-15vmin'
    },
    title: {
        fontFamily: 'Heebo',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        direction: 'rtl'
    },
    content: {
        paddingTop: '35vh',
        textAlign: 'center'
    },
    card: {
        width: '15vw',
        marginTop: '2vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '16px',
        borderRadius: '20px'
    },
    input: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": { 
                borderColor: "black"
            },
            "&.Mui-focused fieldset": {
                borderColor: "black",
            }
        },
        "& ::-webkit-input-placeholder": {
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Heebo',
            fontSize: 'x-large'
        }     
    },
    enterGame: {
        marginTop: '2vh',
        width: '14.5vw',
        height: '7vh'
    }
})

const HomePage  = ({}) => {
    const classes = useStyles()
    const [gamePin, setGamePin] = useState('')

    const handlePinChange= useCallback(
      (e) => {
        setGamePin(e.target.value)
      },
      [],
    )

    return (
        <div className={classes.container}> 
            <div className={classes.background}>
                <div className={classes.square}/>
                <div className={classes.circle}/>
                <div className={classes.content}>
                    <Typography variant='h3' className={classes.title}> נגאוקר! </Typography>
                    <Card className={classes.card}>
                        <TextField variant="outlined" placeholder="קוד משחק" className={classes.input} value={gamePin} onChange={handlePinChange}/>
                        <ColorButton variant="contained" className={classes.enterGame}> כניסה למשחק </ColorButton>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HomePage;