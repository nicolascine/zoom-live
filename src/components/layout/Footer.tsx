import React from 'react';

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a>Back to top</a>
        </p>
        <p>&copy; via.live 2020</p>
      </div>
    </footer>
  );
};
