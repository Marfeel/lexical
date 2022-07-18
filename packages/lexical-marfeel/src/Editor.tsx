/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {AutoScrollPlugin} from '@lexical/react/LexicalAutoScrollPlugin';
import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin';
import {ClearEditorPlugin} from '@lexical/react/LexicalClearEditorPlugin';
import {HashtagPlugin} from '@lexical/react/LexicalHashtagPlugin';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LinkPlugin} from '@lexical/react/LexicalLinkPlugin';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {TablePlugin} from '@lexical/react/LexicalTablePlugin';
import {EditorState} from 'lexical';
import * as React from 'react';
import {useRef} from 'react';

import ActionsPlugin from './plugins/ActionsPlugin';
import AutoLinkPlugin from './plugins/AutoLinkPlugin';
import ClickableLinkPlugin from './plugins/ClickableLinkPlugin';
import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import EmojisPlugin from './plugins/EmojisPlugin';
import HorizontalRulePlugin from './plugins/HorizontalRulePlugin';
import KeywordsPlugin from './plugins/KeywordsPlugin';
import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin';
import MarkdownShortcutPlugin from './plugins/MarkdownShortcutPlugin';
import SpeechToTextPlugin from './plugins/SpeechToTextPlugin';
import TabFocusPlugin from './plugins/TabFocusPlugin';
import TableCellActionMenuPlugin from './plugins/TableActionMenuPlugin';
import TableCellResizer from './plugins/TableCellResizer';
import TextFormatFloatingToolbarPlugin from './plugins/TextFormatFloatingToolbarPlugin';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import ContentEditable from './ui/ContentEditable';
import Placeholder from './ui/Placeholder';

type EditorProps = {
  placeholder?: string;
  onChange: (editor: EditorState) => void;
  tabIndex?: number;
};

export default function Editor({
  placeholder: placeholderText,
  onChange,
  tabIndex,
}: EditorProps): JSX.Element {
  const placeholder = <Placeholder>{placeholderText}</Placeholder>;
  const scrollRef = useRef(null);

  return (
    <>
      <ToolbarPlugin />
      <div className="editor-container" ref={scrollRef}>
        <ClearEditorPlugin />
        <EmojisPlugin />
        <HashtagPlugin />
        <KeywordsPlugin />
        <SpeechToTextPlugin />
        <AutoLinkPlugin />
        <OnChangePlugin onChange={onChange} />
        <AutoScrollPlugin scrollRef={scrollRef} />
        <HistoryPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable tabIndex={tabIndex} />}
          placeholder={placeholder}
        />
        <MarkdownShortcutPlugin />
        <CodeActionMenuPlugin />
        <CodeHighlightPlugin />
        <ListPlugin />
        <CheckListPlugin />
        <ListMaxIndentLevelPlugin maxDepth={7} />
        <TablePlugin />
        <TableCellActionMenuPlugin />
        <TableCellResizer />
        <LinkPlugin />
        <ClickableLinkPlugin />
        <HorizontalRulePlugin />
        <TextFormatFloatingToolbarPlugin />
        <TabFocusPlugin />
        <ActionsPlugin />
      </div>
    </>
  );
}
