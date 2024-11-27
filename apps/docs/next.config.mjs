/** @type {import('next').NextConfig} */

import nextra from 'nextra';

const nextConfig = {
  transpilePackages: ['@fepatex/ui'],
  reactStrictMode: true,
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
