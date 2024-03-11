import Link from "next/link";
import PropTypes from "prop-types";

const Logo = ({src}) => {
    return (
        <Link href="/">
            <div className="tt-logo tt-logo-alignment">
                <img src={src} alt="wokiee"/>
            </div>
        </Link>
    );
};

Logo.propTypes = {
    src: PropTypes.string.isRequired
}

export default Logo;
