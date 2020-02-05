import Constants from 'expo-constants';

const STAGING = 'staging';

const PRODUCTION = 'production';

const ENV = {
    dev: {
        iosClientId : '607442737024-5kqmeo6f8bmusngra5ja59bhk39l0mkp.apps.googleusercontent.com',
        androidClientId: '607442737024-r6ck1hss9bj21j5mif99qb6bq3t17021.apps.googleusercontent.com',
        iosStandaloneAppClientId: '607442737024-5kqmeo6f8bmusngra5ja59bhk39l0mkp.apps.googleusercontent.com',
        androidStandaloneAppClientId: '607442737024-r6ck1hss9bj21j5mif99qb6bq3t17021.apps.googleusercontent.com'
    },
    staging: {
        iosClientId: null,
        androidClientId: null,
        iosStandaloneAppClientId: null,
        androidStandaloneAppClientId: null
    },
    production: {
        iosClientId: null,
        androidClientId: null,
        iosStandaloneAppClientId: null,
        androidStandaloneAppClientId: null
    }
}

export default ( env = Constants.manifest.releaseChannel ) => {
    if( __DEV__ ){
        return ENV.dev;
    } else if( env === STAGING ) {
        return ENV.staging;
    } else if( env === PRODUCTION ) {
        return ENV.production;
    }
}