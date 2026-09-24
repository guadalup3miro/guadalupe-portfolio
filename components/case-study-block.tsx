import CaseStudyImage from "@/components/case-study-image";

// The core repeating pattern of every case study: a fixed 504px title +
// paragraph column, next to an image at its natural size (never stretched
// or cropped), both inside the 1088px safe area. `imageSide` controls
// whether the text sits left or right of the image. If no image is
// supplied, the text column fills the full safe-area width instead of
// staying capped at 504px — otherwise it reads narrower than the image
// grids elsewhere on the same page, breaking the shared-container feel.
export default function CaseStudyBlock({
  title,
  children,
  image,
  imageSide = "right",
}: {
  title?: string;
  children: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    radius?: boolean;
    multiply?: boolean;
    className?: string;
  };
  imageSide?: "left" | "right";
}) {
  const text = (
    <div className={`w-full shrink-0 ${image ? "max-w-[504px]" : ""}`}>
      {title && (
        <h2 className="text-[40px] leading-tight font-normal text-[#1A1A1A]">
          {title}
        </h2>
      )}
      <div className="mt-4 text-base leading-[22px] font-normal text-[#1A1A1A]">
        {children}
      </div>
    </div>
  );

  if (!image) {
    return (
      <div className="mx-auto w-full max-w-[660px] px-6 py-16">{text}</div>
    );
  }

  const img = (
    <div className="min-w-0 flex-1">
      <CaseStudyImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        radius={image.radius}
        multiply={image.multiply}
        className={image.className}
      />
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[660px] px-6 py-16">
      <div
        className={`flex flex-col gap-10 sm:items-center ${
          imageSide === "left" ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        {text}
        {img}
      </div>
    </div>
  );
}
