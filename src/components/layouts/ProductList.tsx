import React from 'react';
import { Carousel, Image } from 'antd';
import FC from '../../assets/images/model1.jpg';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    <br />
    <div>
        
    </div>
   <div className="grid grid-cols-4 gap-5 px-25">
    <div className="">
      <Image src={FC} width="auto"/>
      <p className="text-center">Product 1</p>
    </div>
    <div className="">
      <Image src={FC} width="auto"/>
       <p className="text-center">Product 2</p>
    </div>
     <div className="">
      <Image src={FC} width="auto"/>
       <p className="text-center">Product 3</p>
    </div>
     <div className="">
      <Image src={FC} width="auto"/>
       <p className="text-center">Product 3</p>
    </div>
   
    </div>
  </>
);

export default App;