# CLP Platform Feature Summary

This document records the current frontend feature set and the boundaries of each role. It is an implementation note for developers, not a production feature guarantee.

## Course Content

CLP supports three lesson content types:

- Reading: text lessons with scroll-to-complete behavior.
- Video: embedded or locally simulated video lessons with progress tracking.
- Quiz: single choice, multiple choice, and true/false questions with explanations, scoring, draft state, and review history.

Primary components:

- `TextReader.tsx`
- `VideoPlayer.tsx`
- `QuizPlayer.tsx`
- `CoursePlayer.tsx`

## Learner Experience

Implemented learner workflows:

- Course enrollment by course code.
- Course discovery and wishlist actions.
- Continue-learning cards and lesson progress.
- Weekly activity, skill progress, streak, and achievement tracking.
- Upcoming quiz cards and a dedicated quiz section.
- Certificate preview, verification fields, print, share, and link-copy actions.

Payment enrollment appears in the interface but is not connected to a payment provider yet.

## Admin Experience

Implemented admin workflows:

- Platform overview with clickable KPI cards.
- User management table.
- Course overview with search, filters, editable title/educator/category/status fields, and lifecycle badges.
- Course approvals under Course Overview.
- Certification Center with template preview, Canva routing, issuance history, and status management.
- Settings with appearance controls and system health.

Admin users manage platform operations. Educators own course creation and content editing.

## Educator Experience

Implemented educator workflows:

- Combined overview and analytics dashboard.
- Published, draft, and archive course tabs.
- Editable course title, educator, category, and status fields.
- Course creation flow with Course Content, local media inputs, and publish settings.
- Quiz builder with question type, correct answers, explanations, passing score, time limit, draft/publish controls, and drag reorder.
- Student tracking with activity/status dropdowns and paid-course earnings.
- Earnings dashboard with monthly revenue chart.

## Certification

Implemented certification workflows:

- Certification dashboard metrics.
- Template cards with preview and Canva editor links.
- Issuance history table with dynamic status options.
- Learner-facing certificate verification, print, share, copy link, and download entry points.

## Responsive and Theme Support

Implemented shared layout behavior:

- Desktop/tablet collapsible sidebar.
- Nested navigation with CSS Grid row transitions.
- Mobile bottom navigation with drop-up submenus.
- Sidebar user profile panel.
- Role-aware notification menu.
- Dark mode through CSS variables.

## Data Model

Current dashboards use local fixtures from:

- `src/app/data/mockCourses.ts`
- `src/app/data/mockLessons.ts`
- `src/app/data/mockAnalytics.ts`
- `src/app/data/enterpriseData.ts`

The fixtures are split by domain so a service layer can replace them later with minimal changes to the dashboard components.

## Integration Points

These areas are represented in the UI and need service integration before production use:

- Authentication and authorization.
- Persistent database storage.
- Payment provider integration.
- Certificate PDF generation.
- Certificate verification API.
- Notification delivery service.
- Media upload pipeline.
