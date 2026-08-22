import { redirect } from "next/navigation";

// Header's "Old Portfolio" link points straight at /old-portfolio.pdf
// (same direct-PDF-link pattern as Resume), so this route is just a
// safety net for anyone hitting /old-portfolio directly.
export default function OldPortfolioPage() {
  redirect("/old-portfolio.pdf");
}
