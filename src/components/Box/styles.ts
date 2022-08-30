import styled from "styled-components";

interface BoxStyles{    
    shadow: boolean; 
    padding: string;
}

export const GroupBox = styled.div<BoxStyles>`
    

    border-radius: ${props => props.theme.palette.box.borderRadius};
    border: 1px solid ${props => props.theme.palette.box.borderColor};
    background: ${props => props.theme.palette.box.background};

    ${props => {
        if (props.shadow){
            return `
            box-shadow: ${props.theme.palette.box.boxShadow};
            `;
        }
    }}

    ${props => {
        if (props.padding !== ''){
            return `
                padding: ${props.padding};
            `;
        }
    }}
    

`;



