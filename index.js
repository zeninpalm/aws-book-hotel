import fetch from 'node-fetch';

exports.handler = async (evt) => {
    const WEBSERVICE_URL = "https://qqkaisjni2.execute-api.us-east-1.amazonaws.com/Prod";
    var json_body = JSON.parse(evt.body);
    const body = {
        buyer_id: json_body.buyer_id,
        start_date: json_body.start_date,
        end_date: json_body.end_date,
        near: json_body.near,
    };

    const response = await fetch(`${WEBSERVICE_URL}/hotel`, {
        method: 'POST', 
        body: JSON.stringify(body)
    });

    const data = await response.json();
}