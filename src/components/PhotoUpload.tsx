import { MaxWidthWrapper, SectionTitle } from "./index";

export const PhotoUpload = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <SectionTitle
              title="Upload your photo and get your own case"
              highlightedText="your own case"
              spanStyles="bg-green-600 text-white"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
