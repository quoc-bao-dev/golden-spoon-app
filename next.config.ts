
  import withPWA from 'next-pwa';

  const nextConfig= withPWA({
    dest: 'public', // Nơi lưu service worker và manifest
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development', // tắt PWA khi dev
  })({
    reactStrictMode: true,
    webpack(config) {

    // Thêm rule mới để xử lý svg với svgr
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })
      return config;
    },
  });
  export default nextConfig;
