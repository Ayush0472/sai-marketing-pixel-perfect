import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/shared/ProductCard";
import Newsletter from "@/components/shared/Newsletter";
import TrustBadges from "@/components/shared/TrustBadges";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Minus, Plus, Star } from "lucide-react";

import khatuShyamStatue from "@/assets/products/khatu-shyam-statue.jpg";
import saiBabaDress from "@/assets/products/sai-baba-dress.jpg";
import ramMandirPoshak from "@/assets/products/ram-mandir-poshak.jpg";
import guruNanakDashboard from "@/assets/products/guru-nanak-dashboard.jpg";
import saiBabaDashboard from "@/assets/products/sai-baba-dashboard.jpg";
import saiBabaPagdi from "@/assets/products/sai-baba-pagdi.jpg";
import ishauraVentClip from "@/assets/products/ishaura-vent-clip.jpg";
import bhageshwarDashboard from "@/assets/products/bhageshwar-dashboard.jpg";
import kesarChandan from "@/assets/products/kesar-chandan.jpg";
import mataDress from "@/assets/products/mata-dress.jpg";
import ishauraFreshener from "@/assets/products/ishaura-freshener.jpg";
import khatuShyamBabaStatue from "@/assets/products/khatu-shyam-statue-5inch.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("5in");
  const [mainImage, setMainImage] = useState(khatuShyamStatue);

  const thumbnails = [khatuShyamStatue, saiBabaDress, ramMandirPoshak];

  const product = {
    name: "5 Inch Khatu Shyam Idol God Statue",
    price: 170.0,
    rating: 4.5,
    reviews: 12,
    sku: "SSM-001",
    category: "God Statue",
    description: "Khatu Shyam Ji is a revered deity in Hinduism, believed to be an incarnation of Barbarika, the grandson of Bhima from the Mahabharata. His idol or statue is typically designed to reflect his divine grace and aura.",
    material: "Polyresin",
    finish: "Color Coated",
    sizes: ["4in", "5in", "6in"],
    stateName: "Khatu Shyam Baba",
    suitableFor: "Home",
    MOQ: "10 Piece",
  };

  const categories = [
    { name: "God Statue Dress", count: 10 },
    { name: "Car Dashboard Idol", count: 8 },
    { name: "Pooja Items", count: 6 },
    { name: "Candle", count: 5 },
    { name: "Laddu Gopal Mukut", count: 4 },
  ];

  const topSelling = [
    { name: "Mata Dress", price: 60.0, unit: "Piece", image: mataDress },
    { name: "ISHAURA ROOM FRESHENERS", price: 70.0, unit: "Piece", image: ishauraFreshener },
    { name: "4 Inch Khatu Shyam Baba God Statue", price: 85.0, unit: "Piece", image: khatuShyamBabaStatue },
  ];

  const relatedProducts = [
    { id: "r1", name: "Sai Baba Pagdi", price: 300.0, unit: "Piece", image: saiBabaPagdi, badge: "hot" as const },
    { id: "r2", name: "Jai Guru Ji Chola", price: 5300.0, unit: "Piece", image: guruNanakDashboard, badge: "12%" },
    { id: "r3", name: "Orange Kumkum Sindur", price: 155.0, unit: "Kg", image: kesarChandan },
    { id: "r4", name: "Sai Baba Car Dashboard Idol", price: 65.0, unit: "Piece", image: saiBabaDashboard, badge: "hot" as const },
  ];

  return (
    <Layout>
      {/* Top Bar */}
      <div className="bg-muted/50 border-b border-border py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link to="/account" className="text-muted-foreground hover:text-primary">My Account</Link>
              <Link to="/wishlist" className="text-muted-foreground hover:text-primary">Wishlist</Link>
              <Link to="/tracking" className="text-muted-foreground hover:text-primary">Order Tracking</Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary">100% Secure delivery without contacting the courier</span>
              <span className="text-muted-foreground">Need help? Call Us: <span className="text-primary">1900888122</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: "Our Product", path: "/shop" }, { label: "God Statue" }]} />
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Product Images */}
            <div className="lg:col-span-4">
              <div className="bg-muted rounded-xl p-4 mb-4">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full aspect-square object-contain"
                />
              </div>
              <div className="flex gap-2">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(thumb)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      mainImage === thumb ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={thumb} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs rounded mb-3">
                Sale Off
              </span>
              
              <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-primary mb-4">
                ₹ {product.price.toFixed(0)}<span className="text-lg font-normal">/Piece</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-6">
                <span className="text-sm font-medium text-foreground mb-2 block">Size:</span>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Get Best Quote
                </Button>

                <button className="p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Product Meta */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>{" "}
                  <span className="text-primary">{product.material}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Finish:</span>{" "}
                  <span className="text-primary">{product.finish}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Suitable For:</span>{" "}
                  <span className="text-primary">{product.suitableFor}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Statue Name:</span>{" "}
                  <span className="text-primary">{product.stateName}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Size:</span>{" "}
                  <span className="text-primary">{selectedSize}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">MOQ:</span>{" "}
                  <span className="text-primary">{product.MOQ}</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        to="/shop"
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>📿</span>
                          {category.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-white">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Selling */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling</h3>
                <ul className="space-y-4">
                  {topSelling.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">{item.name}</h4>
                        <p className="text-primary text-sm font-semibold">
                          ₹ {item.price.toFixed(2)}/{item.unit}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (3)</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="bg-white rounded-xl p-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bring divine grace and spiritual serenity into your space with this beautifully crafted Khatu Shyam Baba Statue. Made from high-quality polyresin and finished with vibrant color coating, this statue reflects fine detailing and devotional elegance. Ideal for daily worship, home temples, and spiritual decor, the statue embodies calmness, faith, and reverence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Khatu Shyam Ji is a highly revered deity in Hinduism, believed to be the incarnation of Barbarika, the grandson of Bhima from the Mahabharata. Worshipped widely for blessings, devotion, and fulfillment of wishes, this statue is designed to radiate his divine aura and protective presence.
              </p>

              <h4 className="font-semibold text-foreground mt-6 mb-2">Packaging & Delivery</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Packaging Type: Secure carton packing</li>
                <li>Piece In One Carton: As per order requirement</li>
                <li>Minimum Order Quantity: 10 Pieces</li>
                <li>Handling: Carefully packed to prevent damage during transit.</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6 mb-2">Suggested Use</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Ideal for daily pooja and religious rituals</li>
                <li>Suitable for placement in home mandir, office temple, or gifting</li>
                <li>Can be used during festivals, religious occasions, and auspicious ceremonies</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-6 mb-2">Care Instructions & Warnings</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Clean gently with a dry or soft cloth</li>
                <li>Avoid using water or harsh chemicals</li>
                <li>Keep away from direct sunlight for long-lasting color</li>
                <li>Minor color or texture variations may occur due to handcrafted finishing.</li>
              </ul>
            </TabsContent>

            <TabsContent value="additional" className="bg-white rounded-xl p-6">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Material</td>
                    <td className="py-2 font-medium">Polyresin</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Finish</td>
                    <td className="py-2 font-medium">Color Coated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Position</td>
                    <td className="py-2 font-medium">Standing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Size</td>
                    <td className="py-2 font-medium">5 Inch</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-muted-foreground">Weight</td>
                    <td className="py-2 font-medium">Approx. 100 gm</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-muted-foreground">Usage/Application</td>
                    <td className="py-2 font-medium">Worship, Home Temple, Spiritual Décor</td>
                  </tr>
                </tbody>
              </table>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white rounded-xl p-6">
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title="Related products" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Trust Badges */}
      <TrustBadges />
    </Layout>
  );
};

export default ProductDetails;
