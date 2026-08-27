import Image from "next/image";

export default function CoreUIBannerAddOn() {
  return (
    <div className="mb-4 rounded-md border-2 border-amber-500 bg-amber-50">
      <div className="flex flex-col items-center gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:gap-6">
        <div className="shrink-0 lg:w-36">
          <Image
            src="https://coreui.io/demos/react/latest/default/assets/components-rl0RgVTV.webp"
            alt="CoreUI Data Grid"
            width={160}
            height={160}
            className="h-32 w-32 object-contain lg:h-36 lg:w-36"
          />
        </div>

        <div className="min-w-0 flex-1 text-center lg:text-left">
          <div className="mb-1 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <h2 className="m-0 text-xl font-medium text-slate-900">CoreUI Data Grid</h2>
            <span className="rounded-md bg-amber-400 px-2.5 py-1 text-xs font-bold uppercase text-slate-900">
              Add-on
            </span>
          </div>
          <p className="m-0 text-sm leading-6 text-slate-700">
            Your tables choke past a few thousand rows - this one doesn&apos;t:{" "}
            <strong className="font-bold text-slate-900">
              100,000+ rows, buttery-smooth, with sorting, filtering, inline editing and drag-and-drop
              row reordering built in.
            </strong>{" "}
            It&apos;s not part of your PRO license - a separate add-on for Bootstrap, React, Vue and
            Angular.
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-col gap-1.5 sm:w-auto lg:min-w-48">
          <a
            href="https://coreui.io/react/docs/components/data-grid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2.5 text-sm font-medium text-slate-900 transition-colors hover:bg-amber-500"
          >
            Explore Documentation
          </a>

          <div className="text-center text-sm text-slate-700">or</div>

          <a
            href="https://coreui.io/pricing/?framework=react&src=react-admin-template-docs-banner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            Get CoreUI Data Grid →
          </a>
        </div>
      </div>
    </div>
  );
}
