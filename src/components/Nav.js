import React,{useState} from 'react';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import {fetchSearch,clearSearched} from '../actions/gameActions';
import {useDispatch} from 'react-redux';
import{fadeIn} from '../animation'; 

const Nav = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const inputHandler = (e) => {
        setText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!text){
            return
        }
        dispatch(fetchSearch(text));
        setText('');
    }

    const clearSearch = () => {
        dispatch(clearSearched());
    }

    // const clearSearch = () => {
    //     dispatch({type:"CLEAR_SEARCHED"});
    // }

    return(
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearch}>
                <i class="fa-light fa-fire-flame-curved"></i>
                <h1>Fire Games</h1>
            </Logo>
            <form className="search" onSubmit={submitHandler}>
                <input 
                    type="text" 
                    onChange={inputHandler} 
                    placeholder="Enter name of game...." 
                    value={text}
                />
                <button type="submit">Search</button>
            </form>
        </StyledNav>
    );
};


const StyledNav = styled(motion.div)`
     padding : 3rem 5rem;
     text-align:center;
     input{
        border-radius :6px;
        border:none;
        width :80%;
        font-size :1.2rem;
        outline : none;
        padding:0.5rem;
        margin-top: 1rem;
        box-shadow : 0px 0px 3px rgba(0 ,0 , 0, 0.3);
        text-align:center;
        font-weight:bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        
     }

     input::placeholder{
        color:black;
        font-size:1rem;
        opacity:0.5;
     }

     button{
        border : none;
        border-radius : 6px;
        width : 50%;
        font-size : 1.2rem;
        padding:0.5rem;
        margin-top: 1rem;
        box-shadow : 0px 0px 5px rgba(0 ,0 , 0, 0.5);
        cursor:pointer;
        color:white;
        background:black;
     }

     button:hover{
        scale(0.98);
     }

`

const Logo = styled(motion.div)`
    display:flex;
    justify-content: center;
    align-items: center;
    padding:1rem;
    cursor:piointer;
    i{
        font-size:1.5rem;
        margin-right: 5px;
    }
`

export default Nav;