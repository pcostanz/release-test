# Testing Guide

This guide walks you through testing the automated release workflow step by step.

## Prerequisites

1. Create a new GitHub repository from this demo
2. Enable GitHub Actions in repository settings
3. Ensure you have write permissions to the repository

## Test Scenarios

### Scenario 1: API Changes (Should Trigger Deployment)

1. **Create a new branch:**

   ```bash
   git checkout -b feature/api-endpoint
   ```

2. **Modify an API file:**

   ```bash
   # Edit src/api/example.js or libs/backend/utils.js
   echo "// New API feature" >> src/api/example.js
   ```

3. **Commit and push:**

   ```bash
   git add .
   git commit -m "Add new API endpoint"
   git push origin feature/api-endpoint
   ```

4. **Create a Pull Request:**

   - Go to GitHub and create a PR
   - **Expected:** PR should be automatically labeled with `api`

5. **Merge the PR:**

   - Merge to main branch
   - **Expected:** Release-drafter should update/create a draft release

6. **Publish the Release:**
   - Go to GitHub Releases
   - Edit the draft release (add customer-facing notes)
   - Click "Publish release"
   - **Expected:** Deployment workflow should trigger and log API deployment

### Scenario 2: Frontend Changes (Should Trigger Deployment)

1. **Create a new branch:**

   ```bash
   git checkout -b feature/new-component
   ```

2. **Modify a frontend file:**

   ```bash
   # Edit src/frontend/component.js or components/Button.js
   echo "// New frontend feature" >> src/frontend/component.js
   ```

3. **Follow steps 3-6 from Scenario 1**
   - **Expected:** PR labeled with `frontend`
   - **Expected:** Deployment workflow triggers for API+UI

### Scenario 3: Documentation Only (Should NOT Trigger Deployment)

1. **Create a new branch:**

   ```bash
   git checkout -b docs/update-readme
   ```

2. **Modify documentation:**

   ```bash
   # Edit docs/getting-started.md
   echo "## New section" >> docs/getting-started.md
   ```

3. **Follow steps 3-6 from Scenario 1**
   - **Expected:** PR labeled with `documentation`
   - **Expected:** No deployment triggered (only documentation changes)

### Scenario 4: Mixed Changes (Should Trigger Deployment)

1. **Create a new branch:**

   ```bash
   git checkout -b feature/mixed-changes
   ```

2. **Modify both API and docs:**

   ```bash
   echo "// API change" >> src/api/example.js
   echo "## Doc update" >> docs/getting-started.md
   ```

3. **Follow steps 3-6 from Scenario 1**
   - **Expected:** PR labeled with both `api` and `documentation`
   - **Expected:** Deployment triggered (because API changes detected)

## What to Look For

### In Pull Requests:

- ✅ Automatic labeling based on file changes
- ✅ Labels appear immediately after PR creation

### In Release Drafts:

- ✅ Auto-generated changelog with categorized changes
- ✅ Git hash as the release tag
- ✅ Services affected section showing what will be deployed

### In Deployment Workflows:

- ✅ Workflow triggers only when API/frontend changes detected
- ✅ Logs show "DEPLOYING API + UI TO PRODUCTION"
- ✅ Notification shows successful deployment

### In Release Notes:

- ✅ Customer-friendly language (after PM edits)
- ✅ Clear indication of what services are affected
- ✅ Git hash version for tracking

## Troubleshooting

### PR Not Getting Labeled

- Check if the labeler workflow ran
- Verify file paths match the labeler configuration
- Ensure the PR was created after the workflow was set up

### Release Draft Not Created/Updated

- Check if release-drafter workflow ran on merge to main
- Verify the workflow has proper permissions
- Check if there are any workflow errors

### Deployment Not Triggering

- Verify the release was published (not just saved as draft)
- Check if API/frontend files were actually changed
- Look at the deployment workflow logs for the change detection logic

## Expected Workflow Timeline

1. **PR Created** → Labeler runs → PR gets labeled
2. **PR Merged** → Release-drafter runs → Draft release updated
3. **Release Published** → Deployment workflow runs → API+UI deployed
4. **Deployment Complete** → Notification sent

This entire process should take 2-5 minutes depending on GitHub Actions queue.
