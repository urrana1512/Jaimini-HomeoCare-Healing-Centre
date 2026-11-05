"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingBag, 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  Plus, 
  Edit3, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Truck, 
  Tag, 
  Star, 
  Settings, 
  MessageSquare, 
  Sparkles, 
  Search,
  Check,
  X
} from "lucide-react";
import { crystalProducts as initialProducts } from "@/lib/data/crystal-products";
import { CrystalProduct } from "@/types/crystal-ecommerce";

interface MockOrder {
  id: string;
  customerName: string;
  phone: string;
  items: string;
  total: number;
  date: string;
  status: "Processing" | "Reiki Attuned" | "Dispatched" | "Delivered";
  hasGift: boolean;
}

const initialOrders: MockOrder[] = [
  {
    id: "ORD-9021",
    customerName: "Pooja Sharma",
    phone: "9820112345",
    items: "Natural Citrine Abundance Bracelet (x1)",
    total: 1299,
    date: "Today, 11:30 AM",
    status: "Reiki Attuned",
    hasGift: true
  },
  {
    id: "ORD-9020",
    customerName: "Aman Gupta",
    phone: "9876543210",
    items: "Selenite Cleansing Tower (x1), Deep Purple Amethyst (x1)",
    total: 2698,
    date: "Today, 09:15 AM",
    status: "Processing",
    hasGift: false
  },
  {
    id: "ORD-9019",
    customerName: "Dr. Kavita Joshi",
    phone: "9426019283",
    items: "7-Chakra Alignment Master Box (x1)",
    total: 2499,
    date: "Yesterday",
    status: "Dispatched",
    hasGift: true
  },
  {
    id: "ORD-9018",
    customerName: "Vikas Mehra",
    phone: "9988776655",
    items: "Raw Black Tourmaline Auric Shield (x2)",
    total: 1798,
    date: "Yesterday",
    status: "Delivered",
    hasGift: false
  }
];

interface MockCoupon {
  code: string;
  discount: number; // percentage
  active: boolean;
  usesCount: number;
}

