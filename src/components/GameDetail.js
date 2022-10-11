import React from 'react';
import styled from 'styled-components';
import{motion} from 'framer-motion';
import {useDispatch,useSelector} from 'react-redux';
import {emptyDetail} from '../actions/detailsAction';
import {popUp2} from '../animation';

const GameDetail = () => {
    const {screen,game} = useSelector((state)=> state.detail);
    const dispatch = useDispatch();
    const exitDitailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            dispatch(emptyDetail())
        }
    }

    const gamePlatformIcon = (platform) => {
        switch(platform){
            case "PlayStation 5":
                return <i key="playstation" class="fa-brands fa-playstation"></i>;
            case "Xbox Series S/X":
                return <i key="xbox" class="fa-brands fa-xbox"></i>;
            case "PC":
                return <i key="desktop" class="fa-solid fa-desktop"></i>;
            case "PlayStation 4":
                return <i key="playstation" class="fa-brands fa-playstation"></i>;
            case "Xbox One":
                return <i key="xbox" class="fa-brands fa-xbox"></i>;
            default:
                return <i key="game" class="fa-solid fa-box"></i>;
        }
    }

    const getStarIcon = () => {
        const stars = [];
        const rating = Math.floor(game.rating)
        for (let i = 0; i <= 5; i++) {
            if(i <= rating){
                stars.push(<i class="fa-solid fa-star"></i>)
            }else{
                stars.push(<i class="fa-regular fa-star"></i>)
            }
        }
        return stars
    }

    return(
        <CardShadow 
            onClick={exitDitailHandler} 
            className="shadow" 
            variants={popUp2} 
            initial="hidden" 
            animate="show"   
        >
            <Detail>
                <Status>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating : </p>
                        <p>{getStarIcon()}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platform>
                            {game.platforms.map(data=>(
                                gamePlatformIcon(data.platform.name)
                            )
                                
                                // console.log(data.platform.name)
                            )}
                        </Platform>
                    </Info>
                </Status>
                <Media>
                    <img src={game.background_image} alt="background_image" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map((screen)=>(
                        <img key={screen.id} src={screen.image} alt="image-background"/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
    
}

const CardShadow = styled(motion.div)`
    width:100%;
    background :rgba(0, 0, 0, 0.5);
    min-height:100vh;
    overflow-y:scroll;
    position : fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: white;
        border-radius:8px;
        border:2px solid #ccc;
    }
    &::-webkit-scrollbar-track{
        background:black;
    }
    `
const Detail = styled(motion.div)`
    width : 80%;
    background:white;
    position : absolute;
    border-radius : 1rem;
    padding : 2rem 2rem;
    left :10%;
    color:black;

    img{
        width:100%;
    }
`

const Status = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const Info = styled(motion.div)`
    text-align:center;
`

const Platform = styled(motion.div)`
    display:flex;
    justify-content : space-evenly;
    i{
        margin-left:3rem;
        font-size :2rem;
    }
`

const Media = styled(motion.div)`
   margin-top:5rem;
    img{
        width:100%;
        height:60vh;
        object-fit:cover;
    }
`
const Description = styled(motion.div)`
   margin:5rem 0rem;

`


export default GameDetail;
