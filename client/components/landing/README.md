# Landing Page Components

This folder contains the components used for the Dime landing page.

## Components

### Header

- **File**: `Header.tsx`
- **Description**: Navigation header with logo, menu items, and mobile menu functionality
- **Features**: Responsive design, mobile menu toggle, navigation links

### FeatureBanner

- **File**: `FeatureBanner.tsx`
- **Description**: Promotional banner highlighting smart budgeting features
- **Features**: Gradient background, call-to-action buttons, dismissible

### CallToAction

- **File**: `CallToAction.tsx`
- **Description**: "See how it works" button with sparkle icon
- **Features**: Styled button with hover effects

### HeroSection

- **File**: `HeroSection.tsx`
- **Description**: Main hero content with headline, description, and mobile app preview
- **Features**: Responsive grid layout, animated elements, mobile phone mockup

## Usage

Import components individually or use the barrel export:

```tsx
// Individual imports
import { Header } from "@/components/landing/Header";
import { FeatureBanner } from "@/components/landing/FeatureBanner";

// Or barrel export
import {
  Header,
  FeatureBanner,
  HeroSection,
  CallToAction,
} from "@/components/landing";
```

## Dependencies

All components use the UI components from `@/components/ui/`:

- `Button` - For all interactive buttons
- `Badge` - For status indicators (used in some components)

## Styling

Components use Tailwind CSS classes and follow the existing design system. The layout is responsive and works on mobile, tablet, and desktop devices.
