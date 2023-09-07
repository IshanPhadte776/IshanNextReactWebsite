pipeline {
    //any agent or worker can be used
    agent any

    //These are the stages 
    stages {
        //This is the stage
        stage('Build') { 
            //For this stage, use npm install and install the dependencies
            steps {
                sh 'npm install' 
            }
        }

        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}