import Image from "next/image";

export default function CoreUIBanner() {
  return (
    <div className="mb-4 rounded border-2 border-violet-600 bg-violet-100">
      <div className="flex flex-wrap items-center p-3 px-4 xl:flex-nowrap">
        {/* Image */}
        <div className="hidden shrink-0 xl:block">
          <Image
            src="https://coreui.io/demos/react/latest/default/assets/components-rl0RgVTV.webp"
            alt="CoreUI PRO hexagon"
            width={160}
            height={160}
            className="h-auto max-w-full"
          />
        </div>

        {/* Content */}
        <div className="w-full px-4 xl:flex-1">
          <p className="m-0 text-sm text-primary-700 px-5">
            Our Admin Panel isn’t just a mix of third-party components. It’s{" "}
            <strong>
              the only React dashboard built on a professional, enterprise-grade
              UI Components Library
            </strong>
            . This component is part of this library, and we present only the
            basic usage of it here. To explore extended examples, detailed API
            documentation, and customization options, refer to our docs.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-3 px-2 flex w-full flex-col md:w-auto xl:mt-0">
          <a
            href="https://coreui.io/react/docs/components/accordion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-nowrap rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Explore Documentation
          </a>

          <div className="my-1 text-center">or</div>

          <a
            href="https://coreui.io/pricing/?framework=react&src=react-admin-template-docs-banner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-nowrap rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            Get CoreUI PRO →
          </a>
        </div>
      </div>
    </div>
  );
}
