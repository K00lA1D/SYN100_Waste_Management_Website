export const fetchGoogleSheet = async (spreadsheetId, range, apiKey) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the data for debugging
        if (!data.values) {
            throw new Error('No values in response');
        }
        return data.values;
    } catch (error) {
        console.error('Error fetching Google Sheet:', error);
        return null;
    }
};
