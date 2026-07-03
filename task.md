# RemitAnchor / Remmit — Master Implementation Task Plan

This `task.md` is the complete task tracker for converting the RemitAnchor design into the React + TypeScript + Vite app.

**Usage:** paste each task into the coding agent one by one.  
**Language for the coding agent:** English.  
**Rule:** after every task, run `npm run build` and fix all errors before continuing.

---

## 0. Global Rules

### Do not break existing work

- Do not redesign completed pages unless the task explicitly says so.
- Do not redesign BottomNav unless explicitly requested.
- Do not change the mobile frame layout.
- Preserve all working routes and redirects.
- Keep mock data consistent across pages until a shared data layer is created.
- Keep styling scoped to the page/component being worked on.
- Always add enough bottom padding so the floating BottomNav does not block required content.
- Modal/bottom sheet screens should look like popups, not full pages.

### Build rule

After every task:

```bash
npm run build
```

Optional if available:

```bash
npm run lint
```

---

## 1. Design Reference Index

| Page | Screen / Asset |
|---|---|
| 1 | Edit Profile |
| 2 | Edit Full Name |
| 3 | Edit Gender |
| 4 | Home Country |
| 5 | Identity Verification |
| 6 | Edit Occupation |
| 7 | Account Statements |
| 8 | Generating Statement |
| 9 | Wallet Statement document |
| 10 | Review Statement |
| 11 | Logo asset |
| 12 | Splash screen |
| 13 | Onboarding — Send Money Worldwide |
| 14 | Onboarding — Manage Every Paycheck Smarter |
| 15 | Onboarding — Track Every Transaction |
| 16 | Welcome screen |
| 17 | Create Account |
| 18 | Sign In |
| 19 | Verify OTP |
| 20 | Dashboard / Home |
| 21 | Smart Split saved modal |
| 22 | Create Split Rule + Add Allocation bottom sheet |
| 23 | Delete Allocation modal |
| 24 | Edit Allocation bottom sheet |
| 25 | Create Split Rule |
| 26 | Smart Split overview |
| 27 | Withdrawal Receipt |
| 28 | Withdrawal Details |
| 29 | Withdrawal Successful |
| 30 | Processing Withdrawal |
| 31 | Review Withdrawal |
| 32 | Withdraw Funds |
| 33 | Wallet |
| 34 | Review Transfer |
| 35 | Smart Split during transfer |
| 36 | Transfer Details |
| 37 | Recipient Search |
| 38 | Transfers History |
| 39 | Transaction Details |
| 40 | Transaction Details variant |
| 41 | Transfer Successful |
| 42 | Transfer Successful variant |
| 43 | Processing Transfer |
| 44 | Processing Transfer variant |
| 45 | Review Transfer variant |
| 46 | Add Allocation |
| 47 | Smart Split allocation screen |
| 48 | Send Money amount entry |
| 49 | Send Money recipient selection |
| 50 | Deposit Successful |
| 51 | Review Deposit |
| 52 | Debit Cards |
| 53 | Add Funds Wallet Details bottom sheet |
| 54 | Add Funds |
| 55 | Dashboard / Home variant |
| 56 | Processing Exchange |
| 57 | Exchange Currency |
| 58 | Exchange Details |
| 59 | Share Transaction bottom sheet |
| 60 | Receipt document style |
| 61 | Review Exchange |
| 62 | Exchange Successful |
| 63 | Illustration asset |
| 64 | Send Money illustration |
| 65 | Paycheck / Smart Split illustration |
| 66 | Transaction / receipt illustration |
| 67 | Country of Residence |
| 68 | Profile |
| 69 | Edit Date of Birth |

---

## 2. Final Target Route Tree

