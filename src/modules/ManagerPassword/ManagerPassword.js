import React,{useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  direction: "rtl"
};

const ManagerPassword = ({open, setOpen}) => {

  const [password, setPassword] = useState('')

const sendPassword = () => {
  axios.post(`${process.env.REACT_APP_SERVER}/management/password`,{"password" : password}).catch((err) => {
    console.log(err);
  })
}

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              הכנס סיסמת מנהל
            </Typography>
            <TextField
          id="outlined-password-input"
          label="סיסמה"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      <button onClick={() => sendPassword()}>
        send
      </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default ManagerPassword;