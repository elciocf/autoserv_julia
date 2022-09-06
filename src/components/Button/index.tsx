import React, { ReactNode } from "react";
import { LoadingIcon } from "../LoadingIcon";
import { ButtonBox } from "./styles";



interface ButtonProps{
    caption?: string;
    buttonSize?: 'small'|'medium'|'large';
    buttonType?: 'primary'|'secondary';
    buttonKind?: 'button'|'submit';
    disabled?: boolean; 
    onClick?: ()=>void;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    hint?: string;
}

function Button({buttonKind='button',caption='', buttonSize = 'medium', buttonType = 'primary', disabled = false, leftIcon, rightIcon, loading = false, hint ='' , onClick}: ButtonProps) {


    return(
        <>
            <ButtonBox type={buttonKind} buttonSize={buttonSize} buttonType={buttonType} disabled={disabled} onClick={onClick} title={hint}>                
              <>
                {!loading && leftIcon}
                {caption !== '' && <label>{caption}</label> }
                {loading && <LoadingIcon size={buttonSize} iconType={buttonType} />}                
                {!loading && rightIcon}                                
              </>                
            </ButtonBox>
        </> 

    )

};

export {Button};
