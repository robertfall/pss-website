import { LinkDescriptor } from "@remix-run/cloudflare";
import Logo from "~/components/logo";
import Menu, {
  links as menuLinks,
} from "~/components/menu";
import ProductCard, {
  links as productCardLinks,
} from "~/components/product-card";
import { productCards } from "~/models/product-card-record";
import styles from "./index.css";

export default function Index() {
  return (
    <>
      <Menu />
      <main className="main">
        <div className="hero-container">
          <Logo className="hero-logo" />
          <h1 className="hero-title">Pretty Stuff Studio</h1>
          <img
            src="https://picsum.photos/2096/400"
            alt="Photograph of a table displaying arts and crafts"
            className="hero-image"
          />
        </div>
        <h2 className="section-header">Our Products & Services</h2>
        <div className="card-container">
          {productCards.map((card) => (
            <ProductCard key={card.title} {...card}></ProductCard>
          ))}
        </div>
      </main>
    </>
  );
}

export function links(): LinkDescriptor[] {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    ...menuLinks(),
    ...productCardLinks(),
  ];
}
