pipeline {
    //any agent or worker can be used
    agent any

    tools {
        // Define the Node.js installation to use
        nodejs 'Node.js 20.6'
    }
    
    environment {
        NPM_CONFIG_PREFIX = "${env.WORKSPACE}/npm_global"
    }

    //These are the stages 
    stages {
        //This is the stage
        //These names are user made,

        stage('Set NPM Registry') {
            steps {
                script {
                    // Set the npm registry to use a mirror
                    sh 'npm config set registry https://registry.npmjs.org/'
                }
            }
        } 

        stage('Build') {
            // For this stage, use npm install to install dependencies
            steps {
                sh "npm config set prefix ${env.NPM_CONFIG_PREFIX}"
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

        stage('Install Vercel CLI') {
            steps {
                script {
                    // Specify the installation directory
                    def installDirectory = "${env.WORKSPACE}/vercel-install"

                    // Create the installation directory if it doesn't exist
                    sh "mkdir -p ${installDirectory}"

                    // Download and install the Vercel CLI in the specified directory
                    sh "npm install -g vercel --prefix ${installDirectory}"

                    // Construct the full path to the Vercel CLI executable
                    def vercelPath = "${installDirectory}/bin/vercel"

                    // Use the sh step to execute 'vercel --version' and capture its output
                    def vercelVersion = sh(script: "${vercelPath} --version", returnStdout: true).trim()

                    // Echo the result to the console
                    echo "Vercel CLI Version: ${vercelVersion}"
                }
            }
        }



        stage('Deploy') {
            steps {
                script {
                    echo 'Deployment..'

                    // Specify the full path to the vercel executable
                    def vercelExecutable = "/var/lib/jenkins/workspace/PersonalNextWebsite/vercel-install/bin/vercel"


                    // Specify your Vercel token
                    def vercelToken = "igHWhnWeM2XGycsZD29ttMf4"

                    // Run vercel login with the token
                    sh "${vercelExecutable} login --token ${vercelToken} --auth github"

                    // Deploy using the full path to vercel executable
                    sh "${vercelExecutable} --prod"

                    // Get the deployment URL
                    def deploymentUrl = sh(script: 'get-deployment-url-command', returnStdout: true).trim()
                    echo "Deployment URL: ${deploymentUrl}"
                }
            }
        }


    }
}
