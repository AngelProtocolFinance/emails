export interface IAmount {
	/** already rounded */
	value: number;
	currency: string;
	value_usd: number;
}

export interface IDonor {
	first_name: string;
	full_name: string;
	address?: string;
}
