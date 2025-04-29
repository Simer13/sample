pipeline {
  agent any

  stages {
    stage('Clone repo') {
      steps {
        git url: 'https://github.com/Simer13/sample', branch: 'main'
      }
    }

    stage('Cleanup containers') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
          bat 'docker-compose down'
        }
      }
    }

    stage('Build Docker images') {
      steps {
        bat 'docker-compose build'
      }
    }

    stage('Run containers') {
      steps {
        bat 'docker-compose up -d'
      }
    }
  }
}
