function nodeEnv() {
    if (process.env.NODE_ENV === 'test') {
        return 'mongodb://localhost/crumple_test'
    }
    else if (process.env.NODE_ENV === 'dev') {
        return 'mongodb://localhost/crumple'
    }
    else {
        console.error('error in backend/config.js')
    }
    return
};

const mongodb_database = nodeEnv();

export default mongodb_database;