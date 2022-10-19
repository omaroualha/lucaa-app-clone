import React, {FC, useState} from 'react';
import WebView from 'react-native-webview';
import {Box} from '../atoms';

interface WebviewProps {
  url: string;
}

export const Webview: FC<WebviewProps> = ({url}) => {
  const constructURL = (url: string): string => {
    if (url.includes(cApp)) {
      return url;
    }

    const glue = url.includes('?') ? '&' : '?';
    return [url, cApp].join(glue);
  };

  const [webViewURL, setWebViewURL] = useState(constructURL(url));
  const cApp = 'disableFooter=true&disableHeader=true';

  const handleShouldStartWithLoadRequest = (request: any) => {
    console.log('Should load:', request.url);
    setWebViewURL(constructURL(request.url));
    return true;
  };

  return (
    <Box flex={1}>
      <WebView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          //   backfaceVisibility: 'black',
        }}
        source={{
          uri: `${webViewURL}`,
        }}
        onShouldStartLoadWithRequest={handleShouldStartWithLoadRequest}
      />
    </Box>
  );
};
