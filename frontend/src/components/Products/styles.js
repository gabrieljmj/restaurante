import styled from 'styled-components';

export const Wrapper = styled.div`
    width: calc(100% - 380px);
    padding: 20px;
    
    @media (max-width: 900px) {
        width: calc(100% - 380px);
    }

    @media (max-width: 750px) {
        width: inherit;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: columns wrap;
    width: calc(100% - 20px);
    padding: 20px 0;
    
    @media (max-width: 900px) {
        flex-flow: row wrap;
        width: calc(inherit - 40px);
    }
`;

export const SearchBarWrapper = styled.div`
    width: 100%;
`;

export const SearchBar = styled.input`
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 3px;
    width: 100%;

    &:focus {
        border-color: #888888;
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Loading = styled.div`
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
    color: #888888;
    
    i {
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 
        animation-fill-mode: initial;
        backface-visibility: hidden;
        z-index: -1;
    }

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`;

export const EmptyList = styled.div`
    margin-top: 20px;
    text-align: center;
`;
