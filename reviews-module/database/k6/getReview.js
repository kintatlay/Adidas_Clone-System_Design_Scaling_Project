// Enter "k6 run getReview.js" in terminal to run

import http from 'k6/http';
import { Counter } from 'k6/metrics';
import { group, sleep, check } from 'k6';

var myErrorCounter = new Counter("my_error_counter");

// export let options = {
//     stages: [
//         { duration: '2m', target: 100 },
//         { duration: '5m', target: 100 },
//         { duration: '2m', target: 200 },
//         { duration: '5m', target: 200 },
//         { duration: '2m', target: 300 },
//         { duration: '5m', target: 300 },
//         { duration: '2m', target: 400 },
//         { duration: '5m', target: 400 },
//         { duration: '2m', target: 500 },
//         { duration: '5m', target: 500 },
//         { duration: '10m', target: 0 },
//     ],
//     thresholds: {
//         'failed requests': ['rate<0.1'],  // system doesn't produce more than 1% error
//         'http_req_duration': [{ threshold: 'p(95)<500' }]  // response time for 95% of requests should be below 500ms
//     }
// };

export let options = {
    stages: [
        { duration: '1m', target: 500 },
        { duration: '2m', target: 500 },
        { duration: '1m', target: 1000 },
        { duration: '2m', target: 1000 },
        { duration: '1m', target: 1200 },
        { duration: '2m', target: 1200 },
        { duration: '2m', target: 0 },
    ],
    thresholds: {
        'failed requests': ['rate<0.1'],  // system doesn't produce more than 1% error
        'http_req_duration': [{ threshold: 'p(95)<1500' }]  // response time for 95% of requests should be below 1500ms
    }
};


export default function () {
    group('Get Request testing', function() {
        var product_id = Math.floor(Math.random() * 10000000) + 1;
        let res = http.get(`http://localhost:80/product/${product_id}`);
        if (res.status === 404) {
            myErrorCounter.add(1)
        }
        check(res, { "status was 200": r => r.status == 200 });
    });
    sleep(1);
}
