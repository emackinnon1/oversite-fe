export let APP_URL; 

if (process.env.NODE_ENV === "production") {
    APP_URL = process.env.REACT_APP_PRODUCTION_URL
} else if (process.env.NODE_ENV === "development") {
    APP_URL = process.env.REACT_APP_DEVELOPMENT
}