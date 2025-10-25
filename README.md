# 🌱 EcoShop - Sustainable Shopping Platform

![App Preview](https://imgix.cosmicjs.com/52b1e000-b159-11f0-a808-31b5d2a33ba3-photo-1542838132-92c53300491e-1761365765143.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive web application showcasing sustainable shopping practices, eco-friendly products, and community-driven environmental challenges. Built with Next.js 15 and powered by Cosmic CMS.

## ✨ Features

- 🏪 **Store Directory** - Browse eco-friendly stores with detailed sustainability ratings
- 🛍️ **Product Catalog** - Discover sustainable products with eco-certifications
- 📚 **Educational Tips** - Learn about sustainable shopping practices by category
- 🎯 **Community Challenges** - Participate in time-limited sustainability challenges
- 🏆 **Achievement System** - Earn badges and track your environmental impact
- 📱 **Fully Responsive** - Optimized experience across all devices
- ⚡ **Fast Performance** - Server-side rendering with Next.js 15
- 🎨 **Modern UI** - Clean, intuitive interface with smooth animations

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fc4e5792c9229c30fe514b&clone_repository=68fc506292c9229c30fe517a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Eco-Friendly Shopping App: Complete Specification
Core Concept Overview
Your app enforces sustainable shopping practices through a two-stage verification system before payment, promoting jute/paper bag usage and preventing fraudulent weight manipulation.
>
> System Architecture & Features
Stage 1: Sustainable Bag Verification
Purpose: Ensure only eco-friendly bags (jute or paper) are used
>
> Implementation Approach:
>
> Computer Vision AI: Use machine learning models (similar to existing jute bag detection models on Roboflow) to identify bag material​
>
> Camera Integration: Real-time scanning through smartphone camera
>
> Material Classification:
>
> ✅ Approved: Jute bags, paper bags, cloth bags
>
> ❌ Rejected: Plastic bags, synthetic materials
>
> Visual Feedback: Green checkmark for approved, red X for rejected materials
>
> Technical Features:
>
> Multi-angle scanning for accuracy
>
> Texture and pattern recognition
>
> Material database with 95%+ accuracy
>
> Quick scan (2-3 seconds)
>
> Stage 2: Anti-Fraud Weight Monitoring
Purpose: Prevent shoplifting by detecting static/unchanged weights
>
> Implementation Approach:
>
> Bluetooth Weight Sensors: Similar to AppWeigh technology for real-time weight monitoring​
>
> Dynamic Weight Tracking: Continuous monitoring during shopping
>
> Fraud Detection Algorithm:
>
> Tracks weight changes every 2-3 seconds
>
> Flags if weight remains identical for extended period (suggests bag switch or item removal)
>
> Requires minimum 3+ weight variations during shopping session
>
> Smart Detection Rules:
>
> ✅ Normal: Weight increases as items added, minor fluctuations
>
> ⚠️ Suspicious: Weight constant for >2 minutes while "shopping"
>
> ❌ Blocked: Weight decreases or no variation throughout session
>
> Technical Features:
>
> Real-time Bluetooth connectivity
>
> Weight history graph visualization
>
> Calibration system for different bag weights
>
> Tamper alerts
>
> Stage 3: Secure Payment Integration
Payment Flow:
>
> Only accessible after passing both verification stages
>
> Multiple payment options: UPI, cards, digital wallets
>
> Receipt generation with eco-impact metrics
>
> Loyalty points for consistent sustainable shopping
>
> Additional Essential Features
1. Eco-Impact Dashboard
Personal carbon footprint reduction tracker
>
> Plastic bags avoided counter
>
> Trees saved equivalent
>
> Monthly sustainability score
>
> Community leaderboard
>
> 2. Smart Shopping Assistant
Barcode scanner for product info
>
> Sustainability ratings for products
>
> Alternative eco-friendly product suggestions
>
> Package recyclability information
>
> 3. Reward System
Points for using eco-friendly bags
>
> Bonus for consistent weight validation
>
> Redeemable at partner stores
>
> Achievement badges (Eco Warrior, Green Champion)
>
> 4. Store Integration Features
QR code check-in at store entry
>
> Digital shopping list
>
> Aisle navigation
>
> Real-time inventory check
>
> 5. Community Features
Share eco-achievements on social media
>
> Local sustainability challenges
>
> Connect with eco-conscious shoppers
>
> Tips and articles on green living
>
> 6. Security & Privacy
End-to-end encryption for payment data
>
> Anonymous shopping data analytics
>
> GDPR compliant
>
> Secure cloud backup"

### Code Generation Prompt

> Based on the content model I created for the eco-friendly shopping app specification, build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic
- **Font**: Inter
- **Package Manager**: Bun
- **Image Optimization**: imgix

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun 1.0+
- A Cosmic account with bucket credentials

### Installation

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd ecoshop
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Stores
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: stores } = await cosmic.objects
  .find({ type: 'stores' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Products
```typescript
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Eco Tips by Category
```typescript
const { objects: tips } = await cosmic.objects
  .find({ 
    type: 'eco-tips',
    'metadata.category.key': 'shopping'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage all content. The content structure includes:

### Object Types

1. **Stores** (`stores`)
   - Store name, location, and description
   - Sustainability rating (1-5)
   - Eco features (checkboxes)
   - Store image
   - Active status toggle

2. **Products** (`products`)
   - Product name and description
   - Sustainability score (1-100)
   - Eco certifications (checkboxes)
   - Product image
   - Category
   - Eco alternative information

3. **Eco Tips** (`eco-tips`)
   - Tip title and content (markdown)
   - Category (select-dropdown)
   - Featured image
   - Impact level (radio buttons)

4. **Challenges** (`challenges`)
   - Challenge name and description
   - Points reward
   - Duration in days
   - Challenge type (select-dropdown)
   - Challenge icon (emoji)
   - Active status toggle

5. **Achievements** (`achievements`)
   - Badge name and description
   - Badge icon (emoji)
   - Unlock criteria
   - Points value
   - Tier (select-dropdown: Bronze, Silver, Gold, Platinum)

### Key Features

- **Real-time content updates** from Cosmic CMS
- **Server-side rendering** for optimal performance
- **Type-safe TypeScript** interfaces matching content model
- **Optimized image delivery** via imgix
- **Error handling** for API failures

## 🚢 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy

### Netlify

1. Push your code to GitHub
2. Create new site from Git in Netlify
3. Add environment variables in site settings
4. Build command: `bun run build`
5. Publish directory: `.next`

### Environment Variables

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💚 About Cosmic

This app is built with [Cosmic](https://www.cosmicjs.com), the headless CMS that empowers developers to build modern applications with any technology stack.

<!-- README_END -->