const ItemListHeader = () => {
    return(
        <div className="item-list-header">
            <p className="item-list-header__counter" data-element="results">7,618 results found</p>
            <button className="item-list-header__like-btn">
                <img src="img/like.svg" alt="like"></img>
            </button>
        </div>
    );
};

export default ItemListHeader;