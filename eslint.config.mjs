import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      // Existing editorial copy uses literal apostrophes; brand and software logos keep intrinsic sizing.
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      // The design uses an external Fontshare stylesheet alongside Google Fonts.
      "@next/next/no-page-custom-font": "off",
    },
  },
  {
    files: ["src/components/ui/**", "src/hooks/**"],
    rules: {
      // Unused shadcn template modules are retained for compatibility but are not in the app bundle.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
  globalIgnores([".next/**", ".output/**", "next-env.d.ts"]),
]);