```txt
/
├── /splash
├── /onboarding
│   ├── /onboarding/send-money
│   ├── /onboarding/paycheck
│   └── /onboarding/track
├── /welcome
├── /auth
│   ├── /auth/sign-up
│   ├── /auth/sign-in
│   └── /auth/verify-otp
├── /home
├── /transfers
│   ├── /transfers/new
│   ├── /transfers/search
│   ├── /transfers/recipients
│   ├── /transfers/recipients/new
│   ├── /transfers/new/:recipientId
│   ├── /transfers/new/:recipientId/smart-split
│   ├── /transfers/new/:recipientId/review
│   ├── /transfers/new/:recipientId/processing
│   ├── /transfers/new/:recipientId/success
│   ├── /transfers/:transactionId
│   ├── /transfers/:transactionId/receipt
│   └── /transfers/:transactionId/share
├── /wallet
│   ├── /wallet/add-funds
│   ├── /wallet/add-funds/cards
│   ├── /wallet/add-funds/review
│   ├── /wallet/add-funds/success
│   ├── /wallet/withdraw
│   ├── /wallet/withdraw/review
│   ├── /wallet/withdraw/processing
│   ├── /wallet/withdraw/success
│   ├── /wallet/withdraw/:withdrawalId
│   ├── /wallet/withdraw/:withdrawalId/receipt
│   ├── /wallet/exchange
│   ├── /wallet/exchange/review
│   ├── /wallet/exchange/processing
│   ├── /wallet/exchange/success
│   ├── /wallet/exchange/:exchangeId
│   ├── /wallet/exchange/:exchangeId/receipt
│   ├── /wallet/exchange/:exchangeId/share
│   ├── /wallet/statements
│   ├── /wallet/statements/generating
│   ├── /wallet/statements/review
│   └── /wallet/statements/:statementId
├── /smart-split
│   ├── /smart-split/new
│   ├── /smart-split/new/allocation
│   ├── /smart-split/new/allocation/:allocationId/edit
│   ├── /smart-split/new/allocation/:allocationId/delete
│   ├── /smart-split/rules/:ruleId
│   └── /smart-split/rules/:ruleId/edit
├── /settings
└── /profile
    ├── /profile/edit
    ├── /profile/edit/full-name
    ├── /profile/edit/date-of-birth
    ├── /profile/edit/gender
    ├── /profile/edit/occupation
    ├── /profile/edit/home-country
    ├── /profile/edit/country-of-residence
    └── /profile/identity-verification
```

---

## 3. Completed Tasks

### Task 1 — Routing Refactor `[DONE]`

**Design reference:** Pages 20, 26, 33, 38, 49, 54, 68.

Completed:

- `/` redirects to `/home`
- `/home` renders Dashboard
- `/transfers` renders TransfersPage
- `/transfers/new` renders Transfer
- `/transfers/recipients` renders Recipients
- `/wallet` renders Wallet
- `/wallet/add-funds` renders AddFunds
- `/smart-split` renders SmartSplitPage
- `/settings` renders Settings
- `/profile` renders ProfilePage
- `/transfer` redirects to `/transfers/new`
- `/recipients` redirects to `/transfers/recipients`
- `/add-funds` redirects to `/wallet/add-funds`
- BottomNav routes fixed:
  - Home -> `/home`
  - Transfers -> `/transfers`
  - Wallet -> `/wallet`
  - Smart Split -> `/smart-split`
  - Settings -> `/settings`
- Removed dynamic `Smart Split / History` label.

---

### Task 2 — Transfers History `[DONE]`

**Route:** `/transfers`  
**Design reference:** Page 38.

Completed:

- Header
- Search bar
- Filter chips
- Month filter
- Transaction cards
- Status badges
- CTA card
- Transaction cards navigate to details route.

---

### Task 3 — Send Money Recipient Selection `[DONE]`

**Route:** `/transfers/new`  
**Design reference:** Page 49.

Completed:

- Header
- Search bar
- Favorite recipients
- All recipients
- Verified badges
- Continue buttons
- Add New Recipient card
- Search empty state
- Continue navigates to `/transfers/new/:recipientId`

---

### Task 4 — Transfer Amount Details `[DONE]`

**Route:** `/transfers/new/:recipientId`  
**Design references:** Pages 36 and 48.

Completed:

- Recipient summary
- Amount input
- Recipient receives conversion
- Transfer summary
- Note field
- Numeric keypad
- Continue to review route.

---

### Task 5 — Review Transfer `[DONE]`

**Route:** `/transfers/new/:recipientId/review`  
**Design references:** Pages 34 and 45.

Completed:

- Review header
- Recipient summary
- Transfer summary
- Smart Split Summary
- Transfer journey
- Security card
- Confirm Transfer button
- Edit Transfer button.

---

### Task 6 — Processing Transfer `[DONE]`

**Route:** `/transfers/new/:recipientId/processing`  
**Design references:** Pages 43 and 44.

Completed:

