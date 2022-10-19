import React, {FC} from 'react';
import {Box, Webview} from '@/components';

export const DiscoveryScreen: FC = () => {
  return (
    <Box flex={1}>
      <Webview url="https://app.luca-app.de/discovery" />
    </Box>
  );
};
