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
                <link rel="preload" as="video" href="/video1.mp4" type="video/mp4" />
                <link rel="preload" as="video" href="/video2.mp4" type="video/mp4" media="(max-width: 1024px)" />
            </head>
            <body className="w-full bg-white min-h-screen font-['Roboto',sans-serif] overflow-x-hidden">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
