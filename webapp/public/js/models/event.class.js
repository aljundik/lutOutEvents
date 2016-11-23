"use strict";
var Event = (function () {
    function Event(eventTitle, eventDescription, eventURL, eventStartDate, eventEndDate, eventImage, eventPrice, eventAddress, eventLatitude, eventLongitude) {
        this.eventTitle = eventTitle;
        this.eventDescription = eventDescription;
        this.eventURL = eventURL;
        this.eventStartDate = eventStartDate;
        this.eventEndDate = eventEndDate;
        this.eventImage = eventImage;
        this.eventPrice = eventPrice;
        this.eventAddress = eventAddress;
        this.eventLatitude = eventLatitude;
        this.eventLongitude = eventLongitude;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.class.js.map