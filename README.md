# A5/A6 Calendar

A printable, linked planner built specifically for Supernote A5 and A6 devices.

The project generates a full-year planner with monthly views plus daily Todo and Meetings pages. Navigation is handled through internal links so the finished document works well on Supernote hardware, which means a few implementation choices are intentionally device-specific rather than conventional web-app patterns.

## Configuration

The planner year and weekend behavior are configured in `src/App.tsx`:

```ts
const year = 2024;
const noWeekend = true;
```

Change those values before generating a new planner.

## Development

```bash
yarn
yarn start
```

## Build

```bash
yarn build
```

The project uses React, TypeScript, Tailwind CSS, Parcel, and Day.js.
