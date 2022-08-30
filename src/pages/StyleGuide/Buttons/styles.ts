import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;

`

export const Content = styled.div`  
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const ContentLine = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  >label{
    min-width: 230px;
    text-align: right;
    color: ${props => props.theme.colors.text};
  }
`