import esFlag from './media/flags/spain.png';
import enFlag from './media/flags/britain.png';

/**
 * flags for the language selection
 */
const flags = {
  español: esFlag,
  english: enFlag,
};

const sections = [
  { id: "home", url: "/" },
  { id: "about", url: "/about" },
  { id: "users", url: "/users" },
  { id: "login", url: "/login" },
];

const langs = [
  "español",
  "english",
];

export {sections, langs, flags};
