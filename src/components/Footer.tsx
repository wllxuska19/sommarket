"use client";

import { useLocale } from "@/context/LocaleContext";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="bg-brand-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">{t(locale, "siteName")}</h3>
            <p className="text-brand-200 text-sm leading-relaxed">
              {t(locale, "tagline")}. {t(locale, "deliveryInfo")}.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t(locale, "delivery")}</h4>
            <ul className="text-brand-200 text-sm space-y-1">
              <li>Muqdisho / Mogadishu</li>
              <li>Hargeysa / Hargeisa</li>
              <li>Boosaaso / Bosaso</li>
              <li>Kismaayo / Kismayo</li>
              <li>Baydhabo / Baidoa</li>
              <li>Garoowe / Garowe</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">{t(locale, "payment")}</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                EVC Plus
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                Zaad
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                e-Dahab
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-lg text-sm">
                {locale === "so" ? "Lacag Caddaan" : "Cash"}
              </span>
            </div>
            <p className="text-brand-200 text-sm mt-4">
              {t(locale, "freeDelivery")}
            </p>
          </div>
        </div>

        <div className="border-t border-brand-700 mt-8 pt-6 text-center text-brand-300 text-sm">
          &copy; {new Date().getFullYear()} SomMarket.{" "}
          {locale === "so"
            ? "Dhammaan xuquuqda way xafidan yihiin."
            : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
