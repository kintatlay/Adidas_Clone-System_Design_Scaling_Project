// Enter "k6 run postReview.js" in terminal to run

import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 300 },
        { duration: '2m', target: 300 },
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
    var url = 'http://localhost:3000/review';
    var randomCount = Math.floor(Math.random() * 1000000000) + 10000000;
    var payload = JSON.stringify({
        product_id: randomCount,
        product_name: `new item ${randomCount}`,
        review: [{
            review_id: randomCount,
            user: {
                user_id: randomCount,
                firstname: 'First name',
                lastname: 'Last name',
                gender: ['Male', 'Female', 'Other'][Math.floor(Math.random() * 3)],
                nickname: 'Nickname',
                email: 'sample@gmail.com',
                password: 'sample password',
            },
            opinion: 'sample opinion',
            text: 'sample text',
            rating_overall: Math.floor(Math.random() * (5 - 1 + 1)) + 1,
            doesRecommended: [true, false][Math.floor(Math.random() * 2)],
            rating_size: ['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big'][Math.floor(Math.random() * 5)],
            rating_width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'][Math.floor(Math.random() * 5)],
            rating_comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'][Math.floor(Math.random() * 5)],
            rating_quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'][Math.floor(Math.random() * 5)],
            isHelpful: Math.floor(Math.random() * 101),
            isNotHelpful: Math.floor(Math.random() * 101),
            created_at: new Date("2014-12-11T14:12:00Z"),
            review_photo_path: []
        }],
    });
    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let res = http.post(url, payload, params);
    check(res, { "status was 201": r => r.status == 201 });
    sleep(1);
}
