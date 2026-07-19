import { BehanceIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

const links = [
  { label: "Behance", href: "https://www.behance.net/guadalupemiro", Icon: BehanceIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/guadalupemiro", Icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/guadalupemiro", Icon: GithubIcon },
  { label: "Email", href: "mailto:guadamiro@gmail.com", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-5xl justify-center gap-6 px-6 py-10 sm:px-10">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="text-foreground/60 transition-colors hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </footer>
  );
}
