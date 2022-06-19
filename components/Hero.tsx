import Link from 'next/link';
import Splitter from './Splitter';
import type { Hero as IHero } from '../lib/contentTypes/hero';
import { KontentRichText } from './KontentRichText';

type HeroProps = IHero;

export function Hero({ elements: { title, description, buttonText, image, buttonLinkSlug } }: HeroProps) {
  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">This is Uniform demo</p>
            <h1 className="my-4 text-5xl font-bold leading-tight">{title.value}</h1>
            <KontentRichText className="leading-normal text-2xl mb-8" field={description} />
            {buttonText ? (
              <Link
                prefetch={false}
                href={buttonLinkSlug && buttonLinkSlug.value ? buttonLinkSlug.value : '#'}
              >
                <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {buttonText.value}
                </button>
              </Link>
            ) : null}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {image && image.value[0] && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={image.value[0].url}
                alt={buttonText ? buttonText.value : 'Well, some required field has be created :)'}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}
