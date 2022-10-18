import React, {FC} from 'react';

import {Box} from '../../components';
import {Webview} from '../../components/WebView';

export const DiscoveryScreen: FC = () => {
  return (
    <Box flex={1}>
      <Webview url="https://app.luca-app.de/discovery" />
    </Box>
  );
};
