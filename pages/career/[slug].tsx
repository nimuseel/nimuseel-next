import { careerList } from 'components/Resume/Career/data';
import { InferGetStaticPropsType } from 'next';
import React from 'react';

const Career = ({ career }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('slug', career);

  return (
    <div>
      <span>Career Page</span>
    </div>
  );
};

export default Career;

export const getStaticPaths = async () => {
  return {
    paths: careerList.map((item) => ({
      params: {
        slug: item.companySlug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const career = careerList.find((item) => item.companySlug === params.slug);

  return {
    props: {
      career,
    },
  };
};
