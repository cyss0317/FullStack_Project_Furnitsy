pipeline {
  agent any

  stages {
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