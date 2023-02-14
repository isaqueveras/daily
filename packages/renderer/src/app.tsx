import React, { useCallback, useState } from 'react'
import './app.css'
import Editor from './editor'
import Preview from './preview'
import SideBar from './sidebar'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>("")

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])
  
  return (
    <div className='app'>
      <SideBar />
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
