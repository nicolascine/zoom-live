import React from 'react';

export const Main: React.FC<any> = (props) => {
  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1>VIA.LIVE</h1>
          <p className="lead text-muted">
            We are the world’s #1 INTERACTIVE LIVE platform for Zoom events.
            Watch and Join thousands of FREE Zoom music concerts, fitness
            classes, parties, and other events LIVE. MEET & TALK to millions of
            other fans all around the world
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">{props.children}</div>
        </div>
      </div>
    </main>
  );
};
