import { useTranslation } from "react-i18next";
import { createContext, useEffect } from "react";

type TitleContextType = {
  // title: string;
  // meta: string;
  // setTitle: (title: string) => void;
  // setMeta: (meta: string) => void;
};

const TitleContext = createContext<TitleContextType | null>(null);

export function TitleProvider({ children }: { children: React.ReactNode }) {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const title = t("TokenValleyTitle");
    const desc = t("TokenValleyDescription");

    const headTitle = document.querySelector("title") as HTMLElement;
    if (headTitle) headTitle.innerText = title;

    const metaTitle = document.querySelector(
      'meta[name="title"]',
    ) as HTMLMetaElement | null;
    if (metaTitle) metaTitle.setAttribute("content", title);

    const metaDesc = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    if (metaDesc) metaDesc.setAttribute("content", desc);
  }, [i18n.resolvedLanguage]);

  return <TitleContext value={{}}>{children}</TitleContext>;
}
