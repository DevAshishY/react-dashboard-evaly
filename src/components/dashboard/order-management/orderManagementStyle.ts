import styled from "styled-components";

export const TabWrapper = styled.div`
ul{
	display:flex;
	gap: 10px;
	border-bottom:1px solid #DBDADE;
	li{
		border-radius: 6px 0 0 0;
		border-bottom:2px solid transparent;
		padding: 8px 2%;
		font-weight: 400;
font-size: 15px;
line-height: 22px;
		color:#8B909A;

		&.active{
			color:#0F60FF;
			border-color:#0F60FF;
		}
	}
}
`;


export const FilterOptions = styled.div`
padding:30px 0 15px;
justify-content:space-between;
display:flex;

`;


export const TableWrap = styled.div`
table{
	border-radius: 10px;
    background: #fff;
	border-collapse: collapse;
	width: 100%;
	thead{
		th{
			color:#8B909A;
		}
	}
		tr{
		
			th,td{
				border-bottom: 1px solid #DBDADE;
				padding:18px 20px;
				font-weight: 400;
font-size: 13px;
line-height: 15.28px;
color:#23272E;
text-align: center;


			}
			
		}

		tbody tr {
			td:first-child{
				font-weight:600;
			}
			td{
			span{
				display: flex;
    align-items: center;
    gap: 5px;
			}
				.percent{
					background:rgba(40, 199, 111, 0.16);
					padding:4px;
					font-size:13px;
					font-weight:600;
					border-radius:4px;
				}

				select{
					background: rgba(255, 198, 0, 0.16);
					width: 97px;
					padding: 4px 5px;
					font-size: 13px;
					padding-right: 13px;
					color: rgba(255, 198, 0, 1);

	
				}
				svg {
					right: 7px;
					color:rgba(255, 198, 0, 1);
				}
				&.dropDown{
					svg{
						font-size:24px;
						color:rgba(139, 144, 154, 1);
					}
				}
			}
		}
	
	
			
		}
	}
}

`;