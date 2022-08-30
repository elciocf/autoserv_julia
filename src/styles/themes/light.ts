import { DefaultTheme } from 'styled-components'


const LightTheme : DefaultTheme = {
    title: 'Light',
    colors: {
        primary: 'var(--cor8)',
        secundary: 'var(--cor9)',
        background: 'var(--cor32)',
        text: 'var(--cor1)'
    },
    borderRadius: '4px',
    buttonBorderRadius: '4px',
    palette: {
        primaryButton: {
            border: 'var(--cor9)',
            standard: 'var(--cor9)',
            click: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--cor9)',
            disabled: 'var(--cor6)',
            hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), var(--cor9)',
            text: 'var(--cor12)',
            textDisabled: 'var(--cor5)'
        },
        secondaryButton: {
            border: 'var(--cor9)',
            standard: 'var(--cor12)',
            click: 'var(--cor6)',
            disabled: 'var(--cor6)',
            hover: 'var(--cor6)',
            text: 'var(--cor9)',
            textDisabled: 'var(--cor5)'
        },
        inputText:{
            background: 'var(--cor7)',
            border: 'var(--dark_cor3)',
            focused: 'rgba(43, 75, 242, 0.06)',
            focusedBorder: 'var(--cor8)',
            validBorder: 'var(--dark_cor3)',
            invalidBorder: 'var(--cor26)',
            invalidLabelHint: 'var(--cor26)',
            validLabelHint: 'var(--cor1)', 
            readOnlyLabelHint: 'var(--cor3)',
            readOnly: 'var(--dark_cor3)',
            textReadOnly: 'var(--cor9)',
            text: 'var(--cor1)',
            textDisabled: 'var(--cor4)',
            disabledLabelHint: 'var(--cor4)',
        },
        box:{
            borderRadius: '16px',
            borderColor: 'var(--cor7)',
            background: 'var(--cor7)',
            boxShadow: '0px 2px 4px rgba(171, 190, 209, 0.6)'
        }
    },

}

export {LightTheme}