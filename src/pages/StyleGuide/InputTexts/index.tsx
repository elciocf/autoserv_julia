import React from 'react';
import { Button } from '../../../components/Button';
import { InputText } from '../../../components/InputText';

import { Container, Content, ContentLine } from './styles';


interface InputTextsProps{
    toggleTheme: ()=> void;
  }
  

export function InputTexts({toggleTheme}: InputTextsProps){
    
   return(
       <Container>   
          <Content>
              <ContentLine>
                <label></label>
                <Button buttonSize='large' caption="Alterar tema"  hint="Altera entre dark e light" onClick={toggleTheme}/>                        
              </ContentLine>
              <ContentLine>
                 <label>Standard</label> 
                 <InputText  label='Label' textHint='Text hint'/>            
                 <InputText  label='Label' value='Text value' textHint='Text hint'/> 
              </ContentLine>
              <ContentLine>
                 <label>Invalid</label> 
                 <InputText  ErrorInfo='Hint' label='Label' textHint='Text hint' isInvalid />            
                 <InputText  ErrorInfo='Hint' label='Label' value='invalid value' textHint='Text hint' isInvalid />            
              </ContentLine>
              <ContentLine>
                 <label>Valid</label> 
                 <InputText  ErrorInfo='Hint' label='Label' textHint='Text hint' isValid />            
                 <InputText  ErrorInfo='Hint' label='Label' value='Valid value' textHint='Text hint' isValid />            
              </ContentLine>
              <ContentLine>
                 <label>Disabled</label> 
                 <InputText  label='Label' textHint='Text hint' isDisabled />            
                 <InputText  label='Label' value='disabled' textHint='Text hint' isDisabled />            
              </ContentLine>
              <ContentLine>
                 <label>ReadOnly</label> 
                 <InputText  label='Label' textHint='Text hint' isReadOnly />            
                 <InputText  label='Label' value='readonly value' textHint='Text hint' isReadOnly />            
              </ContentLine>
          </Content> 
       </Container>

   ) 
}