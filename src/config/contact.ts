// Edit these in one place — every button/link on the site pulls from here.

export const CONTACT = {
  whatsappNumber: '201550036259', // 0155 003 6259 (Egypt, international format, no plus/leading zero)
  telegramNumber: '201065631855', // 0106 563 1855 (Egypt, international format, no plus/leading zero)
  email: 'moaz2009amen@gmail.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61552026802548',
  githubUrl: 'https://github.com/', // TODO: replace with your actual GitHub profile URL
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function telegramLink() {
  return `https://t.me/+${CONTACT.telegramNumber}`
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${CONTACT.email}${query ? `?${query}` : ''}`
}
