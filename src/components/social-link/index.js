import Link from "next/link";

const SocialLink = ({url, children, className}) => {
    return (
        <Link href={url}>
            <div target="_blank" className={className ? className : ''}>
                {children}
            </div>
        </Link>
    );
};

export default SocialLink;