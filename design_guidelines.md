# Design Guidelines: Sentellect Student Teaching Platform

## Project Type: Conversion & Refactoring (Not New Design)

**Critical Constraint**: This project requires **preserving all existing HTML, CSS, and Bootstrap styling exactly as is**. The appearance must not change during the Next.js conversion.

## Design Approach

**Selected Approach**: Preservation-Based Conversion  
This is a refactoring project, not a design project. All visual design decisions have already been made in the existing HTML files. The goal is to:

1. Maintain pixel-perfect fidelity to existing pages
2. Extract repetitive HTML into reusable React components without changing appearance
3. Implement dynamic routing without visual changes
4. Keep all existing Bootstrap classes, custom CSS, and inline styles intact

## Core Conversion Principles

### Layout Preservation
- Keep all existing container structures, grid systems, and spacing
- Maintain all Bootstrap classes (row, col-*, container, etc.)
- Preserve existing viewport behavior and responsive breakpoints
- Do not modify any existing padding, margins, or positioning

### Component Extraction Strategy
**Reusable Components** (extract without changing markup):
- Header/Navigation (appears across all pages)
- Footer (if consistent across pages)
- Stress-level content cards (parameterized by stress level)
- Quiz question containers
- Chapter navigation elements

**Key Rule**: Components must render identical HTML to originals

### Styling Preservation
- Keep all `<style>` tags from HTML files
- Preserve all inline styles exactly
- Maintain Bootstrap CDN links or convert to local Bootstrap
- Do not convert to Tailwind CSS - use existing styling system
- Keep all existing color schemes, fonts, and visual treatments

### Dynamic Routing Implementation
**Stress Level Pages** (4.1-4.5, etc.):
- Route: `/chapter/[chapterNumber]?stress=[high|moderate|low]`
- Same component renders different content based on stress parameter
- No visual differences in layout - only content changes

**Quiz Pages**:
- Route: `/quiz/[quizNumber]`
- Static routes for Quiz 1-4

**Static Pages**:
- `/` - Home
- `/about` - About page

### Navigation System
- Create demo data structure mapping all chapters and stress levels
- Implement simple Next.js Link components for navigation
- Preserve existing button styles and navigation patterns
- Add "Next Chapter" / "Previous Chapter" navigation where appropriate

## Technical Specifications

### Typography
**Use existing font declarations from HTML files** - do not change

### Spacing System
**Use existing spacing** - maintain all Bootstrap spacing utilities (m-*, p-*, etc.)

### Component Structure
- Extract common Header → preserve exact HTML
- Extract common Footer → preserve exact HTML  
- Create ChapterContent component → accepts stress level prop, renders appropriate content
- Create QuizQuestion component → renders questions with existing markup

### Images
**Preserve all existing images**:
- Maintain all image paths and sources from HTML
- Keep all alt text and sizing attributes
- Preserve any hero images or background images exactly as they appear

## Critical Success Criteria

1. **Visual Fidelity**: Side-by-side comparison with original HTML shows zero visual differences
2. **Code Reduction**: Significant reduction in duplicate code through component reuse
3. **Functionality**: Navigation works seamlessly between all pages
4. **Simplicity**: Clean, maintainable Next.js structure without over-engineering

## What NOT to Do

- Do not redesign any pages
- Do not change color schemes
- Do not modify typography beyond what exists
- Do not add new visual elements
- Do not convert to different CSS frameworks
- Do not alter spacing or layout patterns

**This is a technical refactoring project maintaining existing design, not a design project.**