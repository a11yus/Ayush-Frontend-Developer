import * as types from './actionTypes';
import axios from 'axios';

const getCapsulesData = (stat) => async (dispatch) => {
    try {
        
    let res = await axios.get(`https://api.spacexdata.com/v3/capsules?${stat}/limit=10`)
        dispatch({
            type: types.GET_CAPSULES_DATA,
            payload: res.data,
        })
    }
    catch(err) {
        console.log(err);
    }
  };

  export { getCapsulesData };