pipeline{
    agent any;
    stages{
        stage('code'){
            steps{
                git url: "https://github.com/SudhakarBhaskar656/LeadForge_Docker.git", branch: "main"
            }
        }
        stage("build"){
            steps{
               sh "docker build -t leadbackend:latest -f leadforge_backend/backend.Dockerfile ./leadforge_backend"
               sh "docker build -t leadfrontend:latest -f leadforge_frontend/frontend.Dockerfile ./leadforge_frontend"
            }
        }
        stage("test"){
            steps{
                echo "Test Phase"
            }
        }
        stage("Push Image")
        {
            steps{
                withCredentials([usernamePassword(
                    credentialsId:"DockerUser",
                    passwordVariable: "dockerhubPass",
                    usernameVariable: "dockerHubUser"
                    )])
                {
                  sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"  
                  sh "docker image tag leadbackend ${env.dockerHubUser}/leadbackend:latest"
                  sh "docker image tag leadfrontend ${env.dockerHubUser}/leadfrontend:latest"
                  sh "docker push ${env.dockerHubUser}/leadbackend:latest"
                  sh "docker push ${env.dockerHubUser}/leadfrontend:latest"
                }
            
            }
        }
      stage("deploy") {
           steps {
                    withCredentials([string(credentialsId: "MONGO_URI", variable: "MONGO_URI")]) {
                 sh "docker compose up -d --build"
        }
    }
}
    }
}