function nodeEnv() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://crumple-au.herokuapp.com';
    }
    else if (process.env.NODE_ENV === 'development') {
        return ''
    }
    else if (process.env.NODE_ENV === 'test') {
        return ''
    }
    else {
        console.error("Please specify which environment you are in.")
    }
}

const ENV_URL = nodeEnv()

console.log('You are in the ' + process.env.NODE_ENV + ' build.');

export default ENV_URL;