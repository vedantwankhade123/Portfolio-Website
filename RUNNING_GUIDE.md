# Running the Project

This project is set up as a monorepo. You can now run the entire application (both frontend and backend) with a single command.

## 1. Install Dependencies
If you haven't already, install the dependencies from the root directory:
```bash
pnpm install
```

## 2. Run the Website (Development Mode)
Run this command in the root directory:
```bash
npm run dev
```
This will start both the **API Server** and the **Website** simultaneously.

---

### Advanced Commands

If you need to run them separately:

- **Frontend Only**: `pnpm --filter @workspace/mockup-sandbox run dev`
- **Backend Only**: `pnpm --filter @workspace/api-server run dev`
- **Build All**: `pnpm run build`
- **Type Check**: `pnpm run typecheck`
