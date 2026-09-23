/* =====================================================================
   MARIUM HAMMAD ART STUDIO - ARTWORK DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   index.html reads everything below and builds the site automatically.

   TO ADD A NEW ARTWORK
   1. Upload the photo to the "images" folder in GitHub (lowercase name,
      no spaces, e.g. blue-dunes.jpg).
   2. Copy one whole { ... }, block from the list below, paste it at the
      end of the PUBLISHED list (before the drafts), and change the details.
   3. Give it a new id (ART-030, ART-031 ...) and set published: true.
   4. Commit the change. The site updates in about a minute.

   RULES
   - Keep every value in "double quotes" and every line ending in a comma.
   - Leave a value empty ("") if you do not have it yet. Empty fields are
     simply not shown on the website.
   - Only pieces with published: true appear on the website.
   - price is a number with no $ sign or comma (550, not "$550").
   - order decides the display order (1 is first).
   - status must be one of:
       Available, Reserved, Sold, Commission Example,
       Personal Collection, Not for Sale
   - Prices marked SUGGESTED were chosen for you and are NOT confirmed.
     Change any of them by editing the number.
   - The youtube field is kept for your own records only. Videos are
     NOT shown on the website.
   - Each artwork gets its own shareable link:
       https://mariumhammad.github.io/marium-art-studio/#ART-001
   ===================================================================== */

window.SITE = {
  name: "Marium Hammad Art Studio",
  email: "mariumhammad@hotmail.com",

  // Photo shown at the top of the page. Leave "" for the built-in drawing.
  heroImage: "images/the-bismillah-medallion.jpg",

  // Resume PDF in the main folder of the repository. It is OFF by default
  // because the PDF shows your phone number. To turn it on, upload the PDF
  // and set this to "Marium_Hammad_Artist_Resume.pdf".
  resumeFile: "resume/Marium_Hammad_Artist_Resume.pdf",

  // Leave a link as "" to hide its button.
  social: {
    youtube: "https://www.youtube.com/@mariumhammad8000",
    instagram: "https://www.instagram.com/aptitude_skillsart1/",
    facebook: "https://www.facebook.com/profile.php?id=61593280235090"
  }
};

