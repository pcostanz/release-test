# Release Workflow Demo

This is a test repository to demonstrate the automated release workflow with release-drafter and git hash-based deployments.

## Features

- **Automatic PR Labeling**: Labels PRs based on file changes
- **Release-Drafter**: Auto-generates release notes with git hash tags
- **Automated Deployment**: Deploys API+UI when changes are detected
- **Git Hash Versioning**: Uses git hashes for consistent tracking

## How to Test

1. **Create a new repository** from this folder
2. **Push to GitHub** and enable GitHub Actions
3. **Create test files** in different directories:
   - `src/api/` - for API changes
   - `src/frontend/` - for frontend changes
   - `docs/` - for documentation changes
4. **Create PRs** and watch them get labeled automatically
5. **Merge to main** and see release-drafter create a draft release
6. **Publish the release** and watch the deployment workflow trigger

## File Structure

```
.github/
├── actions/
│   └── set-version/
│       └── action.yaml          # Custom action for git hash versioning
├── workflows/
│   ├── labeler.yml              # Auto-labels PRs
│   ├── release-drafter.yml      # Creates draft releases
│   └── release-deploy.yml       # Deploys on release publish
├── labeler.yml                  # Label configuration
└── release-drafter.yml          # Release template configuration
```

## Test Scenarios

### Scenario 1: API Changes

1. Create file: `src/api/test.js`
2. Create PR → Gets labeled `api`
3. Merge to main → Release-drafter updates draft
4. Publish release → Deployment triggers

### Scenario 2: Frontend Changes

1. Create file: `src/frontend/component.js`
2. Create PR → Gets labeled `frontend`
3. Merge to main → Release-drafter updates draft
4. Publish release → Deployment triggers

### Scenario 3: Documentation Only

1. Create file: `docs/readme.md`
2. Create PR → Gets labeled `documentation`
3. Merge to main → Release-drafter updates draft
4. Publish release → No deployment (no API/frontend changes)

## Expected Output

When you publish a release, you should see:

- Release tag set to git hash (e.g., `abc123def`)
- Release notes with categorized changes
- Deployment workflow logs showing API+UI deployment
- Notification of successful deployment

## Notes

- This is a **simulation** - no actual deployment happens
- All workflows just log output for testing
- Perfect for understanding the flow before implementing in production
