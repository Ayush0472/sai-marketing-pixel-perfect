import { useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";

import ladduGopalDress from "@/assets/products/laddu-gopal-dress.jpg";
import ladduGopalDress2 from "@/assets/products/laddu-gopal-dress-2.jpg";
import ramMandirPoshak from "@/assets/products/ram-mandir-poshak.jpg";
import silkKhatuShyam from "@/assets/products/silk-khatu-shyam.jpg";
import ladduGopalMukut from "@/assets/products/laddu-gopal-mukut.jpg";
import ishauraFreshener from "@/assets/products/ishaura-freshener.jpg";
import guruNanakDashboard from "@/assets/products/guru-nanak-dashboard.jpg";
import khatuShyamDashboard from "@/assets/products/khatu-shyam-baba-dashboard.jpg";
import saiBabaDashboard from "@/assets/products/sai-baba-dashboard.jpg";
import khatuShyamStatue from "@/assets/products/khatu-shyam-statue-5inch.jpg";

const PopularProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Dresses", "Candles", "Holy water", "Statues", "Pooja Items"];

  const products = [
    {
      id: "1",
      name: "Laddu Gopal Ji Dress",
      price: 70.0,
      image: ladduGopalDress,
      badge: "hot" as const,
    },
    {
      id: "2",
      name: "Laddu Gopal Ji Woollen Dress",
      price: 40.0,
      image: ladduGopalDress2,
      badge: "12%" as const,
    },
    {
      id: "3",
      name: "RAM MANDIR POSHAK",
      price: 90.0,
      image: ramMandirPoshak,
      badge: "8%" as const,
    },
    {
      id: "4",
      name: "Silk Khatu Shyam Dresses",
      price: 100.0,
      image: silkKhatuShyam,
      badge: "hot" as const,
    },
    {
      id: "5",
      name: "Laddu Gopal Mukut",
      price: 60.0,
      image: ladduGopalMukut,
      badge: "10%" as const,
    },
    {
      id: "6",
      name: "ISHAURA ROOM FRESHENERS",
      price: 70.0,
      image: ishauraFreshener,
      badge: "hot" as const,
    },
    {
      id: "7",
      name: "Guru Nanak Dev Ji Car Dashboard Idol",
      price: 70.0,
      image: guruNanakDashboard,
      badge: "12%" as const,
    },
    {
      id: "8",
      name: "Khatu Shyam Baba Car Dashboard Idol",
      price: 70.0,
      image: khatuShyamDashboard,
      badge: "8%" as const,
    },
    {
      id: "9",
      name: "Sai Baba Car Dashboard Idol",
      price: 70.0,
      image: saiBabaDashboard,
      badge: "15%" as const,
    },
    {
      id: "10",
      name: "5 Inch Khatu Shyam God Statue",
      price: 110.0,
      image: khatuShyamStatue,
      badge: "hot" as const,
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <SectionTitle title="Popular Products" className="mb-4 md:mb-0" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-tab ${
                  activeFilter === filter ? "filter-tab-active" : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