window.ARTWORKS = [

  /* ---------------------------------------------------------------
     PUBLISHED ARTWORKS (visible on the website)
     Dimensions and materials are empty because they are not confirmed.
     Fill them in when you have measured: they then show on the card.
     --------------------------------------------------------------- */

  {
    id: "ART-001",
    published: true,
    order: 1,
    title: "Bismillah: A Timeless Expression of Faith",
    category: "Islamic-Inspired Mixed Media",
    group: "Islamic-inspired",
    price: 550,                        // from your catalogue
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Original mixed-media artwork featuring hand-painted Islamic calligraphy in a pearl-edged circle, sculpted pink roses, and a richly textured gold background.",
    image: "images/the-bismillah-medallion.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/FKMP-rz1Q48",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-027",
    published: true,
    order: 2,
    title: "The Ornate Majesty",
    category: "Islamic-Inspired Mixed Media",
    group: "Islamic-inspired",
    price: 550,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A mixed-media interpretation of Ya Sin: an elephant portrait decorated with gold leaf, floral inlays and stone accents.",
    image: "images/the-ornate-majesty.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-004",
    published: true,
    order: 3,
    title: "Emerald Geode Flow",
    category: "Resin Geode Art",
    group: "Resin geode",
    price: 500,                        // set by you
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Handcrafted resin artwork inspired by natural geodes and flowing mineral formations.",
    image: "images/emerald-geode-art.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/oD2h0m9IcW8",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-014",
    published: true,
    order: 4,
    title: "The Cherry Blossom Dancer",
    category: "Multi-Media Tapestry",
    group: "Textured and floral",
    price: 450,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Multi-media tapestry (2024) of a dancer in a blue gown, with raised cherry blossoms, gold leaf, pearls and glitter.",
    image: "images/cherry-blossom-dancer.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-002",
    published: true,
    order: 5,
    title: "Yasin in Gold",
    category: "Islamic-Inspired Mixed Media",
    group: "Islamic-inspired",
    price: 450,                        // from your catalogue
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Handcrafted Surah Yaseen artwork presented as decorative Quranic wall art: an open golden book with illuminated calligraphy, framed by ornate black motifs.",
    image: "images/yasin-in-gold.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/EujbBcpa5IA",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-022",
    published: true,
    order: 6,
    title: "Geode Mirror Art",
    category: "Geode-Inspired Mixed Media",
    group: "Resin geode",
    price: 450,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Geode-inspired artwork with layered cream, copper and gold bands, crystal accents and pearls on a mirrored background, in a gold frame.",
    image: "images/mm-geode-mirror-art.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-026",
    published: true,
    order: 7,
    title: "The Garnet Bonsai",
    category: "Sculpted Relief Art",
    group: "Gold and copper",
    price: 400,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A sculpted gold bonsai tree with deep red crystal foliage on a glossy black background, in a gold frame.",
    image: "images/the-garnet-bonsai.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-018",
    published: true,
    order: 8,
    title: "Golden Citrus Relief",
    category: "Textured Relief Art",
    group: "Textured and floral",
    price: 350,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Sculpted lemons and green leaves with gold leaf over a black-and-white geometric star pattern, in an ornate black frame.",
    image: "images/golden-citrus-relief.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-008",
    published: true,
    order: 9,
    title: "Allah and Muhammad Name Art Set",
    category: "Islamic-Inspired Art",
    group: "Islamic-inspired",
    price: 150,                        // from your catalogue
    priceNote: "each",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Handcrafted coordinating pieces featuring the names of Allah and Muhammad in black medallions on textured backgrounds, in natural wood frames.",
    image: "images/allah-muhammad-set.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/o2nc7UPXMnk",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-016",
    published: true,
    order: 10,
    title: "Coral Blooms on Sapphire Water",
    category: "Textured Floral Art",
    group: "Textured and floral",
    price: 300,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Sculpted coral and magenta blooms with pearls and crystals across a sapphire-blue textured background, in a black frame.",
    image: "images/coral-blooms-on-sapphire-water.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-015",
    published: true,
    order: 11,
    title: "Copper Constellations",
    category: "Sculpted Relief Art",
    group: "Gold and copper",
    price: 450,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A sculpted copper-toned tree with sparkling hanging accents on a deep midnight-blue background, in a copper-toned frame.",
    image: "images/copper-constellations.jpg",
    moreImages: ["images/copper-constellations-detail.jpg"],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-020",
    published: true,
    order: 12,
    title: "Heritage Bloom",
    category: "Textured Floral Art",
    group: "Textured and floral",
    price: 350,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A symmetrical folk-style floral motif in red, yellow and white, with gold leaf accents on a deep blue textured background, in a black frame.",
    image: "images/heritage-bloom.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-006",
    published: true,
    order: 13,
    title: "Blossom in Motion",
    category: "Textured Mixed Media",
    group: "Textured and floral",
    price: 250,                        // from your catalogue
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Textured artwork of slender copper-toned trees with golden leaves, pink blossoms, glitter and jewelled accents, and a jewelled archway at the centre.",
    image: "images/blossom-in-motion.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/ICwu9-ACea8",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-025",
    published: true,
    order: 14,
    title: "Sapphire Abyss",
    category: "Geode-Inspired Sculpture",
    group: "Resin geode",
    price: 250,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A freestanding geode-inspired piece with sapphire-blue swirls, white crystal clusters and gold accents.",
    image: "images/sapphire-abyss.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-017",
    published: true,
    order: 15,
    title: "Floral Triptych",
    category: "Sculptural Flora, Mixed Media",
    group: "Textured and floral",
    price: 300,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Three sculpted floral panels in yellow, peach and coral on gold, blue and teal grounds, set in a black frame with pearl accents.",
    image: "images/floral-triptych.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-023",
    published: true,
    order: 16,
    title: "Neutral Opulence",
    category: "Textured Floral Art",
    group: "Textured and floral",
    price: 350,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Five white flowers edged in gold, with hanging crystal and gold-bead accents, in a gold frame.",
    image: "images/neutral-opulence.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-028",
    published: true,
    order: 17,
    title: "Velvet Bloom on Frost",
    category: "Textured Floral Art",
    group: "Textured and floral",
    price: 250,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Sculpted magenta roses and green vines on a black gold-patterned panel, set on silver glitter in a black frame with pearl accents.",
    image: "images/velvet-bloom-on-frost.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-019",
    published: true,
    order: 18,
    title: "Golden Leaf Set",
    category: "Textured Relief Art",
    group: "Gold and copper",
    price: 450,                        // SUGGESTED price, not confirmed
    priceNote: "for the set of 2",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "A set of two gold-toned textured panels with a stone-like relief, on black backgrounds in natural wood frames.",
    image: "images/golden-leaf-set.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-021",
    published: true,
    order: 19,
    title: "Midnight Solitude",
    category: "Textured Abstract Art",
    group: "Gold and copper",
    price: 200,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Golden flowers over sweeping black and gold brush strokes.",
    image: "images/midnight-solitude.jpg",
    moreImages: ["images/midnight-solitude-room.jpg"],
    youtube: "",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-024",
    published: true,
    order: 20,
    title: "Pink Always Favourite",
    category: "Textured Floral Art",
    group: "Textured and floral",
    price: 125,                        // SUGGESTED price, not confirmed
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "Sculpted pink and white magnolia blossoms with crystals and gold glitter lines on a colourful canvas.",
    image: "images/pink-always-favourite.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },


  /* ---------------------------------------------------------------
     HELD BACK (hidden until you decide)
     --------------------------------------------------------------- */

  {
    id: "ART-029",
    published: false,
    order: 21,
    title: "Pearl Coast Geode",
    category: "",
    group: "",
    price: 399,                        // price from your OLD website. HELD BACK: this photo shows a flower-vase piece, not a geode. Confirm the title, or replace the photo
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/pearl-coast-geode.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  },


  /* ---------------------------------------------------------------
     DRAFTS FROM YOUR OLD CATALOGUE (hidden)
     These have no title or photo yet. Some of them are probably the
     same artworks as the newer ones above. When you match one up,
     delete the draft so the piece is not listed twice.
     --------------------------------------------------------------- */

  {
    id: "ART-003",
    published: false,
    order: 103,
    title: "",
    category: "",
    group: "",
    price: 550,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-003.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/pKZX7ZNxGiU",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-005",
    published: false,
    order: 105,
    title: "",
    category: "",
    group: "",
    price: 150,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-005.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/6bXi8YjBkSU",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-007",
    published: false,
    order: 107,
    title: "",
    category: "",
    group: "",
    price: 250,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-007.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/HJsp5A56uQE",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-009",
    published: false,
    order: 109,
    title: "",
    category: "",
    group: "",
    price: 125,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-009.jpg",
    moreImages: [],
    youtube: "https://youtube.com/shorts/ZOGPhF7XRtk",
    facebook: "",
    instagram: ""
  },

  {
    id: "ART-010",
    published: false,
    order: 110,
    title: "",
    category: "",
    group: "",
    price: 550,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-010.jpg",
    moreImages: [],
    youtube: "",
    facebook: "https://www.facebook.com/share/r/1Eat8D2iwb/",
    instagram: ""
  },

  {
    id: "ART-011",
    published: false,
    order: 111,
    title: "",
    category: "",
    group: "",
    price: 250,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-011.jpg",
    moreImages: [],
    youtube: "",
    facebook: "https://www.facebook.com/share/p/1HtHxUvGtn/",
    instagram: ""
  },

  {
    id: "ART-012",
    published: false,
    order: 112,
    title: "",
    category: "",
    group: "",
    price: 250,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/art-012.jpg",
    moreImages: [],
    youtube: "",
    facebook: "https://www.facebook.com/share/v/1cVVoX2sAu/",
    instagram: ""
  }


  /* ---------------------------------------------------------------
     BLANK TEMPLATE - copy this block for each new artwork.
     Put a comma after the } above it.

  ,{
    id: "ART-030",
    published: true,
    order: 21,
    title: "",
    category: "",
    group: "",
    price: 0,
    priceNote: "",
    status: "Available",
    dimensions: "",
    materials: "",
    description: "",
    image: "images/your-file-name.jpg",
    moreImages: [],
    youtube: "",
    facebook: "",
    instagram: ""
  }
     --------------------------------------------------------------- */
];
