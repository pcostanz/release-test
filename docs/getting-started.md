# Getting Started

This is a test documentation file that will trigger the 'documentation' label when modified.

## Overview

This demo repository shows how to set up automated release workflows using:

- GitHub Actions
- Release Drafter
- Automatic PR labeling
- Git hash-based versioning

## Quick Start

1. Create a new repository from this template
2. Enable GitHub Actions
3. Create test files in different directories
4. Create PRs and watch them get labeled
5. Merge to main and see release drafts created
6. Publish releases and watch deployments trigger

## File Structure

- `src/api/` - API-related files (triggers 'api' label)
- `src/frontend/` - Frontend files (triggers 'frontend' label)
- `components/` - UI components (triggers 'frontend' label)
- `libs/backend/` - Backend utilities (triggers 'api' label)
- `docs/` - Documentation (triggers 'documentation' label)
- `tests/` - Test files (triggers 'testing' label)

## Testing Scenarios

### Test API Changes

1. Modify any file in `src/api/` or `libs/backend/`
2. Create a PR
3. Should get labeled with 'api'
4. When merged and released, should trigger deployment

### Test Frontend Changes

1. Modify any file in `src/frontend/` or `components/`
2. Create a PR
3. Should get labeled with 'frontend'
4. When merged and released, should trigger deployment

### Test Documentation Only

1. Modify any file in `docs/`
2. Create a PR
3. Should get labeled with 'documentation'
4. When merged and released, should NOT trigger deployment
