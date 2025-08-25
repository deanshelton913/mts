# Mukilteo Technical Solutions Website

A professional website for Mukilteo Technical Solutions, a small business providing technical solutions to help other small businesses establish their online presence.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Forms**: Functional contact forms for lead generation
- **Mobile Responsive**: Works perfectly on all devices
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navigation.tsx     # Navigation component
│   └── Footer.tsx         # Footer component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mts
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional, you can:

1. **Use a form service** like Formspree, Netlify Forms, or similar
2. **Set up an API route** in Next.js to handle form submissions
3. **Integrate with your email service** like SendGrid or AWS SES

## 🎨 Customization

### Colors
The website uses a blue color scheme. You can customize colors in the Tailwind classes throughout the components.

### Content
Update the content in each page component to match your business:
- Company information
- Services offered
- Contact details
- Portfolio projects

### Images
Replace emoji placeholders with actual images for a more professional look.

## 📱 SEO Optimization

The website includes:
- Proper meta tags
- Open Graph tags
- Structured data
- Semantic HTML
- Fast loading times

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support or questions about this website, contact Mukilteo Technical Solutions.

---

Built with ❤️ by Mukilteo Technical Solutions
