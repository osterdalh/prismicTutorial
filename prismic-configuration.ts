import Prismic from "prismic-javascript";

export const apiEndpoint = "https://cognizant-test.prismic.io/api/v2";

export const accessToken = null;

// creating a prismic client  object

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};