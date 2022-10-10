const isDev = true;
export const Config = {
    ClientURL: isDev
        ? "http://localhost:5173"
        : "https://mrmikedev.netlify.app",
};
