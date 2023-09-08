pipeline {
    //any agent or worker can be used
    agent any

    tools {
        // Define the Node.js installation to use
        nodejs 'Node.js 20.6'
    }


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
                echo 'Deployment..'
                sh 'vercel login -t igHWhnWeM2XGycsZD29ttMf4'
                sh 'vercel --prod'
                script {
                   def deploymentUrl = sh(script: 'get-deployment-url-command', returnStdout: true).trim()
                    echo "Deployment URL: ${deploymentUrl}"
                }
            }
        }
    }
}
