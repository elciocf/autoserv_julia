import React from "react";
import { Loading } from "./styles";
import logoPrimary from "../../assets/logo_primary.svg";
import logoSecondary from "../../assets/logo_secondary.svg";


interface LoadingIconProps{
    iconType?: 'primary'|'secondary';
    size?: 'small'|'medium'|'large';

}

function LoadingIcon({iconType = 'primary', size = 'medium'}: LoadingIconProps) {


    return(        
        <Loading size={size} iconType={iconType}>
            {iconType === 'primary' ? <img src={logoPrimary} alt="loading icone"/>
            : <img src={logoSecondary} alt="loading icone"/> }
        </Loading>        
    )

}

export {LoadingIcon};
