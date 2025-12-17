import { NonprofitNotif } from "../src/templates/donation/nonprofit-notif";

export default function Preview() {
  return (
    <NonprofitNotif
      transaction_id="TXN-2025-001234"
      transaction_date="December 17, 2025"
      amount={{ value: 250, currency: "PHP", value_usd: 4.5 }}
      nonprofit_id="12345"
      nonprofit_name="Save The Rainforest Foundation"
      claimed={true}
      donor={{
        first_name: "John",
        full_name: "John Smith",
        address: "456 Oak Ave, New York, NY 10001",
      }}
      program_name="Amazon Conservation"
      is_recurring={false}
      msg_to_npo="Thank you for all the amazing work you do for the rainforest. Keep it up!"
    />
  );
}
