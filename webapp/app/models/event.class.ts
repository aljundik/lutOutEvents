export class Event {
  constructor(
		public eventTitle : string,
		public eventDescription : string,
		public eventURL : string,
		public eventStartDate : string,
		public eventEndDate : string,
		public eventImage : string,
		public eventPrice : number,
		public eventAddress : string,
		public eventLatitude : number,
		public eventLongitude: number
	){}
}