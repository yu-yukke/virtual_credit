const { withKumaUI } = require("@kuma-ui/next-plugin");

/** @type {import('next').NextConfig} */
// TODO: 画像登録実装して外部ストレージ連携したら以下設定すること
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = withKumaUI(nextConfig);
