import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: columns;
    width: inherit;
    padding: 20px;
`

export const Section = styled.section`
    width: calc(100% - 20px);
`

export const List = styled.ul`
`;

export const EmptyList = styled.div`
    text-align: center;
`;

export const Order = styled.li`
    padding: 20px 20px 10px 20px;
    background: #ffffff;
    margin-bottom: 20px;
    border-radius: 3px;
    display: flex;
    width: calc(100% - 20px);
    justify-content: space-between;
`

export const OrderInfo = styled.div``

export const OrderActions = styled.div``

export const OrderMarkAsReadyButton = styled.button`
    background: #28A745;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 3px;
    width: 100%;
    font-weight: bold;

    &:disabled {
        background: #ccc;
        color: #333;
        cursor: default;
    }
`

export const OrderClientName = styled.div`
    font-size: 16px;
    font-weight: bold;
`

export const OrderItems = styled.div`
   margin-top: 20px;
   width: 100%;
`

export const OrderItemsList = styled.ul`
    margin-top: 10px;
`;

export const OrderItemsProduct = styled.li`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
`;

export const OrderItemsQuantity = styled.div`
    font-size: 12px;
    color: #333;
`

export const Title = styled.h2`
    margin-bottom: 20px;
`;

export const OrderObservations = styled.div`
    /* padding: 20px 0px; */
    font-size: 16px;
`

export const ProductName = styled.div`
`;

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 1px solid #ccc;
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
