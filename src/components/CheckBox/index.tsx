import { Container } from "./styles";

interface CheckBoxProps{
    label:string;    
    value:string;
    isChecked: boolean;
    id:string;
    isDisabled?: boolean;
    isError?: boolean;
    labelRight?: boolean;
}

function CheckBox({id,label, isChecked, value, isError = false, isDisabled = false, labelRight = false}: CheckBoxProps) {


    return(
        <Container isError={isError} isDisabled={isDisabled} isChecked={isChecked}>
            <label className="container">{label}
                <input id={id} name={id} type="checkbox" value={value} checked={isChecked} disabled={isDisabled} />
                <span className="checkmark"></span>
            </label>
        </Container> 

    )

};

export {CheckBox};