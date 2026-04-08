# Playwright Technical Test Automation

![Playwright](https://img.shields.io/badge/Playwright-Tests-green)
![Node.js](https://img.shields.io/badge/Node.js-18+-blue)
![Status](https://img.shields.io/badge/status-active-success)

This repository contains an automated UI testing framework for the Automation Exercise website, built with Playwright and TypeScript.

---

## 🎯 Project Goal

The goal of this project is to demonstrate:

- UI test automation using Playwright
- Clean and scalable test architecture
- Maintainable test design using modern best practices

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- Playwright >= 1.40

---

### Installation

1. Clone the repository:
git clone https://github.com/khomus/playwright-exercise.git
cd playwright-exercise

2. Install dependencies:
npm install

3. Install Playwright browsers:
npx playwright install chromium

---

## ▶️ Running Tests

Run all tests:
npx playwright test

Run a specific test file:
npx playwright test tests/product-search.spec.ts

Run in UI mode:
npx playwright test --ui

View test report:
npx playwright show-report

---

## 📁 Project Structure

playwright-exercise/
├── pages/                # Page Object classes
├── tests/                # Test specs and fixtures
├── playwright.config.ts  # Playwright configuration
├── package.json
└── README.md

---

## 🏗 Framework Architecture

The framework is built with scalability and maintainability in mind:

- Page Object Model (POM)  
  All UI interactions are encapsulated in the pages/ directory

- Custom Fixtures  
  Implemented in tests/fixtures.ts for dependency injection

- BasePage Pattern  
  Shared logic across all pages

---

## 🧪 Example Test

import { test, expect } from '@playwright/test';

test('User can search for a product', async ({ homePage }) => {
  await homePage.goto();
  await homePage.searchFor('T-shirt');
  await expect(homePage.results).toBeVisible();
});

---

## 🛠 Key Technical Decisions

1. Handling Ads  
Blocked ad domains using page.route() to improve stability

2. Modern Locators  
Used getByRole, getByText instead of CSS/XPath

3. Dialog Handling  
Handled dialogs using page.on('dialog')

---

## 🤖 AI Assistance

AI tools were used for:
- Scaffolding
- Best practices validation
- Troubleshooting

All decisions were reviewed manually.

---

## 📈 Future Improvements

- API layer for test data
- Visual regression testing
- Data-driven tests
- CI/CD with GitHub Actions

---

## ⚙️ CI/CD (Planned)

Tests will run automatically on:
- Push
- Pull Requests
