pipeline {
  agent any

  tools {
    nodejs: 'Nodejs'
  }

  stages {
    stage('Cleanup Workspace') {
      steps {
        cleanWs()
      }
    }
    
    stage('Checkout from SCM') {
      steps {
        git branch: 'main', url: 'https://github.com/JeralSandeeptha/Flower-Delivery-Shop.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Run Tests') {
      steps {
        sh 'npm run test'
      }
    }
    
    stage('Build Project') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
