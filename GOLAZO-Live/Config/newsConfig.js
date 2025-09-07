// News API configuration
// NOTE: For production move this key to a secure env (e.g., EXPO_PUBLIC_NEWS_API_KEY) and import from process.env
// Temporary direct key (provided by user) – replace or externalize before publishing the app.
export const NEWS_API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

export const NEWS_API_BASE_URL = 'https://newsapi.ai/api/v1/article/getArticles';

// Default query settings for football related news
// (Concept-based default removed; fetching handled in Utils/newsApi.js)
