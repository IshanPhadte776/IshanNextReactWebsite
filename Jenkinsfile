pipeline {
    //any agent or worker can be used
    agent any

    //These are the stages 
    stages {
        //This is the stage
        //These names are user made, 


        stage('Build') {
            // For this stage, use npm install to install dependencies
            steps {
                sh 'npm install'
                dir('build') {
                    // Inside the 'build' directory, run the build script
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }


        stage('Deploy') {
            steps {
                echo 'Testing..'
            }
        }
    }
}