import React from 'react';
import './ErrorMessageBlock.scss';

const ErrorMessageBlock = ({message}) => (
  <section className="ErrorMessageBlock">{message}</section>
);

export default ErrorMessageBlock;
