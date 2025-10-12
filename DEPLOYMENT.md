# CapRover Deployment Guide

This guide will help you deploy your Next.js portfolio website on CapRover.

## Prerequisites

1. A CapRover server instance
2. Docker installed on your local machine (for testing)
3. CapRover CLI (`npm install -g caprover`)
4. Your project files ready for deployment

## Deployment Files Created

- `captain-definition` - CapRover configuration file
- `Dockerfile` - Docker configuration for building the container
- `.dockerignore` - Files to exclude from Docker build
- Updated `next.config.mjs` with standalone output
- Added deployment scripts to `package.json`

## Local Testing

Before deploying to CapRover, test your Docker image locally:

```bash
# Build the Docker image
npm run docker:build

# Run the container
npm run docker:run

# Or use Docker directly
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

## Deployment Steps

### 1. Set up CapRover CLI

If you haven't already, install and configure the CapRover CLI:

```bash
npm install -g caprover
```

### 2. Connect to your CapRover instance

```bash
caprover login
```

Follow the prompts to connect to your CapRover server.

### 3. Deploy

Use the provided npm script to deploy:

```bash
npm run deploy:caprover
```

Or deploy manually:

```bash
npm run build
caprover deploy
```

### 4. Configure Environment Variables

After deployment, you may need to configure environment variables in CapRover:

1. Go to your CapRover dashboard
2. Navigate to your app
3. Go to "App Configs" → "Environment Variables"
4. Add any required environment variables (e.g., database URLs, API keys)

## Configuration Details

### Captain Definition

The `captain-definition` file includes:
- Node.js template
- Volume mapping for persistent data
- Port configuration (3000)

### Docker Configuration

The `Dockerfile` includes:
- Multi-stage build for optimization
- Node.js 18 Alpine base image
- Next.js standalone output
- Proper file permissions
- Non-root user execution

### Next.js Configuration

Updated `next.config.mjs` with:
- `output: 'standalone'` for smaller Docker images
- `trailingSlash: false` for clean URLs
- `images: { unoptimized: true }` for static export compatibility

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Check the build logs in CapRover dashboard
2. Ensure all dependencies are properly installed
3. Verify your `next.config.mjs` settings

### Runtime Errors

If the app doesn't run properly:

1. Check environment variables
2. Verify database connections
3. Check the application logs in CapRover

### Deployment Fails

If deployment fails:

1. Ensure your CapRover server is accessible
2. Check your authentication credentials
3. Verify the `captain-definition` syntax

## Customization

### Adding Environment Variables

Add your environment variables to the CapRover dashboard under:
`App Configs` → `Environment Variables`

Common variables:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `API_URL`

### Custom Domains

1. Go to your app in CapRover dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Configure SSL certificates

## Post-Deployment

After successful deployment:

1. Test all functionality including:
   - Main website pages
   - Contact forms
   - Admin panel
   - API endpoints
2. Monitor application logs
3. Set up monitoring and alerts if needed

## Support

For CapRover-specific issues:
- [CapRover Documentation](https://caprover.com/docs/)
- [CapRover GitHub](https://github.com/caprover/caprover)

For Next.js deployment issues:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)