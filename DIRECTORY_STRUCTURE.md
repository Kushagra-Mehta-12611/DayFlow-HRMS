# Odoo Project - Detailed File Directory Structure

**Project Root:** `C:\Users\neeti\Documents\odoo\`  
**Project Type:** Next.js 16.1.1 with React 19.2.3  
**Last Updated:** Generated automatically

---

## 📁 Root Directory Files

```
odoo/
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 package-lock.json               # Locked dependency versions (228KB)
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 next.config.ts                  # Next.js configuration
├── 📄 next-env.d.ts                   # Next.js TypeScript environment types
├── 📄 eslint.config.mjs               # ESLint configuration
├── 📄 postcss.config.mjs              # PostCSS configuration (Tailwind CSS)
├── 📄 README.md                       # Project documentation
├── 📄 .gitignore                      # Git ignore patterns
├── 📁 node_modules/                   # NPM dependencies (excluded from detail)
├── 📁 .next/                          # Next.js build output (excluded from detail)
└── 📁 [Source directories below]
```

---

## 📁 Source Code Structure (`src/`)

```
src/
├── 📄 app.js                          # Main React Router application entry point
│   └── Routes: /, /employee, /admin
│
├── 📄 supabaseClient.js               # Supabase client configuration
│   └── Exports: supabase client instance
│
├── 📁 components/                      # Reusable React components
│   ├── 📄 attendenceCard.js           # Attendance card component
│   └── 📄 leaveform.js                # Leave request form component
│
└── 📁 pages/                           # Page components
    ├── 📄 login.js                    # Login page component
    ├── 📄 employee_dashboard.js       # Employee dashboard page
    └── 📄 amin_dashboard.js           # Admin dashboard page (typo: "amin")
```

---

## 📁 Public Assets (`public/`)

```
public/
├── 📄 file.svg                        # File icon SVG
├── 📄 globe.svg                       # Globe icon SVG
├── 📄 next.svg                         # Next.js logo SVG
├── 📄 vercel.svg                     # Vercel logo SVG
└── 📄 window.svg                     # Window icon SVG
```

---

## 📁 HTML Templates

### Admin HR Templates (`Admin hr/`)

```
Admin hr/
├── 📄 dashboard.html                  # Admin dashboard HTML template
├── 📄 profile.html                    # Admin profile page HTML
├── 📄 salary.html                     # Salary management HTML
├── 📄 signIn.html                     # Admin sign-in page HTML
├── 📄 signUp.html                     # Admin sign-up page HTML
└── 📄 Time Off.html                   # Time off management HTML
```

### Employee Templates (`employees/`)

```
employees/
├── 📄 Attendance.html                 # Employee attendance page HTML
├── 📄 Employees Dashboard.html        # Employee dashboard HTML
├── 📄 Sign In Page.html               # Employee sign-in page HTML
├── 📄 Time Off Request.html           # Time off request form HTML
└── 📄 Time Off.html                   # Time off viewing page HTML
```

---

## 📦 Package Dependencies

### Production Dependencies (`package.json`)
- **next**: 16.1.1 - Next.js framework
- **react**: 19.2.3 - React library
- **react-dom**: 19.2.3 - React DOM renderer
- **@supabase/supabase-js**: ^2.89.0 - Supabase JavaScript client
- **react-router-dom**: ^7.11.0 - React Router for client-side routing

### Development Dependencies
- **typescript**: ^5 - TypeScript compiler
- **@types/node**: ^20 - Node.js type definitions
- **@types/react**: ^19 - React type definitions
- **@types/react-dom**: ^19 - React DOM type definitions
- **eslint**: ^9 - ESLint linter
- **eslint-config-next**: 16.1.1 - Next.js ESLint configuration
- **tailwindcss**: ^4 - Tailwind CSS framework
- **@tailwindcss/postcss**: ^4 - Tailwind PostCSS plugin

---

## 🔧 Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2017
- **Module**: ESNext
- **JSX**: react-jsx
- **Module Resolution**: bundler
- **Path Aliases**: `@/*` → `./*`

### Next.js Configuration (`next.config.ts`)
- Basic Next.js configuration (no custom options)

### ESLint Configuration (`eslint.config.mjs`)
- Uses Next.js core web vitals and TypeScript configs
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### PostCSS Configuration (`postcss.config.mjs`)
- Tailwind CSS PostCSS plugin configured

---

## 📊 Project Statistics

- **Total Source Files**: 15+ (excluding node_modules and .next)
- **React Components**: 5
- **HTML Templates**: 11
- **Configuration Files**: 6
- **Public Assets**: 5 SVG files

---

## 🚀 Available Scripts

From `package.json`:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 📝 Notes

1. **File Naming**: There's a typo in `amin_dashboard.js` (should be `admin_dashboard.js`)
2. **Mixed Architecture**: Project contains both React/Next.js components (`.js` files) and static HTML templates
3. **Supabase Integration**: Supabase client configured in `src/supabaseClient.js`
4. **Routing**: Uses React Router DOM for client-side routing in `app.js`
5. **Build Output**: `.next/` directory contains Next.js build artifacts (excluded from this listing)
6. **Dependencies**: `node_modules/` contains all npm packages (excluded from this listing)

---

## 🔍 Excluded Directories

- `node_modules/` - NPM package dependencies (6733+ files)
- `.next/` - Next.js build cache and output files
- Any `.env*` files (as per .gitignore)

---

*Generated automatically - Update this file when project structure changes*

