
/**
 * Affiliate Configuration
 * Ersetze diese IDs mit deinen echten Partner-IDs nach der Anmeldung bei den Netzwerken.
 */
const PARTNER_CONFIG = {
  ZALANDO_ID: 'DE_AFF_12345', // Beispiel ID
  HM_ID: 'HM_PARTNER_99',
  ABOUTYOU_ID: 'AY_PROMO_55',
  GENERIC_TAG: 'vogue-ai-21'
};

export const generateAffiliateLink = (originalUrl: string, brand: string): string => {
  if (!originalUrl) return '#';

  const brandLower = brand.toLowerCase();
  
  // Logik für Zalando (Beispiel via Awin Deep-Link)
  if (brandLower.includes('zalando')) {
    return `https://www.awin1.com/cread.php?awinmid=12345&awinaffid=${PARTNER_CONFIG.ZALANDO_ID}&ued=${encodeURIComponent(originalUrl)}`;
  }

  // Logik für H&M
  if (brandLower.includes('h&m') || brandLower.includes('hm')) {
    return `${originalUrl}?affiliate_id=${PARTNER_CONFIG.HM_ID}&utm_source=vogue_ai`;
  }

  // Fallback: Einfaches URL-Tagging
  const separator = originalUrl.includes('?') ? '&' : '?';
  return `${originalUrl}${separator}tag=${PARTNER_CONFIG.GENERIC_TAG}&utm_medium=ai_stylist`;
};
