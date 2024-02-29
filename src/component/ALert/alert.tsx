import { MonitorX } from 'lucide-react';
//import { BellRing} from 'lucide-react';

import "./index.scss";
import { ReactNode } from 'react';
interface  Iprops {
type:string;
icon:ReactNode;
title:string;
description:ReactNode;

//description:string;

}

const ALert=({type="alert-danger",icon,title,description}:Iprops) =>{
    return (

        <div className={type}>

            <div className='alert-header'>

                <div className='title'>
<span>{icon }</span>
<h4>{title}</h4> 
</div>  
<span>    <MonitorX className='close' size={25}/></span>

</div>
         <p> {description} </p>

            </div>
    );
};

export default ALert;
//reactjs +ts component