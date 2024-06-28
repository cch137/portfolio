import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { MdWebAsset, MdLink } from "react-icons/md";
import author from "../config/author";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>cch137</h1>
        <h1 className={title()}>&#39;s Portfolio</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>追求極致技術</h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={author.website}
        >
          <MdLink size={24} />
          Website
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={author.github}
        >
          <GithubIcon size={24} />
          GitHub
        </Link>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {author.repos.map(({ repo, title, description, live, tags }, i) => (
          <div
            key={i}
            className="bg-default-50 rounded-2xl p-4 max-w-72 w-full flex flex-col gap-2 overflow-hidden"
          >
            <h3 className="text-xl font-semibold text-default-700">
              {title || repo}
            </h3>
            <div className="flex flex-wrap gap-2">
              <Link
                isExternal
                href={`https://github.com/${author.name}/${repo}`}
              >
                <Code color="default" className="text-default-600">
                  <span className="flex gap-1">
                    <GithubIcon size={20} />
                    {author.name}/{repo}
                  </span>
                </Code>
              </Link>
            </div>
            <div>
              <p className="text-wrap text-default-600">
                {description || repo}
              </p>
            </div>
            <div className="flex flex-wrap gap-1">
              {live ? (
                <Link isExternal href={live}>
                  <Code color="primary" className="text-xs">
                    <span className="flex gap-1">
                      <MdWebAsset size={16} />
                      Live demo
                    </span>
                  </Code>
                </Link>
              ) : null}
              {tags?.map((tag, i) => {
                const { label, color } =
                  typeof tag === "string"
                    ? ({ label: tag } as {
                        label: string;
                        color?: string;
                        link?: string;
                      })
                    : tag;
                return (
                  <Code
                    key={i}
                    color={(color as "") || "default"}
                    className="text-xs text-default-600"
                  >
                    <span className="flex gap-1">{label}</span>
                  </Code>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="py-8" />
    </section>
  );
}
