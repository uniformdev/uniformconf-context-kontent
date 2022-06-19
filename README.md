# Sample starter app for Unform Context and Kontent Headless CMS
This is a starter using [Next.js](https://nextjs.org/) with direct integration of [Uniform Context](https://docs.uniform.app/context/) with [Kontent](https://kontent.ai/) Headless CMS.

## Before you begin

Please review our docs on Uniform Context + Kontent [here](https://docs.uniform.app/context/apps/kontent).

## Setup your environment variables

Copy `.env.example` into `.env` and fill all the env vars with your Uniform project and Kontent project details:

```
KONTENT_PROJECT_ID=''
KONTENT_PREVIEW_PRIMARY_KEY=''

UNIFORM_API_KEY='uf-YOUR-UNIFORM-API-KEY'
UNIFORM_PROJECT_ID='2b1407ee-YOUR-UNIFORM-PROJECT-ID'

```

**IMPORTANT**: run slug generation script to enable SSR or SSG - `npm run generate:slug-page` depending on the value of the `NEXT_USE_SSR` env var in .env file.

### Step 1: setup Uniform Context

1. `npm install`
1. Start by running import the Uniform Context definitions from your local disk (`/data/context`) into your Uniform project by running this command:

    ```
    npm run push:context
    ```
    
    > The API key must have all the write permissions for Uniform Context in order to complete the setup below, you may need to create a new API key with these special permissions, learn [here](/context/getting-started/project-setup#add-api-key) now.

1. If the command above is successful, now let's pull the newly imported Context definitions into a local manifest stored in `/lib/context-manifest.json` by running this command:

    ```
    npm run generate:manifest
    ```

### Step 2: setup Kontent Project content structure and sample content

1. Install Kontent CLI with `npm install -g @kentico/kontent-cli`.
1. Make sure you are using an empty project in Kontent, otherwise this operation may fail.
1. Run backup import to install content models and create+publish content and assets:

    ```
    kontent backup --action restore --name ./scripts/kontent-export --project-id <KONTENT_PROJECT_ID> --api-key <KONTENT_MANAGEMENT_KEY>
    ```
1. Visit the following content types and update the **Personalization Criteria** and **Enrichment Tags** custom element JSON with the value of your Uniform API key and Uniform Project ID:
    - Hero (Personalization Criteria)
    - Talk List (Personalization Criteria)
    - Page (Enrichment tags)

    ```
    {
        "apiKey": "YOUR-UNIFORM-API-KEY",
        "projectId": "YOUR-UNIFORM-PROJECT-ID",
        "apiHost": "https://uniform.app"
    }
    ```

### Step 3: Run the project

To run dev server: `npm run dev`

Or run production:

```
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export your local changes in Kontent and Uniform

Export latest Kontent content model and content:

```
kontent backup --action backup --project-id <KONTENT_PROJECT_ID> --api-key <KONTENT_MANAGEMENT_KEY>
```

Update TS types after changes in Kontent content structure

```
pnpm generate:types
```

Export Uniform Dev

```
npm run pull:context
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Kontent CMS JS SDK](https://kontent.ai/learn/tutorials/develop-apps/overview/?tech=javascript) - learn about Kontent JS SKD.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
