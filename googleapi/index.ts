// ==== GOOGLE API ====

// ==== Calendar API ====

// Events
export interface EventRaw {
	location: string|null,
	summary: string,
	start: {
		date: string|null,
		dateTime: string|null
	},
	end: {
		date: string|null,
		dateTime: string|null
	}
}

export interface Event {
	title: string;
	isOneDay: boolean
	days: string[],
	months: string[],
	years: string[],
	time: string,
	location: string
}

export type Events = Event[];

import { google } from 'googleapis';
const credentials = JSON.parse(import.meta.env.GOOGLE_CALENDAR_API_CREDENTIALS);

const calendarId = import.meta.env.GOOGLE_CALENDAR_ID;
const scopes = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({version: 'v3'});

const auth = new google.auth.JWT(
	credentials.client_email,
	'',
	credentials.private_key,
	scopes
);

const MAX_RESULTS: number = import.meta.env.MAX_RESULTS_NEXT_EVENTS;

export const getNextEvents = async () => {
	try {
		let response = await calendar.events.list({
			auth: auth,
			calendarId: calendarId,
			timeMin: (new Date()).toISOString(),
			showDeleted: false,
			singleEvents: true,
			maxResults: MAX_RESULTS,
			orderBy: 'startTime',
		});

		let items = response['data']['items'];

		return items;
	} catch (error: any) {
		throw new Error("Error on getting events: " + error);
	}
}
