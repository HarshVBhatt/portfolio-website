# Harsh Bhatt - Data Scientist Portfolio

A modern, responsive portfolio website showcasing data science expertise, professional experience, and projects with a sleek dark theme and metallic design elements.

## 🌟 Features

- **Single Page Design**: Smooth scrolling navigation between sections
- **Dark Theme**: Professional dark theme with metallic accents and excellent readability
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Interactive Elements**: Project filtering, hover effects, and smooth animations
- **3D Cards**: Professional experience cards with depth and shadow effects
- **Tech Stack Showcase**: Visual grid displaying technical skills and tools
- **Project Integration**: GitHub-integrated project showcase with filtering by role and industry

## 📄 Sections

1. **Home**: Profile image, bio, areas of interest, and tech stack
2. **Professional Experience**: Detailed career history with achievements and article links
3. **Projects**: GitHub-integrated project showcase with filtering
4. **Contact**: Social media links and professional contact information

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI primitives
- **Icons**: React Icons (Font Awesome)
- **Routing**: Wouter
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Deployment to Vercel

### Prerequisites
- Node.js 18+ 
- npm or yarn
- GitHub account
- Vercel account

### Step 1: Prepare the Repository

1. **Clone or fork this repository** to your GitHub account
2. **Ensure all files are committed** and pushed to GitHub

### Step 2: Build Configuration

The project is already configured for Vercel deployment with:
- `vercel.json` configuration file
- Optimized build settings
- Static file serving setup

### Step 3: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

2. **Import Project**: 
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository

3. **Configure Project**:
   - **Project Name**: `harsh-bhatt-portfolio` (or your preferred name)
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

4. **Deploy**: Click "Deploy" and wait for the build to complete

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project directory**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new one
   - Confirm build settings
   - Deploy

### Step 4: Verify Deployment

1. **Check build logs** in Vercel dashboard for any errors
2. **Visit your deployed site** at the provided URL
3. **Test functionality**:
   - Navigation between sections
   - Project filtering
   - Responsive design on different devices
   - External links (GitHub, LinkedIn, etc.)

### Step 5: Custom Domain (Optional)

1. **In Vercel Dashboard**: Go to your project settings
2. **Navigate to Domains**: Add your custom domain
3. **Configure DNS**: Update your domain's DNS settings as instructed
4. **SSL Certificate**: Vercel automatically provides HTTPS

## 🔧 Local Development

### Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/harsh-portfolio.git
   cd harsh-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**: Navigate to [http://localhost:5000](http://localhost:5000)

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/public` directory.

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML template
├── server/                # Express backend
├── shared/               # Shared TypeScript schemas
├── attached_assets/      # Profile images and assets
├── vercel.json          # Vercel deployment configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎨 Customization

### Updating Personal Information

1. **Profile Image**: Replace `attached_assets/profile_pic_1750700111630.png` with your image
2. **Bio and Experience**: Edit `client/src/components/HomeSection.tsx` and `ExperienceSection.tsx`
3. **Projects**: Update project data in `client/src/components/ProjectsSection.tsx`
4. **Contact Links**: Modify links in `client/src/components/ContactSection.tsx`

### Styling Changes

- **Colors**: Modify CSS variables in `client/src/index.css`
- **Layout**: Adjust Tailwind classes in component files
- **Typography**: Update font styles in the CSS file

## 🐛 Troubleshooting

### Common Deployment Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs in Vercel dashboard

2. **Asset Loading Issues**:
   - Ensure all assets are in the correct directory
   - Check file paths and extensions
   - Verify assets are committed to Git

3. **Routing Issues**:
   - Ensure `vercel.json` is properly configured
   - Check that all routes are handled correctly

### Local Development Issues

1. **Port Conflicts**: Change port in `server/index.ts` if 5000 is occupied
2. **Module Resolution**: Clear `node_modules` and reinstall dependencies
3. **TypeScript Errors**: Check type definitions and imports

## 📧 Support

For issues or questions regarding deployment:
1. Check Vercel's [documentation](https://vercel.com/docs)
2. Review build logs for specific error messages
3. Ensure all environment variables are properly set

## 📄 License

This project is open source and available under the [MIT License](LICENSE).