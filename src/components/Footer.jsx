import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors no-underline text-muted"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-gold transition-colors no-underline text-muted"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
