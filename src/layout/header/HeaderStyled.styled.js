import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
padding: 12px 0px;
background-color: #fff;`

export const Wrapper = styled.div`
margin-left:  auto;
margin-right: auto;
padding: 0 20px;

max-width: 1200px;

display: flex;
align-items: center;
justify-content: space-between;


`

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 12px 12px;
  border-radius: 10px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    span {
      display: inline-flex;
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }

  &.active {
    color: #fefefe;
    background-color: #1e1e1e;
  }
`;