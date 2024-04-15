import styled, { css } from "styled-components";



export const Aside = styled.div`
min-width: 260px;
background: #fff;
height: 100vh;
max-width: 260px;
background:#fff;
transition:all ease 0.5s;

${(props) => props.className === 'close' && 
css`
min-width: 82px;
max-width: unset;
`
}
`;

export const LogoWrapper = styled.div`

background:#fff;
padding: 20px 14px 20px 18px;
gap: 10px;
  a{
	font-size:30px;
 img{
	display:block
 }
  }
  span{
	font-family: "Public Sans", sans-serif;
font-weight: 700;
font-size: 22px;
line-height: 24px;
transition:all ease 0.5s;

}
  em{
	margin-left:auto;
	font-size:25px;
	color:#8B909A;
	curser:pointer;
  }

  ${(props) =>

	
    props.className === "close flex-center" &&
    css`
	padding: 10px;
      a {
        img{

		}
      }
      span {
      font-size:0px
      }
      em {
		font-size: 24px;
		color: #8B909A;
		height: 18px;
		position: relative;
		right: 5px;
		top: -1px;
      }
    `}
`;


export const LeftNav = styled.div`
padding:0px 16px;
strong{
    font-weight: 500;
    display: block;
    padding: 15px 14px;
	font-weight: 400;
font-size: 11px;
line-height: 14px;
color:#8B909A;
text-transform:uppercase;
	

}
ul{
	display:flex;
	flex-direction: column;
	gap:8px;
	li{
		a{
			svg{
				font-size: 23px;
			}
			border-radius: 6px;
    padding: 9px 16px 9px 16px;
    gap: 8px;
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: center;
	color:#8B909A;

	&:hover{
		background:#F3F4F8;
		color:var(----primary-color);
	}
		}
		
	}
}


${(props) =>

	
    props.className === "close" &&
    css`
margin-top:50px;
strong{
   
	padding: 15px 0;
    font-size: 13px;
	display: none;

}
ul{
	
	li{
	display:flex;
	align-item:center;
	margin-bottom:5px;
	transition:all ease 0.5s;
		a{
			font-size: 0px;
    padding: 5px 10px;
			svg{
				font-size: 30px;
			}
			

	
		}
		
	}
}
     
    `}

`;

