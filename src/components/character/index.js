import Link from "next/link";
import PropTypes from "prop-types";
import parse from "react-html-parser";

const Character = ({title, url, className}) => {
    return (
        <Link href={url}>
            <div className={`tt-btn-info tt-layout-03 ${className ? className : ''}`}>
                <div className="tt-title">{parse(title)}</div>
            </div>
        </Link>
    );
};

Character.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Character;