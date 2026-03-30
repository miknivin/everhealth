'use client';

import React from "react";
import { useRouter } from "next/navigation";

export function BannerCards() {
    const router = useRouter();

    return (
        <div className="row g-4" style={{ display: 'flex', flexWrap: 'nowrap', gap: '0.75rem', marginBottom: '40px', justifyContent: 'center' }}>
            {/* First Card - 50% OFF */}
            <div className="col-md-6" style={{ flex: '1 1 50%', maxWidth: '571px' }}>
                <div
                    onClick={() => router.push('/product-page')}
                    className="relative overflow-hidden rounded-[13px] h-[120px] md:h-[180px] lg:h-[209px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                    <imgloading="lazy" src="/Group 1.png"
                        alt="Product Banner"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </div>

            {/* Second Card - 25% OFF */}
            <div className="col-md-6" style={{ flex: '1 1 50%', maxWidth: '571px' }}>
                <div
                    onClick={() => router.push('/product-page')}
                    className="relative overflow-hidden rounded-[13px] h-[120px] md:h-[180px] lg:h-[209px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                >
                    <imgloading="lazy" src="/Group 2.png"
                        alt="Product Banner"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
