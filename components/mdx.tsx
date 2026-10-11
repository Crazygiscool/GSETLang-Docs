import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ReleaseAsset, ReleaseVersion } from '@/components/release-info';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ReleaseAsset,
    ReleaseVersion,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
