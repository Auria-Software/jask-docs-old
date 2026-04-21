import { importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { MDXWrapper } from './mdx-wrapper'

export const dynamic = 'force-dynamic'

export async function generateMetadata(props) {
  const params = await props.params

  if (!params?.mdxPath || params.mdxPath.length === 0) {
    return {}
  }

  try {
    const { metadata } = await importPage(params.mdxPath)
    return metadata || {}
  } catch {
    return {}
  }
}

export default async function Page(props) {
  const params = await props.params

  if (!params?.mdxPath || params.mdxPath.length === 0) {
    notFound()
  }

  try {
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, metadata } = result

    return (
      <MDXWrapper MDXContent={MDXContent} metadata={metadata} />
    )
  } catch {
    notFound()
  }
}
