// USA state + city location pages for The Cereal Boxes.
// Unique, cereal/CPG-specific copy per place (granola makers, breakfast
// startups, grocery brands, private label) so nothing overlaps between pages.

export interface LocationCity {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sceneHeading: string;
  localScene: string;
  districts: string[];
  signatureSector: string;
  deliveryNote: string;
  faqCityAnswer: string;
  stat: string;
}

export interface LocationState {
  slug: string;
  name: string;
  abbr: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sceneHeading: string;
  marketScene: string;
  industries: string[];
  stat: string;
  cities: LocationCity[];
}

export const locationStates: LocationState[] = [
  {
    slug: "california", name: "California", abbr: "CA",
    metaTitle: "Custom Cereal Boxes in California | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for California food brands — DTC breakfast startups, granola makers, and grocery labels. Free quote, low minimums.",
    h1: "Custom Cereal Boxes for California Food Brands",
    intro: "California is the launchpad for American food innovation, and breakfast is no exception. We print custom cereal boxes for the Golden State's DTC cereal startups, granola makers, and grocery brands — retail-ready and built to sell.",
    sceneHeading: "Packaging for California's Food Innovators",
    marketScene: "No state produces more food startups than California. The better-for-you cereal and granola brands of the Bay Area, the influencer-driven DTC breakfast labels of Los Angeles, and the wellness-focused makers of San Diego all compete for attention on shelf and in the feed. A custom-printed box is what turns a new cereal into a brand — bold enough to catch a shopper's eye and structured enough to protect the product. We print the retail-ready cereal boxes California brands scale with.",
    industries: [
      "DTC and better-for-you cereal brands",
      "Granola and breakfast startups",
      "Grocery and private-label brands",
      "Health, protein, and functional foods",
      "Kids and novelty cereal makers",
      "Subscription and sample-box brands",
    ],
    stat: "The USA's top food-startup state",
    cities: [
      { slug: "los-angeles", name: "Los Angeles",
        metaTitle: "Custom Cereal Boxes in Los Angeles, CA | The Cereal Boxes",
        metaDescription: "Custom printed cereal boxes for Los Angeles food brands and DTC breakfast startups. Bold retail-ready packaging, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Los Angeles Brands",
        intro: "Los Angeles food brands sell as much on story and design as on taste, and the box is where it starts. We print custom cereal boxes for LA's DTC breakfast startups, granola makers, and specialty food brands.",
        sceneHeading: "Serving LA's DTC Breakfast Brands",
        localScene: "Los Angeles turns food into culture. The influencer-backed DTC cereal and snack startups, the health-forward granola makers of the Westside, and the specialty food brands of the Arts District all package for a market that judges with its eyes first. A bold, custom-printed box makes an LA breakfast brand look established from its first production run — striking on a boutique-grocery shelf and irresistible in an unboxing video.",
        districts: ["Downtown Arts District", "Culver City", "Santa Monica", "Silver Lake", "El Segundo"],
        signatureSector: "DTC breakfast and granola brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across Los Angeles County, from Downtown and the Arts District to the Westside, with low minimums and fast turnaround.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands and startups across Los Angeles County, including the Arts District, Culver City, and El Segundo. Send your dieline or artwork for a fast quote.",
        stat: "For LA's DTC breakfast scene" },
      { slug: "san-francisco", name: "San Francisco",
        metaTitle: "Custom Cereal Boxes in San Francisco, CA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for San Francisco better-for-you food startups and grocery brands. Retail-ready, eco options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for San Francisco Brands",
        intro: "San Francisco's better-for-you food startups treat packaging with the same rigor as their recipes. We print custom cereal boxes for Bay Area breakfast and granola brands built to scale.",
        sceneHeading: "Retail-Ready Boxes for Bay Area Startups",
        localScene: "The Bay Area builds food brands like it builds companies — data-driven, mission-led, and design-obsessed. Better-for-you cereal startups, protein and functional-food makers, and the grocery brands stocked in Northern California's natural-food stores all need packaging that reads clean, communicates benefits fast, and often signals sustainability. A well-structured, custom-printed box does all three, giving Bay Area brands a retail presence that matches their ambition.",
        districts: ["SoMa", "Mission District", "Dogpatch", "Oakland", "Emeryville"],
        signatureSector: "better-for-you food startups",
        deliveryNote: "We print and ship custom cereal boxes to food brands across San Francisco and the Bay Area, with eco options and quick quote turnaround for fast-scaling startups.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across San Francisco and the Bay Area, including SoMa, the Mission, and the East Bay. Request a quote for pricing and lead times.",
        stat: "For Bay Area better-for-you brands" },
      { slug: "san-diego", name: "San Diego",
        metaTitle: "Custom Cereal Boxes in San Diego, CA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for San Diego granola, wellness, and nutrition food brands. Retail-ready and eco options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for San Diego Brands",
        intro: "San Diego's wellness and nutrition food scene keeps producing new breakfast and granola brands. We print custom cereal boxes — including eco options — for makers across the county.",
        sceneHeading: "Boxes for San Diego's Nutrition Brands",
        localScene: "San Diego's food scene leans healthy and active. Granola and clean-label cereal makers, sports-nutrition and functional-food brands, and the wellness startups of North Park package for buyers who read the panel as closely as the front. A clean, custom-printed box — often on recycled board — lets a San Diego brand communicate its ingredients story clearly while looking retail-ready on a natural-grocery shelf.",
        districts: ["North Park", "Sorrento Valley", "Carlsbad", "Little Italy", "Miramar"],
        signatureSector: "granola and nutrition brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across San Diego County, from North Park and Little Italy to the Sorrento Valley and Carlsbad, with eco options.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across San Diego County, including North Park, Sorrento Valley, and Carlsbad. Eco-friendly board is available — request a quote.",
        stat: "For San Diego's nutrition brands" },
    ],
  },
  {
    slug: "texas", name: "Texas", abbr: "TX",
    metaTitle: "Custom Cereal Boxes in Texas | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for Texas food brands — Austin natural-food startups, Dallas grocery brands, Houston makers. Free quote, low minimums.",
    h1: "Custom Cereal Boxes for Texas Food Brands",
    intro: "Texas has become a magnet for food brands and grocery innovation, and breakfast is a fast-growing category. We print custom cereal boxes for the Lone Star State's startups, granola makers, and private-label brands.",
    sceneHeading: "Boxes for the Texas Food Boom",
    marketScene: "Texas food is booming. Austin's natural and organic startups, Dallas's grocery and private-label brands, and Houston's diverse base of food makers all need retail-ready packaging that competes on crowded shelves and ships without damage. A custom-printed box gives a Texas cereal or granola brand shelf impact and structural reliability, while low minimums let new makers test the market before committing to a full run.",
    industries: [
      "Natural and organic food startups",
      "Grocery and private-label brands",
      "Granola and breakfast makers",
      "Protein and functional-food brands",
      "Farmers-market and craft-food sellers",
      "Kids and novelty cereal makers",
    ],
    stat: "A fast-growing food-brand market",
    cities: [
      { slug: "austin", name: "Austin",
        metaTitle: "Custom Cereal Boxes in Austin, TX | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Austin natural and organic food startups. Retail-ready packaging, eco options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Austin Food Startups",
        intro: "Austin is one of the country's great natural-food incubators, and breakfast brands are a big part of it. We print custom cereal boxes for the city's organic, granola, and startup food makers.",
        sceneHeading: "Boxes for Austin's Natural-Food Startups",
        localScene: "Austin practically runs on natural food. Home to a wave of organic and better-for-you brands — many launched at farmers markets before landing on natural-grocery shelves — the city produces granola, cereal, and snack makers by the dozen. Packaging is how they graduate from market table to retail: a clean, custom-printed box with a clear ingredients story signals the authenticity Austin's food buyers reward, while low minimums suit a first retail run.",
        districts: ["East Austin", "South Congress", "The Domain", "Mueller", "Round Rock"],
        signatureSector: "natural and organic food startups",
        deliveryNote: "We print and ship custom cereal boxes to food brands across Austin, from East Austin and South Congress to the Domain, with low minimums for first retail runs.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands and startups across Austin, including East Austin, South Congress, and the Domain. Low minimums make first runs easy — request a quote.",
        stat: "For Austin's natural-food scene" },
      { slug: "dallas", name: "Dallas",
        metaTitle: "Custom Cereal Boxes in Dallas, TX | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Dallas-Fort Worth grocery and private-label food brands. Retail-ready, bulk pricing, fast turnaround. Free quote.",
        h1: "Custom Cereal Boxes for Dallas-Fort Worth",
        intro: "Dallas-Fort Worth is a major grocery and distribution hub, home to established food brands and private-label programs. We print custom cereal boxes for DFW brands and retailers at scale.",
        sceneHeading: "Retail Boxes for Dallas-Fort Worth",
        localScene: "Dallas-Fort Worth sits at the center of the country's grocery and distribution network, which is why so many food brands and private-label programs base their packaging there. Grocery brands, contract manufacturers, and the growing base of DTC food startups all order cereal boxes that meet retail specs and hold up through the supply chain. Consistent, retail-ready printing at volume is what DFW brands need — the same box, the same color, on every reorder.",
        districts: ["Design District", "Deep Ellum", "Plano", "Arlington", "Fort Worth"],
        signatureSector: "grocery and private-label brands",
        deliveryNote: "We print and ship custom cereal boxes to brands across Dallas-Fort Worth, from the Design District and Deep Ellum to Plano and Fort Worth, with bulk pricing and consistent reorders.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to grocery brands and food makers across Dallas-Fort Worth, including Plano, Arlington, and Fort Worth. Send your dieline for a quote.",
        stat: "For DFW's grocery brands" },
      { slug: "houston", name: "Houston",
        metaTitle: "Custom Cereal Boxes in Houston, TX | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Houston food brands and makers. Retail-ready packaging, low minimums, fast quotes across the metro.",
        h1: "Custom Cereal Boxes for Houston Brands",
        intro: "Houston's diverse, fast-growing food economy includes a deep base of breakfast and snack brands. We print custom cereal boxes for makers across the metro.",
        sceneHeading: "Boxes for Houston's Food Makers",
        localScene: "Houston's diversity drives its food scene, from culturally inspired breakfast brands to health and granola makers selling across the metro. The food entrepreneurs of the Heights, the contract manufacturers on the outskirts, and a large base of home-grown Etsy and grocery brands all need packaging that looks retail-ready and ships intact. A custom-printed box gives Houston brands that finished, shelf-ready look while keeping unit costs low enough to grow.",
        districts: ["The Heights", "Montrose", "Downtown", "Sugar Land", "Katy"],
        signatureSector: "diverse food brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across the Houston metro, from the Heights and Montrose to Sugar Land and Katy, with low minimums and fast quotes.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across the Houston metro, including the Heights, Montrose, and the suburbs. Request a quote with your artwork or dieline.",
        stat: "For Houston's diverse food scene" },
    ],
  },
  {
    slug: "new-york", name: "New York", abbr: "NY",
    metaTitle: "Custom Cereal Boxes in New York | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for New York food brands — Brooklyn granola makers, NYC specialty and gourmet cereal. Free quote, low minimums.",
    h1: "Custom Cereal Boxes for New York Food Brands",
    intro: "New York is a proving ground for specialty and better-for-you food brands, from Manhattan gourmet labels to the artisan granola makers of Brooklyn. We print custom cereal boxes for makers across the Empire State.",
    sceneHeading: "Boxes for New York's Food Brands",
    marketScene: "New York's food scene sets national trends. The gourmet and specialty cereal brands of Manhattan, the artisan granola and breakfast makers of Brooklyn, and the private-label programs behind the city's grocery and bodega network all package for one of the most competitive retail markets in the world. A distinctive, retail-ready box is what earns a spot on a crowded specialty shelf — and what makes a New York breakfast brand look premium enough to command its price.",
    industries: [
      "Specialty and gourmet cereal brands",
      "Brooklyn artisan granola makers",
      "DTC and better-for-you breakfast brands",
      "Grocery, bodega, and private-label programs",
      "Health, protein, and functional foods",
      "Kids and novelty cereal makers",
    ],
    stat: "A trend-setting specialty food market",
    cities: [
      { slug: "new-york-city", name: "New York City",
        metaTitle: "Custom Cereal Boxes in New York City, NY | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for NYC specialty, gourmet, and DTC breakfast brands. Retail-ready printing, fast turnaround. Free quote across the five boroughs.",
        h1: "Custom Cereal Boxes for New York City Brands",
        intro: "New York City food brands compete on distinction, from gourmet cereal labels to DTC breakfast startups. We print custom cereal boxes — retail-ready and premium — across the five boroughs.",
        sceneHeading: "Serving NYC's Specialty Food Brands",
        localScene: "In New York City, a cereal box has to earn its shelf space against the best in the business. Manhattan's gourmet and specialty brands, the DTC breakfast startups launching out of shared kitchens, and the private-label programs behind the city's grocery and bodega network all treat packaging as a competitive edge. A sharp, custom-printed box — with premium finishes when the price point calls for it — gives an NYC brand the presence to stand out in the country's toughest retail market.",
        districts: ["SoHo", "Lower East Side", "Williamsburg", "Long Island City", "Harlem"],
        signatureSector: "specialty and gourmet food brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across all five boroughs of New York City, from SoHo and the Lower East Side to Brooklyn and Queens, with premium finishes.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across all five boroughs of New York City, including SoHo, the Lower East Side, and Brooklyn. Request a quote for pricing.",
        stat: "For NYC's specialty food brands" },
      { slug: "brooklyn", name: "Brooklyn",
        metaTitle: "Custom Cereal Boxes in Brooklyn, NY | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Brooklyn artisan granola and craft-food brands. Eco and printed options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Brooklyn Food Makers",
        intro: "Brooklyn is a hotbed of artisan granola and craft-food brands built on authenticity. We print custom cereal boxes — including eco options — for the borough's makers.",
        sceneHeading: "Craft Boxes for Brooklyn's Food Makers",
        localScene: "Brooklyn made craft food a movement. The artisan granola makers of Bushwick, the small-batch cereal and snack brands of Greenpoint, and the design-led food labels of Williamsburg sell a story of handmade quality — and the box is where that story lives. Recycled board with clean, characterful printing fits Brooklyn's craft ethos and gives a maker a retail-ready look that still feels handmade, even as they scale into specialty grocers.",
        districts: ["Williamsburg", "Bushwick", "Greenpoint", "Gowanus", "Sunset Park"],
        signatureSector: "artisan granola and craft food",
        deliveryNote: "We print and ship custom cereal boxes to food makers across Brooklyn, from Williamsburg and Bushwick to Greenpoint and Gowanus, with eco and printed options.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to artisan food makers across Brooklyn, including Williamsburg, Bushwick, and Greenpoint. Eco board is available — request a quote.",
        stat: "For Brooklyn's craft-food makers" },
    ],
  },
  {
    slug: "florida", name: "Florida", abbr: "FL",
    metaTitle: "Custom Cereal Boxes in Florida | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for Florida food brands — Miami Latin and export brands, Orlando novelty and promo boxes. Free quote, low minimums.",
    h1: "Custom Cereal Boxes for Florida Food Brands",
    intro: "Florida's food scene blends Latin American flavor, export trade, and a strong novelty and gift market. We print custom cereal boxes for makers across the Sunshine State.",
    sceneHeading: "Boxes for Florida's Food Brands",
    marketScene: "Florida food is diverse and export-minded. Miami's Latin American food brands and export programs, Orlando's novelty and promotional box demand, and the health and granola makers across the state all package for a bright, competitive market. A bold, custom-printed box gives Florida brands the shelf impact they need at home and the durability to travel — whether it's headed to a Miami grocer or shipping across the region.",
    industries: [
      "Latin American food and export brands",
      "Novelty, promo, and licensed cereal",
      "Granola and health-food makers",
      "Grocery and private-label brands",
      "DTC and startup breakfast brands",
      "Gift, tourism, and specialty boxes",
    ],
    stat: "A diverse, export-minded food market",
    cities: [
      { slug: "miami", name: "Miami",
        metaTitle: "Custom Cereal Boxes in Miami, FL | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Miami Latin food brands and export programs. Bold retail-ready printing, fast turnaround. Free quote.",
        h1: "Custom Cereal Boxes for Miami Food Brands",
        intro: "Miami's Latin American food brands and export programs package with bold color and bilingual design. We print custom cereal boxes for makers across the metro.",
        sceneHeading: "Bold Boxes for Miami's Food Brands",
        localScene: "Miami is the gateway between US and Latin American food commerce, and its breakfast and cereal brands reflect it. The Latin food makers of Doral and Hialeah, the export-focused programs shipping across the region, and the design-forward DTC brands of Wynwood all favor bold, bilingual packaging that pops on shelf and travels well. A vivid, custom-printed box gives Miami brands the visual punch and durability their competitive, export-minded market demands.",
        districts: ["Wynwood", "Doral", "Hialeah", "Brickell", "Medley"],
        signatureSector: "Latin food and export brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across the Miami metro, from Wynwood and Doral to Hialeah and Medley, with bold, durable printing.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across the Miami metro, including Wynwood, Doral, and Hialeah. Send your artwork for a fast quote.",
        stat: "Gateway to Latin food trade" },
      { slug: "orlando", name: "Orlando",
        metaTitle: "Custom Cereal Boxes in Orlando, FL | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Orlando novelty, promo, and food brands. Retail-ready and limited-edition options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Orlando Brands",
        intro: "Orlando's tourism and events economy drives strong demand for novelty, promotional, and limited-edition cereal boxes. We print custom cereal boxes for makers across Central Florida.",
        sceneHeading: "Novelty & Promo Boxes for Central Florida",
        localScene: "Orlando's economy runs on experiences, and cereal boxes ride along as novelties, souvenirs, and promotional items. The theme-park and tourism trade drives themed and limited-edition boxes, while a growing base of food startups and granola makers across Central Florida needs retail-ready packaging. Custom printing — including limited-run and licensed designs — lets Orlando brands turn a cereal box into a collectible, and low minimums make seasonal and promo runs easy.",
        districts: ["Downtown Orlando", "Winter Park", "Lake Nona", "Kissimmee", "Sanford"],
        signatureSector: "novelty and promotional boxes",
        deliveryNote: "We print and ship custom cereal boxes to brands across the Orlando metro and Central Florida, from Downtown and Winter Park to Lake Nona and Kissimmee.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across the Orlando metro and Central Florida, including Winter Park and Lake Nona. Limited-run designs are welcome — request a quote.",
        stat: "For Central Florida promo boxes" },
    ],
  },
  {
    slug: "illinois", name: "Illinois", abbr: "IL",
    metaTitle: "Custom Cereal Boxes in Illinois | The Cereal Boxes",
    metaDescription: "Custom cereal boxes for Illinois food brands. Based in Bloomington, IL, we serve Chicago and statewide brands with fast, local turnaround. Free quote.",
    h1: "Custom Cereal Boxes for Illinois Food Brands",
    intro: "Illinois is our home state — we're based in Bloomington — and a heartland of American food manufacturing. We print custom cereal boxes for Chicago and statewide brands, often with a genuine local advantage.",
    sceneHeading: "Our Home State — Chicago to Central Illinois",
    marketScene: "Illinois is at the center of the country's food industry, from Chicago's CPG and grocery giants to a broad base of makers statewide. Chicago's food startups, the private-label programs behind Midwest grocers, and the granola and breakfast makers across Central Illinois all need retail-ready cereal packaging. As a printer based in Bloomington, we serve Illinois brands with short lead times and an understanding of the local food scene — from a first retail run to a full grocery rollout.",
    industries: [
      "CPG and grocery food brands",
      "DTC and startup breakfast brands",
      "Private-label and contract manufacturing",
      "Granola and health-food makers",
      "Farmers-market and craft-food sellers",
      "Kids and novelty cereal makers",
    ],
    stat: "Based in Bloomington, IL",
    cities: [
      { slug: "chicago", name: "Chicago",
        metaTitle: "Custom Cereal Boxes in Chicago, IL | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Chicago food brands and CPG startups. In-state supply, retail-ready printing, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Chicago Food Brands",
        intro: "Chicago is one of America's great food cities, home to CPG giants and a wave of new breakfast brands. As an in-state supplier, we print custom cereal boxes for Chicago makers and startups.",
        sceneHeading: "In-State Boxes for Chicago's Food Brands",
        localScene: "Chicago's food heritage runs deep, from the CPG headquarters that shaped American breakfast to the new wave of granola and better-for-you startups launching across the city. The food entrepreneurs of the West Loop, the makers of Pilsen, and the private-label programs behind Midwest grocers all need retail-ready cereal packaging. Being based in Illinois ourselves, we turn Chicago orders around quickly and understand the local grocery scene — helping brands look shelf-ready close to home.",
        districts: ["West Loop", "Pilsen", "Fulton Market", "The Loop", "Naperville"],
        signatureSector: "CPG and startup food brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across Chicago and the metro, from the West Loop and Fulton Market to the suburbs, with in-state speed and low minimums.",
        faqCityAnswer: "Yes — and as an Illinois-based printer we're local to you. We print and ship custom cereal boxes to food brands across Chicago and the metro, including the West Loop and Fulton Market.",
        stat: "In-state supply for Chicago" },
      { slug: "bloomington", name: "Bloomington",
        metaTitle: "Custom Cereal Boxes in Bloomington, IL | The Cereal Boxes",
        metaDescription: "Custom cereal boxes printed locally from Bloomington, IL. Fast local turnaround and low minimums for Central Illinois food brands. Free quote.",
        h1: "Custom Cereal Boxes in Bloomington, IL",
        intro: "Bloomington is our home base, which makes us a genuinely local printer for Central Illinois food brands. We produce custom cereal boxes with short lead times and hands-on support.",
        sceneHeading: "Your Local Bloomington Box Printer",
        localScene: "Bloomington-Normal anchors Central Illinois with a steady base of food makers, farmers-market sellers, and small grocery brands. As a cereal-box printer headquartered right here, we know the local market and can serve area brands directly — quick reorders for grocery and market sellers, and hands-on help getting a first dieline print-ready. Whether you sell at a Twin Cities market or ship to regional grocers, buying local shortens lead times and simplifies proofing.",
        districts: ["Downtown Bloomington", "Normal", "Uptown Normal", "East Bloomington", "Central Illinois"],
        signatureSector: "local Central Illinois food makers",
        deliveryNote: "As a Bloomington-based printer, we serve Bloomington-Normal and Central Illinois food brands directly, with short lead times, low minimums, and easy reorders.",
        faqCityAnswer: "Yes — Bloomington is our home base, so we're your local printer. We produce custom cereal boxes for Bloomington-Normal and Central Illinois food brands with short local lead times.",
        stat: "Our Bloomington headquarters" },
    ],
  },
  {
    slug: "georgia", name: "Georgia", abbr: "GA",
    metaTitle: "Custom Cereal Boxes in Georgia | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for Georgia food brands — Atlanta CPG and startups, Savannah specialty makers. Free quote, low minimums.",
    h1: "Custom Cereal Boxes for Georgia Food Brands",
    intro: "Georgia's logistics strength and growing food-startup scene make it a strong packaging market. We print custom cereal boxes for makers across the Peach State — from Atlanta brands to Savannah's specialty makers.",
    sceneHeading: "Boxes for Georgia's Food Brands",
    marketScene: "Georgia pairs a food-startup boom with the country's leading logistics network. Atlanta's CPG and DTC breakfast brands, the private-label programs served by the state's distribution hubs, and Savannah's specialty and gift-food makers all package for a growing, competitive market. A retail-ready custom box gives Georgia brands the shelf impact and shipping durability they need, whether it's headed to a metro grocer or a coastal gift shop.",
    industries: [
      "CPG and DTC breakfast brands",
      "Grocery and private-label programs",
      "Granola and health-food makers",
      "Specialty and gift-food brands",
      "Startup and farmers-market sellers",
      "Kids and novelty cereal makers",
    ],
    stat: "A food-startup & logistics market",
    cities: [
      { slug: "atlanta", name: "Atlanta",
        metaTitle: "Custom Cereal Boxes in Atlanta, GA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Atlanta CPG and DTC breakfast brands. Retail-ready printing, bulk pricing, fast turnaround. Free quote.",
        h1: "Custom Cereal Boxes for Atlanta Food Brands",
        intro: "Atlanta's food-startup scene and logistics muscle make it a strong market for breakfast brands. We print custom cereal boxes for CPG and DTC makers across the metro.",
        sceneHeading: "Retail Boxes for Atlanta's Food Brands",
        localScene: "Atlanta blends a fast-growing food-startup culture with the South's leading distribution network. The DTC breakfast and granola brands born from the city's creative energy, the CPG makers scaling into national grocery, and the private-label programs served by Atlanta's logistics hubs all need retail-ready cereal boxes. Custom printing at volume — consistent color, sharp structure, reliable reorders — is what lets an Atlanta brand move from local shelves to regional distribution.",
        districts: ["Downtown", "Midtown", "West Midtown", "the BeltLine", "Alpharetta"],
        signatureSector: "CPG and DTC breakfast brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across metro Atlanta, from Midtown and West Midtown to the BeltLine and Alpharetta, with bulk pricing.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across metro Atlanta, including Midtown, West Midtown, and Alpharetta. Request a quote for pricing and lead times.",
        stat: "For Atlanta's food startups" },
      { slug: "savannah", name: "Savannah",
        metaTitle: "Custom Cereal Boxes in Savannah, GA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Savannah specialty and gift-food brands. Eco and printed options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Savannah Brands",
        intro: "Savannah's specialty-food and gift market makes it a distinctive packaging scene. We print custom cereal boxes — including eco options — for the area's makers.",
        sceneHeading: "Specialty Boxes for Savannah",
        localScene: "Savannah's food scene is shaped by tourism, craft, and Southern hospitality. The specialty granola and breakfast makers of the Starland District, the gift and souvenir food brands of the Historic District, and the coastal artisan makers package products meant to be given as much as eaten. A characterful, custom-printed box — often on recycled board — turns a Savannah cereal or granola into a giftable specialty product that travels well.",
        districts: ["Historic District", "Starland District", "Downtown", "Pooler", "Thomas Square"],
        signatureSector: "specialty and gift-food makers",
        deliveryNote: "We print and ship custom cereal boxes to food brands across the Savannah area, from the Historic and Starland Districts to Pooler, with eco and printed options.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to specialty food makers across Savannah, including the Historic and Starland Districts. Eco board is available — request a quote.",
        stat: "For Savannah's specialty makers" },
    ],
  },
  {
    slug: "washington", name: "Washington", abbr: "WA",
    metaTitle: "Custom Cereal Boxes in Washington | The Cereal Boxes",
    metaDescription: "Custom printed cereal boxes for Washington State food brands — Seattle natural and organic granola makers. Eco options, low minimums. Free quote.",
    h1: "Custom Cereal Boxes for Washington State Brands",
    intro: "Washington State's natural and organic food culture keeps producing new breakfast and granola brands. We print custom cereal boxes — including recycled board — for makers across the state.",
    sceneHeading: "Eco Boxes for Washington's Food Brands",
    marketScene: "Washington food leans natural, organic, and sustainable. Seattle's granola and better-for-you cereal makers, the outdoor- and coffee-adjacent breakfast brands, and the eco-conscious startups across the state want packaging that reflects their values as much as their recipes. Recycled board with clean, benefit-forward printing fits that ethos, and the state's design-literate buyers reward brands that get the details right. We print the eco and retail-ready cereal boxes Washington makers rely on.",
    industries: [
      "Natural and organic breakfast brands",
      "Granola and better-for-you cereal makers",
      "Eco-conscious and startup food brands",
      "Coffee- and outdoor-adjacent food labels",
      "Grocery and private-label programs",
      "Farmers-market and craft-food sellers",
    ],
    stat: "A natural & organic food market",
    cities: [
      { slug: "seattle", name: "Seattle",
        metaTitle: "Custom Cereal Boxes in Seattle, WA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Seattle natural and organic granola and breakfast brands. Recycled board, retail-ready printing. Free quote.",
        h1: "Custom Cereal Boxes for Seattle Food Brands",
        intro: "Seattle's natural and organic food makers pair clean recipes with sustainable packaging. We print custom cereal boxes — including recycled board — for granola and breakfast brands across the metro.",
        sceneHeading: "Eco Boxes for Seattle's Food Brands",
        localScene: "Seattle takes sustainability seriously, and its food brands follow suit. The granola and better-for-you cereal makers of Ballard and Fremont, the coffee- and outdoor-adjacent breakfast labels, and the eco-conscious startups of South Lake Union favor recycled board and clean, benefit-forward printing. A retail-ready box that communicates ingredients and values clearly is what Seattle's discerning grocery buyers respond to — and what helps a local brand scale into the Pacific Northwest's natural-grocery shelves.",
        districts: ["Ballard", "Fremont", "South Lake Union", "Georgetown", "Bellevue"],
        signatureSector: "natural and organic food brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across the Seattle metro, from Ballard and Fremont to South Lake Union and Bellevue, with recycled board available.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across the Seattle metro, including Ballard, Fremont, and South Lake Union. Recycled board is available — request a quote.",
        stat: "For Seattle's organic food makers" },
      { slug: "spokane", name: "Spokane",
        metaTitle: "Custom Cereal Boxes in Spokane, WA | The Cereal Boxes",
        metaDescription: "Custom cereal boxes for Spokane granola makers and regional food brands. Retail-ready and eco options, low minimums. Free quote.",
        h1: "Custom Cereal Boxes for Spokane Brands",
        intro: "Spokane anchors the Inland Northwest with a practical, craft-forward food scene. We print custom cereal boxes for the region's granola makers and food brands.",
        sceneHeading: "Boxes for the Inland Northwest",
        localScene: "Spokane is the commercial and creative hub of the Inland Northwest, and its food makers reflect the region's outdoor, value-minded character. The granola and breakfast makers, the farmers-market sellers of Kendall Yards, and the small grocery brands across the area package products for a market that prizes authenticity and value. A retail-ready custom box gives Spokane brands a professional shelf presence without a big-city budget, and low minimums suit small, seasonal runs.",
        districts: ["Downtown Spokane", "Kendall Yards", "South Perry", "Spokane Valley", "Liberty Lake"],
        signatureSector: "granola and regional food brands",
        deliveryNote: "We print and ship custom cereal boxes to food brands across Spokane and the Inland Northwest, from Downtown and Kendall Yards to Spokane Valley and Liberty Lake.",
        faqCityAnswer: "Yes. We print and ship custom cereal boxes to food brands across Spokane and the Inland Northwest, including Kendall Yards and South Perry. Request a quote for pricing.",
        stat: "Hub of the Inland Northwest" },
    ],
  },
];

