import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root{
        --cor7: #FFFFFF;
        --cor6: #F5F7FA;
        --cor5: #ABBED1;
        --cor4: #89939E;
        --cor3: #717171;
        --cor2: #4D4D4D;
        --cor1: #212121;
        --cor32: #e5e5e5;
        
        --cor8: #1766FF;
        --cor9: #3761AB;
        --cor10: #132746;
        --cor11: #BAD2FF;
        --cor12: #FCFCFF;
        --cor31: #EAF1FF;
        --cor33: #0663C7;

        --cor13: #115B43;
        --cor14: #1B6E53;
        --cor15: #009262;
        --cor16: #32C997;
        --cor17: #84DFC1;
        --cor18: #F1FBF8;

        --cor19: #E48900;
        --cor20: #FFA826;
        --cor21: #FFB240;
        --cor22: #FFC670;
        --cor23: #FFD596;
        --cor24: #FFF8EC;

        --cor25: #C33025;
        --cor26: #E01507;
        --cor27: #E02B1D;
        --cor28: #FF5A4F;
        --cor29: #F0857D;
        --cor30: #FFF1F0;

        --dark_cor1: #121212;
        --dark_cor2: #1E1E1E;
        --dark_cor3: #DCDCDC;
        --dark_cor11: #191919;
        --dark_cor12: #232323;
        --dark_cor13: #393939;
        --dark_cor14: #132746;
        --dark_cor15: #2C2B2B;

        --dark_cor4: #74A3FF;
        --dark_cor5: #DDEEFD;
        --dark_cor6: #3761AB;

        --dark_cor7: #66BEA1;
        --dark_cor10: #84DFC1;

        --dark_cor8: #FFC670;

        --dark_cor9: #EC736A;
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 18px;
        line-height: 28px;

        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }
  
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;

        >label{
            cursor: pointer;
        }
    }



`
    