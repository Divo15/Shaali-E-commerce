const page = document.body.dataset.page || "home";

const navLinks = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "store.html", label: "Store", key: "store" },
  { href: "search-result.html", label: "Collections", key: "search" },
  { href: "product%20detail.html", label: "Product", key: "detail" },
  { href: "cart.html", label: "Cart", key: "cart" },
  { href: "signin.html", label: "Sign In", key: "signin" }
];

const categories = [
  { title: "Sarees", image: "https://images.unsplash.com/photo-1610189020382-668f692b2d72?auto=format&fit=crop&w=400&q=80" },
  { title: "Silk Sarees", image: "https://images.unsplash.com/photo-1621212121259-6af6db629746?auto=format&fit=crop&w=400&q=80" },
  { title: "Suits & Dresses", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80" },
  { title: "Gowns", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80" },
  { title: "Kurtis", image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8b5?auto=format&fit=crop&w=400&q=80" },
  { title: "Wedding Edit", image: "https://images.unsplash.com/photo-1583391733981-849d93b32d9f?auto=format&fit=crop&w=400&q=80" }
];

const products = [
  {
    title: "Banarasi Sunset Saree",
    category: "New Arrival",
    price: "Rs. 4,980",
    oldPrice: "Rs. 6,280",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Ivory Mehfil Anarkali",
    category: "Wedding Guest",
    price: "Rs. 7,450",
    oldPrice: "Rs. 8,990",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1596704017254-9f8d2e9f5b2f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Festive Red Organza Set",
    category: "Festive Pick",
    price: "Rs. 5,320",
    oldPrice: "Rs. 6,410",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mint Zari Occasion Drape",
    category: "Bestseller",
    price: "Rs. 6,850",
    oldPrice: "Rs. 7,960",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1611485988302-9f569f88b987?auto=format&fit=crop&w=800&q=80"
  }
];

const occasionCards = [
  {
    title: "The Wedding Edit",
    subtitle: "Curated looks for sangeet, reception, and pheras.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    large: true
  },
  {
    title: "Haldi & Mehendi",
    subtitle: "Joyful silhouettes in marigold, lime, and rose.",
    image: "https://images.unsplash.com/photo-1610030469668-182b74b7283e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cocktail Night",
    subtitle: "Statement drapes, metallic textures, evening glow.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Festive Ready",
    subtitle: "Diwali, pooja, and family gatherings with richness.",
    image: "https://images.unsplash.com/photo-1623609163859-ca93c959b98a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Casual Ethnic",
    subtitle: "Breathable, graceful pieces for every elegant day.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  }
];

const reviews = [
  {
    quote: "The saree draped beautifully and looked even richer in person. The finishing and blouse fabric felt premium.",
    name: "Hetal Shah"
  },
  {
    quote: "I ordered this for a wedding function and the compliments did not stop. The embroidery felt festive without being heavy.",
    name: "Indu Valavla"
  },
  {
    quote: "Fast delivery, lovely packaging, and the styling suggestions helped me complete the full look.",
    name: "Riya"
  }
];

const storeProducts = [
  ...products,
  {
    title: "Aubergine Mirror Work Kurta Set",
    category: "Kurta Set",
    price: "Rs. 3,980",
    oldPrice: "Rs. 4,620",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rose Gold Reception Lehenga",
    category: "Reception",
    price: "Rs. 12,800",
    oldPrice: "Rs. 15,100",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Emerald Handloom Drape",
    category: "Handloom",
    price: "Rs. 5,640",
    oldPrice: "Rs. 6,520",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Blush Threadwork Suit",
    category: "Celebration",
    price: "Rs. 4,260",
    oldPrice: "Rs. 5,100",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80"
  }
];

function Header() {
  return (
    <>
      <div className="top-strip">Now taking festive pre-orders. Signature sarees, bridal drapes, and occasion edits.</div>
      <header className="site-header">
        <div className="header-inner">
          <div className="header-main">
            <a className="brand-lockup" href="index.html">
              <div className="brand-mark">GG</div>
              <div>
                <div className="brand-name">GG Fashion</div>
                <div className="brand-tag">Premium Desi Wardrobe</div>
              </div>
            </a>

            <label className="search-bar" aria-label="Search products">
              <span>Search</span>
              <input defaultValue="wedding saree, organza, festive sets" />
            </label>

            <div className="header-actions">
              <a className="icon-btn" href="signin.html" aria-label="Account">♡</a>
              <a className="icon-btn" href="cart.html" aria-label="Cart">👜</a>
            </div>
          </div>

          <nav className="nav-row" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.key} href={link.href} className={page === link.key ? "active" : ""}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="brand-name">GG Fashion</div>
            <p>
              Premium sarees, lehengas, and occasion wear designed for celebrations that deserve presence,
              grace, and cultural richness.
            </p>
            <div className="badge-row">
              <span className="chip">Authentic Craft</span>
              <span className="chip">Trusted Delivery</span>
              <span className="chip">Secure Payment</span>
            </div>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><a href="store.html">New Arrivals</a></li>
              <li><a href="search-result.html">Wedding Collection</a></li>
              <li><a href="product%20detail.html">Featured Product</a></li>
            </ul>
          </div>
          <div>
            <h4>Customer Care</h4>
            <ul>
              <li>Track Order</li>
              <li>Exchange Policy</li>
              <li>Size Guidance</li>
              <li>Shipping Support</li>
            </ul>
          </div>
          <div>
            <h4>Stay Connected</h4>
            <p>Receive festive previews, styling notes, and early-access drops.</p>
            <div className="newsletter">
              <input type="email" placeholder="Email address" />
              <button className="cta-btn">Join</button>
            </div>
          </div>
        </div>
        <div className="footer-base">© 2026 GG Fashion. Curated for elegant desi celebrations.</div>
      </div>
    </footer>
  );
}

function SectionHeading({ title, highlight, description, linkText, href }) {
  return (
    <div className="section-heading">
      <div>
        <h2>
          {title} {highlight ? <span className="accent-text">{highlight}</span> : null}
        </h2>
        {description ? <p>{description}</p> : null}
      </div>
      {linkText ? <a className="text-link" href={href || "store.html"}>{linkText}</a> : null}
    </div>
  );
}

function CategoryRow() {
  return (
    <div className="category-row">
      {categories.map((item) => (
        <a className="category-card" href="search-result.html" key={item.title}>
          <img src={item.image} alt={item.title} />
          <strong>{item.title}</strong>
        </a>
      ))}
    </div>
  );
}

function ProductGrid({ items }) {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <a className="product-card" href="product%20detail.html" key={item.title}>
          <img src={item.image} alt={item.title} />
          <div className="product-copy">
            <div className="product-meta">
              <span className="label">{item.category}</span>
              <span className="rating">★ {item.rating}</span>
            </div>
            <h3>{item.title}</h3>
            <div className="price">{item.price}</div>
            <div className="old-price">{item.oldPrice}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">Celebration Season Edit</div>
          <h1>
            Elegance <span>Redefined.</span>
          </h1>
          <p>
            Discover premium ethnic fashion crafted for weddings, festive gatherings, and unforgettable
            moments. Rich drapes, luminous embroidery, and silhouettes with presence.
          </p>
          <div className="hero-actions">
            <a className="cta-btn" href="store.html">Shop Collection</a>
            <a className="ghost-btn" href="search-result.html">Explore Wedding Wear</a>
          </div>
        </div>
      </section>

      <div className="metric-strip">
        <div className="metric"><strong>1,200+</strong><span>Festive looks curated</span></div>
        <div className="metric"><strong>48 hrs</strong><span>Fast dispatch on ready-to-ship edits</span></div>
        <div className="metric"><strong>4.9/5</strong><span>Average customer delight score</span></div>
        <div className="metric"><strong>Pure craft</strong><span>Handpicked fabrics and finishing</span></div>
      </div>

      <section className="section">
        <SectionHeading
          title="Celebrate Every Occasion in"
          highlight="Style"
          description="Shop by category and discover signature pieces with the richness of desi celebration."
        />
        <CategoryRow />
      </section>

      <section className="section">
        <SectionHeading
          title="Shop by"
          highlight="Occasion"
          description="Curated edits for wedding rituals, evening celebrations, and elevated daily ethnic dressing."
          linkText="View all edits"
        />
        <div className="occasion-grid">
          {occasionCards.map((item) => (
            <a
              key={item.title}
              className={`story-card ${item.large ? "large" : ""}`}
              href="search-result.html"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="story-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          title="New"
          highlight="Arrivals"
          description="Latest festive drops with heirloom textures, modern tailoring, and flattering drapes."
          linkText="View all products"
        />
        <ProductGrid items={products} />
      </section>

      <section className="section">
        <SectionHeading
          title="Our Featured"
          highlight="Collection"
          description="Editor-selected pieces that photograph beautifully, drape elegantly, and hold attention."
          linkText="Browse collection"
        />
        <ProductGrid items={storeProducts.slice(0, 4)} />
      </section>

      <section className="section">
        <SectionHeading
          title="Reviews &"
          highlight="Ratings"
          description="Words from customers who chose GG Fashion for their most memorable occasions."
          linkText="Read more"
        />
        <div className="review-grid">
          {reviews.map((item) => (
            <div className="review-card" key={item.name}>
              <div className="rating">★★★★★</div>
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="info-grid">
          {[
            ["Authentic Quality", "Hand-selected fabrics and finishing chosen for elegance."],
            ["Modern Tradition", "Culturally rooted styling with current silhouettes."],
            ["Express Delivery", "Fast dispatch for celebration timelines that matter."],
            ["Easy Returns", "A smoother shopping experience with guided support."]
          ].map(([title, copy]) => (
            <div className="info-card" key={title}>
              <strong>{title}</strong>
              <p className="muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function StorePage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Storefront</div>
        <h1>Premium ethnic wear for every celebration on your calendar.</h1>
        <p>
          From handcrafted sarees to wedding guest ensembles, browse our full collection with premium fabrics,
          festive detailing, and elevated fits.
        </p>
      </section>
      <section className="section">
        <SectionHeading
          title="Complete Store"
          highlight="Collection"
          description="A wider catalog of sarees, lehengas, kurtas, and occasion sets."
        />
        <div className="store-grid">
          {storeProducts.map((item) => (
            <a className="product-card" href="product%20detail.html" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="product-copy">
                <span className="label">{item.category}</span>
                <h3>{item.title}</h3>
                <p className="muted">Designed for festive evenings, intimate ceremonies, and statement entrances.</p>
                <div className="price">{item.price}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

function SearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Search Results</div>
        <h1>Wedding saree results with zari, organza, and celebration-ready drapes.</h1>
        <p>Showing refined picks for premium ethnic shoppers looking for graceful shine and occasion styling.</p>
      </section>
      <section className="section">
        <div className="search-layout">
          <aside className="filter-card">
            <h3>Refine your edit</h3>
            <div className="filter-group">
              <h3>Categories</h3>
              <div className="checkbox-list">
                <label><span>Sarees</span><span>124</span></label>
                <label><span>Lehengas</span><span>32</span></label>
                <label><span>Suit Sets</span><span>57</span></label>
              </div>
            </div>
            <div className="filter-group">
              <h3>Occasion</h3>
              <div className="checkbox-list">
                <label><span>Wedding</span><span>78</span></label>
                <label><span>Reception</span><span>43</span></label>
                <label><span>Festive</span><span>92</span></label>
              </div>
            </div>
            <div className="filter-group">
              <h3>Price Range</h3>
              <div className="checkbox-list">
                <label><span>Rs. 2,000 - 5,000</span><span>66</span></label>
                <label><span>Rs. 5,000 - 8,000</span><span>71</span></label>
                <label><span>Rs. 8,000+</span><span>33</span></label>
              </div>
            </div>
          </aside>
          <div>
            <SectionHeading
              title="170 Curated"
              highlight="Matches"
              description="Best-selling and newest premium pieces for wedding and festive dressing."
              linkText="Sort: Popular"
              href="#"
            />
            <ProductGrid items={storeProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

function ProductDetailPage() {
  const item = products[0];
  return (
    <>
      <section className="section">
        <div className="detail-grid">
          <div className="detail-gallery">
            <img className="detail-hero-image" src={item.image} alt={item.title} />
            <div className="detail-thumb-row">
              <img src="https://images.unsplash.com/photo-1583391733956-6c77a1340005?auto=format&fit=crop&w=800&q=80" alt="Product detail" />
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80" alt="Embroidery detail" />
              <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80" alt="Drape detail" />
            </div>
          </div>
          <div className="detail-copy">
            <span className="label">Signature Wedding Saree</span>
            <h2>{item.title}</h2>
            <div className="meta-row">
              <span className="rating">★ {item.rating} rating</span>
              <span className="delivery-pill">Ready to ship</span>
            </div>
            <div className="price">{item.price}</div>
            <p>
              A rich red drape with woven zari borders and luminous festive character. Styled for wedding events,
              family ceremonies, and portrait-worthy entrances.
            </p>
            <div className="badge-row">
              <span className="chip">Pure Banarasi Finish</span>
              <span className="chip">Blouse Piece Included</span>
              <span className="chip">Fall & Pico Ready</span>
            </div>
            <ul className="detail-highlights">
              <li><span>Fabric</span><strong>Banarasi Silk Blend</strong></li>
              <li><span>Work</span><strong>Zari Border & Woven Motifs</strong></li>
              <li><span>Color</span><strong>Sunset Crimson</strong></li>
              <li><span>Delivery</span><strong>Estimated in 3-5 days</strong></li>
            </ul>
            <div className="inline-actions">
              <a className="cta-btn" href="cart.html">Add to Cart</a>
              <a className="ghost-btn" href="placeorder.html">Buy Now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionHeading
          title="You May Also"
          highlight="Love"
          description="More richly styled picks chosen for the same premium celebratory mood."
        />
        <ProductGrid items={storeProducts.slice(1, 5)} />
      </section>
    </>
  );
}

function CartPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Your Cart</div>
        <h1>Pieces selected for your next celebration.</h1>
        <p>Review your favorites, confirm quantities, and move smoothly to checkout.</p>
      </section>
      <section className="section">
        <div className="cart-grid">
          <div className="cart-items">
            {products.slice(0, 2).map((item) => (
              <div className="cart-item" key={item.title}>
                <div className="cart-item-main">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span className="label">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p className="muted">Color: Celebration Red | Size: Free Size</p>
                  </div>
                </div>
                <div>
                  <div className="qty-pill"><span>-</span><strong>1</strong><span>+</span></div>
                  <div className="price">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <aside className="cart-panel">
            <h3>Order Summary</h3>
            <div className="order-row"><span>Subtotal</span><strong>Rs. 12,430</strong></div>
            <div className="order-row"><span>Shipping</span><strong>Free</strong></div>
            <div className="order-row"><span>Festive Offer</span><strong>- Rs. 820</strong></div>
            <hr />
            <div className="order-row"><span>Total</span><strong>Rs. 11,610</strong></div>
            <div className="inline-actions">
              <a className="cta-btn" href="placeorder.html">Proceed to Checkout</a>
              <a className="ghost-btn" href="store.html">Continue Shopping</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function PlaceOrderPage() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Checkout</div>
        <h1>Place your order with confidence and celebration-ready timing.</h1>
        <p>Enter delivery details, choose payment, and review your curated fashion order.</p>
      </section>
      <section className="section">
        <div className="checkout-grid">
          <div>
            <div className="checkout-card">
              <h3>Shipping Details</h3>
              <div className="form-grid">
                <label className="field"><span>First Name</span><input placeholder="Aarohi" /></label>
                <label className="field"><span>Last Name</span><input placeholder="Patel" /></label>
                <label className="field-full"><span>Address</span><input placeholder="House no, street, landmark" /></label>
                <label className="field"><span>City</span><input placeholder="Ahmedabad" /></label>
                <label className="field"><span>Postal Code</span><input placeholder="380015" /></label>
                <label className="field"><span>Phone</span><input placeholder="+91 98765 43210" /></label>
                <label className="field"><span>Payment</span><select><option>UPI / Card / Netbanking</option></select></label>
              </div>
            </div>
            <div className="checkout-card">
              <h3>Order Notes</h3>
              <label className="field-full"><span>Special requests</span><textarea placeholder="Blouse stitching, gifting note, delivery timing..." /></label>
            </div>
          </div>
          <aside className="summary-card">
            <h3>Final Summary</h3>
            <p className="inline-note">Banarasi Sunset Saree x 1</p>
            <p className="inline-note">Ivory Mehfil Anarkali x 1</p>
            <div className="order-row"><span>Subtotal</span><strong>Rs. 12,430</strong></div>
            <div className="order-row"><span>Dispatch</span><strong>Within 48 hrs</strong></div>
            <div className="order-row"><span>Total Payable</span><strong>Rs. 11,610</strong></div>
            <div className="inline-actions">
              <a className="cta-btn" href="index.html">Place Order</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function RegisterPage() {
  return (
    <>
      <section className="section">
        <div className="auth-grid">
          <div className="auth-panel">
            <div className="eyebrow">Join GG Fashion</div>
            <h1>Create your premium wardrobe account.</h1>
            <p>
              Save favorites, track festive orders, and receive early previews of new arrivals, wedding edits,
              and curated celebration collections.
            </p>
            <ul className="split-promo">
              <li>Personal wishlists for ceremonies and gifting</li>
              <li>Faster checkout for time-sensitive occasion shopping</li>
              <li>Access to styling notes and new festive drops</li>
            </ul>
          </div>
          <div className="auth-panel">
            <h2>Register</h2>
            <div className="form-grid">
              <label className="field"><span>First Name</span><input placeholder="Aarohi" /></label>
              <label className="field"><span>Last Name</span><input placeholder="Shah" /></label>
              <label className="field-full"><span>Email</span><input placeholder="you@example.com" /></label>
              <label className="field-full"><span>Password</span><input type="password" placeholder="Create a secure password" /></label>
              <label className="field-full"><span>Phone</span><input placeholder="+91 98765 43210" /></label>
            </div>
            <div className="inline-actions">
              <a className="cta-btn" href="signin.html">Create Account</a>
            </div>
            <p className="inline-note">Already registered? <a className="text-link" href="signin.html">Sign in here</a></p>
          </div>
        </div>
      </section>
    </>
  );
}

function SigninPage() {
  return (
    <>
      <section className="section">
        <div className="auth-grid">
          <div className="auth-panel">
            <div className="eyebrow">Welcome Back</div>
            <h1>Sign in to continue your festive shopping journey.</h1>
            <p>
              Pick up where you left off, review saved pieces, and complete your order with quicker checkout.
            </p>
          </div>
          <div className="auth-panel">
            <h2>Sign In</h2>
            <div className="form-grid">
              <label className="field-full"><span>Email</span><input placeholder="you@example.com" /></label>
              <label className="field-full"><span>Password</span><input type="password" placeholder="Enter your password" /></label>
            </div>
            <div className="inline-actions">
              <a className="cta-btn" href="index.html">Sign In</a>
              <a className="ghost-btn" href="register.html">Create Account</a>
            </div>
            <p className="inline-note">Forgot your password? Contact customer care for quick assistance.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const pageMap = {
    home: <HomePage />,
    store: <StorePage />,
    search: <SearchPage />,
    detail: <ProductDetailPage />,
    cart: <CartPage />,
    placeorder: <PlaceOrderPage />,
    register: <RegisterPage />,
    signin: <SigninPage />
  };

  return (
    <div className="page-shell">
      <Header />
      {pageMap[page] || <HomePage />}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
