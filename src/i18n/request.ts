import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  const store = await cookies();
  const headerList = await headers();
  
  const userBrowserLang = headerList.get('accept-language')?.split(',')[0].split('-')[0];
  const locale = store.get('locale')?.value || userBrowserLang || 'en';

  const supportedLocales = ['en', 'pt', 'ja'];
  const finalLocale = supportedLocales.includes(locale) ? locale : 'en';

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});