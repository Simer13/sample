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
        bat 'docker-compose build --no-cache'  // Optional: use --no-cache to avoid using old layers
      }
    }

    stage('Run containers') {
      steps {
        bat 'docker-compose up -d'
      }
    }
  }

  post {
    failure {
      echo 'Pipeline failed! Cleaning up...'
      bat 'docker-compose down || true'
    }
    success {
      echo 'Pipeline completed successfully!'
    }
  }
}
