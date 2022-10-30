import { NextSeo } from 'next-seo';
import React from 'react';
import { Career } from '../../components/Career/Career';
import { Introduce } from '../../components/Career/Introduce';
import { CareerLayout } from '../../components/CareerLayout';
import metadata from '../../data/metadata';

const Resume = () => {
  return (
    <CareerLayout>
      <NextSeo
        title="Blog"
        description={metadata.description}
        canonical={`${metadata.url}/career`}
        openGraph={{ url: metadata.url }}
      />

      <Introduce />
      <Career />
    </CareerLayout>
  );
};

export default Resume;
