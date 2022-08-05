/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import './index.css';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {EditorState} from 'lexical';
import * as React from 'react';

import {AnchorContext} from './context/AnchorContext';
import Editor from './Editor';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';

export type AppProps = {
  className?: string;
  placeholder?: string;
  initialState?: EditorState | string;
  onChange: (state: EditorState) => void;
  element: Element | null;
  tabIndex?: number;
};

export function App({
  className,
  placeholder,
  initialState,
  onChange,
  element,
  tabIndex,
}: AppProps): JSX.Element {
  const initialConfig = {
    editorState: initialState,
    namespace: 'Marfeel lexical',
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <AnchorContext.Provider value={{element}}>
        <div className={`editor-shell ${className}`}>
          <Editor
            placeholder={placeholder}
            onChange={onChange}
            tabIndex={tabIndex}
          />
        </div>
      </AnchorContext.Provider>
    </LexicalComposer>
  );
}
