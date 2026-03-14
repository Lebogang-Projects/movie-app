# Movie Gallery (Render Control Without State)

This project demonstrates how to affect rendering without `useState` or a state management library by driving UI changes through URL query parameters and pure functions.

## Goal

Show how rendering can be influenced using:

- URL search params (`window.location.search`).
- Stateless filter and sort utilities.
- Pure rendering based on props and derived values.

## Features

- Movie gallery with filtering and sorting via query parameters.
- Stateless filtering utilities in [src/utils/filters.ts](src/utils/filters.ts).
- UI components that render purely from props and derived values.

## How Rendering Is Affected (Without State)

Rendering changes are driven by the URL query string (e.g., `?genre=drama&rating=8.5&sort=rating_desc`).
The gallery reads these params and applies pure filter/sort functions to the dataset before rendering.

Key logic lives in [src/components/movieGallery.tsx](src/components/movieGallery.tsx).

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)

### Install

```bash
npm install
```

### Run the app

```bash
npm run dev
```

Vite will print the local URL in the terminal (typically http://localhost:5173).

## Demo Images

### Gallery Overview

![Movie Gallery](/src/assets/capture-1.png)

### Filtering By Genre

![Movie Gallery](/src/assets/capture-2.png)

### Sorting By Rating

![Movie Gallery](/src/assets/capture-4.png)

### Filtering By Showtime

![Movie Gallery](/src/assets/capture-3.png)

## Example URLs

- `?genre=drama`
- `?rating=8.8`
- `?release_year=1994`
- `?showtime=Evening`
- `?sort=rating_desc`


