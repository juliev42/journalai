// api/config.ts
const baseUrl = import.meta.env.VITE_SERVER_URL
    ? `https://${import.meta.env.VITE_SERVER_URL}`
    : 'http://localhost:3000';

export const apiUrl = `${baseUrl}/api`;

export const defaultHeaders = {
    'ngrok-skip-browser-warning': 'true', // if you're using ngrok
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

// Optional: A small fetch wrapper that handles errors
export async function doFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
    const response = await fetch(input, init);
    if (!response.ok) {
        // Optionally handle specific HTTP status codes
        const text = await response.text();
        throw new Error(text || `Request failed with status ${response.status}`);
    }
    return response.json() as Promise<T>;
}