- Processing hero
- Spinner
- Recipient / amount summary
- Processing timeline
- Status card
- Security notice.

---

### Task 7 — Transfer Success + Auto Redirect `[DONE]`

**Route:** `/transfers/new/:recipientId/success`  
**Design references:** Pages 41 and 42.

Completed:

- Processing auto-redirects to success
- Success hero
- Transfer summary
- Smart Split executed
- Transaction information
- Helpful notice
- View Transaction Details
- Back to Home.

---

### Task 8 — Transaction Details `[DONE]`

**Route:** `/transfers/:transactionId`  
**Design references:** Pages 39 and 40.

Completed:

- Status hero
- Recipient card
- Transfer summary
- Smart Split executed
- Transaction information
- Timeline
- Support card
- Download receipt
- Share receipt
- Back to Transfers.

---

### Task 9 — Transfer Receipt `[DONE]`

**Route:** `/transfers/:transactionId/receipt`  
**Design references:** Pages 27 and 60.

Completed:

- Receipt document card
- Sender / recipient sections
- Transfer breakdown
- Transaction information
- Smart Split allocation
- Security notice
- Footer
- Download PDF
- Share Receipt
- Back to Details.

---

### Task 10 — Share Transaction Bottom Sheet `[DONE]`

**Route:** `/transfers/:transactionId/share`  
**Design reference:** Page 59.

Completed:

- Converted full page into modal bottom sheet
- Dimmed backdrop
- Rounded bottom sheet
- Drag handle
- Close X
- Transaction summary
- Share options
- Recent contacts
- Secure sharing notice
- Share Now
- Cancel.

---

# 4. Remaining Tasks

---

## Task 11 — Refine Wallet Main Page `[TODO]`

**Route:** `/wallet`  
**Design reference:** Page 33.  
**Files:** `src/pages/Wallet.tsx`, `src/pages/Wallet.css`.

### Goal

Make Wallet match the final design.

### Requirements

- Keep route `/wallet`
- Keep BottomNav unchanged
- Balance card:
  - Available Balance
  - S$1,250.80
  - Singapore Dollar (SGD)
  - Ready for international transfers
- Wallet actions:
  - Add Funds -> `/wallet/add-funds`
  - Withdraw -> `/wallet/withdraw`
  - Exchange Currency -> `/wallet/exchange`
  - Statements -> `/wallet/statements`
- Balances:
  - SGD
  - IDR
  - PHP
  - VND
- Wallet activity / this month summary if appropriate
- Add bottom padding above BottomNav
- Run `npm run build`

---

## Task 12 — Refine Add Funds `[TODO]`

**Route:** `/wallet/add-funds`  
**Design references:** Pages 53 and 54.  
**Files:** `src/pages/AddFunds.tsx`, `src/pages/AddFunds.css`.

### Requirements

- Header: Add Funds
- Deposit amount: S$500.00
- Currency selector: SGD
- Wallet balance: S$1,240.50
- Details opens Wallet Details bottom sheet
- Payment methods:
  - Debit Cards
  - Bank Transfer
  - Apple Pay
  - Google Pay
- Summary:
  - Deposit Amount
  - Processing Fee
  - Total Received
  - Estimated Processing Time
- Continue -> `/wallet/add-funds/review`
- Wallet Details bottom sheet based on Page 53
- Run `npm run build`

---

## Task 13 — Debit Cards `[TODO]`

**Route:** `/wallet/add-funds/cards`  
**Design reference:** Page 52.

### Files to create

- `src/pages/DebitCardsPage.tsx`
- `src/pages/DebitCardsPage.css`

### Requirements

- Saved Cards
- DBS Visa **** 8421
- OCBC Mastercard **** 2461
- Add New Card
- Accepted Cards
- Security / PCI DSS compliant card
- Continue button
- Run `npm run build`

---

## Task 14 — Review Deposit `[TODO]`

**Route:** `/wallet/add-funds/review`  
**Design reference:** Page 51.

### Requirements

- Deposit summary
- Payment method
- Processing fee
- Total charged
- Wallet balance before/after
- Transfer readiness card
- Confirm Deposit -> `/wallet/add-funds/success`
- Edit -> `/wallet/add-funds`
- Run `npm run build`

---

## Task 15 — Deposit Successful `[TODO]`

**Route:** `/wallet/add-funds/success`  
**Design reference:** Page 50.

