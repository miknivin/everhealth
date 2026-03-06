'use client';

import { Provider } from 'react-redux';
import { store } from '../app/redux/store';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
            <Toaster position="top-center" richColors />
        </Provider>
    );
}
