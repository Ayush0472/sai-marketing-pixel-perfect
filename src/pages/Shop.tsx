import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProductCard from "@/components/shared/ProductCard";
import Newsletter from "@/components/shared/Newsletter";
import { ChevronRight, ChevronLeft, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ladduGopalDress from "@/assets/products/laddu-gopal-dress.jpg";
import ladduGopalDress2 from "@/assets/products/laddu-gopal-dress-2.jpg";
import ramMandirPoshak from "@/assets/products/ram-mandir-poshak.jpg";
import khatuShyamIdol from "@/assets/products/khatu-shyam-idol.jpg";
import ishauraFreshener from "@/assets/products/ishaura-freshener.jpg";
import guruNanakDashboard from "@/assets/products/guru-nanak-dashboard.jpg";
import khatuShyamDashboard from "@/assets/products/khatu-shyam-baba-dashboard.jpg";
import saiBabaDashboard from "@/assets/products/sai-baba-dashboard.jpg";
import ladduGopalMukut from "@/assets/products/laddu-gopal-mukut.jpg";
import khatuShyamStatue from "@/assets/products/khatu-shyam-statue-5inch.jpg";
import ashtagandha from "@/assets/products/ashtagandha-powder.jpg";
import shivParvati from "@/assets/products/shiv-parvati-dashboard.jpg";
import jaiShriShyam from "@/assets/products/jai-shri-shyam-tilak.jpg";
import gangaJal from "@/assets/products/ganga-jal.jpg";
import kesarChandan from "@/assets/products/kesar-chandan.jpg";
import mataDress from "@/assets/products/mata-dress.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { name: "God Statue Dress", count: 10 },
    { name: "Car Dashboard Idol", count: 8 },
    { name: "Pooja Items", count: 6 },
    { name: "Candle", count: 5 },
    { name: "Laddu Gopal Mukut", count: 4 },
  ];

  const filterTags = ["Statue", "Idols", "Dress", "Candle", "Mukut"];

  const products = [
    { id: "1", name: "Laddu Gopal Ji Dress", price: 70.0, image: ladduGopalDress, badge: "hot" as const },
    { id: "2", name: "Laddu Gopal Ji Woollen Dress", price: 40.0, image: ladduGopalDress2, badge: "12%" },
    { id: "3", name: "RAM MANDIR POSHAK", price: 90.0, image: ramMandirPoshak, badge: "8%" },
    { id: "4", name: "Khatu Shyam Idol God Statue", price: 170.0, image: khatuShyamIdol, badge: "Sale" },
    { id: "5", name: "ISHAURA ROOM FRESHENERS", price: 70.0, image: ishauraFreshener, badge: "hot" as const },
    { id: "6", name: "Guru Nanak Dev Ji Car Dashboard Idol", price: 70.0, image: guruNanakDashboard, badge: "12%" },
    { id: "7", name: "Khatu Shyam Baba Car Dashboard Idol", price: 70.0, image: khatuShyamDashboard, badge: "8%" },
    { id: "8", name: "Sai Baba Car Dashboard Idol", price: 70.0, image: saiBabaDashboard, badge: "15%" },
    { id: "9", name: "Laddu Gopal Mukut", price: 60.0, image: ladduGopalMukut, badge: "10%" },
    { id: "10", name: "100 Gm Kashi Dev Abhyang Ubtan Powder", price: 40.0, unit: "Pack", image: ashtagandha, badge: "12%" },
    { id: "11", name: "Shiv Parvati Ji Car Dashboard Idol", price: 70.0, image: shivParvati, badge: "8%" },
    { id: "12", name: "Jai Shri Shyam Tilak", price: 17.0, unit: "Piece", image: jaiShriShyam },
    { id: "13", name: "5 Inch Khatu Shyam God Statue", price: 110.0, image: khatuShyamStatue, badge: "9%" },
    { id: "14", name: "60 gm Kashi Ashtagandha Tikal", price: 200.0, unit: "Dozen", image: kesarChandan, badge: "new" as const },
    { id: "15", name: "50ml Ganga Jal", price: 10.0, unit: "Piece", image: gangaJal, badge: "9%" },
    { id: "16", name: "25 gm Kesar Ashtagandha Chandan Powder", price: 200.0, unit: "Jar", image: kesarChandan, badge: "hot" as const },
  ];

  const newProducts = [
    { name: "Mata Dress", price: 60.0, unit: "Piece", image: mataDress },
    { name: "ISHAURA ROOM FRESHENERS", price: 70.0, unit: "Piece", image: ishauraFreshener },
    { name: "4 Inch Khatu Shyam Baba God Statue", price: 85.0, unit: "Piece", image: khatuShyamStatue },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-primary/10 py-8 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Items</h1>
              <Breadcrumb items={[{ label: "Shop", path: "/shop" }, { label: "Items" }]} />
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 rounded-full border border-border bg-white text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  × {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Category</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full category-sidebar-item ${
                        selectedCategory === category.name ? "category-sidebar-item-active" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-lg">📿</span>
                        {category.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        selectedCategory === category.name 
                          ? "bg-white/20" 
                          : "bg-primary text-white"
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Products */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-4">New products</h3>
              <ul className="space-y-4">
                {newProducts.map((product, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate">{product.name}</h4>
                      <p className="text-primary text-sm font-semibold">
                        ₹ {product.price.toFixed(2)}/{product.unit}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
              <p className="text-muted-foreground text-sm">
                We found <span className="text-primary font-semibold">29 items</span> for you!
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Show:</span>
                  <Select defaultValue="50">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Grid3X3 className="w-5 h-5 text-primary" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <List className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-border hover:border-primary transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-lg bg-primary text-white font-medium">1</button>
                <button className="w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors">2</button>
                <button className="w-10 h-10 rounded-lg border border-border hover:border-primary transition-colors">3</button>
                <button className="p-2 rounded-lg border border-border hover:border-primary transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Shop;
