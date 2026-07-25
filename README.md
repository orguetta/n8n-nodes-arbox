# n8n-nodes-arbox

This is an n8n community node that lets you integrate with the [Arbox](https://arbox.co) CRM and studio management software. It provides full support for the complete Arbox developer API v3, comprising 39 distinct endpoints across 9 core resources, plus financial and operational reports.

[Arbox](https://arbox.co) is a leading cloud-based business management platform designed specifically for fitness clubs, gyms, wellness centers, and boutique studios to optimize scheduling, lead generation, client onboarding, memberships, and billing.

---

## Key Features

This node covers **100% of Arbox API v3 functionality**, structured cleanly across 9 core modules:

1. **Custom Fields**: Dynamically retrieve all fields custom-defined in your business dashboard.
2. **Digital Forms**: Retrieve available forms and generate magic web links for clients to sign and fill out.
3. **Leads**: Full CRM cycle including lead creation, updating statuses, logs, converting leads, marking as lost with loss reasons, and creating lead-specific follow-up notes.
4. **Locations**: Query and list all active branches/locations of your club or studio.
5. **Membership Types**: Retrieve all active membership products configured in the system.
6. **Reports**: Core business intelligence engine to pull **20 different real-time reports** (Attendance, Cancellation Reasons, Debt, Frozen Memberships, Transactions, Birthdays, etc.).
7. **Schedule**: Live class booking operations—list schedules, modify instructors, book a trial class, delete trial bookings, check waiting lists, and list box categories.
8. **Tasks**: Track studio operations—create tasks, list tasks with date filters, and query all task categories.
9. **Users**: Complete member registry management—create/update members, fetch health waivers, find by email/phone search, create membership attachments, and create client-specific notes.

---

## Installation

### direct installation from n8n UI (Recommended)

1. Open your n8n instance and navigate to **Settings > Community Nodes**.
2. Click **Install a Node**.
3. In the package name field, enter: `n8n-nodes-arbox`.
4. Check the box to agree to terms, and click **Install**.
5. Restart your n8n instance if prompted.

### Manual Local Installation

To develop or install locally, clone this repository and link it:

```bash
git clone https://github.com/orguetta/n8n-nodes-arbox.git
cd n8n-nodes-arbox
npm install
npm run build
npm link
```

Then go to your global n8n directory (usually `~/.n8n`) and link the package:

```bash
cd ~/.n8n
npm link n8n-nodes-arbox
```

---

## Credentials Configuration

To authenticate requests to the Arbox API, you must provide your developer API Key:

1. Log in to your **Arbox Dashboard**.
2. Navigate to **Settings > Club Information** (or **Integrations**).
3. Copy your unique **API Key**.
4. In your n8n workflow, create a new **Arbox API** credential and paste the key.

*Note: All API requests are securely executed over HTTPS utilizing the `api-key` request header.*

---

## How to Use

Once installed, search for "Arbox" in your n8n node panel, add it to your workflow canvas, select your credentials, select the **Resource** you want to interact with, and choose the specific **Operation**.

### Collapsing 20 Reports into One Node Operation

To keep your workflows clean, all 20 of Arbox's system reports have been consolidated under a single **Report** resource and **Get Report** operation. Simply select the **Report Type** from the dropdown menu (e.g., `Debt`, `Attendance`, `Frozen Memberships`), specify your `From Date` and `To Date`, and n8n will handle the dynamic routing automatically!

---

## License

This project is open-source software licensed under the [MIT License](LICENSE).
