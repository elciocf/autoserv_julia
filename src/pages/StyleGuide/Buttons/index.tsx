import React from 'react';
import { Button } from '../../../components/Button';
import { Container, Content, ContentLine } from './styles';
import { FiPlus } from "react-icons/fi";
import { Box } from '../../../components/Box';

interface ButtonsProps{
  toggleTheme: ()=> void;
}

export function Buttons( {toggleTheme} : ButtonsProps){
    
   return(
       <Container>   
          <Content>
              <ContentLine>
                <label></label>
                <Box padding='10px'>
                  <Button buttonSize='large' caption="Alterar tema"  hint="Altera entre dark e light" onClick={toggleTheme}/>                        
                </Box>
              </ContentLine>

              <ContentLine>
                <label>Primary:</label>
                <Button buttonSize='large' caption="Large"  hint="Large primary button"/>        
                <Button buttonSize='medium' caption="Medium"  />        
                <Button buttonSize='small' caption="Small"  />                   
              </ContentLine>
              <ContentLine>
                <label>Primary Left Icon:</label>
                <Button buttonSize='large' caption="Large" leftIcon={<FiPlus />} />        
                <Button buttonSize='medium' caption="Medium" leftIcon={<FiPlus />} />        
                <Button buttonSize='small' caption="Small"  leftIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Primary Right Icon:</label>
                <Button buttonSize='large' caption="Large" rightIcon={<FiPlus />} />        
                <Button buttonSize='medium' caption="Medium" rightIcon={<FiPlus />} />        
                <Button buttonSize='small' caption="Small"  rightIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Primary Loading Icon:</label>
                <Button buttonSize='large' caption="Large" loading={true}/>        
                <Button buttonSize='medium' caption="Medium" loading={true}/>        
                <Button buttonSize='small' caption="Small"  loading={true}/>        
              </ContentLine>
              <ContentLine>
                <label>Primary Only Icon:</label>
                <Button buttonSize='large'  rightIcon={<FiPlus />} />        
                <Button buttonSize='medium' rightIcon={<FiPlus />} />        
                <Button buttonSize='small'  rightIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Primary Only Icon Loading:</label>
                <Button buttonSize='large'  rightIcon={<FiPlus />} loading={true}/>        
                <Button buttonSize='medium' rightIcon={<FiPlus />} loading={true}/>        
                <Button buttonSize='small'  rightIcon={<FiPlus />} loading={true}/>        
              </ContentLine>

              <ContentLine>
                <label>Primary Disabled:</label>
                <Button buttonSize='large' caption="Large" disabled leftIcon={<FiPlus />} />        
                <Button buttonSize='medium' caption="Medium" disabled rightIcon={<FiPlus />} />        
                <Button buttonSize='small' caption="Small"  disabled leftIcon={<FiPlus />}/>        
              </ContentLine>

              <ContentLine>
                <label>Secondary:</label>
                <Button buttonType="secondary" buttonSize='large' caption="Large" hint="Large secondary button"/>        
                <Button buttonType="secondary" buttonSize='medium' caption="Medium"  />        
                <Button buttonType="secondary" buttonSize='small' caption="Small"  />                   
              </ContentLine>
              <ContentLine>
                <label>Secondary Left Icon:</label>
                <Button buttonType="secondary" buttonSize='large' caption="Large" leftIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='medium' caption="Medium" leftIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='small' caption="Small"  leftIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Secondary Right Icon:</label>
                <Button buttonType="secondary" buttonSize='large' caption="Large" rightIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='medium' caption="Medium" rightIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='small' caption="Small"  rightIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Secondary Loading Icon:</label>
                <Button buttonType="secondary" buttonSize='large' caption="Large" loading={true}/>        
                <Button buttonType="secondary" buttonSize='medium' caption="Medium" loading={true}/>        
                <Button buttonType="secondary" buttonSize='small' caption="Small"  loading={true}/>        
              </ContentLine>
              <ContentLine>
                <label>Secondary Only Icon:</label>
                <Button buttonType="secondary" buttonSize='large'  rightIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='medium' rightIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='small'  rightIcon={<FiPlus />}/>        
              </ContentLine>
              <ContentLine>
                <label>Secondary Only Icon Loading:</label>
                <Button buttonType="secondary" buttonSize='large'  rightIcon={<FiPlus />} loading={true}/>        
                <Button buttonType="secondary" buttonSize='medium' rightIcon={<FiPlus />} loading={true}/>        
                <Button buttonType="secondary" buttonSize='small'  rightIcon={<FiPlus />} loading={true}/>        
              </ContentLine>
              <ContentLine>
                <label>Secondary Disabled:</label>
                <Button buttonType="secondary" buttonSize='large' caption="Large" disabled leftIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='medium' caption="Medium" disabled rightIcon={<FiPlus />} />        
                <Button buttonType="secondary" buttonSize='small' caption="Small"  disabled leftIcon={<FiPlus />}/>        
              </ContentLine>
          </Content> 
       </Container>

   ) 
}