### Requirements

- Success hero
- Amount Added
- Payment Method
- Date & Time
- Status
- Wallet Balance
- Ready for International Transfers
- Send Money -> `/transfers/new`
- Back to Wallet -> `/wallet`
- Run `npm run build`

---

## Task 16 — Withdraw Funds `[TODO]`

**Route:** `/wallet/withdraw`  
**Design reference:** Page 32.

### Requirements

- Available Balance
- Destination account selector
- Withdraw amount input
- Withdrawal summary
- Optional note
- Continue -> `/wallet/withdraw/review`
- Run `npm run build`

---

## Task 17 — Review Withdrawal `[TODO]`

**Route:** `/wallet/withdraw/review`  
**Design reference:** Page 31.

### Requirements

- Withdrawal summary
- Destination account
- Fee information
- Withdrawal timeline preview
- Security confirmation
- Confirm -> `/wallet/withdraw/processing`
- Edit -> `/wallet/withdraw`
- Run `npm run build`

---

## Task 18 — Processing Withdrawal `[TODO]`

**Route:** `/wallet/withdraw/processing`  
**Design reference:** Page 30.

### Requirements

- Processing hero
- Withdrawal summary
- Processing timeline
- Auto redirect to `/wallet/withdraw/success`
- Run `npm run build`

---

## Task 19 — Withdrawal Successful `[TODO]`

**Route:** `/wallet/withdraw/success`  
**Design reference:** Page 29.

### Requirements

- Success hero
- Withdrawal details
- Transaction information
- View Withdrawal Details -> `/wallet/withdraw/wd-001`
- Back to Wallet -> `/wallet`
- Run `npm run build`

---

## Task 20 — Withdrawal Details `[TODO]`

**Route:** `/wallet/withdraw/:withdrawalId`  
**Design reference:** Page 28.

### Requirements

- Status
- Withdrawal summary
- Destination account
- Transaction information
- Timeline
- Support card
- Download Receipt -> `/wallet/withdraw/:withdrawalId/receipt`
- Back to Wallet
- Run `npm run build`

---

## Task 21 — Withdrawal Receipt `[TODO]`

**Route:** `/wallet/withdraw/:withdrawalId/receipt`  
**Design reference:** Page 27.

### Requirements

- Official receipt layout
- Withdrawal summary
- Destination account
- Transaction information
- Timeline/verification
- Footer
- Download PDF
- Back to Details
- Run `npm run build`

---

## Task 22 — Exchange Currency `[TODO]`

**Route:** `/wallet/exchange`  
**Design reference:** Page 57.

### Requirements

- From SGD
- To IDR
- Amount input
- Rate card
- Fee / amount summary
- Rate transparency notice
- Continue -> `/wallet/exchange/review`
- Run `npm run build`

---

## Task 23 — Review Exchange `[TODO]`

**Route:** `/wallet/exchange/review`  
**Design reference:** Page 61.

### Requirements

- From / To summary
- Fee breakdown
- Exchange rate notice
- Confirm -> `/wallet/exchange/processing`
- Back -> `/wallet/exchange`
- Run `npm run build`

---

## Task 24 — Processing Exchange `[TODO]`

**Route:** `/wallet/exchange/processing`  
**Design reference:** Page 56.

### Requirements

- Processing hero
- Currency conversion summary
- Processing steps
- Auto redirect -> `/wallet/exchange/success`
- Run `npm run build`

---

## Task 25 — Exchange Successful `[TODO]`

**Route:** `/wallet/exchange/success`  
**Design reference:** Page 62.

### Requirements

- Success hero
- Exchange details
- Updated wallet balances
- View Exchange Details -> `/wallet/exchange/exc-001`
- Back to Wallet -> `/wallet`
- Run `npm run build`

---

## Task 26 — Exchange Details `[TODO]`

**Route:** `/wallet/exchange/:exchangeId`  
**Design reference:** Page 58.

### Requirements

- Status
- Currency pair
- Exchange summary
- Wallet updates
- Timeline
- Transaction information
- Download Receipt -> `/wallet/exchange/:exchangeId/receipt`
- Share -> `/wallet/exchange/:exchangeId/share`
- Back to Wallet
- Run `npm run build`

---

## Task 27 — Exchange Receipt `[TODO]`

