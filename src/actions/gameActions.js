// export const getGame = (listGames) => {
//     return{
//         type : 'GET_GAMES',
//         payload : listGames,
//     }
// }

import axios from 'axios';
import {popularGamesURL,upcomingGamesURL,newGamesURL,searchGameUrl} from '../api';

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type : "FETCH_GAMES",
        payload : {
            popular : popularData.data.results,
            upcoming : upcomingGamesData.data.results,
            newGames : newGamesData.data.results,
        } 
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameUrl(game_name));
    
    dispatch({
        type : "FETCH_SEARCHED",
        payload : {
            searched : searchGames.data.results,
        } 
    });
};


export const clearSearched = () => {
    return{
        type : 'CLEAR_SEARCHED',
        payload: {
            searched:[],
        },
    }
}