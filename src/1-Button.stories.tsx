import React, { FC } from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};


export const Emoji: FC = () => {
  return (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
    </span>
    </Button>
  )
};


// export const Icon: FC = () => {
//   return (
//       <CodeBox title={'基本使用'} Desc={'基本使用'}>
//           <IconButton icon={Copy} width={12} height={12} onClick={() => { alert('You click button!') }}></IconButton>
//       </CodeBox>

//   );
// };