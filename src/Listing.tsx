import { CardItem, ListingProps } from "./Interface";
import { cutTitle } from "./hoc/cutTitle";
import { formatPrice } from "./hoc/formatPrice";
import { getLevelClass } from "./hoc/getLevelClass";

const Item: React.FC<CardItem> = (item) => {
  const {
    listing_id,
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
    state,
  } = item;

  const titleItem = cutTitle(title || "");
  const safePrice = price || "0";
  const safeCurrencyCode = currency_code || "";
  const safeQuantity = quantity || 0;

  return (
    <>
      {state !== "active" ? (
        <></>
      ) : (
        <div className="item" key={listing_id}>
          <div className="item-image">
            <a href={url} rel="noopener noreferrer">
              {MainImage && MainImage.url_570xN ? (
                <img src={MainImage.url_570xN} alt={title} />
              ) : (
                <></>
              )}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{titleItem}</p>
            <p className="item-price">
              {formatPrice(safePrice, safeCurrencyCode)}
            </p>
            <p className={`item-quantity ${getLevelClass(safeQuantity)}`}>
              {safeQuantity} left
            </p>
          </div>
        </div>
      )}
    </>
  );
};

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.listing_id} {...item} />
      ))}
    </div>
  );
};

export default Listing;
