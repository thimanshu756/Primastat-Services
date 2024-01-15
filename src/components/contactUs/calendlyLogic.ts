export const openCalendly = () => {

  // we are not importing types so need to use ts-ignore
  if (
    typeof window !== 'undefined' &&
    // @ts-ignore
    window.Calendly &&
    // @ts-ignore
    typeof Calendly.initPopupWidget === 'function'
  ) {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/prima-stat?hide_gdpr_banner=1&primary_color=fea26e'
    });
  }
};
