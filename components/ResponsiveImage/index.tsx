import NextImage, { ImageProps } from 'next/image';
import React from 'react';

export const ResponsiveImage = (props: ImageProps) => (
  <NextImage
    alt={props.alt}
    width="100%"
    height="100%"
    layout="responsive"
    {...props}
  />
);
