import { lazy, Suspense } from 'react';
import Hero from './components/Hero/Hero';
const ProductGrid = lazy(() => import('./components/ProductGrid/ProductGrid'));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Carregando produtos...</div>}>
        <ProductGrid />
      </Suspense>
    </>
  );
};

export default Home;
