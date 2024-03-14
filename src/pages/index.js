import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProducts, getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-one.json";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoriesNine as Categories} from "@components/categories";
import {CategoriesThree as Categories2} from "@components/categories";
import {PromoBannerOne as PromoBanners} from "@components/promo-banners";
import {BestSelling, TendingProducts as Tending} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {CategoryTypeWiseOne as Products} from "@components/products";
import {PromoTwo as CategoryPromo} from "@components/promo";
import {BrandsThree as Brands} from "@components/brands";
import {TestimonialOne as Testimonials} from "@components/testimonials";

const Home = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const productFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                dark={false}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                
                <Categories/>
                
                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    className="nomargin"
                    btnLink="/product/category/women"
                    subtitle="<span class='tt-base-color'>Evolution Seamless</span>"
                    title="<span class='tt-white-color'>Sales<br>70% Off</span>"
                    thumb="/assets/images/promo/index18-promo-img-01.jpg"
                />
                <Products
                    category="women"
                    products={productFashion}
                />
                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    btnLink="/product/category/men"
                    subtitle="<span class='tt-base-color'>Style & Color</span>"
                    title="New<br>Arrival"
                    thumb="/assets/images/promo/index18-promo-img-02.jpg"
                />
                <Products
                    category="men"
                    products={productFashion}
                />
                <PromoBanners/>
                {/* <Products
                    products={productsFashion}
                /> */}
                <BestSelling
                    products={productsFashion}
                />
                <Testimonials/>
                <Brands/>
                <LatestBlog
                    blogs={blogs}
                />
                <Services/>
            </ContentWrapper>

            <Footer
                logo={logo}
                dark={false}
                newsletter={true}
            />
        </Fragment>
    )
}

export async function getStaticProps() {
    const blogs = getBlogPosts([
        'title',
        'excerpt',
        'date',
        'author',
        'thumb',
        'slug',
        'categories'
    ], 3);

    return {
        props: {
            blogs: blogs
        }
    }
}

export default Home;