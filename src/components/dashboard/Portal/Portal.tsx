import React, { useState } from "react";
import { styled } from "styled-components";
import { TabWrapper, FilterOptions, TableWrap } from "../order-management/orderManagementStyle";
import InputElement from "../globalElement/InputElement";
import SelectElement from "../globalElement/SelectElement";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { TabularData, filterData, options, tabList } from "../../../constant/data";

export const InputStyle = styled.div`
  position: relative;

`;

const Portal: React.FC = () => {
  return (
    <>
    <h2>
        Dashboard
       </h2>
     <TabWrapper>
       <ul>
         {tabList.map((item, index) => {
           return <li key={index} className={index === 0 ? 'active':''}>{item.name}</li>;
         })}
       </ul>
     </TabWrapper>
     <FilterOptions>
       <InputElement />
       <SelectElement options={filterData} />
     </FilterOptions>
     <TableWrap>
       <table>
         <thead>
           <tr>
             {TabularData.columns.map((item, index) => {
               return (
                 <>
                   {" "}
                   <th key={index}>{item}</th>{" "}
                 </>
               );
             })}
           </tr>
         </thead>
         <tbody>
           {TabularData.orders.map((item, index) => {
             return (
               <>
                 <tr>
                   <td>{item.orderId}</td>
                   <td>{item.created}</td>
                   <td>{item.customer}</td>
                   <td>{item.total}</td>
                   <td>
                     <span>
                       {" "}
                       {item.profit.amount}{" "}
                       <span className="percent">
                         {item.profit.percentage}
                       </span>
                     </span>
                   </td>
                   <td>
                   <SelectElement options={options} />
                   </td>
                   <td className="dropDown">
                     <MdOutlineArrowDropDownCircle />
                   </td>
                 </tr>
               </>
             );
           })}
         </tbody>
       </table>
     </TableWrap>
   </>
  );
};

export default Portal;