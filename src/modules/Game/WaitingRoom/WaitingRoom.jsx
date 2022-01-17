import { useEffect, useState } from 'react';
import ActiveGame from '../ActiveGame/ActiveGame';
import GameEnded from '../GameEnded/GameEnded';
import { styled } from '@mui/material/styles';

const COLORS = ["#dcc532","#57b855", "#52c5b6","#e46e0a", "#ea8453","#874dbf"]

const WaitingRoom = ({gameId, gameData}) => {
    const [color, setColor] = useState('')

    useEffect(() => {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        console.log(randomColor);
        setColor(randomColor)
    },[])

    return (
        <div>
            {
                gameData.games[0].is_closed ? <GameEnded/> 
                : gameData.games[0].is_started ? <ActiveGame/>
                : <WaitingRoot style={{backgroundColor: color}}>
asda
                </WaitingRoot>
   
            }
        </div>
    )
}

export default WaitingRoom;

const WaitingRoot = styled('div') ({
    height: "100vh",
    width:"100vw",
    // backgroundColor: "yellowgreen"
})