import styled from "styled-components";




interface ButtonStyles{
    buttonSize: 'small'|'medium'|'large';
    buttonType: 'primary'|'secondary';
    disabled?: boolean; 
}

export const ButtonBox = styled.button<ButtonStyles>`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    
    font-weight: 400;
    font-style: normal;
    

    ${props => {        
        switch (props.buttonSize) {
            case 'small':
                return`
                  font-size: 14px;
                  line-height: 16px;
                  padding: 16px 32px;
                  height: 32px;
                `;
            case 'medium':
                return`
                  font-size: 16px;
                  line-height: 20px;
                  padding: 14px 32px;
                  height: 48px;
                `;
            case 'large':
                return`
                  font-size: 18px;
                  line-height: 24px;
                  padding: 8px 24px;
                  height: 56px;
                `;
        }
    }}

    
    gap: 8px;
    width: 100%;



    border-radius: ${props => props.theme.buttonBorderRadius};

    ${props => {
        if (props.disabled){
            return `
            color: ${props.theme.palette.primaryButton.textDisabled};  
            background: ${props.theme.palette.primaryButton.disabled};
            border: 0;
            cursor: not-allowed;
            
            >label{
               cursor: not-allowed;
            }
            `;
        }

        switch (props.buttonType) {
            case 'primary':                
                return `
                    color: ${props.theme.palette.primaryButton.text};
                    background: ${props.theme.palette.primaryButton.standard};
                    border: 0;

                    &:hover{
                        background: ${props.theme.palette.primaryButton.hover};
                    }

                    &:active{
                        background: ${props.theme.palette.primaryButton.click};
                    }
                `;

            case 'secondary':
                
                return `
                    color: ${props.theme.palette.secondaryButton.text};
                    background: ${props.theme.palette.secondaryButton.standard};
                    border: 1px solid ${props.theme.palette.secondaryButton.border};

                    &:hover{
                        background: ${props.theme.palette.secondaryButton.hover}; 
                    }

                    &:active{
                        background: ${props.theme.palette.secondaryButton.click};
                        border: 2px solid ${props.theme.palette.secondaryButton.border};
                    }
                `;            
                
        }
      }
    }



`;



