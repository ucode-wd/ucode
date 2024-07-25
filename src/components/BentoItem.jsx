import React from 'react';

export default function BentoItem(props) {
  return (
    <div className={`bento-item ${props.className}`} id='bento'>
      {props.titulo && <h3>{props.titulo}</h3>}
      {props.parrafo && <p dangerouslySetInnerHTML={{ __html: props.parrafo }} />}
    </div>
  );
}
