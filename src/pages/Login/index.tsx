import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Container, Content, Logo } from './styles';

import logotipo from "../../assets/logotipo.png";

function Login() {


    return(
        <Container>
            <Box padding='48px'>
                <Content>
                   <Logo>
                     <img src={logotipo} alt="Logotipo autoserv" /> 
                   </Logo> 
                   <InputText  label='Código CICOM' textHint='Código CICOM'/>   
                   <InputText  label='E-mail' textHint='E-mail'/>   
                   <InputText  label='Senha' textHint='Senha'/> 
                   <Button caption='Entrar' buttonSize='large' buttonType='primary' />                    
                </Content>
            </Box>
        </Container> 

    )

};

export {Login};