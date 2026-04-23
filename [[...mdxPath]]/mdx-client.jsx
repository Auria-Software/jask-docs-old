'use client'

import { Suspense } from 'react'

export function MDXRenderer({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
