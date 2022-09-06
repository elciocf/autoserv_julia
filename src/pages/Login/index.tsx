import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputText';
import { Container, Content, Logo, Bottom, Error } from './styles';
import { CheckBox } from '../../components/CheckBox';
import logotipo from "../../assets/logotipo.png";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { apiAutoServ } from '../../services/apiAutoServ';
import { useState } from 'react';




type LoginFormFields ={
    codCicom : string;
    email: string;
    password: string;
    rememberMe: boolean;
}


let schema = yup.object().shape({
    codCicom: yup.number().required('Informe o código CICOM').positive('Deve ser um número maior que zero').integer('Informe apenas números').typeError('Deve ser informado. Informe apenas números'),
    email: yup.string().email('Informe um e-mail válido').required('Deve ser informado'),
    password: yup.string().required('Senha deve ser informada'),
  });

function Login() {
    const { control, handleSubmit } = useForm<LoginFormFields>({
        resolver: yupResolver(schema)
    });

    const [retorno, setRetorno] = useState('');

    const onSubmit : SubmitHandler<LoginFormFields> = async data => {
        setRetorno('');
        try{
            const response = await apiAutoServ.post('signin',{
                    email: data.email,	
                    senha: data.password,
                    cod_cicom: data.codCicom	
                
            });
        

            console.log(response);
        }catch(error:any){
            setRetorno(error.response.data?.message || error.response?.data || error)
            console.log(error.response.data?.message || error.response?.data || error)
        }
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
                     render={({ field, fieldState }) =>
                       <InputText label='E-mail' textHint='E-mail' onChange={field.onChange}  onBlur={field.onBlur} isInvalid={fieldState.error} errorInfo={fieldState.error} />
                     }   
                     />
                     <Controller name="password" control={control} defaultValue=""
                     render={({ field, fieldState }) =>
                       <InputText label='Senha' textHint='Senha' isPassword onChange={field.onChange}  onBlur={field.onBlur} isInvalid={fieldState.error} errorInfo={fieldState.error} /> 
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
                        {retorno}
                     </Error>
                     <Button buttonKind='submit' caption='Entrar' buttonSize='large' buttonType='primary' />                                       
                </Content>
                </form>
            </Box>
        </Container> 

    )

};

export {Login};