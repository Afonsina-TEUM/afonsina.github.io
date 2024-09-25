// page
export interface Page {
	title: string;
	description: string;
	author: string;
}
import pageRaw from "./data/page.json";
export const page: Page = pageRaw as Page;

// navigation
export interface Navigation {
	name: string;
	link: string;
}
import navigationRaw from "./data/navigation.json";
export const navigation: Array<Navigation> = navigationRaw as Array<Navigation>;

// contacts
export interface Contacts {
	address: string;
	email: string;
	mobile: string;
	facebook: string;
	instagram: string;
	spotify: string;
	youtube: string;
}
import contactsRaw from "./data/contacts.json";
export const contacts: Contacts = contactsRaw as Contacts;

// afonsino filters
export interface Generation {
	date: number;
	afonsinos: Array<string>;
}
export interface AfonsinoFilters {
	magisters: Array<string>;
	ensaiadores: Array<string>;
	generations: Array<Generation>;
}
import afonsinoFiltersRaw from "./data/afonsino_filters.json";
export const afonsinoFilters: AfonsinoFilters = afonsinoFiltersRaw as AfonsinoFilters;

export function imgLocation(image: string): string {
	return `/assets/images/cidade_berco/${image}`;
}

// cidade berco
export interface CB {
	nome: string;
	imagem: string;
	data: string;
	tunas_concurso: Array<string>;
	rectangular?: boolean;
	playlist?: string;
	sponsors?: string
}
import cbsRaw from "./data/cidade_berco.json";
export const cbs: Array<CB> = (cbsRaw as Array<CB>).map((cb: CB) => {
	return cb;
});

// afonsinos
interface AfonsinoRaw {
	numero: string;
	alcunha: string;
	nome: string;
	curso: string;
	instrumento: string;
	passagem_evento: string;
	passagem_local: string;
	passagem_data: string;
}
const afonsinosRaw = import.meta.glob<AfonsinoRaw>("./data/afonsinos/*.json", {
	eager: true,
});
export interface Afonsino extends AfonsinoRaw {
	imagem: string;
	isEnsaiador: boolean;
	lastEnsaiador?: boolean;
	isMagister?: boolean;
	lastMagister?: boolean;
}
export type Afonsinos = Record<string, Afonsino>;
export const afonsinos: Afonsinos = Object.fromEntries(
	Object.entries(afonsinosRaw).map(([key, value]) => {
		const newKey: string = key.slice(
			"./data/afonsinos/".length,
			-".json".length
		);

		const isEnsaiador = afonsinoFilters.ensaiadores.includes(newKey);
		const isMagister = afonsinoFilters.magisters.includes(newKey);

		return [
		newKey, 
		{ 
			imagem: `/assets/images/tunos/${newKey}.jpg`,
			isEnsaiador: isEnsaiador,
			lastEnsaiador: isEnsaiador && newKey === afonsinoFilters.ensaiadores[afonsinoFilters.ensaiadores.length - 1],
			isMagister: isMagister,
			lastMagister: isMagister && newKey === afonsinoFilters.magisters[afonsinoFilters.magisters.length - 1],
			...value
		}
		];
	})
);

// cds
export interface CD {
	name: string;
}
const cdsRaw = import.meta.glob<CD>("./data/cds/*.json", { eager: true });
Object.keys(cdsRaw).forEach((key) => {
	cdsRaw[key.slice("./data/cds/".length, -".json".length)] = cdsRaw[key]!;
	delete cdsRaw[key];
});
export const cds: Record<string, CD> = cdsRaw;

// CB Marketing
export interface EventMarketing {
	name: string, // Name of the event. Ex: XVII Cidade Berço
	description: string, // Description of the event. Ex: BOL Event description
	date: {
		startDay: string, // Event start day. Ex: 17
		endDay: string, // Event end day. Ex: 18
		firstMonth: string, // Event first month. Ex: Março
		secondMonth: string // Event second month. Ex: Abril
	},
	imagePath: string, // Path to event image: Ex: /assets/assets/images/cidade_berco/xvii.jpg
	url: {
		tickets: string, // Url redirection to event tickets. Ex: "https://oficina.bol.pt/Comprar/Bilhetes/120322-xvii_cidade_berco_festival_de_tunas_academicas-a_oficina_ciprl?fbclid=IwAR0IOnHv9TahXkyecPcgDcek0sZvDdF4neaIkIn4BvIewqpSnSYbBBYd4ps"
		infos: string, // Url redirection to event informations. Ex: "https://fb.me/e/3fLz4dUdD"
	}
	enabled: boolean // Event enable or disabled: true -> Event enabled | false -> Event disabled
};

import eventMarketingRaw from "./data/event_marketing.json";
export const eventMarketing: EventMarketing = eventMarketingRaw as EventMarketing;
