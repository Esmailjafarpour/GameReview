import axios from 'axios';
import {gameDetailsURL,gameScreenShotURL} from '../api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenShotData = await axios.get(gameScreenShotURL(id));
    dispatch({
        type : "GET_DETAIL",
        payload : {
            game : detailData.data,
            screen: screenShotData.data,
        } 
    });
};

export const emptyDetail = () => {
    return{
        type : 'EMPTY_DETAIL',
        payload: {
            game:{},
            screen:{},
        },
    }
}