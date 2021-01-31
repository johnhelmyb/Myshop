import styled from 'styled-components';

export const Container = styled.div`

    padding: 80px 60px;
    background: #6ca3de 100%;
    border-radius: 2rem;
    @media (max-width: 1000px){
        padding: 70px 30px;
    }
    `;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Colunm = styled.div`
    display: flex;
    flex-direction: colunm;
    text-align: left;
    margin-left: 60px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-colunms: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-colunms: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Link = styled.a`
    color: #808080;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #809090;
        transition: 200ms ease-in;
    }
`;

export const Title = styled.h3`
    font-size: 24px;
    color: #808080;
    margin-bottom: 40px;
    font-weight: bold;
`;

