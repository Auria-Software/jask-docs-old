import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { MDXWrapper } from './mdx-wrapper'

export const generateStaticParams = async () => {
  const params = await generateStaticParamsFor('mdxPath')()
  return params.filter((p) => {
    const path = p.mdxPath?.join('/') || ''
    return !path.startsWith('api/')
  })
}

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
