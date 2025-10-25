# Noion.cloud

A landing page for the Noion vision: solar-powered AI running on SolarEdgeCloud infrastructure.

## Development workflow

This repo uses two main branches:

- `main` - Production branch, kept clean and stable
- `dev` - Development branch for testing and experiments

### First-time setup

```powershell
# Clone the repo
git clone https://github.com/slyse/Noion.cloud.git
cd Noion.cloud

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Branch workflow

Work on the `dev` branch for all changes:

```powershell
# Create and switch to dev branch
git checkout -b dev

# Make your changes...

# Push dev branch to remote
git push -u origin dev
```

When changes are tested and ready:

1. Create a pull request from `dev` to `main`
2. Review the changes
3. Merge to `main` when approved

## Available scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run linting

## Tech stack

- Next.js (React)
- Tailwind CSS
- TypeScript