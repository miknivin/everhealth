import { Suspense } from 'react';
import { OurProducts } from '@/app/pages/OurProducts';

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#802367]"></div></div>}>
      <OurProducts />
    </Suspense>
  );
}
