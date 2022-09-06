import { Container } from "./styles";

interface CheckBoxProps{
    label:string;    
    id:string;
    isDisabled?: boolean;
    isError?: boolean;
    isChecked?: boolean;
    labelRight?: boolean;
    onChange?: any;
    onBlur?: any;

}

function CheckBox({isChecked,onChange, onBlur, id,label, isError = false, isDisabled = false, labelRight = false}: CheckBoxProps) {


    return(
        <Container isError={isError} isDisabled={isDisabled}>
            <label className="container">{label}
                <input id={id} name={id} type="checkbox" disabled={isDisabled} defaultChecked={isChecked || false} onChange={onChange} onBlur={onBlur} />
                <span className="checkmark"></span>
            </label>
        </Container> 

    )

};

export {CheckBox};