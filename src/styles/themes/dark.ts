import { DefaultTheme } from 'styled-components'


const DarkTheme : DefaultTheme = {
    title: 'Dark',
    colors: {
        primary: 'var(--cor8)',
        secundary: 'var(--cor9)',
        background: 'var(--dark_cor1)',
        text: 'var(--cor12)'
    },
    borderRadius: '4px',
    buttonBorderRadius: '4px',
    palette: {
        primaryButton: {
            border: 'var(--cor9)',
            standard: 'var(--cor9)',
            click: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), var(--cor9)',
            disabled: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), var(--dark_cor13)',
            hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), var(--cor9)',
            text: 'var(--cor12)',
            textDisabled: 'var(--cor5)'
        },
        secondaryButton: {
            border: 'rgba(171, 190, 209, 0.1)',
            standard: 'var(--dark_cor11)',
            click: 'var(--dark_cor13)',
            disabled: 'var(--dark_cor10)',
            hover: 'var(--dark_cor12)',
            text: 'var(--dark_cor4)',
            textDisabled: 'var(--cor5)'
        },
        inputText:{
            background: 'var(--dark_cor1)',
            border: 'rgba(233, 233, 233, 0.2)',
            focused: 'rgba(43, 75, 242, 0.06)',
            focusedBorder: '#6499FF',
            validBorder: 'var(--dark_cor7)',
            invalidBorder: 'var(--dark_cor9)',
            invalidLabelHint: 'var(--dark_cor9)',
            validLabelHint: 'var(--dark_cor7)',
            readOnlyLabelHint: 'rgba(255, 255, 255, 0.5)',
            readOnly: 'var(--dark_cor15)',
            text: 'var(--cor12)',
            textReadOnly: 'var(--cor12)',
            textDisabled: 'rgba(255, 255, 255, 0.6)',
            disabledLabelHint: 'rgba(255, 255, 255, 0.6)',
        },
        box:{
            borderRadius: '16px',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            background: 'rgba(255, 255, 255, 0.05)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
    },

}

export {DarkTheme}