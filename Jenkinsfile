pipeline {
  agent any

  stages {
    stage('Clone repo') {
      steps {
        git url: 'https://github.com/Simer13/sample', branch: 'main'
      }
    }

    stage('Build Docker images') {
      steps {
        sh 'docker-compose build'
      }
    }

    stage('Run containers') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}
