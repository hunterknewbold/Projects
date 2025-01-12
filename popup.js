document.getElementById('grabButton').addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
        let urls = tabs.map(tab => tab.url);
        let formattedUrls = urls.join('\n');

        navigator.clipboard.writeText(formattedUrls)
            .then(() => {
                document.getElementById('message').textContent = 'URLs copied to clipboard!';
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
                document.getElementById('message').textContent = 'Error copying URLs.';
            });
    });
});