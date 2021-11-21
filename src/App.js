import {useEffect,useState} from 'react';
import { Route, Routes } from "react-router-dom";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {initiateSocketConnection, disconnectSocket} from './socketIOUtils'
import HomePage from './modules/HomePage/HomePage'

const useStyles = makeStyles({
  root: {
    height: '100%'
  }
});

const App = () => {
  const classes = useStyles();
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socketIO = initiateSocketConnection();
    setSocket(socketIO)
    return () => {
      disconnectSocket();
    }
  }, [])

  return (
    <div className={classes.root}>
      <Routes>
        <Route exact path="/" element={<HomePage socket={socket}/>} />
      </Routes>
    </div>
  );
}

export default App;