const initialCoupons: MockCoupon[] = [
  { code: "HEAL10", discount: 10, active: true, usesCount: 42 },
  { code: "NIYATI10", discount: 10, active: true, usesCount: 28 },
  { code: "DIWALI20", discount: 20, active: false, usesCount: 65 },
  { code: "REIKI15", discount: 15, active: true, usesCount: 19 }
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "products" | "orders" | "coupons" | "settings">("overview");
  const [products, setProducts] = useState<CrystalProduct[]>(initialProducts);
  const [orders, setOrders] = useState<MockOrder[]>(initialOrders);
  const [coupons, setCoupons] = useState<MockCoupon[]>(initialCoupons);
  const [searchProduct, setSearchProduct] = useState("");

  // Product Add Form State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProdName, setNewProdName] = useState("");
  const [newProdPrice, setNewProdPrice] = useState(999);
  const [newProdStock, setNewProdStock] = useState(20);
  const [newProdCategory, setNewProdCategory] = useState("bracelets");

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newP: CrystalProduct = {
      id: `prod-${Date.now()}`,
      name: newProdName,
      slug: newProdName.toLowerCase().replace(/\s+/g, "-"),
      category: newProdCategory as any,
      categoryName: newProdCategory === "bracelets" ? "Healing Bracelets" : "Raw Crystals",
      price: Number(newProdPrice),
      rating: 5.0,
      reviewCount: 1,
      inStock: true,
      stockCount: Number(newProdStock),
      images: ["/images/services/crystal_bracelets.png"],
      thumbnail: "/images/services/crystal_bracelets.png",
      shortDesc: "Newly energized handcrafted gemstone piece.",
      description: "Authentic Grade-A natural crystal programmed by Dr. Niyati Rana.",
      healingBenefits: ["Harmonizes aura", "Reiki activated"],
      chakra: ["All Chakras"],
      intention: ["Calm & Stress Relief"],
      zodiac: ["All Signs"],
      origin: "India",
      reikiAttuned: true,
      cleansingMethod: "Moonlight or Selenite slab.",
      affirmation: "I am radiant, protected, and aligned."
    };
    setProducts([newP, ...products]);
    setIsAddModalOpen(false);
    setNewProdName("");
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: MockOrder["status"]) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  const handleToggleCoupon = (code: string) => {
    setCoupons(prev => prev.map(c => c.code === code ? { ...c, active: !c.active } : c));
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchProduct.toLowerCase()) || 
    p.categoryName.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-off-white text-deep-charcoal pb-24 text-left">
      {/* Top Admin Header */}
      <header className="bg-forest-green text-cream-white px-6 lg:px-8 py-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-warm-gold border border-white/20">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-heading text-xl font-bold">Store Admin Panel</h1>
                <span className="bg-warm-gold text-deep-charcoal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Zero-Code
                </span>
              </div>
              <p className="text-xs text-cream-white/80">Dr. Niyati Rana • Jaimini Homeocare & Healing Centre</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/services/crystal-products"
              className="text-xs bg-white/15 hover:bg-white/25 px-4 py-2 rounded-full border border-white/20 transition-all font-medium"
            >
              View Live Storefront →
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 border-b border-light-gray/40 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "Dashboard Overview", icon: TrendingUp },
            { id: "products", label: `Products (${products.length})`, icon: Package },
            { id: "orders", label: `Orders (${orders.length})`, icon: ShoppingBag },
            { id: "coupons", label: "Coupons & Offers", icon: Tag },
            { id: "settings", label: "Store Settings", icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-forest-green text-cream-white shadow-premium-soft"
                    : "bg-white text-medium-gray hover:text-deep-charcoal border border-light-gray/30"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-2">
                <span className="text-[11px] font-bold text-medium-gray uppercase tracking-wider">Total Sales Today</span>
                <div className="font-heading text-3xl font-bold text-forest-green">₹42,850</div>
                <span className="text-[11px] text-forest-green font-medium flex items-center">
                  <TrendingUp size={12} className="mr-1" /> +18.4% from last week
                </span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-2">
                <span className="text-[11px] font-bold text-medium-gray uppercase tracking-wider">Active Orders</span>
                <div className="font-heading text-3xl font-bold text-deep-charcoal">{orders.length}</div>
                <span className="text-[11px] text-warm-gold font-medium">2 awaiting Reiki attunement</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-2">
                <span className="text-[11px] font-bold text-medium-gray uppercase tracking-wider">Catalog Inventory</span>
                <div className="font-heading text-3xl font-bold text-deep-charcoal">{products.length} Items</div>
                <span className="text-[11px] text-forest-green font-medium">All Grade-A Certified</span>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-2">
                <span className="text-[11px] font-bold text-medium-gray uppercase tracking-wider">Low Stock Warnings</span>
                <div className="font-heading text-3xl font-bold text-amber-600">2 Items</div>
                <span className="text-[11px] text-amber-600 font-medium flex items-center">
                  <AlertTriangle size={12} className="mr-1" /> Clear Quartz Geode (6 left)
                </span>
              </div>
            </div>

            {/* Recent Orders List Preview */}
            <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-4">
              <div className="flex items-center justify-between border-b border-light-gray/30 pb-4">
                <h3 className="font-heading text-lg font-bold text-deep-charcoal">Recent Customer Orders</h3>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="text-xs font-semibold text-forest-green hover:underline"
                >
                  Manage all orders →
                </button>
              </div>

              <div className="divide-y divide-light-gray/20">
                {orders.slice(0, 3).map((o) => (
                  <div key={o.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-forest-green">{o.id}</span>
                        <span className="font-bold text-xs text-deep-charcoal">{o.customerName}</span>
                        {o.hasGift && (
                          <span className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            🎁 Gift Wrapped
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-medium-gray mt-0.5">{o.items}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-xs text-deep-charcoal">₹{o.total}</span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${
                        o.status === "Delivered" ? "bg-green-100 text-green-800" :
                        o.status === "Dispatched" ? "bg-blue-100 text-blue-800" :
                        o.status === "Reiki Attuned" ? "bg-amber-100 text-amber-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {o.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS MANAGER */}
        {activeTab === "products" && (
          <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-light-gray/30 pb-4">
              <div className="relative flex-1 max-w-md">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-medium-gray" />
                <input
                  type="text"
                  placeholder="Search products in catalog..."
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-light-gray/60 text-xs focus:outline-none focus:border-forest-green bg-off-white"
                />
              </div>

              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-forest-green text-cream-white text-xs font-bold flex items-center space-x-1.5 shadow-premium-soft hover:bg-forest-green/95 transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>Add New Crystal Product</span>
              </button>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-light-gray/40 text-medium-gray font-bold uppercase text-[10px]">
                    <th className="pb-3">Product</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Price</th>
                    <th className="pb-3">Stock Units</th>
                    <th className="pb-3">Rating</th>
                    <th className="pb-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-light-gray/20">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-off-white/80 transition-colors">
                      <td className="py-3 flex items-center space-x-3">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-off-white border border-light-gray/40 flex-shrink-0">
                          <Image src={p.thumbnail} alt="" fill className="object-cover" />
                        </div>
                        <div>
                          <span className="font-bold text-deep-charcoal block">{p.name}</span>
                          <span className="text-[10px] text-medium-gray">Origin: {p.origin}</span>
                        </div>
                      </td>
                      <td className="py-3 font-medium text-forest-green">{p.categoryName}</td>
                      <td className="py-3 font-bold text-deep-charcoal">₹{p.price}</td>
                      <td className="py-3">
                        <span className={`font-semibold ${p.stockCount < 10 ? "text-amber-600 font-bold" : "text-deep-charcoal"}`}>
                          {p.stockCount} in stock
                        </span>
                      </td>
                      <td className="py-3 flex items-center space-x-1 text-amber-500">
                        <Star size={12} className="fill-amber-500" />
                        <span className="font-bold text-deep-charcoal">{p.rating}</span>
                      </td>
                      <td className="py-3 text-right space-x-2">
                        <button
                          onClick={() => alert(`Edit mode for ${p.name}`)}
                          className="p-1.5 rounded-lg hover:bg-light-gray/40 text-medium-gray hover:text-deep-charcoal cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => setProducts(prev => prev.filter(item => item.id !== p.id))}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-light-gray hover:text-red-500 cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS MANAGER */}
        {activeTab === "orders" && (
          <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-6">
            <h3 className="font-heading text-lg font-bold text-deep-charcoal border-b border-light-gray/30 pb-3">
              Order Fulfillment & Attunement Tracker
            </h3>

            <div className="divide-y divide-light-gray/20">
              {orders.map((o) => (
                <div key={o.id} className="py-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-xs font-bold text-forest-green">{o.id}</span>
                        <span className="font-bold text-sm text-deep-charcoal">{o.customerName}</span>
                        <span className="text-xs text-medium-gray">({o.phone})</span>
                        {o.hasGift && (
                          <span className="bg-purple-100 text-purple-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                            🎁 Gift Packaging (₹99)
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-medium-gray">{o.items}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="font-heading text-sm font-bold text-forest-green">₹{o.total}</span>
                      <a
                        href={`https://wa.me/91${o.phone}?text=${encodeURIComponent(`Hi ${o.customerName}, Dr. Niyati Rana here from Jaimini Homeocare regarding your crystal order ${o.id}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Status Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-semibold text-medium-gray mr-2">Update Status:</span>
                    {(["Processing", "Reiki Attuned", "Dispatched", "Delivered"] as MockOrder["status"][]).map((st) => (
                      <button
                        key={st}
                        onClick={() => handleUpdateOrderStatus(o.id, st)}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                          o.status === st
                            ? "bg-forest-green text-cream-white shadow-premium-soft"
                            : "bg-off-white text-medium-gray hover:text-deep-charcoal border border-light-gray/40"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: COUPONS */}
        {activeTab === "coupons" && (
          <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-6">
            <h3 className="font-heading text-lg font-bold text-deep-charcoal border-b border-light-gray/30 pb-3">
              Coupons & Blessing Discounts
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coupons.map((c) => (
                <div key={c.code} className="p-4 rounded-2xl border border-light-gray/40 bg-off-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-sm text-forest-green">{c.code}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      c.active ? "bg-green-100 text-green-800" : "bg-gray-200 text-gray-600"
                    }`}>
                      {c.active ? "Active" : "Paused"}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="font-heading text-xl font-bold text-deep-charcoal">{c.discount}% OFF</span>
                    <span className="text-[11px] text-medium-gray block">{c.usesCount} times applied</span>
                  </div>

                  <button
                    onClick={() => handleToggleCoupon(c.code)}
                    className="w-full py-1.5 rounded-xl text-xs font-semibold bg-white border border-light-gray/60 hover:bg-light-gray/20 transition-colors cursor-pointer"
                  >
                    {c.active ? "Pause Coupon" : "Activate Coupon"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SETTINGS */}
        {activeTab === "settings" && (
          <div className="bg-white p-6 rounded-3xl border border-light-gray/40 shadow-premium-soft space-y-6 max-w-2xl">
            <h3 className="font-heading text-lg font-bold text-deep-charcoal border-b border-light-gray/30 pb-3">
              Store Logistics & Pricing Configuration
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-deep-charcoal block mb-1">Free Express Shipping Threshold (₹)</label>
                <input
                  type="number"
                  defaultValue={999}
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                />
              </div>

              <div>
                <label className="font-semibold text-deep-charcoal block mb-1">Standard Shipping Fee for Orders &lt; ₹999</label>
                <input
                  type="number"
                  defaultValue={99}
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                />
              </div>

              <div>
                <label className="font-semibold text-deep-charcoal block mb-1">Sacred Gift Packaging Fee (₹)</label>
                <input
                  type="number"
                  defaultValue={99}
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                />
              </div>

              <div>
                <label className="font-semibold text-deep-charcoal block mb-1">Primary WhatsApp Order Phone</label>
                <input
                  type="text"
                  defaultValue="+91 93163 56317"
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                />
              </div>

              <button
                onClick={() => alert("Settings saved successfully!")}
                className="px-6 py-2.5 rounded-full bg-forest-green text-cream-white font-bold text-xs hover:bg-forest-green/95 shadow-premium-soft cursor-pointer"
              >
                Save Store Settings
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 text-deep-charcoal">
            <div className="flex items-center justify-between border-b border-light-gray/30 pb-3">
              <h3 className="font-heading text-base font-bold">Add New Crystal Product</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-medium-gray hover:text-deep-charcoal">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold block mb-1">Product Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Natural Fluorite Clarity Tower"
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white focus:outline-none focus:border-forest-green"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold block mb-1">Price (₹)</label>
                  <input
                    type="number"
                    required
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Stock Units</label>
                  <input
                    type="number"
                    required
                    value={newProdStock}
                    onChange={(e) => setNewProdStock(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1">Category</label>
                <select
                  value={newProdCategory}
                  onChange={(e) => setNewProdCategory(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-light-gray/60 bg-off-white"
                >
                  <option value="bracelets">Healing Bracelets</option>
                  <option value="raw-stones">Raw Crystals & Minerals</option>
                  <option value="towers-wands">Towers & Generators</option>
                  <option value="healing-sets">Curated Healing Sets</option>
                  <option value="clusters-geodes">Clusters & Geodes</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-forest-green text-cream-white font-bold text-xs hover:bg-forest-green/95 shadow-premium-soft cursor-pointer mt-2"
              >
                Publish Crystal to Store
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
