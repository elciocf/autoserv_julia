import styled from "styled-components";

interface LoadingStyles{
    iconType: 'primary'|'secondary';
    size: 'small'|'medium'|'large';  
}

export const Loading = styled.div<LoadingStyles>`
    
    display: flex;
    align-items: center;
    justify-content: center;



    > img{
        ${props => {        
        switch (props.size) {
            case 'small':
                return`
                  width: 20px;
                  height: 20px;
                `;
            case 'medium':
                return`
                  width: 24px;
                  height: 24px;
                `;
            case 'large':
                return`
                  width: 32px;
                  height: 32px;
                `;
        }
    }}        
    }

    animation-name: spin;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`