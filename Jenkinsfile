pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Build') {
            steps {
                script {
                    docker.image('node:18.17.1-alpine3.18').inside('-p 3000:3000') {
                        sh 'npm install'
                    }
                }
            }
        }
    }
}