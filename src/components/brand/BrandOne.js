import Link from "next/link";

const BrandOne = ({className, logo, link}) => {
    return (
        <Link href={link ? link : '/'}>
            <div className={`tt-img-box ${className ? className : ''}`}>
                <img src={logo} alt="brand"/>
            </div>
        </Link>
    );
};

export default BrandOne;