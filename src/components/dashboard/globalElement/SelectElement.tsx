import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IoChevronDown } from "react-icons/io5";
import SelectElementProps from '../../../interfaces/select'

export const SelectStyle = styled.div`
position:relative;
display: inline-block;
select{
    width:200px;
    font-weight: 400;
font-size: 15px;
line-height: 21px;
padding:10px 16px;
border:none;
box-shadow:0 4px 16px rgba(0,0,0,0.1);
border-radius:4px;
color:#8B909A;
padding-right:40px;
-webkit-appearance: none;

}
svg{
    position: absolute;
    right: 18px;
    color: #8B909A;
    font-size: 17px;
    top: 50%;
    transform: translateY(-36%);
    }
`;

const SelectElement: React.FC<SelectElementProps> = ({ options }) => {

	
	return (
        <>
        <SelectStyle>
       <select>
       {options.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
       
       </select>
    <IoChevronDown/>
        </SelectStyle>

</>


	);
};

export default SelectElement;



