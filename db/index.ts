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
	generations: Array<Generation>;
}
import afonsinoFiltersRaw from "./data/afonsino_filters.json";
export const afonsinoFilters: AfonsinoFilters = afonsinoFiltersRaw as AfonsinoFilters;

// cidade berco
function imgLocation(image: string): string {
	return `/assets/images/cidade_berco/${image}`;
}
export interface CB {
	nome: string;
	imagem: string;
	data: string;
	tunas_concurso: Array<string>;
	rectangular?: boolean;
	playlist?: string;
	sponsors?: string
}
import cbRaw from "./data/cidade_berco.json";
export const cbs: Array<CB> = (cbRaw as Array<CB>).map((cb: CB) => {
	cb.imagem = imgLocation(cb.imagem);
	if (cb.sponsors) {
		cb.sponsors = imgLocation('sponsors/' + cb.sponsors);
	}
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
}
export type Afonsinos = Record<string, Afonsino>;
export const afonsinos: Afonsinos = Object.fromEntries(
	Object.entries(afonsinosRaw).map(([key, value]) => {
		const newKey: string = key.slice(
			"./data/afonsinos/".length,
			-".json".length
		);
		return [newKey, { imagem: `/images/tunos/${newKey}.jpg`, ...value }];
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
	imagePath: string, // Path to event image: Ex: /assets/images/cidade_berco/xvii.jpg
	url: {
		tickets: string, // Url redirection to event tickets. Ex: "https://oficina.bol.pt/Comprar/Bilhetes/120322-xvii_cidade_berco_festival_de_tunas_academicas-a_oficina_ciprl?fbclid=IwAR0IOnHv9TahXkyecPcgDcek0sZvDdF4neaIkIn4BvIewqpSnSYbBBYd4ps"
		infos: string, // Url redirection to event informations. Ex: "https://fb.me/e/3fLz4dUdD"
	}
	enabled: boolean // Event enable or disabled: true -> Event enabled | false -> Event disabled
};

import eventMarketingRaw from "./data/event_marketing.json";
export const eventMarketing: EventMarketing = eventMarketingRaw as EventMarketing;
