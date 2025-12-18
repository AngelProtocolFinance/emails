// ============ Registration Types ============
export namespace Registration {
	export interface INewProps {
		reference_id: string;
	}

	export interface IApprovedProps {
		org_name: string;
		registrant_first_name: string;
		endow_id: string;
	}

	export interface IRejectedProps {
		registrant_first_name: string;
		rejection_reason: string;
	}
}

// ============ Donation Types ============

export namespace Donation {
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

	export interface ITransaction {
		transaction_id: string;
		transaction_date: string;
		amount: IAmount;
		nonprofit_name: string;
		program_name?: string;
		is_recurring?: boolean;
		/** is donation to Better Giving directly (vs through NPO) */
		is_bg?: boolean;
	}

	export interface IReceiptProps extends ITransaction {
		donor: IDonor;
		/** tax receipt ID - if provided, shows as tax receipt */
		tax_receipt_id?: string;
		/** custom message from nonprofit */
		nonprofit_msg?: string;
	}

	export interface INonprofitNotifProps extends ITransaction {
		donor?: IDonor;
		claimed?: boolean;
		nonprofit_id: string;
		msg_to_npo?: string;
	}

	export interface IDonorNotifProps {
		donor_first_name: string;
		nonprofit_name: string;
		transaction_id: string;
		program_name?: string;
		is_guest?: boolean;
		is_recurring?: boolean;
	}

	export interface ITributeNotifProps {
		in_honor_of: string;
		to_full_name: string;
		donor: IDonor & { title?: string };
		nonprofit_name: string;
		amount: IAmount;
		from_msg?: string;
	}

	export interface IMicrodepositActionProps {
		donor_first_name: string;
		recipient_name: string;
		verification_link: string;
	}

	export interface IErrorProps {
		donor_first_name: string;
		recipient_name: string;
		error_message: string;
	}

	export interface IPrivateMessageProps extends ITransaction {
		donor: IDonor;
		message: string;
	}
}

// ============ Admin Types ============
export interface IEndowAdminNewProps {
	first_name: string;
	endow_name: string;
	invitor: string;
}

export interface IFundOptOutProps {
	first_name: string;
	endow_name: string;
}
