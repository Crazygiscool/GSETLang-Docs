const latestReleaseUrl =
  'https://api.github.com/repos/Crazygiscool/GSETLang/releases/latest';

export async function getLatestReleaseVersion(): Promise<string> {
  const response = await fetch(latestReleaseUrl, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'GSETLang-Docs',
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch the latest GSET release: GitHub returned ${response.status}`,
    );
  }

  const release: unknown = await response.json();
  if (
    typeof release !== 'object' ||
    release === null ||
    !('tag_name' in release) ||
    typeof release.tag_name !== 'string' ||
    !/^v\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(
      release.tag_name,
    )
  ) {
    throw new Error('GitHub returned an invalid latest GSET release tag');
  }

  return release.tag_name.slice(1);
}
