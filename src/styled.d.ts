import 'styled-components';

interface IButtonColors{
    standard: string;
    hover: string;
    click: string;
    disabled: string;
    text: string;
    textDisabled: string;
    border: string;

}

interface IInputTextColors{
   border: string;
   focusedBorder: string;
   background: string;
   focused: string;
   readOnly: string;
   invalidBorder: string;
   validBorder: string;
   text: string;
   invalidLabelHint: string;
   disabledLabelHint: string;
   validLabelHint: string;
   readOnlyLabelHint: string;
   textDisabled: string;
   textReadOnly: string;

}

interface IBox{
   borderRadius: string;
   background: string;
   boxShadow: string;
   borderColor: string;
}


interface ICheckBox{
   background: string;
   backgroundHover: string;
   backgroundChecked: string;
   backgroundCheckedHover: string;
   backgroundDisabled: string;
   backgroundError: string;
   border: string;
   borderHover: string;
   borderChecked: string;
   borderDisabled: string;
   borderError: string;
   label: string;
   check: string;
   checkDisabled: string;

}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
    }
    
    borderRadius: string;
    buttonBorderRadius: string;

    palette: {

       primaryButton: IButtonColors;
       secondaryButton: IButtonColors;  
       
       inputText: IInputTextColors;

       box: IBox;

       checkBox: ICheckBox;
    }
      
   }
}
