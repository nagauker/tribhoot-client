import { styled } from '@mui/material/styles';

const GenericError = () => {
    return(
        <Root>
            <Image src="/photos/dead.png" alt='Error'/>	
            <ErrorText>אירעה תקלה</ErrorText>
        </Root>
    )
}

export default GenericError;

const Root = styled('div') ({
    backgroundColor : "#ff3636",
    height:"100vh",
    width:"100%",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column"
})

const Image = styled('img') ({
    height: "40vh",
    margin: "3vh"
})

const ErrorText = styled('div') ({
    fontSize: "larger",
    fontWeight: "700"
})