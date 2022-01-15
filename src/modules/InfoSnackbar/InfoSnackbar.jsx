import {useState,useEffect,forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSnackbar,useSnackbarUpdate } from '../../utils/Context';


const InfoSnackbar = () => {
  const [snackbarContent, setSnackbarContent] = useState('');
  const snackbar = useSnackbar();
  const updateSnackbar = useSnackbarUpdate()
  
  useEffect(() => {
    setSnackbarContent(snackbar)
    const timer = setTimeout(() => {
      updateSnackbar('')
    }, 6000);
    return () => clearTimeout(timer);
  },[snackbar,updateSnackbar])
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
    setSnackbarContent('');
  };

 const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  
  return (
      <Snackbar open={snackbarContent !== ''} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {snackbarContent}
        </Alert>
      </Snackbar>
  );
}

export default InfoSnackbar;