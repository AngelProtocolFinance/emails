import { DonationReceipt } from "../src/templates/donation/receipt";

export default function Preview() {
  return (
    <DonationReceipt
      transaction_id="TXN-2025-001234"
      transaction_date="December 17, 2025"
      amount={{ value: 100, currency: "USD", value_usd: 100 }}
      nonprofit_name="Save The Rainforest Foundation"
      program_name="Amazon Conservation"
      donor={{
        first_name: "Jane",
        full_name: "Jane Doe",
        address: "123 Main St, San Francisco, CA 94105",
      }}
      tax_receipt_id="TR-2025-001234"
      is_recurring={false}
      is_bg={false}
    />
  );
}
