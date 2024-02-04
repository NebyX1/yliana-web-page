import React from 'react';
import { Helmet } from 'react-helmet';

const Snippet = ({ pageName }) => {
  return (
    <Helmet>
      <title>{`Yliana Diputada | ${pageName}`}</title>
    </Helmet>
  );
};

export default Snippet;