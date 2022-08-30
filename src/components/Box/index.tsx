import React, { ReactNode } from "react";
import { GroupBox } from "./styles";



interface BoxProps{    
    children?: ReactNode;    
    shadow?: boolean;
    padding?: string;
}

function Box({children, shadow = false, padding = ''}: BoxProps) {


    return(
        
            <GroupBox shadow={shadow} padding={padding}>                
              {children}               
            </GroupBox>
        

    )

};

export {Box};
