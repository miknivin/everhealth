import './globals.css';
import Providers from './Providers';

export const metadata = {
    title: 'Everhealth',
    description: 'Natural health and wellness products',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
            </head>
            <body className="w-full bg-white min-h-screen font-['Roboto',sans-serif] overflow-x-hidden">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
