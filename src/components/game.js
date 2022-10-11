import React from 'react';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailsAction';
import { popUp } from '../animation';


const Game = ({name,released,id,image}) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => (
        dispatch(loadDetail(id))
    )
    return(
        <StyledGame variants={popUp} initial="hidden" animate="show" onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img className="game_img" src={image} alt={name}/>
        </StyledGame>

    )
}

const StyledGame = styled(motion.div)`
    min-height : 30vh;
    box-shadow : 0px 5px 20px rgba(0,0,0,0.2);
    text-align : center;
    border-radius : 1rem;
    cursor: pointer;
    
    img{
        width : 100%;
        height : 40vh;
        border-radius :  0 0 1rem 1rem;
        object-fit : cover ;
        display:block;
    }
`

export default Game;