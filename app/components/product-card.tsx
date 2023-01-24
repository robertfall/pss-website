import { LinkDescriptor, LinksFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { ProductCardRecord } from "~/models/product-card-record";
import styles from "./product-card.css";

export default function ProductCard({
  title,
  description,
  image,
  price,
  alt,
}: ProductCardRecord) {
  return (
    <div className="container">
      <div className="image-container">
        <img className="image" src={image} alt={alt} />
      </div>
      <div className="details">
        <h2 className="details-header">{title}</h2>
        <p className="description">
          {description} Starting from{" "}
          <span className="price">{price}</span>.
        </p>
        <Link to="#" className="shop-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export function links(): LinkDescriptor[] {
  return [
    {
      href: styles,
      rel: "stylesheet"
    },
  ];
}
