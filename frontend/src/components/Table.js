import React from "react";
import styled from "styled-components";

const CusTomeTable = styled.table`
  width: 100%;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const Th = styled.th``;
const Tr = styled.tr``;
const Td = styled.td``;

const Table = ({ TableHead, TableData, Action }) => {
  return (
    <CusTomeTable>
      <THead>
        <Tr>
          {TableHead?.map((data, ind) => {
            return <Th key={ind + Math.random()}>{data}</Th>;
          })}
        </Tr>
      </THead>
      <TBody>
        {TableData?.map((data, ind) => {
          return (
            <Tr key={ind + Math.random()}>
              <Td>{data?.id}</Td>
              <Td>{data?.name}</Td>
              <Td>{data?.mobile}</Td>
              <Td>{data?.address}</Td>
              <Td>
                {Action?.map((Button, ind) => {
                  return <Button id={data?._id} key={ind + Math.random()} />;
                })}
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </CusTomeTable>
  );
};

export default Table;
