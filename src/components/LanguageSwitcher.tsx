"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import Button from "@/components/ui/Button";

export default function LanguageSwitcher() {
  const { locale, setLocale, locales } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const select = (l: string) => {
    setLocale(l as any);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <div>
        <Button
          label={`${locale.toUpperCase()} ▾`}
          onClick={toggle}
          className="text-base"
        />
      </div>
      {open && (
        <div className="absolute right-0 top-full transform translate-y-2.5 min-w-[10rem] rounded-xl bg-white/80 text-[#111315] shadow-2xl border border-black/5 overflow-hidden z-50 p-2.5" role="listbox">
          {locales.map((l) => (
            <button
              key={l}
              role="option"
              aria-selected={l === locale}
              onClick={() => select(l)}
              className={`w-full text-left text-sm hover:bg-black/5 ${l === locale ? 'bg-black/5 font-semibold' : ''}`}
              style={{ padding: '14px 24px' }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