// ── Varied internal linking: unique target + anchor + sentence per page ──
export const CEREAL_LINK_POOL = [
  "custom-printed-cereal-boxes", "custom-breakfast-cereal-boxes", "mini-cereal-boxes",
  "small-cereal-boxes", "wholesale-cereal-boxes", "cardboard-cereal-box",
  "personalized-cereal-boxes", "custom-colorful-cereal-boxes", "12-oz-cereal-box",
  "gable-cereal-box", "limited-edition-cereal-boxes", "cereal-mylar-bags",
  "blank-cereal-boxes", "standard-cereal-packaging",
];
export const CEREAL_ANCHORS: Record<string, string[]> = {
  "custom-printed-cereal-boxes": ["custom printed cereal boxes", "full-colour printed boxes", "branded cereal boxes"],
  "custom-breakfast-cereal-boxes": ["custom breakfast cereal boxes", "breakfast cereal packaging"],
  "mini-cereal-boxes": ["mini cereal boxes", "single-serve mini boxes", "sample-size cereal boxes"],
  "small-cereal-boxes": ["small cereal boxes", "compact cereal boxes"],
  "wholesale-cereal-boxes": ["wholesale cereal boxes", "bulk cereal boxes"],
  "cardboard-cereal-box": ["cardboard cereal boxes", "recyclable cardboard boxes"],
  "personalized-cereal-boxes": ["personalized cereal boxes", "custom personalised boxes"],
  "custom-colorful-cereal-boxes": ["colorful cereal boxes", "bold colour cereal boxes"],
  "12-oz-cereal-box": ["12 oz cereal boxes", "standard 12 oz boxes"],
  "gable-cereal-box": ["gable cereal boxes", "gable-top cereal boxes"],
  "limited-edition-cereal-boxes": ["limited-edition cereal boxes", "limited-run cereal boxes"],
  "cereal-mylar-bags": ["cereal mylar bags", "resealable mylar bags"],
  "blank-cereal-boxes": ["blank cereal boxes", "plain cereal boxes"],
  "standard-cereal-packaging": ["standard cereal packaging", "standard-size cereal boxes"],
};
export function cerealSeed(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h | 0);
}
export function cerealLinkTargets(seedText: string, n: number): string[] {
  const arr = [...CEREAL_LINK_POOL];
  let a = cerealSeed(seedText) || 1;
  const rand = () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
  return arr.slice(0, n);
}
export function cerealAnchor(slug: string, seedText: string, off = 0): string {
  const list = CEREAL_ANCHORS[slug] ?? [slug.replace(/-/g, " ")];
  return list[(cerealSeed(seedText) + off) % list.length];
}
export function cerealPick<T>(arr: T[], seedText: string, off = 0): T {
  return arr[(cerealSeed(seedText) + off) % arr.length];
}

export function getLocationState(slug: string): LocationState | undefined {
  return locationStates.find((s) => s.slug === slug);
}
export function getLocationCity(stateSlug: string, citySlug: string) {
  const state = getLocationState(stateSlug);
  if (!state) return undefined;
  const city = state.cities.find((c) => c.slug === citySlug);
  return city ? { state, city } : undefined;
}
export function allCityParams() {
  return locationStates.flatMap((state) => state.cities.map((city) => ({ state: state.slug, city: city.slug })));
}
