# 🌤️ Weather DevOps App

Application météo développée avec Node.js/Express et React, industrialisée via une chaîne DevOps complète.

## Stack Technique
- **Backend** : Node.js 18 + Express
- **Frontend** : React
- **CI/CD** : GitHub Actions
- **Qualité** : SonarCloud + Jest + ESLint
- **Sécurité** : Trivy + GitHub Secrets
- **Conteneurisation** : Docker → Docker Hub
- **Orchestration** : Kubernetes (Minikube)
- **GitOps** : ArgoCD
- **Monitoring** : Prometheus + Grafana

## Architecture
GitHub → GitHub Actions → Docker Hub → ArgoCD → Kubernetes

## Lancer localement
```bash
cd backend && npm install && npm start
```

## Lancer les tests
```bash
cd backend && npm test
```

## Pipeline CI
- Lint → Tests → SonarCloud → Docker Build → Trivy → Push
