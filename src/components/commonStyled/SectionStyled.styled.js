import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionStyled = styled.section`

padding-top: 35px;

`

export const WrapperPagePartStyled = styled.div`
max-width: 1200px;

margin-left: auto;
margin-right: auto;

padding-left: 35px;
padding-right: 35px;

`

export const ContentContainer = styled.div`
min-width: 500px;
width: 650px;

background-color: #fff;
margin-left: auto;
margin-right: auto;


padding: 35px;


box-shadow: rgba(50, 88, 130, 0.32) 0px 8px 12px -4px;
border-radius: 15px;

`

export const LinkToStyled = styled(Link)`
margin: 0;
       font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: #1976d2;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(25, 118, 210, 0.4);
`
