import { Link } from "react-router-dom";

import mataDress from "@/assets/products/mata-dress.jpg";
import ishauraFreshener from "@/assets/products/ishaura-freshener.jpg";
import khatuShyamStatue from "@/assets/products/khatu-shyam-statue-5inch.jpg";
import chandan from "@/assets/products/chandan-powder.jpg";
import shivParvati from "@/assets/products/shiv-parvati-dashboard.jpg";
import jaiShriShyam from "@/assets/products/jai-shri-shyam-tilak.jpg";
import gangaJal from "@/assets/products/ganga-jal.jpg";
import rotoFabric from "@/assets/products/roto-fabric.jpg";
import kumkumSindur from "@/assets/products/kumkum-sindur.jpg";
import ishauraHanging from "@/assets/products/ishaura-air-freshener.jpg";
import ladduGopalDress from "@/assets/products/laddu-gopal-dress-2.jpg";
import kesarChandan from "@/assets/products/kesar-chandan.jpg";

interface ProductListItemProps {
  name: string;
  price: number;
  unit?: string;
  image: string;
  link: string;
}

const ProductListItem = ({ name, price, unit, image, link }: ProductListItemProps) => (
  <Link to={link} className="flex items-center gap-3 py-2 hover:bg-accent rounded-lg px-2 transition-colors group">
    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
        {name}
      </h4>
      <p className="text-primary text-sm font-semibold">
        ₹ {price.toFixed(2)}
        {unit && <span className="text-muted-foreground font-normal">/{unit}</span>}
      </p>
    </div>
  </Link>
);

const ProductLists = () => {
  const topSelling = [
    { name: "Mata Dress", price: 60.0, unit: "Piece", image: mataDress },
    { name: "ISHAURA ROOM FRESHENERS", price: 70.0, unit: "Piece", image: ishauraFreshener },
    { name: "4 Inch Khatu Shyam Baba God Statue", price: 85.0, unit: "Piece", image: khatuShyamStatue },
  ];

  const trendingProducts = [
    { name: "25 gm Kesar Ashtagandha Chandan Powder", price: 200.0, unit: "Jar", image: chandan },
    { name: "Shiv Parvati Ji Car Dashboard Idol", price: 70.0, unit: "Piece", image: shivParvati },
    { name: "Jai Shri Shyam Tilak", price: 17.0, unit: "Piece", image: jaiShriShyam },
  ];

  const recentlyAdded = [
    { name: "50ml Ganga Jal", price: 10.0, unit: "Piece", image: gangaJal },
    { name: "White Roto Fabric", price: 12.0, unit: "Meter", image: rotoFabric },
    { name: "Kumkum Sindur Maroon", price: 135.0, unit: "Kg", image: kumkumSindur },
  ];

  const topRated = [
    { name: "Laddu Gopal Ji Woolan Dress", price: 40.0, unit: "Set", image: ladduGopalDress },
    { name: "250 gm Kashi Ashtagandha Chandan Tika", price: 360.0, unit: "Dozen", image: kesarChandan },
    { name: "Ishaura Hanging Car Diffuser & Wardrobe Fresheners", price: 50.0, unit: "Piece", image: ishauraHanging },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Top Selling */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling</h3>
            <div className="space-y-2">
              {topSelling.map((product, index) => (
                <ProductListItem
                  key={index}
                  {...product}
                  link={`/product/${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trending Products */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Trending Products</h3>
            <div className="space-y-2">
              {trendingProducts.map((product, index) => (
                <ProductListItem
                  key={index}
                  {...product}
                  link={`/product/${index + 10}`}
                />
              ))}
            </div>
          </div>

          {/* Recently Added */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Recently added</h3>
            <div className="space-y-2">
              {recentlyAdded.map((product, index) => (
                <ProductListItem
                  key={index}
                  {...product}
                  link={`/product/${index + 20}`}
                />
              ))}
            </div>
          </div>

          {/* Top Rated */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Rated</h3>
            <div className="space-y-2">
              {topRated.map((product, index) => (
                <ProductListItem
                  key={index}
                  {...product}
                  link={`/product/${index + 30}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLists;
