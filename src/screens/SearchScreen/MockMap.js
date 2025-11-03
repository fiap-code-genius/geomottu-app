import React, { useMemo } from 'react';
import { Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';

const BG = styled.View`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  align-items: center;
  justify-content: center;
  background-color: #F4C430; 
  overflow: hidden;
`;

const IMG_W = 1080;
const IMG_H = 1920;

export default function MockMap() {
  const { width: sw, height: sh } = Dimensions.get('window');

  const containScale = useMemo(() => {
    const s1 = sw / IMG_W;
    const s2 = sh / IMG_H;
    return Math.min(s1, s2);
  }, [sw, sh]);

  const tweak = 0.98; 

  const finalW = Math.round(IMG_W * containScale * tweak);
  const finalH = Math.round(IMG_H * containScale * tweak);

  return (
    <BG>
      <Image
        source={require('../../../assets/images/mockmap.png')}
          style={{
    width: finalW,
    height: finalH,
    transform: [{ translateY: -35 }, { translateX: 0 }],
  }}
      />
    </BG>
  );
}
