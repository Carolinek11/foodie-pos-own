interface Config {
  apiBaseUrl: string;
}

const config: Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
};

export default config;
