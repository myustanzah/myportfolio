import Image from "next/image";
import { ArrowUpRightIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

interface CertificateItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
  imgPath: string;
  index: number;
}

export function CertificateItem({ icon: Icon, children, imgPath, index }: CertificateItemProps) {
  const isImage = /\.(jpg|jpeg|png|webp)$/i.test(imgPath);

  return (
    <article className="h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-xl group-hover:shadow-blue-900/10 dark:border-slate-800 dark:bg-[#111827] dark:shadow-black/20 dark:group-hover:border-blue-800 dark:group-hover:shadow-blue-950/30">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-700">
        <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-blue-400/20 blur-2xl" />
        <div className="absolute left-5 top-5 z-10 text-xs font-bold tracking-[0.2em] text-white/60">
          CERTIFICATE {String(index).padStart(2, "0")}
        </div>
        {isImage ? (
          <Image
            src={imgPath}
            alt={String(children ?? "Certificate")}
            width={320}
            height={180}
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative flex h-20 w-16 flex-col items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white shadow-2xl backdrop-blur-sm">
            <DocumentTextIcon className="h-9 w-9" />
            <span className="mt-1 text-[9px] font-bold tracking-wider">PDF</span>
          </div>
        )}
        <div className="absolute bottom-4 left-5 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-blue-700 shadow-lg ring-1 ring-white/20">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
      </div>

      <div className="flex min-h-[170px] flex-col p-5">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-white">
          {isImage ? "Image certificate" : "PDF document"}
        </p>
        <h3 className="text-lg font-semibold leading-7 text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {children}
        </h3>
        <div className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-blue-600 dark:text-blue-400">
          View certificate
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </article>
  );
}

export default CertificateItem;
