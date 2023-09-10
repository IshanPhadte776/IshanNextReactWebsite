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
                // Download and install the Vercel CLI
                
                sh 'npm install -g vercel'

            }
        }



        stage('Check Version') {
            steps {
                script {
                    // Find the full path to the vercel executable
                    def vercelPath = sh(script: 'which vercel', returnStdout: true).trim()
                    
                    // Echo the result to the console
                    echo "Vercel executable path: ${vercelPath}"
                }

                sh 'vercel --version'

            }
        }

        stage('Check Vercel Installation') {
            steps {
                script {
                    def vercelInstalled = sh(script: 'command -v vercel', returnStatus: true)
                    
                    if (vercelInstalled == 0) {
                        echo 'Vercel is installed.'
                        // Your further steps for Vercel
                    } else {
                        error('Vercel is not installed. Please install it.')
                    }
                }
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
