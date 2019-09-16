import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';
import { Link, graphql, StaticQuery } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { withPreview } from 'gatsby-source-prismic-graphql';

import SolarSetup from './solar-setup.svg';
import Label from './label.svg';
import BgTexture from './skyline-texture.png';

import ExampleLabel1 from './example-label-1.png';
import ExampleLabel2 from './example-label-2.png';

const ScorllContainer = styled.div`
  display: flex;
  position: relative;
  padding: 5rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: inset 0px 2px 14px 0px rgba(0, 0, 0, 0.35);
  z-index: 4;
  background-image: ${ `url(${ BgTexture })` };
  @media ${ props => props.theme.media.lg } {
    overflow-x: scroll;
  }
`;

const SolarSetupImgContainer = styled.div`
  min-width: 95rem;
  position: relative;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  h2 {
    font-size: 3rem;
    text-align: center;
    @media ${ props => props.theme.media.lg } {
      text-align: left;
    }
  }
`;

const SolarSetupImg = styled.img`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const LabelTooltipWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  .img-col {
    > img {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .tooltip {
    display: none;
    z-index: 2;
    position: absolute;
    padding: 1.5rem;
    border: 0.1rem solid black;
    font-size: 1.4rem;
    width: 50rem;
    background-color: black;
    color: white;
    top: 5rem;
    text-align: left;
    transform: translateX(-35%);
    box-shadow: 0.1rem 1rem 0.5rem -0.4rem rgba(0, 0, 0, 0.2);
    @media ${ props => props.theme.media.lg } {
      position: absolute;
    }
  }
  &:hover {
    > img {
      text-shadow: 2px 2px #ff0000;
    }
    .tooltip {
      display: block;
    }
  }
`;

const MobileArrow = styled.div`
  display: none;
  position: sticky;
  top: -3.5rem;
  margin-top: -3.5rem;
  right: -4rem;
  margin-right: -2rem;
  font-size: 3.6rem;
  height: 5rem;
  translate: 1s ease;
  animation: pulse 5s ease-in-out infinite;
  span {
    display: block;
    transition: 0.5s;
  }
  span.right {
    transform: rotate(0deg);
  }
  span.left {
    transform: rotate(180deg);
  }
  @media ${ props => props.theme.media.lg } {
    display: inline-block;
  }
`;

const LabelTooltip = ({ LabelImage, LabelText, flipped, ...props }) => {
  return (
    <LabelTooltipWrapper {...props}>
      <img style={flipped && { transform: 'scaleX(-1)' }} height="40" src={Label} />
      <div className="tooltip">
        <Row>
          <Col className="img-col" xs="4">
            <img src={LabelImage} />
          </Col>
          <Col xs="8">{LabelText}</Col>
        </Row>
      </div>
    </LabelTooltipWrapper>
  );
};

const SolarSchemaCMS = ({ prismic }) => {
  const [arrowClass, setArrowClass] = useState('');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const schemaContainer = document.querySelector('.solar-schema-container');
      schemaContainer.addEventListener('scroll', onScrollDiv);
      return schemaContainer.removeEventListener('scroll', onScrollDiv);
    }
  });

  const onScrollDiv = e => {
    if (e.target.scrollLeft > e.target.offsetWidth) {
      setArrowClass('left');
    } else if (e.target.scrollLeft < 200) {
      setArrowClass('right');
    }
  };

  const labels = prismic.allSolar_label_schemas.edges[0].node.body;
  return (
    <ScorllContainer className="solar-schema-container">
      <SolarSetupImgContainer>
        <h2>{prismic.allSolar_label_schemas.edges[0].node.headline[0].text}</h2>
        <SolarSetupImg src={SolarSetup} />
        <LabelTooltip
          style={{ bottom: '15%', left: '3.3%' }}
          LabelImage={labels[0] && labels[0].primary.image && labels[0].primary.image.url}
          LabelText={RichText.render(labels[0].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '0%', left: '14%' }}
          LabelImage={labels[1] && labels[1].primary.image && labels[1].primary.image.url}
          flipped
          LabelText={RichText.render(labels[1].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '12.5%', left: '27.3%' }}
          LabelImage={labels[2] && labels[2].primary.image && labels[2].primary.image.url}
          LabelText={RichText.render(labels[2].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '0%', left: '30%' }}
          LabelImage={labels[3] && labels[3].primary.image && labels[3].primary.image.url}
          flipped
          LabelText={RichText.render(labels[3].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '18%', left: '44.75%' }}
          LabelImage={labels[4] && labels[4].primary.image && labels[4].primary.image.url}
          LabelText={RichText.render(labels[4].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '0%', left: '45%' }}
          LabelImage={labels[5] && labels[5].primary.image && labels[5].primary.image.url}
          flipped
          LabelText={RichText.render(labels[5].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '18%', left: '58%' }}
          LabelImage={labels[6] && labels[6].primary.image && labels[6].primary.image.url}
          LabelText={RichText.render(labels[6].primary.text)}
        />
        <LabelTooltip
          style={{ bottom: '0', left: '57.5%' }}
          LabelImage={labels[7] && labels[7].primary.image && labels[7].primary.image.url}
          flipped
          LabelText={RichText.render(labels[7].primary.text)}
        />
      </SolarSetupImgContainer>
      <MobileArrow>
        <span className={arrowClass}>🡆</span>
      </MobileArrow>
    </ScorllContainer>
  );
};

const SolarSchema = () => <StaticQuery query={query} render={withPreview(SolarSchemaCMS, query)} />;

const query = graphql`
  query {
    prismic {
      allSolar_label_schemas {
        edges {
          node {
            headline
            body {
              ... on PRISMIC_Solar_label_schemaBodyLabel {
                primary {
                  image
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default SolarSchema;
