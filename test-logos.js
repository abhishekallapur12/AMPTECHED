const https = require('https');
const urls = [
  'https://cdn.simpleicons.org/tata/646464',
  'https://cdn.simpleicons.org/infosys/007cc3',
  'https://cdn.simpleicons.org/wipro/000000',
  'https://cdn.simpleicons.org/accenture/a100ff',
  'https://cdn.simpleicons.org/capgemini/0070ad',
  'https://cdn.simpleicons.org/cognizant/0033a0',
  'https://cdn.simpleicons.org/ibm/052d65',
  'https://cdn.simpleicons.org/deloitte/86bc25',
  'https://cdn.simpleicons.org/techmahindra/e41b1d',
  'https://cdn.simpleicons.org/hcltech/00569c',
  'https://cdn.simpleicons.org/apple/000000',
  'https://cdn.simpleicons.org/google/4285f4',
  'https://cdn.simpleicons.org/microsoft/00A4EF'
];
const check = url => new Promise(res => {
  https.get(url, r => { res({url, status: r.statusCode}); }).on('error', e => res({url, error: e.message}));
});
(async () => { for (const u of urls) { const r = await check(u); console.log(JSON.stringify(r)); }} )();
