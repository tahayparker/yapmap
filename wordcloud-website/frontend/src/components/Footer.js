import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-4 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/about" legacyBehavior>
            <a className="footer-link">About</a>
          </Link>
          <Link href="/privacy" legacyBehavior>
            <a className="footer-link">Privacy</a>
          </Link>
          <Link href="/terms" legacyBehavior>
            <a className="footer-link">Terms</a>
          </Link>
        </div>
        <div className="text-sm font-medium text-gray-600">
          Made with <span className="text-black">🖤</span> by TP
        </div>
      </div>
    </footer>
  );
}