//TO-DO: Create custom tag based on javascript below
//something similar will be used in custom template tag [Django]

let date = "{{value.date_created}}";
let diffMs = new Date() - date;
let diffSec = Math.round(diffMs / 1000);
let diffMin = diffSec / 60;
let diffHour = diffMin / 60;
let diffDay = diffHour / 24;
let diffWeek = diffDay / 7;

function formatDate(date){
    if (diffSec < 1){ //less than a second
        return 'Just now';
    } else if (diffMin < 1) { //less than a minute
        return `${diffSec} Second${diffSec !== 1 ? 's' : ''} ago`;
    } else if (diffHour < 1) { //less than a hour
        return `${diffMin} Minute${diffMin !== 1 ? 's' : ''} ago`;
    } else if (diffDay < 1) { //less than a day
        return `${diffDay} Day${diffDay !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffWeek} Week${diffWeek !== 1 ? 's' : ''} ago`;
    }
}