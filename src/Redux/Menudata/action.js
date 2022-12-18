import axios from 'axios';
 import * as types from './actiontype';

  const getMenuRequest=()=>{
     return { type:types.GET_MENU_REQUEST } } 

     const getMenuSuccess=(payload)=>{ 
        return { type:types.GET_MENU_SUCCESS, payload } } 

     const getMenuError=()=>{ 
            return { type:types.GET_MENU_ERROR } } 
            


     const getMenuData=()=>(dispatch)=>{ 
        dispatch(getMenuRequest()); 
        return axios 
        .get(`http://localhost:8080/bfc`) 
        .then((r)=> dispatch(getMenuSuccess(r.data))) 
        .catch((e)=>dispatch(getMenuError())) } 
        
        export {getMenuData};