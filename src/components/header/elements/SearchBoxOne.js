const SearchBoxOne = ({className, isHidden, openHandler, closeHandler}) => {
    return (
        <div className={`tt-parent-box ${className}`}>
            <div className={`tt-search tt-dropdown-obj ${!isHidden ? "active" : 'not-active'}`}>
                <button className="tt-dropdown-toggle" data-id="searchBox" onClick={openHandler}>
                    <i className="icon-f-85"/>
                </button>

                <div className="tt-dropdown-menu">
                    <div className="container">
                        <form action="/">
                            <div className="tt-col">
                                <input
                                    type="text"
                                    className="tt-search-input"
                                    placeholder="Search Products..."
                                />

                                <button
                                    className="tt-btn-search"
                                    type="submit"
                                />
                            </div>
                            <div className="tt-col">
                                <button className="tt-btn-close icon-g-80" data-id="searchBox" onClick={closeHandler}/>
                            </div>
                            <div className="tt-info-text">
                                What are you Looking for?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBoxOne;
