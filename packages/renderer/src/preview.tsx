import './preview.css'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css/github-markdown.css'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { pojoaque as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  doc: string
}

const Preview: React.FC<Props> = (props) => {
  return (
    <div className='preview markdown-body'>
       <ReactMarkdown
        children={props.doc}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={theme}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code style={{backgroundColor: 'none' }} className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}

export default Preview