**Route:** `/wallet/exchange/:exchangeId/receipt`  
**Design reference:** Page 60.

### Requirements

- Receipt document
- From / To currency
- Exchange breakdown
- Wallet update
- Security verification
- Footer
- Download PDF
- Share
- Back to Details
- Run `npm run build`

---

## Task 28 — Exchange Share Bottom Sheet `[TODO]`

**Route:** `/wallet/exchange/:exchangeId/share`  
**Design reference:** Page 59.

### Requirements

- Modal overlay
- Bottom sheet
- Share options
- Cancel closes to Exchange Details
- Run `npm run build`

---

## Task 29 — Account Statements `[TODO]`

**Route:** `/wallet/statements`  
**Design reference:** Page 7.

### Requirements

- Wallet account card
- Statement period options
- Included transaction categories
- Preview summary
- Previous statements
- Generate Statement -> `/wallet/statements/generating`
- Run `npm run build`

---

## Task 30 — Generating Statement `[TODO]`

**Route:** `/wallet/statements/generating`  
**Design reference:** Page 8.

### Requirements

- Processing hero
- Progress steps
- Document details
- Auto redirect -> `/wallet/statements/review`
- Run `npm run build`

---

## Task 31 — Review Statement `[TODO]`

**Route:** `/wallet/statements/review`  
**Design reference:** Page 10.

### Requirements

- Statement summary
- Included transactions
- Account summary
- File information
- View Statement -> `/wallet/statements/st-001`
- Back -> `/wallet/statements`
- Run `npm run build`

---

## Task 32 — Wallet Statement Document `[TODO]`

**Route:** `/wallet/statements/:statementId`  
**Design reference:** Page 9.

### Requirements

- Document-style statement
- Account information
- Account summary
- Transaction history
- Footer
- Download PDF
- Back to Statements
- Run `npm run build`

---

## Task 33 — Refine Smart Split Main `[TODO]`

**Route:** `/smart-split`  
**Design reference:** Page 26.

### Requirements

- Summary card
- Smart Split status
- Split rules
- How Smart Split Works
- Recent allocation activity
- Create New Split Rule -> `/smart-split/new`
- Run `npm run build`

---

## Task 34 — Create Split Rule `[TODO]`

**Route:** `/smart-split/new`  
**Design references:** Pages 22 and 25.

### Requirements

- Rule name
- Description
- Source currency
- Allocation list
- Add Allocation
- Total allocation = 100%
- Rule settings
- Save Split Rule
- Run `npm run build`

---

## Task 35 — Add Allocation Bottom Sheet `[TODO]`

**Route:** `/smart-split/new/allocation`  
**Design references:** Pages 22 and 46.

### Requirements

- Bottom sheet style
- Allocation type
- Destination selector
- Percentage input
- Purpose / label
- Preview
- Add Allocation
- Cancel
- Run `npm run build`

---

## Task 36 — Edit Allocation Bottom Sheet `[TODO]`

**Route:** `/smart-split/new/allocation/:allocationId/edit`  
**Design reference:** Page 24.

### Requirements

- Bottom sheet
- Existing allocation
- Edit percentage
- Edit destination
- Save Changes
- Delete Allocation
- Run `npm run build`

---

## Task 37 — Delete Allocation Modal `[TODO]`

**Route:** `/smart-split/new/allocation/:allocationId/delete`  
**Design reference:** Page 23.

### Requirements

- Center modal
- Dark backdrop
- Delete confirmation
- Warning text
- Delete / Cancel
- Run `npm run build`

---

## Task 38 — Split Rule Saved Modal `[TODO]`

**Design reference:** Page 21.

### Requirements

- Center success modal
- Split Rule Saved
- Back to Smart Split
- Run `npm run build`

---

## Task 39 — Smart Split During Transfer `[TODO]`

**Route:** `/transfers/new/:recipientId/smart-split`  
**Design references:** Pages 35 and 47.

### Requirements

- Transfer amount
- Enable Smart Split toggle
- Allocation cards
- Add Allocation
- Total allocation completeness
- Continue back to Review Transfer
- Run `npm run build`

---

## Task 40 — Refine Settings `[TODO]`

**Route:** `/settings`

### Requirements

- Profile card -> `/profile`
- Account section
- Security section
- Support & Info
- Logout
- Run `npm run build`

---

## Task 41 — Refine Profile `[TODO]`

