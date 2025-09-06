# Example Makefile for testing
# This file will trigger 'infrastructure' label when modified

.PHONY: help install test build deploy clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

test: ## Run tests
	npm test

build: ## Build the application
	npm run build

deploy: ## Deploy to production
	@echo "Deploying to production..."
	@echo "This would normally deploy the application"

clean: ## Clean build artifacts
	rm -rf dist/
	rm -rf node_modules/

dev: ## Start development server
	npm run dev

lint: ## Run linter
	npm run lint

format: ## Format code
	npm run format
