import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  const params = await generateStaticParamsFor('mdxPath')()
  // Exclude /api routes from static generation
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
  const Wrapper = getMDXComponents().wrapper
  const params = await props.params

  if (!params?.mdxPath || params.mdxPath.length === 0) {
    notFound()
  }

  try {
    const result = await importPage(params.mdxPath)
    const { default: MDXContent, toc, metadata } = result

    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch {
    notFound()
  }
}