**Route:** `/profile`  
**Design reference:** Page 68.

### Requirements

- Profile header
- Avatar
- Kevin Tan
- Personal info
- Contact info
- Identity verification
- Edit Profile -> `/profile/edit`
- Run `npm run build`

---

## Task 42 — Edit Profile `[TODO]`

**Route:** `/profile/edit`  
**Design reference:** Page 1.

### Requirements

- Avatar/change photo
- Editable personal info rows
- Identity section
- Save Changes
- Run `npm run build`

---

## Task 43 — Edit Full Name `[TODO]`

**Route:** `/profile/edit/full-name`  
**Design reference:** Page 2.

### Requirements

- Current name
- Full legal name input
- Identity notice
- Preview
- Save / Cancel
- Run `npm run build`

---

## Task 44 — Edit Gender `[TODO]`

**Route:** `/profile/edit/gender`  
**Design reference:** Page 3.

### Requirements

- Male
- Female
- Prefer Not To Say
- Preview
- Save / Cancel
- Run `npm run build`

---

## Task 45 — Edit Date of Birth `[TODO]`

**Route:** `/profile/edit/date-of-birth`  
**Design reference:** Page 69.

### Requirements

- Date of Birth input
- Picker-like UI
- Identity verification notice
- Save / Cancel
- Run `npm run build`

---

## Task 46 — Edit Occupation `[TODO]`

**Route:** `/profile/edit/occupation`  
**Design reference:** Page 6.

### Requirements

- Search occupation
- Popular occupations
- Your occupation input
- Save / Cancel
- Run `npm run build`

---

## Task 47 — Home Country `[TODO]`

**Route:** `/profile/edit/home-country`  
**Design reference:** Page 4.

### Requirements

- Search country
- Popular destinations
- Country list
- Preview
- Save / Cancel
- Run `npm run build`

---

## Task 48 — Country of Residence `[TODO]`

**Route:** `/profile/edit/country-of-residence`  
**Design reference:** Page 67.

### Requirements

- Search country
- Country list
- Selected country preview
- Save / Cancel
- Run `npm run build`

---

## Task 49 — Identity Verification `[TODO]`

**Route:** `/profile/identity-verification`  
**Design reference:** Page 5.

### Requirements

- Verified identity status
- Verification level
- Verified documents
- Benefits
- Privacy card
- Contact support
- Run `npm run build`

---

## Task 50 — Splash `[TODO]`

**Route:** `/splash`  
**Design references:** Pages 11 and 12.

### Requirements

- Logo
- RemitAnchor
- Loading dots
- Powered by Stellar
- Optional auto navigation to onboarding
- Run `npm run build`

---

## Task 51 — Onboarding `[TODO]`

**Routes:**

```txt
/onboarding
/onboarding/send-money
/onboarding/paycheck
/onboarding/track
```

**Design references:** Pages 13, 14, 15, 63, 64, 65, 66.

### Requirements

- Shared onboarding layout
- Illustration
- Logo
- Skip
- Dots
- Next
- Get Started -> `/welcome`
- Run `npm run build`

---

## Task 52 — Welcome `[TODO]`

**Route:** `/welcome`  
**Design reference:** Page 16.

### Requirements

- Logo / illustration
- Welcome to RemitAnchor
- Log In -> `/auth/sign-in`
- Create Account -> `/auth/sign-up`
- Terms and privacy text
- Run `npm run build`

---

## Task 53 — Create Account `[TODO]`

**Route:** `/auth/sign-up`  
**Design reference:** Page 17.

### Requirements

- Full name
- Email
- Phone number
- Password
- Confirm password
- Password rules
- Terms checkbox
- Sign Up
- Google / Apple buttons
- Link to Sign In
- Run `npm run build`

---

## Task 54 — Sign In `[TODO]`

**Route:** `/auth/sign-in`  
**Design reference:** Page 18.

### Requirements

- Email
- Password
- Forgot password
- Sign In
- Google / Apple buttons
- Link to Sign Up
- Run `npm run build`

---

## Task 55 — Verify OTP `[TODO]`

**Route:** `/auth/verify-otp`  
**Design reference:** Page 19.

### Requirements

- OTP fields
- Countdown
- Resend code
- Verify
- Success navigates to `/home`
- Run `npm run build`

---

## Task 56 — Refine Recipients `[TODO]`

