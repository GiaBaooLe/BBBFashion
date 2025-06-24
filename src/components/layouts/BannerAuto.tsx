import React from 'react';
import { Carousel } from 'antd';
import banner1 from '../../assets/images/subbanner.jpg';
import banner2 from '../../assets/images/subanner2.jpg';  
import banner3 from '../../assets/images/subanner1.jpg';  
const contentStyle: React.CSSProperties = {
  // height: '350px',
  // color: '#fff',

  // lineHeight: '300px',
  // textAlign: 'center',
  // background: '#364d79',
};

const BannerAuto: React.FC = () => (
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3500}>
    <div>
      <img width="100%" style={contentStyle} src={banner1} alt="Image 1" />
    </div>
    <div>
      <img width="100%" style={contentStyle} src={banner2} alt="Image 2" />
    </div>
    <div>
      <img width="100%" style={contentStyle} src={banner3} alt="Image 3" />
    </div>
    {/* <div>
      <img style={contentStyle} src={banner4}  alt="Image 4" />
    </div> */}
  </Carousel>
);

export default BannerAuto;