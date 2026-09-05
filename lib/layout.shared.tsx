import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  const links: LinkItemType[] = [
    {
      type: 'main',
      url: '/docs',
      text: 'Docs',
    },
  ];

  return {
    nav: {
      title: appName,
    },
    links,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
