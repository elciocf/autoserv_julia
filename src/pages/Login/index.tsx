import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Container, Content, Logo, Bottom, Error } from './styles';

import logotipo from "../../assets/logotipo.png";


import { CheckBox } from '../../components/CheckBox';

function Login() {


    return(
        <Container>
            <Box>
                <Content>
                   <Logo>
                     <img src={logotipo} alt="Logotipo autoserv" /> 
                   </Logo> 
                   <InputText  label='Código CICOM' textHint='Código CICOM'/>   
                   <InputText  label='E-mail' textHint='E-mail'/>   
                   <InputText  label='Senha' textHint='Senha' isPassword/> 
                   <Bottom>
                      <CheckBox id="remember" isChecked={true} label="Lembrar meu login" value="S" />
                   </Bottom>
                   <Error>
                   </Error>
                   <Button caption='Entrar' buttonSize='large' buttonType='primary' />                    
                </Content>
            </Box>
        </Container> 

    )

};

export {Login};