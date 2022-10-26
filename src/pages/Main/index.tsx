import React, { useRef } from 'react'

import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

import PageLayout from '../../components/PageLayout'
import Button from '../../components/Button'

const Main = () => {
  const editorRef = useRef<any>(null)

  const handleRegister = () => {
    console.log('getHTML()', editorRef.current?.getInstance().getHTML())
    console.log('getMarkdown()', editorRef.current?.getInstance().getMarkdown())
  }

  return (
    <PageLayout breadcrumb={['Home', 'Main']}>
      <Button type="primary" onClick={handleRegister}>
        등록
      </Button>
      <Editor
        ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        height="calc(100vh - 200px)"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </PageLayout>
  )
}

export default Main
