function Footer() {
  return (
    <footer className="mt-12 bg-slate-800 dark:bg-slate-950 text-slate-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-indigo-400">Photo Gallery</span> — Built with
          React + Vite ⚛️ + Tailwind CSS 🎨
        </p>
        <p className="text-xs text-slate-400">
          Data from{' '}
          <a
            href="https://jsonplaceholder.typicode.com/photos"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
          >
            JSONPlaceholder
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;