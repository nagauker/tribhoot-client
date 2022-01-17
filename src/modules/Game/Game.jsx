import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {GET_GAME_STATUS} from '../../graphql/games/games';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import WaitingRoom from './WaitingRoom/WaitingRoom';
import NoSuchGame from '../Errors/NoSuchGame/NoSuchGame';
import GenericError from '../Errors/GenericError/GenericError'

const Game = () => {
    let {gameId} = useParams();

    const {data, loading, error} = useQuery(GET_GAME_STATUS,{variables:{gameId:gameId}})

    return(
        <Root>
            {
                data && !data.games.length ? <NoSuchGame/>
                : error ? <GenericError/>
                : loading ? <Loading/>
                : <WaitingRoom gameId={gameId} gameData={data}/>
            }
        </Root>
    )
}

export default Game;

const Root = styled('div') ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const Loading = styled(CircularProgress)`
  height: 80px !important;
  width: 80px !important;
  color: black !important;
  margin-top: 45vh;
`