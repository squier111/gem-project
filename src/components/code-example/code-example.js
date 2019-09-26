import React from 'react';
import './code-example.scss';
import {PrismCode} from 'react-prism';
import Prism from 'prismjs';
require('prismjs/themes/prism.css');

const CodeExample = ({code}) => {
    return (
      <div className="code-example">
           <PrismCode component="pre" className="language-javascript">
                {code}
            </PrismCode>
      </div>
  )
}

export default CodeExample;
