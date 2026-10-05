import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link href="/labs" id="wd-home-link">
          Home
        </Link>
      </li>
      {/* ... lab links ... */}
      <li>
        <Link href="/labs/lab1" id="wd-toc-book-link">
          Chapter 1
        </Link>
      </li>
      <li>
        <Link href="/labs/lab2" id="wd-toc-lab2-link">
          Chapter 2
        </Link>
      </li>
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <Link href="/" id="wd-your-link">
          Jiachan Li
        </Link>
      </li>
    </ul>
  );
}