import React, { useState } from "react";
import { InputTextBox, Container } from "./styles";
import ValidIcon from "../../assets/valid_input.png";
import InvalidIcon from "../../assets/invalid_input.png";



interface InputTextProps{ 
    value?: string; 
    label?: string;
    ErrorInfo?: string;
    textHint?: string;
    hint?: string;
    required?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

function InputText({value='', label='', ErrorInfo='', textHint='', hint='', required = false, isInvalid = false, isDisabled = false, isReadOnly = false, isValid = false}: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);

    function toggleFocus(){
       setIsFocused(!isFocused);
    }

    return(
        <Container isFocused={isFocused} isInvalid={isInvalid} isDisabled={isDisabled} isReadOnly={isReadOnly} isValid={isValid}>
            {label  !== '' && <label>{label}</label>}
            <InputTextBox isFocused={isFocused} isInvalid={isInvalid} isDisabled={isDisabled} isReadOnly={isReadOnly} isValid={isValid}>                        
                <input type="text" value={value}  placeholder={textHint} title={hint} required={required}  onFocus={toggleFocus}  onBlur={toggleFocus} disabled={isDisabled} readOnly={isReadOnly}/>
                {isInvalid && <img src={InvalidIcon} alt="valor inválido" /> }
                {isValid && <img src={ValidIcon} alt="valor válido" /> }
            </InputTextBox>
            {ErrorInfo  !== '' && <span>{ErrorInfo}</span>}      
        </Container>
    )

};

export {InputText};
