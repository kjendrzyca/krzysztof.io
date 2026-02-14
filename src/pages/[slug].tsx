import NextImage from "next/image";
import Head from "next/head";
import { getAllSlugs, getPost } from "@/lib/posts";
import { Layout } from "@/components/layout";
import ShareButtons from "@/components/shareButtons";
import { config } from "@/config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import React from "react";
import SEO from "@/components/seo";
import { getPlaiceholder } from "plaiceholder";
import fs from "fs/promises";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

// Meta Pixel configuration for different products
const PIXEL_CONFIG = {
  spwz: "1109547327810831",
} as const;

// Function to determine which pixel ID to use based on slug
const getPixelId = (slug: string): string | null => {
  for (const [keyword, pixelId] of Object.entries(PIXEL_CONFIG)) {
    if (slug.includes(keyword)) {
      return pixelId;
    }
  }
  return null;
};

type MarkdownImageProps = {
  src: string;
  alt: string;
};

const MarkdownImage = ({ src, alt }: MarkdownImageProps) => {
  return (
    <span className="image-wrapper">
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        quality="50"
      />
    </span>
  );
};

const AnchorSvg = () => (
  <svg
    aria-hidden="true"
    height="20"
    version="1.1"
    viewBox="0 0 16 16"
    width="20"
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    ></path>
  </svg>
);

type LinkedHeaderProps = {
  id: string;
  text: React.ReactNode;
  comp: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
};

const LinkedHeader = ({ id, text, comp: Comp }: LinkedHeaderProps) => {
  return (
    <Comp id={id} className="linked-header">
      {text}
      <a
        href={`#${id}`}
        aria-label={typeof text === "string" ? text : "Link to section"}
        className="header-anchor after"
      >
        <AnchorSvg />
      </a>
    </Comp>
  );
};

type FrontmatterData = {
  title: string;
  createdAt: string;
  updatedAt: string;
  shareButtons?: boolean;
  description: string;
  isLanding?: boolean;
  banner?: string;
  bannerAlt?: string;
};

type BannerImageProps = {
  type: string;
  src: string;
  alt: string;
  blurDataURL: string;
  style: {
    objectFit: "fill" | "contain" | "cover" | "none" | "scale-down";
    [key: string]: string | number;
  };
} | null;

type PostProps = {
  content: string;
  frontmatter: FrontmatterData;
  slug: string;
  contentPath: string;
  bannerPath: string | null;
  bannerImageProps: BannerImageProps;
};

const Post = ({
  content,
  frontmatter,
  slug,
  contentPath,
  bannerPath,
  bannerImageProps,
}: PostProps) => {
  const { title, createdAt, updatedAt, shareButtons, description, isLanding } =
    frontmatter as FrontmatterData;
  const siteUrl = config.siteMetadata.siteUrl;
  const social = config.siteMetadata.social.social;
  const pageTitle = title || siteUrl;
  const adjustedTitle =
    contentPath === "notes"
      ? `${title}: podsumowanie, notatki i przemyślenia`
      : title;

  const pixelId = getPixelId(slug);

  return (
    <Layout isLandingPage={isLanding || false}>
      <SEO
        title={adjustedTitle}
        description={description}
        slug={slug}
        ogType={contentPath === "pages" ? "website" : "article"}
        ogImagePath={bannerPath ?? undefined}
      />

      {pixelId && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
      )}
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{pageTitle}</h1>
        </header>
        <section itemProp="articleBody">
          {!bannerImageProps ? null : (
            <p>
              <span className="image-wrapper">
                <NextImage
                  {...bannerImageProps}
                  fill
                  placeholder="blur"
                  quality="50"
                />
              </span>
            </p>
          )}

          <ReactMarkdown
            components={{
              em: ({ children }: { children: React.ReactNode }) => (
                <span className="brush-highlight">{children}</span>
              ),
              img: function ({ node, ...props }) {
                // ReactMarkdown node typing is complex, using controlled any here
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                const fileName =
                  (node as any)?.properties?.src?.replace?.("./", "") || "";
                const newSrc = `/images/${contentPath}/${slug}/${fileName}`;

                return <MarkdownImage {...props} src={newSrc} />;
              },
              h2: ({
                children,
                id,
                ..._props
              }: {
                children: React.ReactNode;
                id?: string;
              }) => (
                <LinkedHeader
                  id={id || ""}
                  text={children}
                  comp={(propsy) => <h2 {...propsy} />}
                />
              ),
              h3: ({
                children,
                id,
                ..._props
              }: {
                children: React.ReactNode;
                id?: string;
              }) => (
                <LinkedHeader
                  id={id || ""}
                  text={children}
                  comp={(propsy) => <h3 {...propsy} />}
                />
              ),
              h4: ({
                children,
                id,
                ..._props
              }: {
                children: React.ReactNode;
                id?: string;
              }) => (
                <LinkedHeader
                  id={id || ""}
                  text={children}
                  comp={(propsy) => <h4 {...propsy} />}
                />
              ),
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
        </section>
        {shareButtons === false ? null : (
          <footer>
            <p>
              ---
              <br />
              Opublikowano: <span className="date">{createdAt}</span>
              <br />
              Ostatnia aktualizacja: <span className="date">{updatedAt}</span>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/kjendrzyca/krzysztof.io/blob/main/content/${contentPath}/${slug}`}
              >
                Edytuj ten wpis na GitHubie
              </a>
            </p>
          </footer>
        )}
      </article>
      {shareButtons === false ? null : (
        <ShareButtons
          url={`${siteUrl}/${slug}/`}
          title={pageTitle}
          socialHandle={social}
        />
      )}
    </Layout>
  );
};

export default Post;

const getBannerImageProps = async (
  bannerPath: string | null,
  bannerAlt?: string,
) => {
  if (!bannerPath) {
    return null;
  }

  const buffer = await fs.readFile(path.join("./public", bannerPath));
  const { metadata, css, base64 } = await getPlaiceholder(buffer, { size: 10 });
  const { format } = metadata;

  return {
    type: format,
    src: bannerPath,
    alt: bannerAlt || "Banner image",
    blurDataURL: base64,
    style: {
      ...css,
      objectFit: "fill",
    },
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const post = getPost(slug as string);

  const { contentPath } = post;
  const { banner, bannerAlt } = post.frontmatter as {
    banner?: string;
    bannerAlt?: string;
  };

  const bannerPath = banner
    ? `/images/${contentPath}/${slug}/${banner.replace("./", "")}`
    : null;
  const bannerImageProps = await getBannerImageProps(
    bannerPath,
    bannerAlt as string | undefined,
  );

  return {
    props: {
      ...post,
      bannerPath,
      bannerImageProps,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  // create paths with `slug` param
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
