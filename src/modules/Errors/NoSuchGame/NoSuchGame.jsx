import { styled } from '@mui/material/styles';

const NoSuchGame = () => {
    return(
        <Root>
            <Image src="/photos/page-not-found.png" alt='NO Such Game'/>	
            <ErrorText>לא נמצא משחק עם הקוד הבא</ErrorText>
        </Root>
    )
}

export default NoSuchGame;

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