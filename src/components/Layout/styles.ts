import styled from 'styled-components';

export const Container = styled.div`    
    width: 100%;
    height: 100%;

    > span {
        margin-top: 68px;
        display: flex;
    }

    @media(min-width: 1180px){
        > main {
            margin: 0 30px;
            display: flex;
            justify-content: center;
        }
    }

    .left-column, .right-column {
        display: none;
    }

    @media(min-width: 1180px){
        .left-column, .right-column {
            display: unset;
        }

        .middle-column {
            margin: 0 25px 16px;
        }
    }
`;
