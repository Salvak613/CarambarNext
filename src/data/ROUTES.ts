const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appUrl = process.env.NEXT_PUBLIC_APP_URL;

const apiRoutes = {
  JOKE: (id: number) => `${apiUrl}/api/blagues/${id}`,
  RANDOM_JOKE: `${apiUrl}/api/blagues/random`,
  JOKES: `${apiUrl}/api/blagues`,
  JOKES_ADD: `${apiUrl}/api/blagues/ajouter-blague`,
};

// const appRoutes = {};

export { apiRoutes };
