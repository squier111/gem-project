import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl';
import './code-example.scss';


const CodeExample = ({code}) => (
  <Highlight {...defaultProps} className="code-example" theme={theme} code={code} language="javascript">
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className="num">{i + 1}</span>
            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default CodeExample
