[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Gmail Email Not Starred Remover (GENSR)

This repository contains a script to automatically remove emails not marked as Starred from your Gmail inbox. Upon completion of the operation, you will receive an email notification.

### Prerequisites

- Node.js (LTS version recommended)
- npm
- `clasp` (Google's command-line tool for Apps Script)

### Installation

1. **Install `clasp` globally**  
   `clasp` is the tool we will use to manage the Apps Script project from the terminal.

   ```bash
   npm install -g @google/clasp
   ```

2. **Clone the repository**

   ```bash
   git clone https://github.com/albertoboccolini/gensr.git
   cd repo-name
   ```

3. **Configure `clasp`**

   - If you haven't done so already, log in to `clasp` using the following command:
     ```bash
     clasp login
     ```
   - You can verify that the login was successful with:
     ```bash
     clasp whoami
     ```

4. **Configure the project**

   - Create a new Apps Script project in your Google Workspace by following these steps:

     - Go to [Google Apps Script](https://script.google.com/home).
     - Click on "New Project."
     - After the project is created, copy the script ID (found in the URL, e.g., `https://script.google.com/d/{scriptId}/edit`).

   - Edit the `.clasp.example.json` file in your project folder, rename it to `.clasp.json`, and paste your `scriptId`.

### Deployment and Usage

1. **Push the code to Google Apps Script**

   ```bash
   clasp push
   ```

2. **Run the script directly from the Google Apps Script Console or schedule it for automatic execution**
