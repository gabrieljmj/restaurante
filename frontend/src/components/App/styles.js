import styled, { createGlobalStyle, className } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body {
        font-family: 'Sen', 'sans-serif';
        background: #F9F8F6;
    }

    button {
        cursor: pointer;
    }
`;

export const Header = styled.header`
    width: calc(100% - 40px);
    height: 50px;
    padding: 20px;
    position: fixed;
    top: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.main`
    margin-top: 90px;
`;

export const Logo = styled.div``;

export const NavOpenButton = styled.button`
    display: none;
    border: none;
    font-size: 28px;
    background: none;

    @media (max-width: 750px) {
        display: ${(props) => (props.navActive ? 'none' : 'block')};
    }
`;

export const Nav = styled.nav`
    transition: max-width 0.2s ease-in-out;

    @media (max-width: 750px) {
        display: relative;
        position: fixed;
        right: 0;
        top: 0;
        background: #ffffff;
        max-width: ${(props) => (props.active ? '100vw' : '0')};
        width: calc(100vw - 40px);
        height: calc(100vh);
        padding: ${(props) => (props.active ? '20px' : '0')};
        overflow: hidden;
        z-index: 1000;
    }
`;

export const NavItems = styled.ul`
    display: flex;
    flex-direction: columns;

    @media (max-width: 750px) {
        width: 100vw;
        flex-flow: row wrap;
    }
`;

export const NavItem = styled.li`
    margin-right: 10px;

    a {
        padding: 10px;
        font-size: 16px;
        color: #888888;
        text-decoration: none;
    }

    a:hover {
        color: #000000;
    }

    a.active {
        color: #000000;
        border-bottom: 3px solid #000000;
        border-radius: 0 0 3px 3px;
    }

    @media (max-width: 750px) {
        width: 100vw;
        margin-right: 0;
        margin-bottom: 30px;
        
        a {
            width: 100vw;
            font-size: 28px;
        }
    }
`;

export const NavCloseWrapper = styled.div`
    display: none;
    height: 90px;
    align-items: center;

    @media (max-width: 750px) {
        display: ${(props) => (props.navActive ? 'flex' : 'none')};
        position: absolute;
        top: 0;
        right: 20px;
    }
`;

export const NavCloseButton = styled.button`
    border: none;
    padding: none;
    font-size: 28px;
    color: #000;
    background: none;
`;
