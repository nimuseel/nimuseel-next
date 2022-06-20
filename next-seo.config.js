import metadata from './data/metadata';

const SEO = {
  titleTemplate: '%s | nimuseel.dev',
  defaultTitle: metadata.title,
  description: metadata.description,
  canonical: metadata.url,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: metadata.url,
    site_name: metadata.title,
    images: [
      {
        url: `${metadata.url}/images/main.jpeg`,
        width: 1280,
        height: 720,
        alt: `nimuseel.dev`,
      },
    ],
  },
};

export default SEO;
