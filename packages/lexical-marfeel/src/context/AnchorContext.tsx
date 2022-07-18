/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react';

export interface AnchorContextProps {
  element: Element | null;
}

export const AnchorContext = React.createContext<AnchorContextProps>({
  element: null,
});

export function useAnchorContext(): AnchorContextProps {
  return React.useContext(AnchorContext);
}
