import styled from "styled-components";




interface InputTextStyles{
   isFocused: boolean;
   isInvalid: boolean; 
   isDisabled: boolean;
   isReadOnly: boolean; 
   isValid: boolean;   
}


export const Container = styled.div<InputTextStyles>`
   display: flex;
   flex-direction: column; 
   
   

   >label{      
      margin-bottom: 3px;
      height: 21px;
      font-weight: 500;
      ${props => {        
         if (props.isValid) {
            return `color: ${props.theme.palette.inputText.validLabelHint};`;
         }
         if (props.isInvalid) {
            return `color: ${props.theme.palette.inputText.invalidLabelHint};`;
         }
         if (props.isDisabled) {
            return `color: ${props.theme.palette.inputText.disabledLabelHint}; opacity: 0.5;`;
         }
         if (props.isReadOnly) {
            return `color: ${props.theme.palette.inputText.readOnlyLabelHint};`;
         }
         return `color: ${props.theme.palette.inputText.text};`
          
      }}
   }

   >span{                
      height: 14px;
      font-weight: 600;
      font-size: 12px;

      ${props => {        
         if (props.isValid) {
            return `color: ${props.theme.palette.inputText.validLabelHint};`;
         }
         if (props.isInvalid) {
            return `color: ${props.theme.palette.inputText.invalidLabelHint};`;
         }
         if (props.isDisabled) {
            return `color: ${props.theme.palette.inputText.textDisabled}; opacity: 0.5;`;
         }
         if (props.isReadOnly) {
            return `color: ${props.theme.palette.inputText.readOnlyLabelHint};`;
         }
         return `color: ${props.theme.palette.inputText.text};`
          
      }}
   }   
`

export const InputTextBox = styled.div<InputTextStyles>`
   

   display: flex;
   flex-direction: row;
   align-items: center;

   padding-left: 16px;
   padding-right: 8px;
   width: 100%;
   height: 48px;
   

   border: 1px solid;
   border-radius: ${props => props.theme.borderRadius};

   ${props => {        
        if(props.isReadOnly) {
           return `border-color: ${props.theme.palette.inputText.readOnly};
                   background: ${props.theme.palette.inputText.readOnly};`         

        }else{
            if(props.isFocused) {
               return `border-color: ${props.theme.palette.inputText.focusedBorder};
                  background: ${props.theme.palette.inputText.focused};
               `;            
            }else{           
                  if (props.isInvalid){
                     return `border-color: ${props.theme.palette.inputText.invalidBorder};
                     background: ${props.theme.palette.inputText.background};`
                  }else{
                     if (props.isValid){
                        return `border-color: ${props.theme.palette.inputText.validBorder};
                              background: ${props.theme.palette.inputText.background};`
                     }else{
                        return `border-color: ${props.theme.palette.inputText.border};
                        background: ${props.theme.palette.inputText.background};`
                     }
                     
                  }            
               
            }
        }
   }}


   >img{
      width: 24px;
      height: 24px;
   }

   >input{      
      color: ${props => props.theme.palette.inputText.text};
      background: transparent;
      font-weight: 500;
      line-height: 21px;

      border: none;
      height: 100%;
      width: 100%;

      &:focus{
         border: none; 
         outline: none;
      }

      &::placeholder{
         color: var(--cor3);
      }

      &:disabled{         
         opacity: 0.5;
      }

      &:read-only{         
         color: ${props => props.theme.palette.inputText.textReadOnly};
      }
   }
   

`