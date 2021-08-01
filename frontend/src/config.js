function nodeEnv() {
    if (process.env.NODE_ENV === 'production') {
        return 'https://crumple-au.herokuapp.com';
    }
    else if (process.env.NODE_ENV === 'development') {
        console.log('You are in the ' + process.env.NODE_ENV + ' build.');
        return ''
    }
    else if (process.env.NODE_ENV === 'test') {
        console.log('You are in the ' + process.env.NODE_ENV + ' build.');
        return ''
    }
    else {
        console.error("Please specify which environment you are in.")
    }
}

const ENV_URL = nodeEnv()

export default ENV_URL;