**Route:** `/transfers/recipients`  
**Design references:** Pages 37 and 49.

### Requirements

- Search
- Favorites
- All recipients
- Send -> `/transfers/new/:recipientId`
- Details -> future recipient details route
- Add New Recipient
- Run `npm run build`

---

## Task 57 — Recipient Search `[TODO]`

**Route:** `/transfers/search`  
**Design reference:** Page 37.

### Requirements

- Search-first screen
- Suggested recipients
- Results
- Empty state
- Add recipient CTA
- Run `npm run build`

---

## Task 58 — Add New Recipient `[TODO]`

**Route:** `/transfers/recipients/new`

### Requirements

- Recipient name
- Country
- Destination type
- Wallet/bank details
- Save Recipient
- Run `npm run build`

---

## Task 59 — Shared Data Layer Refactor `[TODO]`

### Files to create

```txt
src/data/recipients.ts
src/data/transactions.ts
src/data/wallet.ts
src/data/smartSplit.ts
src/utils/formatCurrency.ts
```

### Requirements

- Move duplicated local mock data into shared files
- Replace repeated arrays
- Keep visuals unchanged
- Run `npm run build`

---

## Task 60 — Shared UI Components Refactor `[TODO]`

### Candidate components

```txt
Button
IconButton
Card
StatusBadge
AmountRow
BottomSheet
ProgressTimeline
ReceiptDocument
SearchBar
```

### Requirements

- Extract carefully
- Do not break visuals
- Build after each extraction

---

## Task 61 — Bottom Spacing Audit `[TODO]`

### Requirements

- Check every scrollable page
- Ensure BottomNav does not block required actions
- Pages with action buttons need around 130px–150px bottom padding
- Build after fixes

---

## Task 62 — Typography / Color Audit `[TODO]`

### Requirements

- Confirm teal consistency
- Confirm typography hierarchy
- Confirm card radius consistency
- Confirm shadows
- Confirm status badge colors
- Remove weird hardcoded colors if unnecessary

---

## Task 63 — Route QA `[TODO]`

### Requirements

Manually test all core routes:

```txt
/home
/transfers
/transfers/new
/transfers/new/rec-001
/transfers/new/rec-001/review
/transfers/new/rec-001/processing
/transfers/new/rec-001/success
/transfers/tx-001
/transfers/tx-001/receipt
/transfers/tx-001/share
/wallet
/wallet/add-funds
/smart-split
/settings
/profile
```

Then test every newly added route.

---

## Task 64 — Interaction QA `[TODO]`

### Requirements

- Search works
- Filters work
- Keypad works
- Continue buttons route correctly
- Processing pages auto-redirect
- Bottom sheets close correctly
- Share options selectable
- Disabled states look correct

---

## Task 65 — Accessibility Pass `[TODO]`

### Requirements

- Add aria-label to icon buttons
- Inputs have labels or aria-labels
- Focus states visible
- Buttons use actual button elements
- Modal close buttons accessible
- Status not communicated by color only

---

## Task 66 — Final Cleanup `[TODO]`

### Requirements

- Remove unused imports
- Remove unnecessary console logs
- Fix spelling:
  - Recipients, not Recepients
  - Electricity, not Electrivity
- Check route names
- Run:

```bash
npm run build
npm run lint
```

---

## Task 67 — Final README Update `[TODO]`

### Requirements

Update README with:

- Project overview
- Final route architecture
- Feature list
- Tech stack
- How to run
- Mock data limitation
- Design system
- Implemented screens
- Future API integration notes

---

## 5. Final Acceptance Criteria

The project is done when:

- All major design flows exist in code.
- All routes build successfully.
- Transfer flow is complete.
- Wallet flow is complete.
- Withdrawal flow is complete.
- Exchange flow is complete.
- Statements flow is complete.
- Smart Split flow is complete.
- Profile/identity flow is complete.
- Onboarding/auth flow is complete.
- BottomNav behaves correctly.
- Modals and bottom sheets feel correct.
- No required content is blocked by BottomNav.
- Build passes.
- README and task tracker are updated.

---

## 6. Current Next Task

```txt
Task 11 — Refine Wallet Main Page
```

Use:

- Design page 33
- Route `/wallet`
- Files:
  - `src/pages/Wallet.tsx`
  - `src/pages/Wallet.css`
