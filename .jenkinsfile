pipeline {
  agent any
  stages {
    stage('Preparation') {
    steps {
      script {
        def p = jenkins.model.Jenkins.getInstance().proxy
        env['http_proxy'] = "http://${p.name}:${p.port}"
        env['https_proxy'] = env['http_proxy']
        env['no_proxy'] = p.noProxyHost
      }
    }
  }
  stage('Build') {
    steps {
      sh 'npm install'
    }
  }
  stage('Run') {
    steps {
      sh 'node test.js'
    }
  }
}