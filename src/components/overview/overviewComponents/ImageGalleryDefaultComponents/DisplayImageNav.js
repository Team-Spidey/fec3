import React from 'react';
import styled from 'styled-components';

const ImageNav = styled.div`
  position: absolute;
  top: 12rem;
  left: ${(props) => (props.next ? '35rem' : '3rem')};
  font-size: 1.5rem;
  color: #32292F;
  &:hover {
    color: #90D7FF;
    cursor: pointer;
  }
`;

export default function DisplayImageNav({
  curDisplayIndex,
  setCurDisplayIndex,
  maxDisplayIndex,
}) {
  function onClickHandler(e) {
    if (e.target.id === 'back') {
      if(curDisplayIndex === 0) {
        setCurDisplayIndex(maxDisplayIndex);
      } else {
        setCurDisplayIndex(curDisplayIndex - 1);
      }
    } else {
      if(curDisplayIndex === maxDisplayIndex) {
        setCurDisplayIndex(0);
      } else {
        setCurDisplayIndex(curDisplayIndex + 1);
      }
    }
  }

  return (
    <>
      <ImageNav id="back" onClick={onClickHandler}>&#8592;</ImageNav>
      <ImageNav next onClick={onClickHandler}>&#8594;</ImageNav>
    </>
  );
}
