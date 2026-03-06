import { Hero } from './components/Hero';
import { TrendyProducts } from './components/TrendyProducts';
import { ProductList } from './components/ProductList';
import { Wellness } from './components/Wellness';
import { OurDifference } from './components/OurDifference';


export default function Home() {
    return (
        <main>
            <Hero />
            <TrendyProducts />
            <ProductList />
            <Wellness />
            <OurDifference />

        </main>
    );
}
