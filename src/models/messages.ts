export interface Chat {
	chatID: string;
	participantID: string;
	messages: {
	  text: string;
	  senderID: string;
	  time: string;
	}[];
 }
