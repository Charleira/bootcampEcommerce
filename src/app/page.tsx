import { desc } from 'drizzle-orm'
import Image from 'next/image'

import CategorySelector from '@/components/common/category-selector'
import Footer from '@/components/common/footer'
import { Header } from '@/components/common/header'
import PartnerList from '@/components/common/partners-list'
import ProductList from '@/components/common/product-list'
import { db } from '@/db'
import { productTable } from '@/db/schema'

const Home = async () => {
    const products = await db.query.productTable.findMany({
        with: {
            variants: true,
        },
    })
    const newlyCreatedProducts = await db.query.productTable.findMany({
        orderBy: [desc(productTable.createdAt)],
        with: {
            variants: true,
        },
    })
    const categories = await db.query.categoryTable.findMany({})

    return (
        <>
            <Header />
            <div className="space-y-6">
                <div className="px-5">
                    <Image
                        src="/banner-01.png"
                        alt="Leve uma vida com estilo"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </div>

                <ProductList products={products} title="Mais vendidos" />
                <PartnerList
                    title="Marcas parceiras"
                    partners={[
                        { id: 1, name: 'Nike', logo: '/nike.png' },
                        { id: 2, name: 'Adidas', logo: '/adidas.png' },
                        { id: 3, name: 'Puma', logo: '/puma.png' },
                        { id: 4, name: 'New Balance', logo: '/nb.png' },
                        { id: 5, name: 'Giorgio Armani', logo: '/giorgio.png' },
                        { id: 6, name: 'Champion', logo: '/champion.png' },
                        { id: 7, name: 'Converse', logo: '/converse.png' },
                        { id: 8, name: 'Polo Wear', logo: '/polo.png' },
                        { id: 9, name: 'Zara', logo: '/zara.png' },
                    ]}
                />
                <div className="px-5">
                    <CategorySelector categories={categories} />
                </div>

                <div className="px-5">
                    <Image
                        src="/banner-02.png"
                        alt="Leve uma vida com estilo"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-auto w-full"
                    />
                </div>

                <ProductList
                    products={newlyCreatedProducts}
                    title="Novos produtos"
                />
                <Footer />
            </div>
        </>
    )
}

export default Home
