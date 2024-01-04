import React, { useState } from 'react';

    interface Props {
        src: string,
        title: string,
    };

const DetailsBlock = ({src, title}: Props) => {

  return (
    <section>
        <div className='left'>
            <span className='text-uppercase'>about</span>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, ratione a dolorum illum error, libero perspiciatis optio quidem consequuntur accusantium vero quisquam consequatur debitis excepturi alias laboriosam, amet dolore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam totam excepturi molestiae iusto repudiandae.</p>
        </div>
        <div className='right'>
            <img src={src} alt="" />
        </div>
    </section>
  );
};

export default DetailsBlock;
