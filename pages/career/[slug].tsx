import { Button, Col } from '@nextui-org/react';
import { careerList } from 'components/Career/Career/data';
import { ProjectDetails } from 'components/Career/Career/ProjectDetails';
import { ProjectInfo } from 'components/Career/Career/ProjectInfo';
import { InferGetStaticPropsType } from 'next';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Career = ({ career }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { projects } = career;

  return (
    <>
      <Button
        flat
        auto
        style={{ backgroundColor: '#E5E5E5', marginBottom: '24px' }}
        onClick={router.back}
      >
        <Image src="/icon/left-arrow.svg" width={16} height={16} />
      </Button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {projects.map((project) => (
          <Col key={project.name}>
            <ProjectInfo project={project} />
            <ProjectDetails project={project} />
          </Col>
        ))}
      </div>
    </>
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
