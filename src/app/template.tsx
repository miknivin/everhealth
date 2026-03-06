'use client';

import { usePathname } from 'next/navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { useGetMeQuery } from './redux/api/userApi';

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    useGetMeQuery(undefined);

    const isCartOrCheckout =
        pathname === '/cart' ||
        pathname === '/checkout' ||
        pathname === '/billing-address';

    return (
        <>
            {!isCartOrCheckout && <Header />}
            {children}
            {!isCartOrCheckout && <Footer />}
            <BottomNav />
        </>
    );
}
