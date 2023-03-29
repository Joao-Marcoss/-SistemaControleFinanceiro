import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
    svg {
      display: none;
    }
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90px;
  gap: 10px;
  flex-direction: column;
  margin: 20px auto;
  border-radius: 2px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTittle = styled.p`
  font-size: 20px;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
