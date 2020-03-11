import styled from 'styled-components';

export const Wrapper = styled.li`
    width: 200px;
    height: 300px;
    padding: 15px;
    border: 2px solid #ccc;
    border-radius: 3px;
    margin-right: 20px;
    background: #ffffff;
    
    @media (max-width: 900px) {
        width: inherit;
        margin-right: 0px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: columns;
        height: 100px;
    }
`;

export const ProductPicture = styled.img`
    width: 200px;
    height: 200px;

    @media (max-width: 900px) {
        width: 100px;
        height: 100px;
        margin-right: 10px;
    }
`;

export const ProductName = styled.div`
    text-align: center;
    font-weight: bold;
    margin-top: 10px;

    @media (max-width: 900px) {
        width: 100%;
        margin-top: 0;
        text-align: left;
    }
`;

export const ProductPrice = styled.div`
    text-align: center;
    margin-top: 10px;

    @media (max-width: 900px) {
        width: 100%;
        margin-top: 0;
        text-align: left;
    }
`;

export const ProductQuantityWrapper = styled.div`
    
` 

export const ProductQuantity = styled.div`
    display: flex;
    font-size: 16px;
    border-radius: 3px;
    width: 90px;
    border: 1px solid #ccc;
    margin: 0 auto;
    margin-top: 10px;
    height: 30px;
`;

export const QuantityOperationButton = styled.button`
    color: #28A745;
    padding: 5px;
    background: #ffffff;
    border: none;
    width: 33%;
    text-align: center;
    cursor: pointer;
`;

export const Quantity = styled.input`
    width: 33%;
    padding: 5px;
    border: none;
    text-align: center;
`;

export const ProductInfo = styled.div`
    @media (max-width: 900px) {
        height: 100px;
        display: flex;
        flex-direction: rows;
        flex-flow: row wrap;
    }
`
