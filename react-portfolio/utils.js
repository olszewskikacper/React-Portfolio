export const getImageUrl = (path) => {
    const baseUrl = window.location.origin;
    return new URL(`/assets/${path}`, baseUrl).href
}