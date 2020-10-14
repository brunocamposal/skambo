import React from 'react';

import { MainBanner, Infos, Img } from './style';

interface BoostBanner {
  [x: string]: string;
}

const BoostBanner: BoostBanner = ({ color, image, textHeader, info }) => {
  const infos = info.split(/\n/);
  const headInfo = infos.shift();

  return (
    <MainBanner color={color}>
      <div>
        <h2>{textHeader}</h2>
      </div>
      <Img alt="Banner Image" href={image} />
      <Infos>
        <h3>{headInfo}</h3>
        {infos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Infos>
    </MainBanner>
  );
};

export default BoostBanner;
