type ApiConnection = {
  baseUrl: string;
  headers: Record<string, string>;
};

type Params = Record<string, string | number>;

// TODO: connect to printful
async function connectToPrintfulAPI(token: string) {
  const baseUrl = "https://api.printful.com";

  // Set up headers with the API token
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return { baseUrl, headers };
}

export { connectToPrintfulAPI }

// TODO: Fetch all synced products
async function fetchAllPrintfulProducts(apiConnection: ApiConnection, endpoint: string, params?: Params) {
  const url = new URL(endpoint, apiConnection.baseUrl);

  // Add query parameters to the URL
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }

  // Make the GET request using the connection's headers
  const response = await fetch(url.toString(), {
    method: "GET",
    headers: apiConnection.headers,
  });

  const json = await response.json();

  if (!response.ok) throw json;

  return json;
}

export { fetchAllPrintfulProducts };