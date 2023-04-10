/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL:
      'mongodb+srv://matt:Locrian1625@cluster0.gsfzp3g.mongodb.net/?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
