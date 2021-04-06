var googleTrends = require('google-trends-api');
var fs = require('fs');

var keys = [
    'mass tourism', 'alternative tourism', 'business tourism', 'pleasure tourism', 'nature tourism',
    'cultural tourism', 'social tourism', 'recreational tourism', 'hiking tourism', 'sports tourism',
    'religious tourism', 'health tourism', 'adventure tourism', 'ecotourism', 'nautic tourism', 'fishing tourism',
    'rural tourism', 'cultural tourism'
]

keys.forEach(key =>
    googleTrends.relatedQueries({ keyword: key })
    .then((res) => {
        fs.writeFile(
            'with_tourism_key_word/result_' + key + '.json',
            res,
            'utf8',
            () => console.log('Write to file OK!')
        );
    })
    .catch((err) => console.log(err)))