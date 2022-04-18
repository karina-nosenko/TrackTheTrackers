const expandArrow = document.getElementsByClassName('arrowDownUp')[0];

const toggleTrackersListSection = () => {
    const trackersList = document.getElementsByClassName('hidden')[0];
    
    if(trackersList.style.display === "none") {
        trackersList.style.display = "block";
        expandArrow.innerHTML = "arrow_drop_up";
    } else {
        trackersList.style.display = "none";
        expandArrow.innerHTML = "arrow_drop_down";
    }
}

if(expandArrow) {
    expandArrow.addEventListener('click', toggleTrackersListSection);
}