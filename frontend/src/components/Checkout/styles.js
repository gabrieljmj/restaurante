import styled from 'styled-components';

const mobile = 750;

export const Wrapper = styled.div`
    width: 300px;
    height: calc(100vh - 130px);
    position: fixed;
    right: 0;
    top: 0;
    padding: 20px;
    background: #ffffff;
    transition: max-width 0.2s ease-in;
    margin-top: 90px;
    
    @media (max-width: ${mobile}px) {
        max-width: ${(props) => (props.showCheckout ? '100vw' : '0')};
        width: calc(100vw - 40px);
        height: calc(100vh - 40px);
        top: 0;
        
        padding: ${(props) => (props.showCheckout ? '20px' : '0')};
    }
`;

export const OpenSideButton = styled.button`
    display: none;
    
    @media (max-width: ${mobile}px) {
        display: inline;
        position: fixed;
        top: 50%;
        right: 0;
        background: #808080;
        padding: 5px;
        border-radius: 3px 0 0 3px;
        border: none;
        color: #ffffff;
        z-index: 999999;
        
        &:hover {
            background: #333;
        }
    }
`;

export const List = styled.ul`
    list-style: none;
`;

export const Product = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    align-items: center;
`;

export const ProductName = styled.div`
`;

export const ProductActions = styled.div`
`;

export const EmptyList = styled.div`
    text-align: center;
`;

export const Title = styled.h2`
`;

export const Footer = styled.footer`
    width: inherit;
    position: fixed;
    bottom: 20px;
`;

export const CheckoutButtons = styled.div`
    margin-top: 10px;
    display: flex;
`

export const CheckoutButton = styled.button`
    padding: 10px;
    font-size: 14px;
    text-align: center;
    border: none;
    border-radius: 3px;
    width: 100%;
    font-weight: bold;

    &:disabled {
        background: #ccc;
        color: #333;
        cursor: default;
    }
`;

export const CheckoutFinishButton = styled(CheckoutButton)`
    background: #28A745;
    color: #fff;
`;

export const CheckoutGoButton = styled(CheckoutFinishButton)`
`;

export const CheckoutStandardButton = styled(CheckoutButton)`
    color: #000;
    background: #fff;
`;

export const RemoveProductButton = styled.button`
    border: none;
    padding: 5px;
    background: #ffffff;
`;

export const Payment = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
`;

export const PaymentTotal = styled.div`
`;

export const PaymentCharge = styled.div`
    text-align: right;
`;

export const PaymentMethods = styled.section`
    margin-bottom: 10px;
`;

export const PaymentMethodsHeader = styled.h3``;

export const PaymentMethodsOptions = styled.ul``;

export const PaymentMethodOption = styled.li`
    display: block;
    padding: 10px 0px;
    cursor: pointer;

    & input[type="radio"] {
        margin-right: 10px;
    }
`;

export const CheckoutField = styled.div`
    margin-bottom: 10px;
`;

export const Input = styled.input`
    border-radius: 3px;
    border: 2px solid #ccc;
    padding: 10px;
    width: 276px;
    margin-top: 10px;
`;

export const TextArea = styled.textarea`
    border-radius: 3px;
    border: 2px solid #ccc;
    padding: 10px;
    width: 276px;
    margin-top: 10px;
    resize: none;
    font-family: 'Sen', sans-serif;
`;

export const CloseCheckoutButton = styled.button`
    display: none;

    @media (max-width: ${mobile}px) {
        border: none;
        font-size: 16px;
        background: none;
        padding: 0;
        display: ${(props) => (props.showCheckout ? 'block' : 'none')};
    }
`;
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: inherit;
`;

export const FooterButtons = styled.div`
    display: flex;
    flex-direction: columns;
`;

export const InvalidMessage = styled.div`
    color: red;
    font-weight: bold;
    font-size: 12px;
    margin-top: 5px;
`

export const OrderMadeMask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #28A745;
    color: #fff;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    transition: display 1s;
`

export const OrderMaskContent = styled.div`
    width: 100%;
    text-align: center;
`
