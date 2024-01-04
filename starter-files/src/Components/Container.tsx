import React from 'react'

interface Props {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className='container-fluid custom-bg-color'>
        <div className="row px-3 pt-3 d-flex justify-content-center">
          {
            children
          }
        </div>
    </div>
  );
};

export default Container;
