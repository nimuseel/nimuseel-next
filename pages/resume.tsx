import { NextSeo } from 'next-seo';
import React from 'react';
import { Career } from '../components/Resume/Career';
import { Introduce } from '../components/Resume/Introduce';
import { ResumeLayout } from '../components/ResumeLayout';
import metadata from '../data/metadata';

const Resume = () => {
  return (
    <ResumeLayout>
      <NextSeo
        title="Blog"
        description={metadata.description}
        canonical={`${metadata.url}/resume`}
        openGraph={{ url: metadata.url }}
      />

      <Introduce />
      <Career />
    </ResumeLayout>
  );
};

export default Resume;
