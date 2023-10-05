import {  DownOutlined} from '@ant-design/icons';
import React, { useState } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, } from 'antd';
import { note } from '../icons';



const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

type ExpandIconPosition = 'start' | 'end';

const Accordion: React.FC = () => {
  const [expandIconPosition,] = useState<ExpandIconPosition>('start');


  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const genExtra = () => (
    <DownOutlined
      className='w-3 h-3'
    />
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Personal Information',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: 'Education',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: 'Work Experience',
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
        key: '4',
        label: 'Activity Filter',
        children: <div>{text}</div>,
        extra: genExtra(),
      },
  ];

  return (
    <>
      <Collapse
        expandIcon={({  }) => <img src={note} className='w-3 h-4'/>}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
        className='bg-white border-none  font-[500] rounded-[10px]'
      />
    </>
  );
};

export default Accordion;