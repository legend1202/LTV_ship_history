'use client';
import styled from 'styled-components';
import getIconComponent from '../../icons/IconMapper';
import ContainerLayout from '../../layouts/ContainerLayout';

interface ServiceCardsData {
  iconKey: string;
  text: string;
}

const data1 = [
  {
    "Type": "DRY-DOCk",
    "No.": "NO.1",
    "Length(M)": "187",
    "INNER WIDTH(M)": "25",
    "MAX DRAFT(M)": "8",
    "CRANES(T)": "2 x 20"
  },
  {
    "Type": "DRY-DOCk",
    "No.": "NO.1",
    "Length(M)": "220",
    "INNER WIDTH(M)": "25",
    "MAX DRAFT(M)": "8",
    "CRANES(T)": "2 x 20"
  },
  {
    "Type": "FLOATING DOCk",
    "No.": "",
    "Length(M)": "119",
    "INNER WIDTH(M)": "19",
    "MAX DRAFT(M)": "6",
    "CRANES(T)": "1 x 5"
  },
];

const data2 = [
  {
    "NAME": "BERTH No.19",
    "Length(m)": "381.7",
    "DEPTH(M)": "6.2",
    "CRANES(T)": "1 x 32"
  },
  {
    "NAME": "BERTH No.19",
    "Length(m)": "381.7",
    "DEPTH(M)": "6.2",
    "CRANES(T)": "1 x 32"
  },
  {
    "NAME": "BERTH No.19",
    "Length(m)": "381.7",
    "DEPTH(M)": "6.2",
    "CRANES(T)": "1 x 32"
  },
];


const SectionWrapper = styled.div`
  // min-height: 80vh;
  margin-bottom: 70px;
`;
const HeadingWrapper = styled.div`
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    max-width: 70%;
  }
  @media (max-width: 321px) {
    h3 {
      max-width:290px;
      font-family: Sinkin Sans;
      font-size: 20px;
      font-weight: 500;
      line-height: 31px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  @media (max-width: 321px) {
    display: block;
  }
`;
const StyledTable = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
  color: white;
  td,
  th {
    min-width: 125px;
    height: 72px;
    border: 1px solid white;
    border-collapse: collapse;
    text-align: center;
    font-family: Sinkin Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
  }
  @media (max-width: 321px) {
    width:290px;
    td,
    th {
      min-width: auto;
      height: auto;
      border: 1px solid white;
      font-family: Sinkin Sans;
      font-size: 10px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;
const StyledTable2 = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
  color: white;
  td,
  th {
    min-width: 187px;
    height: 72px;
    border: 1px solid white;
    border-collapse: collapse;
    text-align: center;
    font-family: Sinkin Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
  }
  @media (max-width: 321px) {
    margin-top: 16px;
    width:290px;
    td,
    th {
      min-width: auto;
      height: auto;
      border: 1px solid white;
      font-family: Sinkin Sans;
      font-size: 10px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;
export default function ServicesDataTables() {
  return (
    <SectionWrapper>
      <ContainerLayout>
        <HeadingWrapper>
          <h3>
             Technical Data of Docks and repair berths:
          </h3>
        </HeadingWrapper>
        <CardList>
          <TableMarkup titles={Object.keys(data1[0])} data={data1} />
          <TableMarkup2 titles={Object.keys(data2[0])} data={data2} />
        </CardList>
      </ContainerLayout>
    </SectionWrapper>
  );
};

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
const TableMarkup2 = ({ titles, data }) => (
  <StyledTable2>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>{item[title]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable2>
);