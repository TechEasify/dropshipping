import React from 'react';

import ROUTES, { RenderRoutes } from './routes';

export default function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}
