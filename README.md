# Welcome to Your E-commerce Site

![Your E-commerce Site](your-site-logo.png)

Your E-commerce Site is a modern, feature-packed e-commerce platform built with Next.js, version 13.5.6. It offers real-time shipping prices, secure payments, automatic fulfillment, and a delightful shopping experience for your customers. Here are some of the standout features:

- **Realtime Shipping Prices**: Get accurate shipping costs for your products.
- **Secure Payments**: Ensure customer transactions are safe and secure.
- **Automatic Fulfillment**: Streamline order processing and fulfillment.
- **Built with Next.js**: A cutting-edge web framework for fast, responsive web apps.
- **Cart & Checkout with Snipcart**: Seamlessly integrated shopping cart and checkout process.
- **Styled with Tailwind CSS**: A stylish and highly customizable design.
- **Fully Typed**: Robust TypeScript support for maintainability and reliability.
- **Recover Abandoned Carts**: Re-engage with potential customers.
- **One-click Deploy**: Easily deploy your site and start selling.

## Setup

To get started with Your E-commerce Site, follow these steps to set up Printful and Snipcart:

### 1. Setup Printful

1. **Login or Create an Account**: [Login to Printful](https://www.printful.com/auth/login) or [Sign Up](https://www.printful.com/auth/register) with your preferred method.

2. **Create a New Store**: When [creating a new store](https://www.printful.com/dashboard/store), choose "Manual order platform / API" as your method.

3. **Add Products to Your Inventory**: Select products from a vast catalog, configure designs, mockups, pricing, and more. Ensure you select `PNG` as the "mockup format."

4. **Configure Selling Preferences**: In Settings > Stores, specify your selling region, VAT details, and more.

5. **Configure Shipping Preferences**: Customize shipping settings for the USA and Europe or adjust as needed.

6. **Create a Printful Private Token**: In Settings > Stores > API, create a new Private Token, define permissions, and note the value as `PRINTFUL_API_KEY`.

7. **Add a Billing Method**: Set up a billing method to handle order processing charges.

### 2. Setup Snipcart

1. **Login or Create an Account**: [Register](https://app.snipcart.com/register) or [Log in](https://app.snipcart.com) to your Snipcart account.

2. **API Key**: Go to Account > API Keys and obtain your `Public API Key` in LIVE mode.

3. **Configure Your Website Domain**: Define your Default Website Domain and other relevant domains and subdomains.

4. **Configure Webhooks**: Set up webhooks to handle various stages of the purchase process.

5. **Enable Shipping**: Activate Shipping in the Custom Shipping section and configure webhooks.

6. **Enable Taxes (Optional)**: Enable custom taxes via a webhook if you are VAT registered.

7. **Configure Your Payment Gateway**: Connect a payment gateway and enable SCA for secure purchases.

8. **Configure Regional Settings**: Adjust regional settings to match your currency and formatting preferences.

9. **Create a Recovery Campaign**: Set up a recovery campaign for abandoned carts with custom discounts.

10. **Add a Credit Card**: Ensure your Snipcart account is equipped for smooth operations.

### 3. Deploy

Deploy Your E-commerce Site using Vercel. You'll need your `PRINTFUL_API_KEY` and `NEXT_PUBLIC_SNIPCART_API_KEY` for deployment. Click the button below to start deploying:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fyour-project&env=PRINTFUL_API_KEY,NEXT_PUBLIC_SNIPCART_API_KEY)

## Running Locally

To run the project locally, follow these steps:

1. Copy the example `.env.local` file and add the necessary environment variables:
   ```bash
   cp .env.local.example .env.local


## Acknowledgments

This project was developed with inspiration and guidance from the following templates:

- **Headless Dropshipping Template**: We drew inspiration from the ["Headless Dropshipping" template](https://github.com/notrab/headless-dropshipping-starter/tree/main) to streamline our e-commerce operations and offer a seamless shopping experience.

- **Next.js E-commerce Template**: We followed the ["Next.js E-commerce" template](https://github.com/vercel/commerce/tree/main) to build a solid foundation for our web application and provide a user-friendly, responsive design.

We appreciate the open-source community for creating and sharing these resources, which served as invaluable references during the development of Your E-commerce Site.