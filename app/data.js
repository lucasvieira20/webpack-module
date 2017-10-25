function Data(url){

    return fetch(url, {mode: 'cors'})
        .then(function(response) {
            // response.json(function(data){
            //     return data;
            // });

            return response.text();
        })

        .then(function(text) {
            console.log('Request successful \n', text);
        })

        .catch(function(error) {
            log('Request failed', error)
        });
}

export default Data;
