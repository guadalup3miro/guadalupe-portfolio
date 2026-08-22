import { redirect } from "next/navigation";

// Header's "Resume" link now points straight at /resume.pdf (matching the
// direct-PDF-link pattern from the Regina Lena reference), so this route
// is just a safety net for anyone hitting /resume directly.
export default function ResumePage() {
  redirect("/resume.pdf");
}
