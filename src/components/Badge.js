import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/Logo Platzi.jpg';
class Badge extends React.Component {
    render(){
        return (
        <div className="Badge">
            <div>
                <img src={confLogo} alt="Logo de la Conferencia"></img>
            </div>
            <div>
            <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                <h1>Dolores <br/> Zetino</h1>
            </div>                           
            <div>
                <p>Frontend Engineer</p>
                <p>@dzetino</p>
            </div>
            <div>
                #platziconf
            </div>
         </div>           
        )        
    }    
}
       


export default Badge;