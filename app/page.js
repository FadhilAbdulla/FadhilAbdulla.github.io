import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { StackData, Experiencedata } from "./data";
// import Image from 'next/image';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            {/* <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            /> */}
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        {" Hey, I'm "}<b>Fadhil Abdulla</b> 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert dynamic">
        {`Welcome to my professional space! I am a `}
        <span className="not-prose">
          <Badge>software developer</Badge>
        </span>
        {` with 2 years of expertise in crafting intuitive `}
        <span className="not-prose">
          <Badge>web applications</Badge>
        </span>
        {` , designing robust backend infrastructure, and developing powerful APIs. My adept troubleshooting skills ensure seamless functionality and user satisfaction.`}
      </p>
      <p className="prose prose-neutral dark:prose-invert dynamic">
        {`Beyond software development, I am passionate about `}
        <span className="not-prose">
          <Badge>electronics</Badge>
        </span>
        {" and "}
        <span className="not-prose">
          <Badge>cybersecurity</Badge>
        </span>
        {
          ", continually expanding my knowledge to stay ahead in these ever-evolving fields. My goal is to deliver innovative solutions that blend technology and security, creating reliable and cutting-edge applications."
        }
      </p>
      <p className="prose prose-neutral dark:prose-invert dynamic">
        {"Explore my work and let's connect to build the future together!"}
      </p>
      <section>
        {Experiencedata.map((entry, index) => (
          <div key={index} className="prose prose-neutral dark:prose-invert">
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              {entry.CompanyName}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              {entry.Role}
            </p>
            {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {entry.Role}
            </p> */}
            <ul>
              {entry.Desc.map((expentry, index) => (
                <li key={index} className="text-sm mb-2">
                  {"●"} {expentry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Technical Skills
        </h2>
        {StackData.map((entry, index) => (
          <div key={index} className="flex flex-col space-y-1 mb-4">
            <div className="w-full text-sm break-words">
              <span className="text-neutral-600 dark:text-neutral-400 mr-1">
                {entry.name} :
              </span>
              {entry.tech}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:fadhil.abdulla.456@gmail.com"
          >
            <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <ArrowIcon />
            </div>
            <p className="ml-2 h-7">fadhil.abdulla.456@gmail.com</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fadhil-abdulla/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Linkedin : fadhil-abdulla</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/FadhilAbdulla"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github : fadhil-abdulla</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
