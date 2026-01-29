
# Dynamic Product Details Pages Implementation Plan

## Overview
Create a centralized product data system that enables each product to have its own unique, dedicated product details page while maintaining the exact same layout, UI, tabs, and structure.

## Current State Analysis
- Route `/product/:id` already exists and renders `ProductDetails.tsx`
- `ProductCard` components already link to `/product/${id}`
- The `id` parameter is captured via `useParams()` but currently unused
- All product data is hardcoded, showing the same content regardless of product ID

---

## Implementation Strategy

### Approach
Create a single source of truth for all products with unique, professionally-written devotional descriptions. The `ProductDetails` component will dynamically render content based on the product ID from the URL.

---

## Files to Create/Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `src/data/products.ts` | **New** | Centralized product data with all products |
| `src/pages/ProductDetails.tsx` | **Modified** | Dynamic product loading based on URL ID |
| `src/components/home/PopularProducts.tsx` | **Modified** | Use centralized product data |
| `src/components/home/ProductLists.tsx` | **Modified** | Use centralized product data |
| `src/pages/Shop.tsx` | **Modified** | Use centralized product data |

---

## Product Data Structure

Each product will contain:

```text
Product {
  id: string
  name: string
  price: number
  unit: string
  category: string
  subcategory: string
  images: string[]              // Main + thumbnails
  badge: "hot" | "sale" | "new" | percentage
  rating: number
  reviews: number
  sku: string
  sizes: string[]               // If applicable
  
  // Attributes (for Additional Info tab)
  material: string
  finish: string
  weight: string
  position: string              // Standing/Sitting/etc.
  suitableFor: string
  usage: string
  MOQ: string
  
  // Description Content (unique per product)
  shortDescription: string
  fullDescription: {
    intro: string[]             // 2-3 paragraphs
    packaging: {
      type: string
      piecesPerCarton: string
      moq: string
      handling: string
    }
    suggestedUse: string[]
    careInstructions: string[]
  }
  
  relatedProductIds: string[]
}
```

---

## Product Categories & Unique Descriptions

### 1. God Statues (5 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| khatu-shyam-5in | 5 Inch Khatu Shyam Idol | Existing description - Mahabharata connection, Barbarika incarnation |
| khatu-shyam-4in | 4 Inch Khatu Shyam Statue | Compact blessing for small spaces, ideal for travel puja |
| khatu-shyam-idol | Khatu Shyam Idol | Premium handcrafted, intricate detailing, auspicious placement |
| ganesh-statue | Ganesh Statue | Remover of obstacles, prosperity bringer, Vaastu benefits |
| silk-khatu-shyam | Silk Khatu Shyam | Festive deity dress, silk fabric richness, celebration use |

### 2. Car Dashboard Idols (6 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| guru-nanak-dashboard | Guru Nanak Dev Ji Dashboard | Sikh spiritual protection, safe journey blessings |
| khatu-shyam-dashboard | Khatu Shyam Baba Dashboard | Travel protection, devotional companion on roads |
| sai-baba-dashboard | Sai Baba Dashboard | Sabka Malik Ek, universal blessings for travelers |
| shiv-parvati-dashboard | Shiv Parvati Ji Dashboard | Divine couple, family harmony, power and grace |
| bhageshwar-dashboard | Bhageshwar Dham Dashboard | Modern spiritual guide, faith and protection |
| ishaura-vent-clip | Ishaura Vent Clip Idol | Compact clip-on, fragrance + devotion combo |

### 3. Laddu Gopal Dresses & Accessories (5 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| laddu-gopal-dress | Laddu Gopal Ji Dress | Baby Krishna attire, soft fabric, festival ready |
| laddu-gopal-dress-2 | Laddu Gopal Woollen Dress | Winter care for deity, warmth and devotion |
| laddu-gopal-mukut | Laddu Gopal Mukut | Crown of divinity, peacock feather, authentic design |
| ram-mandir-poshak | Ram Mandir Poshak | Ayodhya celebration, Ram Lalla inspired design |
| mata-dress | Mata Dress | Divine feminine attire, Durga/Vaishno Devi style |

