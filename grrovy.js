stage('Activate Google Cloud Configuration and Service Account') {
    def configExists = sh(script: "gcloud config configurations list --format='value(name)' | grep -q k9s-configuration && echo 'true' || echo 'false'", returnStdout: true).trim()

    if (configExists == 'true') {
        sh 'gcloud config configurations activate k9s-configuration'
    } else {
        sh '''
            gcloud config configurations create k9s-configuration
            gsutil cp gs://[BUCKET_NAME]/[KEY_FILE_NAME].json [LOCAL_FILE_PATH]
            gcloud auth activate-service-account --key-file=[LOCAL_FILE_PATH]/[KEY_FILE_NAME].json
        '''
    }
}
