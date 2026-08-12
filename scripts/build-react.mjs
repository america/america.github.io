import "dotenv/config";
import { build } from "esbuild";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "SUPABASE_URL または SUPABASE_ANON_KEY が設定されていません。"
  );
  process.exit(1);
}

await build({
  entryPoints: ["src/react/index.jsx"],
  bundle: true,
  outfile: "static/js/bundle.js",
  minify: true,
  sourcemap: true,
  define: {
    "process.env.SUPABASE_URL": JSON.stringify(supabaseUrl),
    "process.env.SUPABASE_ANON_KEY": JSON.stringify(supabaseAnonKey),
  },
});

console.log("React bundleを生成しました: static/js/bundle.js");
