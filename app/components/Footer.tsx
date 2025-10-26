export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 py-10 text-center text-sm text-text-subtle">
      <p>Noion &copy; {new Date().getFullYear()} - Your thoughts, linked</p>
      <p className="mt-2">
        <a
          href="https://noion.cloud"
          className="text-primary hover:text-accent-dim transition-all"
        >
          noion.cloud
        </a>
        {"  -  "}
        <a
          href="https://github.com/Slyog/noion"
          className="text-primary hover:text-accent-dim"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
