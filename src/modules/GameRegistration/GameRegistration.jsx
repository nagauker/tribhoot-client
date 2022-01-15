import {useLazyQuery} from "@apollo/client";
import { useState, useEffect } from "react";
import {GAME_PIN_CHECK} from '../../graphql/games/games'
import { styled } from '@mui/material/styles';
import { useSnackbarUpdate } from "../../utils/Context"; 

const GameRegistration = () => {
  
  const [gamePin, setGamePin] = useState('')
  const [nickName, setNickname] = useState('')
  const [checkGamePin, { data }] = useLazyQuery(GAME_PIN_CHECK);
  const updateSnackbar = useSnackbarUpdate();

  const gamePinHandler = (newValue) => {
    if(/^\d+$/.test(newValue) || newValue.length === 0){
      setGamePin(newValue)
    }
  }

  const submitGamePin = () => {
    checkGamePin({variables:{gameId:gamePin}})
  }

  const submitNickname = () => {
    updateSnackbar("בפנים!!!!")
  }

  useEffect(() =>{
    if(data && !data.games.length) {
      updateSnackbar('קוד משחק לא תקין')
    }
  },[data,updateSnackbar])
   
  return(
      <Root>
          <BackgroundSquare/>
          <BackgroundCircle/>
            <Form>
              <FormTitle>Nagauker!</FormTitle>
              <FormDialog>
              { !data || !data.games.length ?
              <FormInput placeholder="הכנס קוד משחק"
                         onChange={(event) => gamePinHandler(event.target.value)} 
                         value={gamePin}/>
              :
              <FormInput placeholder="הכנס כינוי"
                         onChange={(event) => setNickname(event.target.value)} 
                         value={nickName}/>
              }
              { !data || !data.games.length ?
              <FormSubmit onClick={submitGamePin}>
                הכנס
                </FormSubmit>
              :
              <FormSubmit onClick={submitNickname}>
                יאללה
                </FormSubmit>
              }
              </FormDialog>
          </Form>
      </Root>
  )

}

export default GameRegistration;

const Root = styled('div')({
  backgroundColor: "#46178f",
  width: "100vw",
  height:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
})

const BackgroundCircle = styled('div')({
  position: "fixed",
    borderRadius: "50%",
    backgroundColor: "#3f1581",
    minWidth: "75vmin",
    minHeight: "75vmin",
    bottom: "-15vmin",
    right: "-15vmin",
})

const BackgroundSquare = styled('div')({
  backgroundColor:"#3f1581",
  position: "fixed",
  top: "-15vmin",
  left: "-15vmin",
  minWidth: "75vmin",
  minHeight: "75vmin",
    "animation": "spin 70s linear infinite",
    "@keyframes spin" : { 
      "100%" : { 
          "-webkit-transform": "rotate(360deg)", 
          transform:"rotate(360deg)"
      } 
  }
})

const Form = styled('div')({
  textAlign:"center",
})

const FormTitle = styled('div')({
  fontSize:"50px",
  marginBottom:"0.3em",
  color:"white"
})

const FormDialog = styled('div')({
  backgroundColor: "rgb(255, 255, 255)",
    padding: "16px",
    borderRadius: "4px",
    boxShadow: "rgb(0 0 0 / 15%) 0px 2px 4px",
})

const FormInput = styled('input')({
  minHeight: "2.375rem",
    maxHeight: "48px",
    lineHeight: "2.375rem",
    textAlign: "center",
    maxWidth: "20rem",
    minWidth: "6.25rem",
    color: "rgb(51, 51, 51)",
    outline: "none",
    fontSize: "1rem",
    borderRadius: "4px",
    boxSizing: "border-box",
    border: "0.125rem solid rgb(204, 204, 204)",
    padding: "0.25rem 0.375rem",
    width:"100%",
    marginBottom: "0.625rem"
})

const FormSubmit = styled('button')({
  width: "100%",
  margin: "0px",
  border: "0px",
  cursor: "pointer",
  display: "inline-block",
  verticalAlign: "bottom",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px -4px inset",
  background: "rgb(51, 51, 51)",
  color: "rgb(255, 255, 255)",
  borderRadius: "4px",
  fontFamily: `Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontSize: "0.875rem",
  fontWeight: "bold",
  textAlign: "center",
  textDecoration: "none",
  minWidth: "48px",
  minHeight: "48px",
  padding: "0px 16px 4px",
  position: "relative",
  "&:hover" : {
    minHeight: "46px",
    marginTop: "2px",
    paddingBottom: "2px",
    backgroundColor: "rgb(47, 47, 47)",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px -2px inset",
  }
})