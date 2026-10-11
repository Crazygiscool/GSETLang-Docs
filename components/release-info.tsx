import { getLatestReleaseVersion } from '@/lib/github-release';

export async function ReleaseVersion() {
  return getLatestReleaseVersion();
}

export async function ReleaseAsset({ suffix }: { suffix: string }) {
  const version = await getLatestReleaseVersion();
  return <code>gset-{version}{suffix}</code>;
}
