import React from "react";
import styled from "@emotion/styled";
import { RichText } from "prismic-reactjs";

import ErrorBoundary from "../errorBoundary";

const ProjectWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  max-width: 100rem;
  padding: 1.5rem;
  background-color: rgba(2, 102, 112, 0.85);
  margin-bottom: 2.5rem;
  flex-direction: row;
  transition: 0.5s background-color;
  @media ${props => props.theme.media.lg} {
    flex-direction: column !important;
  }
  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }
  &:hover {
    background-color: rgba(2, 102, 112, 1);
  }
`;

const ProjectCell = styled.div`
  display: flex;
  width: 50%;
  @media ${props => props.theme.media.lg} {
    width: 100%;
  }
  padding: 1.5rem;
`;

const ProjectInfo = styled.div`
  font-size: 1.5rem;
  color: white;
  opacity: 0.9;
  .underline {
    text-decoration: underline;
  }
`;

const CenterImg = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Project = ({ img, name, location, capacity, labels, text }) => {
  return (
    <ErrorBoundary>
      <ProjectWrapper>
        <ProjectCell>
          <CenterImg>
            {img && <img className='img-responsive' src={img} alt={name} />}
          </CenterImg>
        </ProjectCell>
        <ProjectCell>
          <ProjectInfo>
            <div>
              <strong>{name}</strong>
            </div>
            <div className='underline'>{location}</div>
            <div>{capacity}</div>
            <div>{labels}</div>
            <div style={{ marginTop: "2rem" }}>{RichText.render(text)}</div>
          </ProjectInfo>
        </ProjectCell>
      </ProjectWrapper>
    </ErrorBoundary>
  );
};

export default Project;
