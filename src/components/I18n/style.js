import styled from "styled-components";

export const NavBtnI18n = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  white-space: nowrap;
  font-size: 16px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.color};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  &:hover > #light {
    color: #010606;
  }
`;

export const Flag = styled.img`
  background-image: url(${(props) => props.image});
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
