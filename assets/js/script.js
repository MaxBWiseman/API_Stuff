const API_KEY = 'XFxdlmdT09z9sNohEcCpCDcMilA'
const API_URL = 'https://ci-jshint.herokuapp.com/api';
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById('checksform'))

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form
    })
    
    const data = await response.json()

    if (response.ok) {
        displayErrors(data)
    } else {
        throw new Error(data.error)
    }
}

function displayErrors(data) {
    
    let heading = `JSHint Results for ${data.file}`;

    if (data.total_errors === 0) {
        results = `<div class="no-errors">No errors reported!</div>`
    }else {
        results = `<div>Total Errors: ${data.total_errors}</div>`
        for (let error of data.error_list) {
            results += `<div>At line ${error.line}, column ${error.character}: ${error.reason}</div>`
        }
    }
    document.getElementById("resultsModalTitle").innerHTML = heading;
    document.getElementById('results-content').innerHTML = results;
    resultsModal.show();
}

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = 'API Key Status'
    let results = `<div>Your key is valid until</div>`
    results += `<div class='key-status'>${data.expiry}</div>`

    document.getElementById("resultsModalTitle").innerHTML = heading;
    document.getElementById('results-content').innerHTML = results;

    resultsModal.show();
}