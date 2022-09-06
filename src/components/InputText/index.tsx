import React, { useState } from "react";
import { InputTextBox, Container } from "./styles";
import ValidIcon from "../../assets/valid_input.png";
import InvalidIcon from "../../assets/invalid_input.png";
import { FieldError } from "react-hook-form";

interface InputTextProps{ 
    value?: string; 
    label?: string;
    errorInfo?: FieldError;
    textHint?: string;
    hint?: string;
    required?: boolean;
    isValid?: boolean;
    isInvalid?: FieldError;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isPassword?: boolean;
    onChange?: any;
    onBlur?: any;
}

function InputText({onChange, onBlur, value='', label='', errorInfo , textHint='', hint='', required = false, isInvalid, isDisabled = false, isReadOnly = false, isValid = false, isPassword = false}: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);

    function toggleFocus(){
       setIsFocused(!isFocused);
    }

    return(
        <Container isFocused={isFocused} isInvalid={isInvalid ? true : false} isDisabled={isDisabled} isReadOnly={isReadOnly} isValid={isValid}>
            {label  !== '' && <label>{label}</label>}
            <InputTextBox onChange={onChange} onBlur={onBlur} isFocused={isFocused} isInvalid={isInvalid ? true : false} isDisabled={isDisabled} isReadOnly={isReadOnly} isValid={isValid}>                        
                {value && <input type={isPassword ? "password": "text"}   value={value}  placeholder={textHint} title={hint} required={required}  onFocus={toggleFocus}  onBlur={toggleFocus} disabled={isDisabled} readOnly={isReadOnly}/>}
                {!value && <input type={isPassword ? "password": "text"} placeholder={textHint} title={hint} required={required}  onFocus={toggleFocus}  onBlur={toggleFocus} disabled={isDisabled} readOnly={isReadOnly}/>}
                {isInvalid && <img src={InvalidIcon} alt="valor inválido" /> }
                {isValid && <img src={ValidIcon} alt="valor válido" /> }
            </InputTextBox>
            {errorInfo && <span>{errorInfo.message}</span>}      
        </Container>
    )

};

export {InputText};
