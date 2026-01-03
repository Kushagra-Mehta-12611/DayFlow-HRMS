# Odoo HRMS - Human Resource Management System

A modern HR management system built with Next.js 16, React 19, and Supabase.

## Features

- **Authentication**: Secure login with role-based access control
- **Employee Dashboard**: 
  - View profile information
  - Check in/out for attendance
  - Submit leave requests
- **Admin Dashboard**:
  - Manage employee list
  - Approve/reject leave requests
  - Update employee salaries

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Library**: React 19.2.3
- **Database**: Supabase (PostgreSQL)
- **Styling**: CSS Modules with custom styles
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd odoo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional - defaults are configured):
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
odoo/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout
│   ├── page.js            # Login page (/)
│   ├── employee/          # Employee dashboard (/employee)
│   │   └── page.js
│   ├── admin/             # Admin dashboard (/admin)
│   │   └── page.js
│   └── globals.css        # Global styles
├── components/             # Reusable React components
│   ├── AttendanceCard.js
│   └── LeaveForm.js
├── lib/                   # Utility libraries
│   └── supabaseClient.js  # Supabase client configuration
├── middleware.js          # Authentication middleware
├── public/                # Static assets
└── package.json          # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Database Schema

The application expects the following Supabase tables:

- `employees` - Employee information
- `user_roles` - User role assignments (admin/employee)
- `attendance` - Attendance records
- `leave_requests` - Leave request submissions
- `payroll` - Payroll information

## Authentication Flow

1. User logs in with email/password
2. System checks user role from `user_roles` table
3. Redirects to appropriate dashboard:
   - Admin → `/admin`
   - Employee → `/employee`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
