import { Button, Card, Grid, Row } from '@nextui-org/react';
import React, { useState } from 'react';
import { CareerContent } from './CareerContent';
import { CompanyInfo } from './CompanyInfo';
import { careerList, otherExperience } from './data';
import { ProjectsContainer } from './ProjectsContainer';
import S from './styles';

export const Career = () => {
  return (
    <>
      {/* <S.CareerSection>
        {careerList.map((item) => (
          <CareerContent key={item.companyName}>
            <CompanyInfo item={item} />

            <ProjectsContainer projects={item.projects} />
          </CareerContent>
        ))}

        {otherExperience.map((item, i) => (
          <CareerContent key={i}>
            <ProjectsContainer projects={item.experiences} />
          </CareerContent>
        ))}
      </S.CareerSection> */}
      <Grid.Container gap={2} justify="center">
        {careerList.map((item) => (
          <Grid xs key={item.companyName}>
            <Card variant="bordered" css={{ padding: '24px' }}>
              <Card.Header style={{ padding: '12px 0' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '48px',
                      }}
                    >
                      <img
                        src={
                          item.companyName === '레몬베이스'
                            ? '/images/lemonbase.png'
                            : '/images/zent.jpeg'
                        }
                        alt="company_logo"
                        style={{ borderRadius: '8px' }}
                      />
                    </div>
                    <div>
                      <h3 style={{ margin: 0 }}>{item.companyName}</h3>
                      <span>
                        {item.position} / {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body style={{ padding: '12px 0' }}>
                {item.companyDescription}
              </Card.Body>
              <Card.Footer>
                <Row justify="flex-end" align="center">
                  <Button flat>자세히 {'>'}</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
