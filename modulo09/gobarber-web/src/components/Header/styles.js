import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  aligh-items: center;
  margin: 50px;
`;

export const Cart = styled(Link)`
  display: flex;
  aligh-items: center;
  text-decoration: none;
  transition: opacity .2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align:: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #FFF;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
