import React from 'react';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';

export default function Hooks(){
    let history=useHistory();
    let {id}=useParams();
    console.log(history);
    console.log(id);
    console.log(useLocation());
    console.log(useRouteMatch());
    function toHoc(){
        history.push('/hoc')
    }
    return <div>
        <button onClick={toHoc}>hoc</button>
    </div>
}