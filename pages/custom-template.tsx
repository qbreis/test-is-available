import Image from 'next/image'; /* 1 */
import Link from 'next/link'; /* 2 */

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import React, { useEffect } from 'react';

export default function CustomTemplate() {
  useEffect(() => {
    // hljs.initHighlighting(); // Deprecated as of 10.6.0. initHighlighting() deprecated.  Use highlightAll() now.
    hljs.highlightAll();
  }, []);

  return (
    <div className="site-container">
      <header className="site-header">site-header</header>
      <main className="site-main">
        <article>
          <h1>Heading 1 - Post simple template</h1>

          <div className="entry-meta">
            <ul className="posted-on">
              <li>
                <time className="entry-date published">July 31, 2021</time>
              </li>
              <li>
                (Last modified:{' '}
                <time className="entry-date lastmod">July 31, 2021</time>)
              </li>
            </ul>
            <ul className="post-categories">
              <li>
                <a href="/categories/category-name">category</a>
              </li>
              <li>
                <a href="/categories/category-name">category</a>
              </li>
            </ul>
            <ul className="post-tags">
              <li>
                <a href="/tags/tag-name">tag</a>
              </li>
              <li>
                <a href="/tags/tag-name">tag</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="excerpt">
              This is just <strong>plain Html</strong> simple template to show
              most of the styles I want to use for my anotations.
            </div>
            <h2>Heading 2 - Title</h2>
            {/*
            Note I add inline style css here because I still don't have
            enough Css support structures
            */}
            <p style={{ textAlign: 'center' }}>
              {/* 1 */}
              {/*<img src="/images/nextjs-logo.svg" alt="Next.js" />*/}
              <Image
                src="/images/nextjs-logo.svg"
                height={500}
                width={(1212 * 500) / 734}
                alt="Next.js"
                className="color-text-screen-filter"
              />
            </p>
            <p>
              For simple console commands I will use <code>code Html tag</code>.
            </p>
            <pre className="highlighjs">
              <code className="typescript">
                {`const Home: NextPage = () => {
import '../styles/globals.scss'; /*{ 1 }*/
import type { AppProps } from 'next/app'; /*{ 2 }*/

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;`}
              </code>
            </pre>
            <p>
              <code>
                {/*Comments inside children section of tag should be placed inside braces
                react/jsx-no-comment-textnodes*/}
                {'/'}*{1}*{'/'}
              </code>{' '}
              I want to do specific comments to some code lines.
            </p>
            <p>
              <code>
                {'/'}*{2}*{'/'}
              </code>{' '}
              I want to do specific comments to some code lines.
            </p>
            <pre>
              <code className="bash">{`yarn dev`}</code>
            </pre>
            <blockquote>
              I want to use Html <code>blockquote</code> as well.
            </blockquote>
            <h3>Heading 3 - Unordered lists</h3>

            <ul>
              <li>uno</li>
              <li>dos</li>
              <li>tres</li>
            </ul>

            <h4>Heading 4 - Ordered lists</h4>

            <hr />

            <ol>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
            </ol>
          </div>
        </article>
      </main>
      {/* 2 */}
      {/*<a href="/">← Back to home</a>*/}
      <span className="icon-arrow align-left pointing-left">
        icon-arrow align-left pointing-left
      </span>
      <br />
      <span className="icon-arrow align-left pointing-right">
        icon-arrow align-left pointing-right
      </span>
      <br />
      <span className="icon-arrow align-right pointing-left">
        icon-arrow align-right pointing-left
      </span>
      <br />
      <span className="icon-arrow align-right pointing-right">
        icon-arrow align-right pointing-right
      </span>
      <br />
      <span className="icon-arrow align-left pointing-left link-alike">
        icon-arrow align-left pointing-left link-alike
      </span>
      <br />
      <span className="icon-arrow align-left pointing-right link-alike">
        icon-arrow align-left pointing-right link-alike
      </span>
      <br />
      <span className="icon-arrow align-right pointing-left link-alike">
        icon-arrow align-right pointing-left link-alike
      </span>
      <br />
      <span className="icon-arrow align-right pointing-right link-alike">
        icon-arrow align-right pointing-right link-alike
      </span>
      <br />
      <Link href="/">
        <a className="icon-arrow align-left pointing-left">Back to home</a>
      </Link>
      <footer className="site-footer">site-footer</footer>
    </div>
  );
}