### 4. Sai Baba Collection (3 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| sai-baba-dress | Sai Baba Dress | Shirdi Sai attire, pure white, spiritual elegance |
| sai-baba-pagdi | Sai Baba Pagdi | Traditional headwear, authentic Shirdi style |
| sai-baba-dashboard | (same as above) | — |

### 5. Pooja Items & Powders (6 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| kesar-chandan | Kesar Ashtagandha Chandan | Sandalwood purity, aromatic tilak, ritual essential |
| ashtagandha-powder | Kashi Abhyang Ubtan Powder | Sacred cleansing, traditional recipe, skin care |
| chandan-powder | Ashtagandha Chandan Powder | Temple-grade sandalwood, pure ingredients |
| kumkum-sindur | Kumkum Sindur Maroon | Auspicious red, married women's blessing |
| jai-shri-shyam-tilak | Jai Shri Shyam Tilak | Ready-to-apply tilak, devotion on-the-go |
| ganga-jal | 50ml Ganga Jal | Sacred Ganges water, purification rituals |

### 6. Fresheners & Car Perfumes (3 products)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| ishaura-freshener | Ishaura Room Fresheners | Temple fragrance at home, calming aroma |
| ishaura-air-freshener | Ishaura Hanging Diffuser | Long-lasting, wardrobe and car freshness |
| ishaura-vent-clip | Ishaura Vent Clip | Car AC clip-on, continuous fragrance |

### 7. Fabrics & Materials (1 product)
| ID | Product | Unique Description Theme |
|----|---------|--------------------------|
| roto-fabric | White Roto Fabric | Pure white, mandir decoration, customizable |

---

## ProductDetails Component Changes

### Dynamic Loading Logic
```text
1. Get `id` from URL params
2. Find product in centralized data by ID
3. If not found, show 404 or redirect
4. Render product with dynamic:
   - Name, price, images
   - Size options (if applicable)
   - Material, finish, attributes
   - Full description content
   - Related products from same category
5. Update breadcrumb dynamically
```

### State Management
- `mainImage`: First image from product.images array
- `selectedSize`: First size from product.sizes array (or default)
- `quantity`: Starting at 1

### Related Products Logic
Filter products by same category, exclude current product, limit to 4 items.

---

## Description Writing Standards

Each product description will follow this structure:

**Intro Paragraphs (2-3):**
- Opening with spiritual/devotional significance
- Product purpose and value proposition
- Material quality and craftsmanship details

**Packaging & Delivery:**
- Packaging Type: (Carton/Box/Pouch)
- Pieces per Carton: (As per requirement)
- MOQ: (Product-specific)
- Handling note

**Suggested Use:**
- Primary use case
- Secondary locations
- Occasions/festivals

**Care Instructions:**
- Cleaning method
- What to avoid
- Storage tips
- Variation disclaimer

---

## Technical Implementation Details

### Image Mapping
Each product will have 1-3 images:
- Primary image (main display)
- 2 thumbnail variants (from related products in same category if needed)

### Category-Based Related Products
```text
getRelatedProducts(currentProduct):
  1. Filter all products where category === currentProduct.category
  2. Exclude currentProduct.id
  3. Limit to 4 products
  4. Return array
```

### Breadcrumb Dynamic Updates
```text
Breadcrumb items:
  - { label: "Our Product", path: "/shop" }
  - { label: product.category }
```

---

## What Remains Unchanged

| Element | Status |
|---------|--------|
| Layout structure (3-column grid) | Preserved |
| Header/Footer | Preserved |
| Fonts (Poppins) | Preserved |
| Colors (Orange #FF8C00) | Preserved |
| Spacing and padding | Preserved |
| Tab component styling | Preserved |
| Button styles | Preserved |
| Card components | Preserved |
| Newsletter section | Preserved |
| Trust badges | Preserved |
| Sidebar categories/top selling | Preserved |

---

## Summary

This implementation creates 27 unique product pages with professionally written, devotional-themed descriptions while maintaining pixel-perfect design consistency. Each product will feel authentic and relevant to its category without any repeated content.
