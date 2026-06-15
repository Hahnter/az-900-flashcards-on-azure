# Azure Purpose and AZ-900 Relevance

## Project Purpose

This project is a flashcard study app for Microsoft Azure Fundamentals: AZ-900.

The goal is to learn Azure concepts by building and deploying a simple cloud-hosted web app. The app is intentionally small so the focus stays on the fundamentals: what cloud hosting is, how managed services work, how deployment can be automated, and how Azure organizes resources.

## How This Relates to Azure

This app can be hosted with Azure Static Web Apps, which is a managed Azure service for deploying static websites and frontend apps from a GitHub repository.

When deployed to Azure Static Web Apps, this project demonstrates:

- Public cloud hosting
- Managed infrastructure
- PaaS/serverless-style web hosting
- GitHub-based CI/CD deployment
- Azure resource groups
- Azure regions
- HTTPS for web apps
- Basic cost awareness through Azure free-tier hosting
- The shared responsibility model

## AZ-900 Concepts Practiced

### Cloud Concepts

The project shows how a web app can run on cloud infrastructure without owning or maintaining physical servers.

Related AZ-900 ideas:

- Public cloud
- Scalability
- High availability
- Consumption-based pricing
- CapEx vs OpEx
- Shared responsibility model

### Azure Architecture and Services

The project uses Azure Static Web Apps as the main Azure service.

Related AZ-900 ideas:

- Azure regions
- Resource groups
- Azure subscriptions
- Compute and hosting services
- Static web hosting
- Managed platform services

### Azure Management and Governance

Deploying the app through Azure introduces basic management and governance concepts.

Related AZ-900 ideas:

- Azure portal
- Resource groups
- Role-based access control
- Deployment logs
- Cost management
- Monitoring options

## Why Azure Static Web Apps Is a Good Fit

Azure Static Web Apps is a good beginner Azure service because it is similar to platforms like Vercel and Cloudflare Pages, but it exists inside the Azure ecosystem.

It lets this project demonstrate cloud hosting without needing to manage:

- Virtual machines
- Operating system patches
- Web server configuration
- Manual deployment steps

Azure handles the hosting infrastructure, while the developer focuses on the app code and repository.

## Possible Future Improvements

This project can grow as more Azure concepts are studied.

Possible additions:

- Add more AZ-900 flashcards
- Deploy the app to Azure Static Web Apps
- Add screenshots of the Azure deployment
- Add a comparison between Azure Static Web Apps, Vercel, and Cloudflare Pages
- Add an Azure Function API for serverless compute practice
- Add Application Insights notes for monitoring practice

## Portfolio Summary

This project demonstrates that I can connect AZ-900 study topics to a real cloud-hosted application. It is not meant to be a complex production system. It is meant to show foundational understanding of Azure, cloud hosting, managed services, CI/CD, cost awareness, and basic governance.
