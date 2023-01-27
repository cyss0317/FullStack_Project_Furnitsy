pipeline {
  agent any

  stages {
    stage('Setup') {
      steps {
        script {
          SHOULD_DEPLOY_STAGING = (env.BRANCH_NAME == 'master')
        }
        updateGitHubCommitStatus('pending', 'Building...')

        sh('bash -c " source ~/.rvm/scripts/rvm && rvm use --install --create . && export > rvm.env"')
        sh('''
          { . rvm.env; } &> /dev/null
          gem list --silent -i bundler -v "${BUNDLER_VERSION}" ||
            gem install bundler -v "${BUNDLER_VERSION}" --no-document
          bundle install --jobs=4 --retry=4
        ''')

        nvm(nvmInstallURL: 'https://raw.git.uscis.dhs.gov/DIDIT/didit_nvm/master/install-v0.34.0.sh?token=AAACEFQRJL3FOR4E2WNFLC3A4425U',
            nvmIoJsOrgMirror: 'https://iojs.org/dist',
            nvmNodeJsOrgMirror: 'https://nodejs.org/dist',
            version: '16.14.0') {
          sh('yarn install')
            }
      }
      
    stage('Test') {
      parallel {
        stage('Ruby') {
          steps {
            sh('''
              { . rvm.env; } &> /dev/null
              bundle exec rake db:create db:migrate db:test:prepare
            ''')

            sh('''
              { . rvm.env; } &> /dev/null
              RAILS_ENV=test bundle exec rake webpacker:compile
            ''')

            sh('''
              { . rvm.env; } &> /dev/null
              RAILS_ENV=test SIMPLECOV_FORMATTER=rcov bundle exec rspec spec
            ''')

            step([
                $class   : 'RcovPublisher',
                reportDir: 'coverage/rcov',
                targets  : [
                    [metric: 'TOTAL_COVERAGE', healthy: 90, unhealthy: 0, unstable: 90],
                    [metric: 'CODE_COVERAGE', healthy: 90, unhealthy: 90, unstable: 90]
                ]
            ])
          }
        }

      }
    }
  }
}