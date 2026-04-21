'use client'

import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export function MDXWrapper({ metadata, children }) {
  const { wrapper: Wrapper } = getMDXComponents()
  return <Wrapper metadata={metadata}>{children}</Wrapper>
}
