const exec = require('child_process').exec

module.exports = async function () {

    let curl = 'curl "https://a.pgtb.me/facebook/vote/75465458" -H "x-ss-avi: 1173677342" -H "origin: https://a.pgtb.me" -H "accept-encoding: gzip, deflate, br" -H "x-csrf-token: gsUSM9bPt7KPhfhLTE5jBynd1SbA0l6Ol5wO6kxc0TQ=" -H "accept-language: en-US,en;q=0.9" -H "x-requested-with: XMLHttpRequest" -H "cookie: _server_session=BAh7BzoPc2Vzc2lvbl9pZCIlNzIxMmI5YmQwYmQ0YTUxNDc4NDk5ZjczMTc1NDAxODc6EF9jc3JmX3Rva2VuSSIxZ3NVU005YlB0N0tQaGZoTFRFNWpCeW5kMVNiQTBsNk9sNXdPNmt4YzBUUT0GOgZFRg^%^3D^%^3D--3d207ea6aa57932afa46d18b6de97b97d18288d8" -H "x-ss-token: DsDKGroQaPSj1fhN9R0CFg==" -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36" -H "content-type: application/x-www-form-urlencoded; charset=UTF-8" -H "accept: */*" -H "x-ss-urlpath: 52th3k" -H "referer: https://a.pgtb.me/52th3k?embed=1^&vOffset=0^&autoscroll_p=1^&app_data=entry_id^%^3D216631736" -H "authority: a.pgtb.me" -H "x-ss-timestamp: 1557547220" -H "dnt: 1" --data "entry_id=216631736^&disable_restrictions=false^&timestamp=1557547221^&signature=da4143b1939b075ee21caf4ca97ac70f^&sim_time=^&fb_api_version=2^&captcha_token="'
    let child = exec(curl);
    let votes;
    for await (const data of child.stdout) {
        votes = JSON.parse(data).votes
        console.log('in for', votes)
    };
    console.log('out for', votes)
    return `Kevin Maggio Jr currently has ${votes} votes.`;
}