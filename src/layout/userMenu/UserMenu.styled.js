import styled from 'styled-components';

export const WrapperUserMenu = styled.div`
display: flex;
gap: 20px;

align-items: center;
justify-content: center;

`

export const Button = styled.button`
 display: flex;
  align-items: center;
  gap: 4px;

  padding: 12px 12px;

  border: none;
  outline: none;

  font-size: 16px;
  text-align: center;

  color: #010101;
  background-color: #ededed;

  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;

  cursor: pointer;

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

  &:hover,
  &:focus {
    color: #1e1e1e;
    background-color: rgba(191, 191, 191, 0.5);
  }
`
