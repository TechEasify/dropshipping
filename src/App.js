import React from 'react';
import ROUTES, { RenderRoutes } from './routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <RenderRoutes routes={ROUTES} />
    </>
  );
}
