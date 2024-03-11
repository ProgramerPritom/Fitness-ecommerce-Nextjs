import Link from "next/link";

const EmptyCompare = () => {
    return (
        <div className="tt-empty-wishlist">
            <h1 className="tt-title">COMPARE</h1>
            <div className="icon-svg">
                <span
                    className="icon-n-08 icon-empty-compare"
                    style={{fontSize: 80}}
                />
            </div>
            <p>No products were added to the compare</p>
            <Link href="/shop"><div className="btn">CONTINUE SHOPPING</div></Link>
        </div>
    );
};

export default EmptyCompare;