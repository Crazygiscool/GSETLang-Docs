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
        <span className="inline-flex items-center gap-2 font-medium">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-auto rounded-md"
          />
          <span>{appName}</span>
        </span>
      ),
    },
    links,
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
