import styled from "styled-components";
import logo from "../../assets/logo-autoserv.png";


export const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--cor10);
        width: 100vw;
        height: 100vh;
        background-image: url(${logo});  
        background-repeat: no-repeat;
        background-position: bottom right;
    
`

export const Content = styled.div`
    width: 511px;
    display: flex;
    flex-direction: column;    
    gap: 12px;

    
`
export const Logo = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 24px;
    
    >img{
        width: 344px;
        height: 61px;
    }
    
`

