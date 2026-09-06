import Image from 'next/image';
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
      title: (
        <span className="inline-flex items-center gap-2">
          <Image
            src="/logo-long.png"
            alt={appName}
            width={150}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </span>
      ),
    },
    links,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
