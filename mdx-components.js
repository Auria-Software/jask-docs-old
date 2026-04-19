import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'

export function useMDXComponents(components) {
    // Call getDocsMDXComponents inside the function, not at module level
    const docsComponents = getDocsMDXComponents(components)
    
    return {
        ...docsComponents,
        ...components
    }
}
