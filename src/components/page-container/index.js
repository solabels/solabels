import React from 'react';
import styled from '@emotion/styled';

const PageContainerStyled = styled.div`
    background-color: rgba(2,102,112,0.85);
    padding: 2rem;
    color: white;
    margin-bottom: 5rem;
`;

const PageContainer = ({children}) => {
    return (
        <PageContainerStyled>
            {children}
        </PageContainerStyled>
    )
}

export default PageContainer;