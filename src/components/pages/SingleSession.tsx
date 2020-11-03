import React, { useEffect, useState } from 'react';
import { match } from 'react-router-dom';
import config from '../../config';
import Loading from '../common/Loading';

interface Identifiable {
  id: string;
}

export const SingleSession = (mathedRoute: match<Identifiable> | any) => {
  const paramID = mathedRoute.match.params.id;
  const [sessionID, setSessionID] = useState('');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const getIframe = function (paramID: string) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe 
          height="500" 
          style="width: 100%;" 
          scrolling="no" 
          src="${config.VIDEO_IFRAME_URL}${paramID}" 
          frameborder="no" 
          allowtransparency="true" 
          allowfullscreen="true"></iframe>`,
        }}
      />
    );
  };

  useEffect(() => {
    if (paramID) {
      setSessionID(paramID);
    }
  }, [paramID]);

  return (
    <>
      {iframeLoaded === false && (
        <div
          style={{
            display: 'flex',
            width: '100%',
            paddingTop: '5em',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loading />
        </div>
      )}
      <section style={{ opacity: Number(iframeLoaded) }}>
        {sessionID ? <>{getIframe(paramID)}</> : 'video iframe load error'}
      </section>
    </>
  );
};
