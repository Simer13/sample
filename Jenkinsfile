pipeline {
  agent any

  stages {
    stage('Clone repo') {
      steps {
        git 'https://github.com/LocalHost003/MERN-PROJECT'
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
