var natural = require('natural');

natural.LogisticRegressionClassifier.load('classifier.json', null, (err, classifier) => {
    if (err){
        console.log(err);
    } else {
        var testComment = "Ticket To The Moon"
        console.log(classifier.classify(testComment))
    }
})
