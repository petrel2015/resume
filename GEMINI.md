# Gemini Development Guide - Personal Resume Project

This document provides architectural context and development guidelines for Gemini CLI to maintain and evolve the personal resume project.

## 🚀 Project Vision
A professional, high-performance personal resume built with modern web technologies. The project aims to provide a seamless transition between a high-fidelity web presence and a perfectly formatted PDF for traditional job applications.

## 🏗 Key Constraints & Goals

### 1. Single Page Deployment
- **Target**: Must be deployable as a single `index.html` (with bundled assets) for hosting on **GitHub Pages**.
- **Architecture**: Single Page Application (SPA) using React + Vite.
- **Routing**: Minimize or eliminate complex routing; focus on a clean, scrollable single-page layout.

### 2. Print-Ready (A4 Export)
- **Format**: Optimized for **A4 paper** size.
- **Length**: Strictly limited to a maximum of **2 pages**.
- **CSS Strategy**: Use `@media print` queries to handle page breaks, hide UI elements (like download buttons), and ensure typography remains legible when printed.
- **Dimensions**: Target A4 standard dimensions (210mm x 297mm) with appropriate margins.

## 📂 Project Structure

### Frontend (React + TypeScript)
- **Location**: `resume-web/`
- **Stack**: React 19, Vite, TypeScript, Vanilla CSS/Styled Components (TBD).
- **Entry Point**: `resume-web/src/main.tsx`
- **Main Layout**: `resume-web/src/App.tsx`

### Data & Content
- **Story Bank**: `story-bank/` contains structured project descriptions and experience "stories" that can be integrated into the resume.

## 🛠 Development Guidelines for Gemini

### Styling & Layout
1. **Vanilla CSS Preference**: Prefer clean, maintainable Vanilla CSS for maximum control over print styles.
2. **Precision Layout**: Use Flexbox and CSS Grid for structured sections. Avoid absolute positioning that might break page-flow during printing.
3. **Typography**: Use professional, cross-platform font stacks to ensure consistent rendering across different browsers and print engines.

### Components
1. **Modularity**: Break the resume into logical components (Header, Experience, Skills, Education, Projects).
2. **Data-Driven**: Keep content separated from presentation logic to allow for easy updates to resume data.

## 🔗 Common Workflows

### Development
```bash
cd resume-web
npm run dev
```

### Build for Deployment
```bash
cd resume-web
npm run build
```
The output will be in `resume-web/dist/`, ready for GitHub Pages.

## 📈 Optimization Patterns
- **Page Break Control**: Use `page-break-inside: avoid` and `break-before/after` to prevent awkward splitting of experience items across pages.
- **Asset Optimization**: Inlined SVGs or small optimized images to ensure the single-page experience is fast and self-contained.

## 🎯 Roadmap
- [ ] Implement core A4-sized layout and typography.
- [ ] Integrate project details from `story-bank/`.
- [ ] Add PDF export button (triggering `window.print()`).
- [ ] Automate GitHub Pages deployment.
