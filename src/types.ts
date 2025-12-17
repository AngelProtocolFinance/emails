// ============ Registration Types ============
export namespace Registration {
  export interface NewProps {
    reference_id: string;
  }

  export interface ApprovedProps {
    org_name: string;
    registrant_first_name: string;
    endow_id: string;
  }

  export interface RejectedProps {
    registrant_first_name: string;
    rejection_reason: string;
  }
}

// ============ Donation Types ============
export namespace Donation {

  export interface Amount {
    /** already rounded */
    value: number;
    currency: string;
    value_usd: number;
  }

  export interface Donor {
    first_name: string;
    full_name: string;
    address?: string;
  }

  export interface Transaction {
    transaction_id: string;
    transaction_date: string;
    amount: Amount;
    nonprofit_name: string;
    program_name?: string;
    is_recurring?: boolean;
    /** is donation to Better Giving directly (vs through NPO) */
    is_bg?: boolean;
  }

  export interface ReceiptProps extends Transaction {
    donor: Donor;
    /** tax receipt ID - if provided, shows as tax receipt */
    tax_receipt_id?: string;
    /** custom message from nonprofit */
    nonprofit_msg?: string;
  }

  export interface NonprofitNotifProps extends Transaction {
    donor?: Donor;
    claimed?: boolean;
    nonprofit_id: string;
    msg_to_npo?: string;
  }

  export interface DonorNotifProps {
    donor_first_name: string;
    nonprofit_name: string;
    transaction_id: string;
    program_name?: string;
    is_guest?: boolean;
    is_recurring?: boolean;
  }

  export interface TributeNotifProps {
    in_honor_of: string;
    to_full_name: string;
    donor: Donor & { title?: string };
    nonprofit_name: string;
    amount: Amount;
    from_msg?: string;
  }

  export interface MicrodepositActionProps {
    donor_first_name: string;
    recipient_name: string;
    verification_link: string;
  }

  export interface ErrorProps {
    donor_first_name: string;
    recipient_name: string;
    error_message: string;
  }

  export interface PrivateMessageProps extends Transaction {
    donor: Donor;
    message: string;
  }
}

// ============ Admin Types ============
export interface EndowAdminNewProps {
  first_name: string;
  endow_name: string;
  invitor: string;
}

export interface FundOptOutProps {
  first_name: string;
  endow_name: string;
}
