# Remmit2

**Remmit2** is a mobile fintech/remittance app prototype built with **React + TypeScript + Vite**. The project focuses on converting a Figma mobile design into a working frontend application with a clean, modern, rounded, teal-based visual style.

This repository currently represents a cross-border money transfer and digital wallet app. It includes core screens for the dashboard, recipients, add funds, transfer flow entry, multi-currency wallet, and settings. Most of the current implementation is a static/prototype UI, with several basic interactions such as page routing, back navigation, active bottom navigation, and a wallet details bottom sheet on the Add Funds page.

---

## Table of Contents

- [Product Overview](#product-overview)
- [Project Status](#project-status)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run the Project](#how-to-run-the-project)
- [Application Routing](#application-routing)
- [Layout Architecture](#layout-architecture)
- [Design System](#design-system)
- [Component Documentation](#component-documentation)
- [Page Documentation](#page-documentation)
- [Assets and Figma References](#assets-and-figma-references)
- [Dummy Data and UI Content](#dummy-data-and-ui-content)
- [Interactions and State](#interactions-and-state)
- [Figma-to-Code Conversion Notes](#figma-to-code-conversion-notes)
- [Known Issues and Improvement Notes](#known-issues-and-improvement-notes)
- [Recommended Next Development Steps](#recommended-next-development-steps)
- [Developer Notes](#developer-notes)
- [Conclusion](#conclusion)

---

## Product Overview

Remmit2 is a mobile app prototype designed for:

1. Viewing the user's main balance.
2. Sending money to cross-border recipients.
3. Managing transfer recipients.
4. Adding funds to the user's wallet.
5. Viewing multi-currency balances.
6. Accessing account, security, and support settings.
7. Presenting a fast, low-fee, modern remittance experience.

Conceptually, the application is moving toward a **digital remittance wallet** with features such as:

- Send money.
- Add funds.
- Recipients management.
- Multi-currency wallet.
- Exchange rate preview.
- Transfer activity.
- Payment method selection.
- Wallet details bottom sheet.
- Stellar-powered transfer network messaging.

---

## Project Status

The project is currently in the **frontend prototype / design implementation** stage.

This means:

- The main UI screens have already been implemented.
- Basic routes are already available.
- The data is still hardcoded inside components.
- There is no API integration yet.
- There is no authentication yet.
- There is no form validation yet.
- There is no real transaction logic yet.
- There is no global state management yet.
- Several buttons are still visual/prototype elements only.
- The repository's current focus is matching the application interface with the Figma/PNG design references.

---

## Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| Frontend Framework | React | Building the component-based UI |
| Language | TypeScript | Type safety and cleaner code structure |
| Build Tool | Vite | Development server and frontend build |
| Routing | React Router DOM | Page navigation |
| Icon Library | Lucide React | Line-style icons for the UI |
| Styling | Plain CSS | Global, component-level, and page-level styling |
| Linting | Oxlint | Code quality checks |
| Package Manager | npm | Dependency installation and script execution |

---

## Main Dependencies

Runtime dependencies:

```json
{
  "lucide-react": "^1.23.0",
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-router-dom": "^7.18.1"
}
```

Development dependencies:

```json
{
  "@types/node": "^24.13.2",
  "@types/react": "^19.2.17",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^6.0.3",
  "oxlint": "^1.71.0",
  "typescript": "~6.0.2",
  "vite": "^8.1.1"
}
```

---

## Project Structure

Main repository structure:

```txt
remmit2/
├── figma desain png/
│   ├── Add Fund.png
│   ├── Recepients.png
│   ├── Settings.png
│   ├── Wallet.png
│   └── dashboard.png
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── BottomNav.css
│   │   ├── BottomNav.tsx
│   │   ├── ContactAvatar.css
│   │   ├── ContactAvatar.tsx
│   │   ├── TopHeader.css
│   │   └── TopHeader.tsx
│   │
│   ├── pages/
│   │   ├── AddFunds.css
│   │   ├── AddFunds.tsx
│   │   ├── Dashboard.css
│   │   ├── Dashboard.tsx
│   │   ├── Recipients.css
│   │   ├── Recipients.tsx
│   │   ├── Settings.css
│   │   ├── Settings.tsx
│   │   ├── Transfer.css
│   │   ├── Transfer.tsx
│   │   ├── Wallet.css
│   │   └── Wallet.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Shiki-12/remmit2.git
cd remmit2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open the URL provided by Vite in the terminal, usually:

```txt
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

The build script runs the TypeScript build first, then creates the production bundle using Vite.

### 5. Preview the production build

```bash
npm run preview
```

### 6. Run linting

```bash
npm run lint
```

Linting is handled by Oxlint.

---

## NPM Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Starts the development server |
| `build` | `tsc -b && vite build` | Builds TypeScript and production assets |
| `lint` | `oxlint` | Runs the linter |
| `preview` | `vite preview` | Previews the production build |

---

## Application Routing

Main routing is defined in `src/App.tsx`.

| Path | Component | Screen Name | Purpose |
|---|---|---|---|
| `/` | `Dashboard` | Dashboard / Home | Main app overview screen |
| `/recipients` | `Recipients` | Recipients | Recipient list screen |
| `/add-funds` | `AddFunds` | Add Funds | Add money to wallet |
| `/transfer` | `Transfer` | Send Money / Transfer | Select a recipient before transfer |
| `/wallet` | `Wallet` | Wallet | Wallet and multi-currency balances |
| `/settings` | `Settings` | Settings | App/account settings |

### Routing Pattern

The application uses:

```tsx
BrowserRouter
Routes
Route
NavLink
useNavigate
useLocation
```

`BottomNav` is placed at the main layout level, so it appears across all pages.

---

## Layout Architecture

The main layout follows this structure:

```txt
BrowserRouter
└── app-container
    ├── page-content
    │   └── active route page
    └── BottomNav
```

### `app-container`

Class: `.app-container`

Purpose:

- Acts as the main wrapper for the app.
- Uses a column layout.
- Takes the full height of the root app.
- Keeps the app background consistent.

### `page-content`

Class: `.page-content`

Purpose:

- Contains the active page.
- Enables vertical scrolling.
- Hides the scrollbar.
- Adds `80px` bottom padding so the content does not get covered by the bottom navigation.

### Root App Sizing

In `src/index.css`, the root app is constrained as a mobile frame:

```css
#root {
  width: 100%;
  max-width: 375px;
  height: 100vh;
  max-height: 812px;
  background-color: var(--bg-app);
  position: relative;
  overflow: hidden;
}
```

Design meaning:

- The target visual layout is a mobile viewport.
- The app follows a frame close to **375 × 812 px**.
- The app is presented like a mobile mockup centered on desktop screens.
- This is suitable for a Figma mobile-to-React conversion workflow.

---

# Design System

## Visual Identity

The app's current visual direction is:

- Clean mobile fintech interface.
- Rounded UI.
- Teal as the primary brand color.
- Card-based layout.
- Soft app background.
- White surface cards.
- Minimal line icons.
- Light glassmorphism.
- Generous spacing.
- Clear hierarchy for balance, actions, recipients, and transaction activity.

---

## Global Design Tokens

Design tokens are defined in `src/index.css` under `:root`.

### Typography

| Token | Value | Purpose |
|---|---|---|
| `--font-sans` | `Inter, system-ui, -apple-system, sans-serif` | Main app font |

Inter is imported from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### Background Colors

| Token | Value | Purpose |
|---|---|---|
| `--bg-body` | `#ebefee` | Background outside the app frame |
| `--bg-app` | `#f4f7f6` | Main mobile app background |
| `--bg-surface` | `#ffffff` | Card/input/button surface |
| `--bg-elevated` | `#ffffff` | Elevated surface |

### Text Colors

| Token | Value | Purpose |
|---|---|---|
| `--text-primary` | `#054f48` | Main headings and amount text |
| `--text-neutral` | `#1f2937` | General text |
| `--text-secondary` | `#6b7280` | Subtitle and metadata text |
| `--text-tertiary` | `#9ca3af` | Placeholder and light text |
| `--text-inverse` | `#ffffff` | Text on dark backgrounds |

### Brand Colors

| Token | Value | Purpose |
|---|---|---|
| `--brand-primary` | `#0f766e` | Primary teal color |
| `--brand-secondary` | `#22c55e` | Green accent |
| `--brand-tertiary` | `#0ea5e9` | Blue accent |
| `--brand-neutral` | `#747877` | Neutral gray |
| `--brand-success` | `#047857` | Success state |
| `--brand-processing` | `#0ea5e9` | Processing state |

### Border

| Token | Value | Purpose |
|---|---|---|
| `--border-light` | `#e5e7eb` | Light card/input border |

### Radius

| Token | Value | Purpose |
|---|---|---|
| `--radius-sm` | `8px` | Small button/badge radius |
| `--radius-md` | `12px` | Medium button/input radius |
| `--radius-lg` | `16px` | Medium card radius |
| `--radius-xl` | `24px` | Large card/modal radius |
| `--radius-full` | `9999px` | Avatar, pill, circular button, bottom nav |

### Shadow

| Token | Purpose |
|---|---|
| `--shadow-sm` | Small subtle shadow for lightweight UI elements |
| `--shadow-md` | Medium shadow for elevated components |
| `--shadow-lg` | Larger shadow, mainly for floating navigation |
| `--shadow-card` | Soft card shadow for premium UI surfaces |

### Glassmorphism

| Token | Value | Purpose |
|---|---|---|
| `--glass-bg` | `rgba(255, 255, 255, 0.7)` | Glass background |
| `--glass-border` | `rgba(255, 255, 255, 0.5)` | Glass border |
| `--glass-blur` | `16px` | Glass blur strength |

Global class:

```css
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}
```

---

## Global Animation

### Fade In Up

Main animation:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Animation utility classes:

```css
.animate-fade-in-up
.stagger-1
.stagger-2
.stagger-3
.stagger-4
.stagger-5
```

Purpose:

- Gives UI elements a smooth upward entrance.
- Supports staggered animation across cards, lists, and sections.
- Fits the polished mobile fintech experience.

---

## Interaction Style

Global styles for `button` and `a`:

- Removes default border/background.
- Uses pointer cursor.
- Adds transitions for transform, opacity, background, and box-shadow.
- On active/tap, buttons scale down using `scale(0.96)`.
- Active links use `scale(0.98)`.

UX meaning:

- The UI feels tactile like a mobile app.
- It provides clear visual feedback when users tap an element.
- It is suitable for a clickable prototype experience.

---

# Component Documentation

## 1. `BottomNav`

Files:

```txt
src/components/BottomNav.tsx
src/components/BottomNav.css
```

### Purpose

`BottomNav` is the main bottom navigation component. It appears on all pages because it is mounted in `App.tsx`.

### Menu Items

| Menu | Path | Icon |
|---|---|---|
| Home | `/` | `Home` |
| Transfers | `/transfer` | `ArrowRightLeft` |
| Wallet | `/wallet` | `Wallet` |
| Smart Split / History | `/add-funds` | `ReceiptText` |
| Settings | `/settings` | `Settings` |

### Dynamic Fourth Tab Label

The fourth tab label changes based on the current route.

Logic:

```tsx
if (
  location.pathname === '/' ||
  location.pathname === '/recipients' ||
  location.pathname === '/transfer'
) {
  return 'Smart Split';
}

return 'History';
```

Current behavior:

| Current Path | Fourth Tab Label |
|---|---|
| `/` | Smart Split |
| `/recipients` | Smart Split |
| `/transfer` | Smart Split |
| `/wallet` | History |
| `/add-funds` | History |
| `/settings` | History |

### Active State

`NavLink` is used to detect the active route.

When active:

- The label turns teal.
- The icon receives a teal circular background.
- The icon becomes white.
- The icon moves slightly upward with `translateY(-2px)`.
- A soft teal shadow appears behind the icon.

### Visual Style

Class: `.bottom-nav`

- `position: absolute`
- `bottom: 24px`
- `left: 20px`
- `width: calc(100% - 40px)`
- `height: 70px`
- `border-radius: var(--radius-full)`
- Uses glass background.
- Uses `16px` blur.
- Uses a large floating shadow.
- Stays above the content with `z-index: 100`.

### UX Note

The bottom navigation feels like a floating pill navigation. This is appropriate for a modern mobile fintech app. However, the fourth tab's dynamic label can potentially confuse users, so it should be validated against the final Figma/user flow.

---

## 2. `ContactAvatar`

Files:

```txt
src/components/ContactAvatar.tsx
src/components/ContactAvatar.css
```

### Purpose

`ContactAvatar` displays a recipient/contact avatar.

### Props

```tsx
interface ContactAvatarProps {
  name: string;
  isAdd?: boolean;
  isActive?: boolean;
}
```

| Prop | Type | Purpose |
|---|---|---|
| `name` | `string` | Contact name shown below the avatar |
| `isAdd` | `boolean` optional | Turns the avatar into an add button |
| `isActive` | `boolean` optional | Applies active border and active text style |

### Avatar Source

The component uses DiceBear API for avatar generation.

Special seed mapping:

| Name | DiceBear Seed |
|---|---|
| Mama | Lily |
| Father | Felix |
| Brother | Jack |

If the name does not exist in the mapping, the seed uses the provided name:

```tsx
https://api.dicebear.com/7.x/adventurer/svg?seed=${name}
```

### Visual Style

- Container width: `63px`.
- Avatar circle: `63px × 63px`.
- Full radius circle.
- Add state uses dashed border.
- Active state uses teal border.
- Name font size: `13px`.
- Long names are truncated with ellipsis.

---

## 3. `TopHeader`

Files:

```txt
src/components/TopHeader.tsx
src/components/TopHeader.css
```

### Purpose

`TopHeader` is a reusable header component for pages with a back button and centered title.

### Props

```tsx
interface TopHeaderProps {
  title: string;
}
```

### Behavior

The back button uses `useNavigate()`.

When clicked, it executes:

```tsx
navigate(-1)
```

### Layout

Visual structure:

```txt
[Back Button] [Centered Title] [Right Placeholder]
```

The right placeholder exists so the title stays visually centered.

### Style

- Padding: `18px 15px`.
- Title font size: `18px`.
- Title font weight: `600`.
- Title color: `var(--text-primary)`.
- Back button has slight negative left margin for visual alignment.

### Implementation Note

Although `TopHeader` already exists, some pages still define local header markup directly inside the page file. For long-term consistency, every page with a back-title pattern should use `TopHeader`.

---

# Page Documentation

## 1. Dashboard

Files:

```txt
src/pages/Dashboard.tsx
src/pages/Dashboard.css
```

Route:

```txt
/
```

### Purpose

Dashboard is the main home screen. It displays the user's balance summary, shortcut actions, SGD-to-IDR exchange rate, favorite contacts, and recent activity.

### UI Structure

```txt
Dashboard
├── Header
│   ├── User avatar
│   ├── Greeting
│   └── Notification button
│
├── Balance Card
│   ├── Total Balance
│   ├── Details button
│   ├── Main amount
│   ├── Weekly trend
│   ├── Available amount
│   └── USDC mini button
│
├── Quick Actions
│   ├── Send
│   ├── Add Funds
│   ├── Recepients
│   └── Smart Split
│
├── Exchange Rate Banner
│   ├── IDR and SGD flags
│   ├── Rate
│   ├── Arrival time
│   └── Low fees badge
│
├── Favorites
│   ├── Mama
│   ├── Father
│   ├── Brother
│   └── Add
│
└── Recent Activities
    ├── Mama remittance
    ├── Father remittance
    └── PLN bill payment
```

### Header

Header content:

- User avatar.
- Text: `Good Morning`
- Text: `Hello, User`
- Notification button with bell icon.

### Balance Card

Balance card content:

| Element | Value |
|---|---|
| Label | `Total Balance` |
| Main amount | `S$12,450.00` |
| Trend | `+2.4% vs last week` |
| Available | `S$9,250.00` |
| Crypto/USDC | `USDC 9,250.00` |
| Button | `Details` |

Visual style:

- Dark teal gradient.
- Large radius.
- Teal shadow.
- Decorative radial gradients.
- White text.
- Green trend badge.
- Mini crypto button with `$` icon.

### Quick Actions

| Action | Current Behavior |
|---|---|
| Send | Navigates to `/transfer` |
| Add Funds | Navigates to `/add-funds` |
| Recepients | Navigates to `/recipients` |
| Smart Split | No dedicated route yet |

Note: `Recepients` is currently misspelled and should be `Recipients`.

### Exchange Rate Banner

Content:

- `1 SGD = 11,842 IDR`
- `ARRIVAL < 30S`
- `Low Fees`

Visual style:

- Light teal banner.
- Soft teal border.
- Overlapping circular flags.
- Low fees pill badge.
- Success indicator dot.

### Favorites

Favorite contacts:

- Mama.
- Father.
- Brother.
- Add contact.

Component used:

```tsx
ContactAvatar
```

### Recent Activities

Activity list:

| Name | Time | Type | Amount | Status |
|---|---|---|---|---|
| Mama | Today | Remittance | `-S$500.00` | Completed |
| Father | Yesterday | Remittance | `-S$200.00` | Completed |
| PLN (Electrivity) | 2 days ago | Bill Payment | `-S$45.00` | Processing |

Note: `Electrivity` is likely a typo and should probably be `Electricity`.

### Important CSS Classes

```txt
.dashboard-container
.dashboard-header
.balance-card
.balance-card-bg
.quick-actions-wrapper
.exchange-banner
.favorites-list
.activities-list
.activity-item
```

---

## 2. Transfer / Send Money

Files:

```txt
src/pages/Transfer.tsx
src/pages/Transfer.css
```

Route:

```txt
/transfer
```

### Purpose

The Transfer page is used to select a recipient before sending money.

### UI Structure

```txt
Transfer
├── Header
│   ├── Back button
│   └── Send Money title
│
├── Search Bar
│
├── Favorite Recipients
│   ├── Mama
│   ├── Father
│   ├── Brother
│   └── Add Recipient
│
├── All Recipients
│   ├── Talita Vicki
│   ├── Juan Dela Cruz
│   ├── Nur Aisyah
│   └── Minh Tran
│
└── Add New Recipient button
```

### Header

- Back button uses `navigate(-1)`.
- Title: `Send Money`.

### Search Bar

The search bar visually contains:

- Search icon.
- Placeholder input.
- White surface.
- Light border.
- `16px` rounded corners.
- Subtle shadow.

Search/filter behavior is not implemented yet.

### Favorite Recipients

| Name | Country | Destination |
|---|---|---|
| Mama | Indonesia | DANA Wallet |
| Father | Indonesia | BCA Bank |
| Brother | Indonesia | OVO Wallet |
| Add Recipient | - | Add action |

Each favorite recipient displays:

- Avatar.
- Country flag.
- Name.
- Country.
- Wallet/bank destination.

### All Recipients

| Name | Country | Destination | Status | Last Transfer | Action |
|---|---|---|---|---|---|
| Talita Vicki | Indonesia | DANA Wallet | Verified Recipient | Yesterday | Continue |
| Juan Dela Cruz | Philippines | BDO Bank | Verified Recipient | 2 days ago | Continue |
| Nur Aisyah | Singapore | DBS Bank | Verified Recipient | 5 days ago | Continue |
| Minh Tran | Vietnam | MoMo Wallet | Verified Recipient | 1 week ago | Continue |

### Recipient Card Anatomy

```txt
Recipient Card
├── Left
│   ├── Avatar
│   ├── Flag
│   ├── Name
│   ├── Country
│   ├── Wallet/Bank
│   └── Verified badge
└── Right
    ├── Last transfer label
    ├── Last transfer value
    └── Continue button
```

### Bottom Action

Button:

```txt
Add New Recipient
```

Style:

- Full width.
- Dashed border.
- Teal text.
- Rounded `16px`.

### Important CSS Classes

```txt
.transfer-container
.top-header
.transfer-search-container
.transfer-search-bar
.transfer-section
.favorites-list
.fav-item
.tr-recipient-card
.rc-left
.rc-right
.rc-verified
.rc-continue-btn
.btn-dashed-large
```

---

## 3. Recipients

Files:

```txt
src/pages/Recipients.tsx
src/pages/Recipients.css
```

Route:

```txt
/recipients
```

### Purpose

The Recipients page displays saved recipients and gives users Send or Details actions.

### UI Structure

```txt
Recipients
├── Header
│   ├── Back button
│   └── Recepients title
│
├── Search Bar
│
├── Favorites
│   ├── Contact avatars
│   └── View All
│
└── All Recepients
    ├── Recipient card repeated 4 times
    ├── Send button
    └── Details button
```

### Header

- Back button uses `navigate(-1)`.
- Current title: `Recepients`.

Note: this label is misspelled and should be `Recipients`.

### Search

The page uses a search bar visually similar to the Transfer page.

### Favorites

Uses:

```tsx
ContactAvatar
```

### All Recipients

The `All Recepients` section currently renders dummy cards using:

```tsx
Array(4).fill(0).map((_, i) => (...))
```

Each card currently contains the same content:

| Field | Value |
|---|---|
| Name | Talita Vicki |
| Destination | GCash |
| Transfer Type | Bank Transfer |
| Primary Action | Send |
| Secondary Action | Details |

### Recipient Card

Structure:

```txt
Recipient Card
├── Header
│   ├── Avatar
│   ├── Name
│   └── Meta information
└── Actions
    ├── Send
    └── Details
```

### Important CSS Classes

```txt
.recipients-container
.search-container
.search-bar
.favorites-section
.all-recipients-section
.recipient-list
.recipient-card
.recipient-header
.recipient-actions
.btn-send
.primary-btn
.btn-details
```

---

## 4. Add Funds

Files:

```txt
src/pages/AddFunds.tsx
src/pages/AddFunds.css
```

Route:

```txt
/add-funds
```

### Purpose

The Add Funds page lets users add money to their wallet using different payment methods.

### State

This page has local state:

```tsx
const [isDetailsOpen, setIsDetailsOpen] = useState(false);
```

State behavior:

- `false`: wallet details bottom sheet is closed.
- `true`: wallet details bottom sheet is open.

### UI Structure

```txt
Add Funds
├── Header
│   ├── Back button
│   └── Add Funds title
│
├── Amount Input Section
│   ├── Enter amount to add
│   ├── 500.00
│   ├── Currency selector SGD
│   ├── Current balance
│   └── Details button
│
├── Select Payment Method
│   ├── Debit Cards
│   ├── Bank Transfer
│   ├── Apple Pay
│   └── Google Pay
│
├── Continue button
│
└── Wallet Details Bottom Sheet
    ├── Wallet Balance
    ├── Available to Send
    ├── Pending Deposits
    ├── Funding Information
    └── Transfer Network
```

### Amount Section

Content:

| Element | Value |
|---|---|
| Label | `Enter amount to add` |
| Amount | `500.00` |
| Currency | `SGD` |
| Current Balance | `S$1,240.50` |
| Link/Button | `Details` |

### Payment Methods

| Method | Speed/Label | Limit/Info |
|---|---|---|
| Debit Cards | Instant | Up to S$5,000 |
| Bank Transfer | 1-2 hours | No Limit |
| Apple Pay | Instant | Secure |
| Google Pay | Instant | Secure |

### Continue Button

Primary button:

```txt
Continue
```

Style:

- Full width.
- Teal background.
- White text.
- Rounded `16px`.
- Font size `16px`.

No submit logic has been implemented yet.

### Wallet Details Bottom Sheet

The bottom sheet opens when the user taps `Details`.

#### Overlay

Class: `.modal-overlay`

- Absolute positioned.
- Covers the entire mobile app frame.
- Uses a dark transparent background.
- `z-index: 1000`.
- Clicking the overlay closes the bottom sheet.

#### Bottom Sheet

Class: `.bottom-sheet`

- Slides up from the bottom.
- Top radius: `24px 24px 0 0`.
- Max height: `90vh`.
- Scrollable.
- Uses `slideUp` animation.

#### Wallet Balance Card

Content:

| Element | Value |
|---|---|
| Wallet Balance | `S$1,240.50` |
| Status | `Ready for International Transfers` |

#### Availability

| Item | Value |
|---|---|
| Available to Send | `S$1,240.50` |
| Pending Deposits | `S$0.00` |

#### Funding Information

| Method | Speed |
|---|---|
| Debit Card | Instant |
| Bank Transfer | 1-2 Hours |
| Apple Pay | Instant |
| Google Pay | Instant |

#### Transfer Network

Content:

- `Powered by Stellar`
- `Low Fees`
- `Fast Settlement`

Visual style:

- 3-column grid.
- Vertical dividers.
- Teal icons.

### Important CSS Classes

```txt
.add-funds-container
.amount-input-section
.amount-display
.currency-selector
.current-balance-row
.payment-methods-section
.method-list
.method-item
.btn-primary-large
.modal-overlay
.bottom-sheet
.modal-card
.modal-balance-card
.availability-row
.funding-row
.network-grid
```

---

## 5. Wallet

Files:

```txt
src/pages/Wallet.tsx
src/pages/Wallet.css
```

Route:

```txt
/wallet
```

### Purpose

The Wallet page displays the main available balance, wallet actions, and multi-currency balances.

### UI Structure

```txt
Wallet
├── Balance Card
│   ├── Available Balance
│   ├── Amount
│   ├── Currency info
│   └── Status
│
├── Wallet Actions
│   ├── Add Funds
│   ├── Withdraw
│   ├── Exchange Currency
│   └── Statements
│
└── Your Balances
    ├── SGD
    ├── IDR
    ├── PHP
    └── VND
```

### Balance Card

Content:

| Element | Value |
|---|---|
| Label | `Available Balance` |
| Amount | `S$1,250.80` |
| Currency | `Singapore Dollar (SGD)` |
| Status | `Ready for international transfers` |

Visual style:

- Teal gradient.
- `20px` radius.
- Teal shadow.
- Decorative radial gradient.
- White text.
- Eye icon for balance visibility.

### Wallet Actions

| Action | Label |
|---|---|
| Add Funds | `Add Funds` |
| Withdraw | `Withdraw` |
| Exchange | `Exchange Currency` |
| Statements | `Statements` |

At the moment, most actions are visual and are not fully connected to routes or business logic.

### Your Balances

| Currency | Name | Amount | Status |
|---|---|---|---|
| SGD | Singapore Dollar | `S$1,250.80` | Primary Balance |
| IDR | Indonesian Rupiah | `Rp2,450,000` | Available |
| PHP | Philippine Peso | `₱8,600` | Available |
| VND | Vietnamese Dong | `₫4,800,000` | Available |

### Important CSS Classes

```txt
.wallet-page-container
.wallet-balance-card
.wb-bg-graphics
.wb-content
.wallet-actions
.w-action-btn
.wallet-balances-section
.wb-list-container
.wb-list-item
.wb-item-badge
```

---

## 6. Settings

Files:

```txt
src/pages/Settings.tsx
src/pages/Settings.css
```

Route:

```txt
/settings
```

### Purpose

The Settings page displays a profile card and app/account settings menu.

### UI Structure

```txt
Settings
├── Page Title
├── Profile Card
│   ├── Avatar
│   ├── Talita Vicki
│   └── Edit Profile
│
├── Account
│   ├── Language
│   └── Notifications
│
├── Security
│   ├── Security
│   └── Privacy
│
└── Support & Info
    ├── Support Center
    ├── About Stellar
    └── Logout
```

### Profile Card

Content:

| Element | Value |
|---|---|
| Name | `Talita Vicki` |
| Action | `Edit Profile` |

Visual style:

- White card.
- Large radius.
- Light border.
- Circular avatar with teal border.
- Chevron/right arrow indicator.

### Account Section

Menu items:

- Language.
- Notifications.

### Security Section

Menu items:

- Security.
- Privacy.

### Support & Info Section

Menu items:

- Support Center.
- About Stellar.
- Logout.

### Important CSS Classes

```txt
.settings-container
.settings-section-title
.profile-card
.profile-left
.profile-avatar
.profile-info
.settings-card
.settings-item
.settings-icon-box
.settings-item-label
```

---

# Assets and Figma References

Folder:

```txt
figma desain png/
```

Contains exported PNG files from the Figma design:

| File | Likely Screen |
|---|---|
| `dashboard.png` | Dashboard/Home |
| `Add Fund.png` | Add Funds |
| `Recepients.png` | Recipients |
| `Wallet.png` | Wallet |
| `Settings.png` | Settings |

Notes:

- The file name `Recepients.png` uses the same typo currently present in the UI.
- This folder is important as a visual reference when matching the Figma design to the React implementation.
- When the final Figma context is provided, this folder can be used to compare the old design exports, the final design, and the current implementation.

---

# Dummy Data and UI Content

The project currently uses hardcoded/mock content.

## User

| Field | Value |
|---|---|
| Dashboard greeting name | `User` |
| Settings profile name | `Talita Vicki` |

Note: there is a name inconsistency between Dashboard and Settings.

## Balance

| Screen | Field | Value |
|---|---|---|
| Dashboard | Total Balance | `S$12,450.00` |
| Dashboard | Available | `S$9,250.00` |
| Dashboard | USDC | `USDC 9,250.00` |
| Add Funds | Current Balance | `S$1,240.50` |
| Add Funds Bottom Sheet | Wallet Balance | `S$1,240.50` |
| Wallet | Available Balance | `S$1,250.80` |
| Wallet | SGD Balance | `S$1,250.80` |
| Wallet | IDR Balance | `Rp2,450,000` |
| Wallet | PHP Balance | `₱8,600` |
| Wallet | VND Balance | `₫4,800,000` |

Note: wallet amounts are not yet synchronized across screens. This is acceptable for a prototype, but should be standardized when the app becomes data-driven.

## Exchange Rate

| Pair | Rate |
|---|---|
| SGD to IDR | `1 SGD = 11,842 IDR` |

## Transfer Claims

| Claim | Value |
|---|---|
| Arrival | `< 30S` |
| Fee | `Low Fees` |
| Network | `Powered by Stellar` |

## Recipients / Contacts

| Name | Country | Destination | Used In |
|---|---|---|---|
| Mama | Indonesia | DANA Wallet | Dashboard, Transfer |
| Father | Indonesia | BCA Bank | Dashboard, Transfer |
| Brother | Indonesia | OVO Wallet | Dashboard, Transfer |
| Talita Vicki | Indonesia | DANA Wallet / GCash | Transfer, Recipients, Settings |
| Juan Dela Cruz | Philippines | BDO Bank | Transfer |
| Nur Aisyah | Singapore | DBS Bank | Transfer |
| Minh Tran | Vietnam | MoMo Wallet | Transfer |

## Recent Activities

| Name | Time | Type | Amount | Status |
|---|---|---|---|---|
| Mama | Today | Remittance | `-S$500.00` | Completed |
| Father | Yesterday | Remittance | `-S$200.00` | Completed |
| PLN (Electrivity) | 2 days ago | Bill Payment | `-S$45.00` | Processing |

---

# Interactions and State

## Navigation

Working navigation:

| Trigger | Action |
|---|---|
| Bottom nav Home | Navigates to `/` |
| Bottom nav Transfers | Navigates to `/transfer` |
| Bottom nav Wallet | Navigates to `/wallet` |
| Bottom nav Smart Split/History | Navigates to `/add-funds` |
| Bottom nav Settings | Navigates to `/settings` |
| Dashboard Send | Navigates to `/transfer` |
| Dashboard Add Funds | Navigates to `/add-funds` |
| Dashboard Recepients | Navigates to `/recipients` |
| Back button on several pages | Executes `navigate(-1)` |

## Add Funds Bottom Sheet

Working bottom sheet interactions:

| Trigger | Result |
|---|---|
| Click `Details` | Opens the bottom sheet |
| Click dark overlay | Closes the bottom sheet |
| Click close button | Closes the bottom sheet |
| Click inside bottom sheet content | Does not close because `stopPropagation()` is used |

## Active Bottom Navigation

Bottom navigation reads the active route using `useLocation()` and `NavLink`.

Active style:

- Active tab turns teal.
- Active icon receives circular filled background.
- Active icon turns white.
- Active icon moves slightly upward.
- Teal shadow appears.

## Button Tap Feedback

All buttons receive global tap feedback:

```css
button:active {
  transform: scale(0.96);
}
```

---

# Figma-to-Code Conversion Notes

This section is important for the next Figma-to-application workflow.

## 1. Treat the Layout as a Mobile App

Because the root app is constrained to `max-width: 375px` and `max-height: 812px`, the Figma design should ideally use the same or a very similar mobile frame:

```txt
375 × 812 px
```

If the Figma design uses another size, mapping must be handled carefully:

| Figma Frame Size | Impact |
|---|---|
| 375 × 812 | Safest option for pixel matching |
| 390 × 844 | Requires spacing and width scaling |
| 393 × 852 | Requires adaptation for modern Android/iPhone frame sizes |
| 414 × 896 | Requires rechecking density and spacing |

## 2. Match the Design Tokens

When converting from Figma, verify these tokens:

- Primary color.
- App background.
- Surface color.
- Primary text color.
- Secondary text color.
- Radius.
- Shadow.
- Font size.
- Font weight.
- Icon size.
- Section spacing.
- Bottom nav height and position.

## 3. Reusable Component Priorities

The current CSS is still mostly page-based. For better maintainability, these UI patterns should become reusable components:

| Component Candidate | Used In |
|---|---|
| `TopHeader` | Add Funds, Transfer, Recipients, Settings if needed |
| `BalanceCard` | Dashboard, Wallet |
| `QuickActionButton` | Dashboard, Wallet |
| `SearchBar` | Transfer, Recipients |
| `RecipientCard` | Transfer, Recipients |
| `SectionHeader` | Dashboard, Transfer, Recipients |
| `CurrencyFlag` | Dashboard, Wallet, Transfer |
| `PrimaryButton` | Add Funds, Transfer |
| `BottomSheet` | Add Funds, future modals |
| `StatusBadge` | Recent activity, verified recipient, payment method |

## 4. Recommended Screen Matching Order

Suggested order for matching Figma to code:

1. Dashboard.
2. Wallet.
3. Add Funds.
4. Transfer.
5. Recipients.
6. Settings.
7. Bottom navigation consistency.
8. Design token cleanup.

Reason:

- Dashboard and Wallet define the strongest visual identity.
- Add Funds includes bottom sheet interaction.
- Transfer and Recipients need recipient card pattern alignment.
- Settings is the simplest screen.

## 5. Confirm Final Copywriting

Some UI copy should be finalized before pixel-perfect implementation:

| Current Text | Note |
|---|---|
| `Recepients` | Typo, should be `Recipients` |
| `All Recepients` | Typo, should be `All Recipients` |
| `PLN (Electrivity)` | Likely typo, should be `PLN (Electricity)` |
| `Good Morning Hello, User` | Needs final hierarchy/copy |
| `Smart Split` | Needs confirmation as a final feature |
| `History` | Needs confirmation because the fourth tab label changes |
| `About Stellar` | Needs confirmation if Stellar branding is final |

---

# Styling Architecture

## Global CSS

File:

```txt
src/index.css
```

Controls:

- Font import.
- CSS variables.
- Basic reset using `*`.
- Body centering.
- Root mobile frame.
- Base link/button styles.
- Global animation.
- Glass panel.
- Hidden scrollbar.

## App CSS

File:

```txt
src/App.css
```

Controls:

- `.app-container`
- `.page-content`
- Scroll behavior.
- Bottom padding so content does not get covered by bottom nav.

## Component CSS

Folder:

```txt
src/components/
```

Controls reusable component styling:

- Bottom navigation.
- Contact avatar.
- Top header.

## Page CSS

Folder:

```txt
src/pages/
```

Each page has its own CSS file:

- `Dashboard.css`
- `Transfer.css`
- `Recipients.css`
- `AddFunds.css`
- `Wallet.css`
- `Settings.css`

Advantages:

- Easy to inspect per screen.
- Suitable for the early Figma conversion stage.

Disadvantages:

- Some classes and patterns are repeated.
- Spacing/card/header inconsistencies can happen across pages.
- Reusable components are not fully maximized yet.

---

# UX Patterns

## Card Pattern

Most UI surfaces use cards:

- White surface.
- Light border.
- Rounded 16–24px corners.
- Soft shadow.
- 16–24px padding.

## Button Pattern

Primary buttons:

- Teal background.
- White text.
- Medium/large radius.
- Font weight 600.

Secondary buttons:

- White surface.
- Teal text.
- Light border.

Dashed buttons:

- Dashed border.
- Teal text.
- Used for add recipient actions.

## Badge Pattern

Badge types:

| Badge | Color Direction | Purpose |
|---|---|---|
| Success | Green | Completed, verified, ready |
| Processing | Blue | Processing activity |
| Low fees | Light teal | Marketing claim |
| Instant | Light green | Payment method speed |
| Hours | Light lime | Bank transfer speed |

## Icon Pattern

Icons are from `lucide-react`.

Icon characteristics:

- Line icons.
- Light stroke.
- Common size: 18–24px.
- Teal for primary/action icons.
- White on gradient cards.
- Gray for inactive icons.

---

# Known Issues and Improvement Notes

## 1. Typo: `Recepients`

Appears in:

- Dashboard quick action.
- Recipients page title.
- Recipients section title.
- Figma PNG filename.

Suggested fix:

```txt
Recepients → Recipients
All Recepients → All Recipients
```

## 2. Typo: `Electrivity`

Appears in Recent Activities:

```txt
PLN (Electrivity)
```

Suggested fix:

```txt
PLN (Electricity)
```

## 3. User Name Inconsistency

Dashboard uses:

```txt
Hello, User
```

Settings uses:

```txt
Talita Vicki
```

Suggested fix:

- Choose one dummy user.
- Store it in a data object.
- Use it consistently across all screens.

## 4. Balance Inconsistency

Balances differ across screens:

- Dashboard: `S$12,450.00`
- Add Funds: `S$1,240.50`
- Wallet: `S$1,250.80`

Suggested fix:

- Clearly separate total balance, wallet balance, available balance, and multi-currency balance.
- If this is strictly visual, add comments that amounts follow Figma.
- If consistency is needed, move balance values into a shared data object.

## 5. Data Is Still Hardcoded

Data is currently written directly in JSX.

Suggested structure:

```txt
src/data/
├── recipients.ts
├── balances.ts
├── activities.ts
├── paymentMethods.ts
└── exchangeRates.ts
```

## 6. Dynamic Fourth Bottom Nav Tab

The fourth bottom nav tab changes between `Smart Split` and `History`.

Suggested fix:

- Confirm against the final Figma flow.
- If the route is `/add-funds`, labels like `History` or `Smart Split` may not be ideal.
- Consider separate routes:
  - `/smart-split`
  - `/history`
  - `/add-funds`

## 7. `TopHeader` Is Not Yet the Only Header Pattern

`TopHeader` already exists, but some pages still define headers locally.

Suggested fix:

- Use `TopHeader` for every page with a back-title pattern.
- Avoid duplicated `.top-header`, `.back-button`, and `.header-title` markup/classes.

## 8. Search Is Not Functional Yet

Search bars on Transfer and Recipients are currently visual only.

Suggested fix:

- Add `searchQuery` state.
- Filter recipients by name, country, wallet, or bank.

## 9. Some Buttons Do Not Have Actions Yet

Prototype-only buttons include:

- Continue.
- Sort.
- View All.
- See History.
- Details on some cards.
- Withdraw.
- Exchange Currency.
- Statements.
- Support Center.
- Logout.

Suggested fix:

- Add routes or handlers.
- For prototype behavior, use placeholder toast/modal interactions.

## 10. No Error/Empty/Loading States Yet

Missing states include:

- Empty recipients.
- No search results.
- Loading balance.
- Failed transfer.
- Pending verification.
- Payment method unavailable.

Suggested fix:

Add states to support a more realistic product experience.

---

# Recommended Next Development Steps

## 1. Create a Simple Data Layer

Example:

```ts
export const recipients = [
  {
    id: 'recipient-001',
    name: 'Talita Vicki',
    country: 'Indonesia',
    countryCode: 'ID',
    destinationType: 'wallet',
    destinationName: 'DANA Wallet',
    verified: true,
    lastTransfer: 'Yesterday',
    avatarUrl: '...',
    flagUrl: '...',
  },
];
```

## 2. Create Reusable Components

Priority structure:

```txt
components/
├── AppLayout/
├── BottomNav/
├── TopHeader/
├── SearchBar/
├── BalanceCard/
├── QuickAction/
├── RecipientCard/
├── CurrencyBalanceItem/
├── PaymentMethodItem/
├── ActivityItem/
├── Badge/
├── Button/
└── BottomSheet/
```

## 3. Separate Design Tokens

Suggested files:

```txt
src/styles/tokens.css
src/styles/global.css
src/styles/animations.css
```

## 4. Standardize Naming

Use consistent naming:

- `Recipients`, not `Recepients`.
- `AddFunds` in code, not mixed with `Add Fund`.
- `Transfer` for the component name, even if the UI title says `Send Money`.
- `Wallet`, `Settings`, and `Dashboard` should remain consistent.

## 5. Add Responsive Handling

The app is currently strongly mobile-frame oriented. If it needs to become more flexible:

- Add mobile breakpoints.
- Define behavior for screens wider than 375px.
- Keep the mobile shell for desktop preview if needed.

## 6. Add Accessibility Improvements

Recommendations:

- Add `aria-label` to icon-only buttons.
- Ensure buttons have focus states.
- Verify text contrast.
- Avoid relying only on color to communicate status.
- Use semantic heading hierarchy.

## 7. Add Future Routes

Potential future routes:

| Route | Purpose |
|---|---|
| `/transfer/:recipientId` | Transfer amount detail |
| `/transfer/confirm` | Transfer confirmation |
| `/transfer/success` | Successful transfer screen |
| `/history` | Transaction history |
| `/smart-split` | Split bill/remittance group |
| `/recipients/new` | Add new recipient |
| `/recipients/:id` | Recipient detail |
| `/wallet/exchange` | Currency exchange |
| `/wallet/statements` | Statements |
| `/profile` | Edit profile |
| `/security` | Security settings |
| `/support` | Help/support |

---

# Figma-to-Code Checklist

Use this checklist when adjusting each screen from Figma.

## Layout

- [ ] Frame size matches Figma.
- [ ] Horizontal padding matches.
- [ ] Section gaps match.
- [ ] Bottom nav does not cover content.
- [ ] Scroll behavior matches.
- [ ] Card widths match.
- [ ] Bottom safe area is considered.

## Typography

- [ ] Font family uses Inter.
- [ ] Font size matches.
- [ ] Font weight matches.
- [ ] Line height matches.
- [ ] Letter spacing matches if used.
- [ ] Text color matches tokens.

## Color

- [ ] Body background matches.
- [ ] App background matches.
- [ ] Primary teal matches.
- [ ] White surface matches.
- [ ] Light border matches.
- [ ] Success/processing status colors match.
- [ ] Gradient card matches.

## Component

- [ ] Header matches.
- [ ] Search bar matches.
- [ ] Balance card matches.
- [ ] Quick action matches.
- [ ] Recipient card matches.
- [ ] Button matches.
- [ ] Badge matches.
- [ ] Bottom sheet matches.
- [ ] Bottom nav matches.

## Asset

- [ ] Avatar matches.
- [ ] Flag matches.
- [ ] Icon matches.
- [ ] Icon size matches.
- [ ] Image radius matches.
- [ ] Assets are not blurry or broken.

## Interaction

- [ ] Back button works.
- [ ] Bottom nav active state is correct.
- [ ] Button tap feedback feels right.
- [ ] Bottom sheet opens/closes correctly.
- [ ] Navigation links are correct.
- [ ] Search/filter works if required.
- [ ] Empty/loading states exist if required.

---

# Developer Notes

## Principles for Adding a New Screen

1. Create the page file inside `src/pages`.
2. Create a page CSS file if the styling is not reusable yet.
3. Add the route in `App.tsx`.
4. If the screen needs bottom navigation, add or update the item in `BottomNav.tsx`.
5. Use design tokens from `index.css`.
6. Avoid hardcoded colors if a token already exists.
7. If a pattern is used more than twice, extract it into a reusable component.

## Principles for UI Cleanup

1. Do not refactor too many screens at once.
2. Match one screen with Figma until complete.
3. Extract reusable components afterward.
4. Apply the reusable components to other screens.
5. Make sure routes still work after refactoring.

## Principles for Replacing Dummy Data

1. Do not connect an API before the data model is clear.
2. Create dummy data objects first.
3. Use TypeScript types/interfaces.
4. Render data using `.map()`.
5. Make sure empty states exist.

---

# Conclusion

Remmit2 already has a clear mobile fintech UI foundation:

- React + TypeScript + Vite.
- Main routes are already available.
- Bottom navigation is active.
- The visual design consistently leans toward teal-based fintech UI.
- Figma PNG files are included as design references.
- Main screens include Dashboard, Transfer, Recipients, Add Funds, Wallet, and Settings.
- Global styling already has useful design tokens.
- Initial reusable components such as BottomNav, ContactAvatar, and TopHeader already exist.

The most important next steps are:

1. Match the final Figma design with the implementation.
2. Clean up typos and final copywriting.
3. Standardize dummy data.
4. Extract reusable components.
5. Add the next routes for the complete transfer flow.
6. Add realistic states such as search, detail, confirm, success, empty, loading, and error.
