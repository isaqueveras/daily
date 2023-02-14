import React, { useCallback } from "react"
import { EditorState } from "@codemirror/state"
import useCodeMirror from "./use-codemirror"
import './editor.css'

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  )

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  // useEffect(() => {
  //   if (editorView) {
  //     // Do nothing for now
  //     console.log(editorView)
  //   } else {
  //     // loading editor
  //   }
  // }, [editorView])

  return <div className='editor-wrapper' ref={refContainer}></div>
}

export default Editor
