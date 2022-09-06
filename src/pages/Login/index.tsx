import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Container, Content, Logo, Bottom, Error } from './styles';

import { CheckBox } from '../../components/CheckBox';

import logotipo from "../../assets/logotipo.png";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';


type LoginFormFields ={
    codCicom : string;
    email: string;
    password: string;
    rememberMe: boolean;
}

function Login() {
    const { control, handleSubmit } = useForm<LoginFormFields>();

    const onSubmit : SubmitHandler<LoginFormFields> = data => {
        console.log('submitting...');
        console.log('submit fields:', data);
    }

    return(
        <Container>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Content>
                   <Logo>
                     <img src={logotipo} alt="Logotipo autoserv" /> 
                   </Logo> 
                   
                     <Controller name="codCicom" control={control} defaultValue=""                     
                     render={({ field, fieldState }) =>
                       <InputText label='Código CICOM' textHint='Código CICOM' onChange={field.onChange}  onBlur={field.onBlur} isInvalid={fieldState.error} errorInfo={fieldState.error} />   
                     }
                     />
                     <Controller name="email" control={control} defaultValue=""
                     render={({ field }) =>
                       <InputText label='E-mail' textHint='E-mail' onChange={field.onChange}  onBlur={field.onBlur}/>
                     }   
                     />
                     <Controller name="password" control={control} defaultValue=""
                     render={({ field }) =>
                       <InputText label='Senha' textHint='Senha' isPassword onChange={field.onChange}  onBlur={field.onBlur}/> 
                     }   
                     />
                     <Bottom>
                        <Controller name="rememberMe" control={control} defaultValue={true}
                        render={({ field }) =>
                         <CheckBox id="remember" label="Lembrar meu login" isChecked={field.value} onChange={field.onChange}  onBlur={field.onBlur}/>
                        }   
                        />
                     </Bottom>
                     <Error>
                     </Error>
                     <Button buttonKind='submit' caption='Entrar' buttonSize='large' buttonType='primary' />                                       
                </Content>
                </form>
            </Box>
        </Container> 

    )

};

export {Login};