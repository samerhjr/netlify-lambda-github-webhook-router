exports.handler = function(event, context, callback) {

    const { ref } = JSON.parse(event.body)

    const send = ref => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ msg: 'Hello ' + ref})
        });
    }

    // Make sure HTTP method is POST
    if (event.httpMethod == 'POST') {
        send(ref);
    }
}