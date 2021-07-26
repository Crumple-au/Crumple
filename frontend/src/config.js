function envTypeUrl(envType) {
    if (envType === 'production') {
        const PRODUCTION_URL = 'https://crumple-au.herokuapp.com';
        return PRODUCTION_URL
    };

    if (envType === 'development') {
        const DEVELOPMENT_URL = 'http://localhost:3000';
        return DEVELOPMENT_URL
    }
    else {
        console.error("Please specify which environment you are in.")
    }
}

// Make sure to change this before each build.
// const envUrl = envTypeUrl('development')
const envUrl = envTypeUrl('production')

console.log('You are connected to ' + envUrl + ' host.');

export default envUrl;