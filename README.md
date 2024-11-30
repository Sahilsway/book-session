## Overview

This project is a Next.js TypeScript-based application for booking consultations. It includes features like a calendar for scheduling appointments, navigation between pages, a 404 "Not Found" page, and demo data integration for consultants using a JSON file.


## Features

### Next.js Framework
- Server-side rendering and optimized performance.
### Navigation
- Smooth navigation using next/navigation APIs.
### Appointment Calendar
- Calendar with selectable dates and unavailable dates grayed out.
### Consultants Demo Data
- Consultants' data is fetched from a local JSON file for demonstration purposes.
### 404 Page
- Custom "Not Found" page for invalid routes.
### Styling
- Fully responsive design using Tailwind CSS.


## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/Sahilsway/book-session.git
```

2. Install Dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Features and Implementation

### Navigation

#### Navigation Button:
- Implemented using next/navigation's useRouter hook.
- Example:
```bash

"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/consultants")}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Go to Consultants
    </button>
  );
}

```

### Calendar Component

- Built using react-calendar.
- Unavailable dates are displayed in gray.
- Available dates are highlighted using conditional styling.

### Demo Data Integration

- A consultants.json file contains mock data.
- The data is fetched using fs for server-side fetching in Next.js:

```bash

[
  {
    "id": 1,
    "about1": "Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 4 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.",
    "about2": "My commitment to continuous learning keeps me updated with the latest therapeutic techniques, allowing me to provide the best possible care. Whether you seek stress management strategies or personal growth, I am here to empower you on your journey towards emotional well-being. I offer convenient online consultation bookings, making it easier for you to take the first step towards a healthier, happier life.",
    "qualification": [
      "Ph.D. in Clinical Psychology - Harvard University",
      "M.A. in Counseling - University of California, Berkeley"
    ],
    "licence": "Licensed Professional Counselor (LPC) - State of DEF",
    "certification": "Certified Cognitive Behavioral Therapist (CBT)",
    "connection": "Member, American Psychological Association (APA)",
    "experience": "10+ years of experience in individual and group therapy",
    "location": "Chennai, India",
    "language": "English, Hindi"
  }
]

```

#### 404 Page

- Implemented as not-found.tsx inside the app directory:

```bash
import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="pt-40 min-h-screen flex flex-col items-center">
      <h2 className="text-[120px] font-[600] text-[#1F86D0] opacity-[24%]">
        404
      </h2>
      <h4 className="text-[44px] font-[500] text-[#1F86D0]">
        Oops! Page Not Found
      </h4>
      <p className="mt-3 w-1/4 text-[20px] font-[500] text-[#7F7F7F] text-center">
        It seems we can't find the page you're looking for, Let's get you back
        on track!
      </p>

      <div className="w-56 mt-10 flex justify-center">
        <Link
          href="/"
          className="w-full py-4 text-white bg-[#1F86D0] font-[600] text-[18px] rounded-[3rem] cursor-pointer"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
```

#### Styling

- Border Gradient:
**Achieved using bg-gradient-to-r and mask-image for precise control.**
**Icons:**
- Used React Icons for consistent UI components like BsShare.

Credits

#### Built using:

- Next.js for the frontend framework.
- Tailwind CSS for styling.
- React Icons for consistent UI icons.
- react-calendar for date management.

**Thank you The Zenstreet for this amazing oportunity to work on this project! 😊**
