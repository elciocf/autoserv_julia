import styled from "styled-components";

interface CheckboxStyles {
  isDisabled: boolean;
  isError: boolean;
}

export const Container = styled.div<CheckboxStyles>`
  .container {
    display: block;
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.palette.checkBox.label};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 24px;
    width: 24px;
    border-radius: 4px;
    border: 1px solid;

    ${(props) => {
      if (props.isDisabled) {
        return `background-color: ${props.theme.palette.checkBox.backgroundDisabled};
                        border-color: ${props.theme.palette.checkBox.borderDisabled};`;
      }

      if (props.isError) {
        return `background-color: ${props.theme.palette.checkBox.backgroundError};
                        border-color: ${props.theme.palette.checkBox.borderError};`;
      }

      return `background-color: ${props.theme.palette.checkBox.background};
                    border-color: ${props.theme.palette.checkBox.border};`;
    }}
  }

  /* On mouse-over, add a background color */
  .container:hover input ~ .checkmark {
    ${(props) => {
      if (props.isDisabled || props.isError) {
        return ``;
      }
      return `border-color: ${props.theme.palette.checkBox.borderHover};`;
    }}
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    ${(props) => {
      if (props.isDisabled) {
        return `background-color: ${props.theme.palette.checkBox.backgroundDisabled};  
                        border-color: ${props.theme.palette.checkBox.borderDisabled};`;
      }

      if (props.isError) {
        return `background-color: ${props.theme.palette.checkBox.backgroundError};  
                        border-color: ${props.theme.palette.checkBox.borderError};`;
      }

      return `background-color: ${props.theme.palette.checkBox.backgroundChecked};  
            border-color: ${props.theme.palette.checkBox.borderChecked};`;
    }}
  }

  .container:hover input:checked ~ .checkmark {
    ${(props) => {
      if (props.isDisabled || props.isError) {
        return ``;
      }
      return `background-color: ${props.theme.palette.checkBox.backgroundCheckedHover};
                    border-color: ${props.theme.palette.checkBox.backgroundCheckedHover};`;
    }}
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;

    ${(props) => {
      if (props.isDisabled) {
        return `border: solid ${props.theme.palette.checkBox.checkDisabled};`;
      }
      return `border: solid ${props.theme.palette.checkBox.check};`;
    }}

    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
