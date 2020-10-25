import React, { useEffect, useState } from 'react';
import { match } from 'react-router-dom';

interface Identifiable {
  id: string;
}

export const SingleSession = (mathedRoute: match<Identifiable> | any) => {
  const paramID = mathedRoute.match.params.id;
  const [sessionID, setSessionID] = useState('');

  const getIframe = function (paramID: string) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe height="500" style="width: 100%;" scrolling="no" src="https://via.live/zoom_player/${paramID}" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>`,
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
    <section>{sessionID ? <>{getIframe(paramID)}</> : 'load error'}</section>
  );
};
