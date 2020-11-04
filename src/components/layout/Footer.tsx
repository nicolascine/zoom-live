import React from 'react';

export const Footer: React.FC<{}> = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <span
            style={{ cursor: 'pointer' }}
            onClick={(e: React.SyntheticEvent) => scrollTop()}
          >
            Back to top
          </span>
        </p>
        <p>&copy; via.live 2020</p>
      </div>
    </footer>
  );
};
