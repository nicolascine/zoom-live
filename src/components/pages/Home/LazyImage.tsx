import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 225px;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 225px;
  object-fit: cover;
`;

const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const refPlaceholder = useRef<HTMLDivElement>(null);

  const removePlaceholder = () => {
    refPlaceholder?.current?.remove();
  };

  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
