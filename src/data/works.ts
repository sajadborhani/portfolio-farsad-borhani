import type { ImageMetadata } from 'astro';

import w01 from '../assets/works/01.jpg';
import w02 from '../assets/works/02.jpg';
import w03 from '../assets/works/03.jpg';
import w04 from '../assets/works/04.jpg';
import w05 from '../assets/works/05.jpg';
import w06 from '../assets/works/06.jpg';
import w07 from '../assets/works/07.png';
import w08 from '../assets/works/08.jpg';
import w09 from '../assets/works/09.jpg';
import w10 from '../assets/works/10.jpg';
import w11 from '../assets/works/11.jpg';
import w12 from '../assets/works/12.jpg';
import w13 from '../assets/works/13.jpg';
import w14 from '../assets/works/14.jpg';
import w15 from '../assets/works/15.jpg';
import w16 from '../assets/works/16.jpg';
import w17 from '../assets/works/17.jpg';
import w18 from '../assets/works/18.jpg';
import w19 from '../assets/works/19.jpg';

import u01 from '../assets/works/u01.jpg';
import u02 from '../assets/works/u02.jpg';
import u03 from '../assets/works/u03.jpg';
import u04 from '../assets/works/u04.jpg';
import u05 from '../assets/works/u05.jpg';
import u06 from '../assets/works/u06.jpg';
import u07 from '../assets/works/u07.jpg';
import u08 from '../assets/works/u08.jpg';
import u09 from '../assets/works/u09.jpg';
import u10 from '../assets/works/u10.jpg';
import u11 from '../assets/works/u11.jpg';
import u12 from '../assets/works/u12.jpg';
import u13 from '../assets/works/u13.jpg';
import u14 from '../assets/works/u14.jpg';
import u15 from '../assets/works/u15.jpg';
import u16 from '../assets/works/u16.jpg';
import u17 from '../assets/works/u17.jpg';
import u18 from '../assets/works/u18.jpg';
import u19 from '../assets/works/u19.jpg';
import u20 from '../assets/works/u20.jpg';

export interface DocumentedWork {
  kind: 'documented';
  /** Work number as printed in the catalog (Persian digits, e.g. «۰۱») */
  numberFa: string;
  numberEn: string;
  image: ImageMetadata;
  mediumFa: string;
  mediumEn: string;
  dims: string;
  yearFa: string;
  yearEn: string;
  altFa: string;
  altEn: string;
}

export interface UndocumentedWork {
  kind: 'undocumented';
  id: string;
  image: ImageMetadata;
  altFa: string;
  altEn: string;
}

export type Work = DocumentedWork | UndocumentedWork;

/**
 * The 19 documented works of the «بی‌افق / HORIZONLESS» series.
 * Medium / dimensions / year are transcribed exactly as printed in the catalog
 * (including «ارولیک روی بوم», verbatim as printed for work ۰۲).
 * No prices are published on this site.
 */
export const documentedWorks: DocumentedWork[] = [
  { kind: 'documented', numberFa: '۰۱', numberEn: '01', image: w01, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۰*۱۶', yearFa: '۱۴۰۳', yearEn: '1403', altFa: 'اثر ۰۱ — چهره‌ای کوچک در قاب', altEn: 'Work 01 — small framed face' },
  { kind: 'documented', numberFa: '۰۲', numberEn: '02', image: w02, mediumFa: 'ارولیک روی بوم', mediumEn: '«ارولیک روی بوم» (as printed)', dims: '۲۰۰*۸۵', yearFa: '۱۴۰۲', yearEn: '1402', altFa: 'اثر ۰۲ — نقاش در حال کار', altEn: 'Work 02 — the painter at work' },
  { kind: 'documented', numberFa: '۰۳', numberEn: '03', image: w03, mediumFa: 'ترکیب مواد روی بوم', mediumEn: 'Mixed media on canvas', dims: '۱۱۸*۸۵', yearFa: '۱۴۰۳', yearEn: '1403', altFa: 'اثر ۰۳ — چهره و دسته‌گل', altEn: 'Work 03 — face covered by a bouquet' },
  { kind: 'documented', numberFa: '۰۴', numberEn: '04', image: w04, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۹۵*۸۰', yearFa: '۱۴۰۵', yearEn: '1405', altFa: 'اثر ۰۴ — مرد در حال صخره‌نوردی', altEn: 'Work 04 — man scaling a rock' },
  { kind: 'documented', numberFa: '۰۵', numberEn: '05', image: w05, mediumFa: 'ترکیب مواد روی بوم', mediumEn: 'Mixed media on canvas', dims: '۹۵*۷۵', yearFa: '۱۴۰۳', yearEn: '1403', altFa: 'اثر ۰۵ — پیکر معلق در آسمان آبی', altEn: 'Work 05 — body floating in a blue sky' },
  { kind: 'documented', numberFa: '۰۶', numberEn: '06', image: w06, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۸۰*۷۴', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۰۶ — مرد نشسته در منظره‌ی غروب', altEn: 'Work 06 — seated man at sunset' },
  { kind: 'documented', numberFa: '۰۷', numberEn: '07', image: w07, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۸۰*۱۲۰', yearFa: '۱۴۰۵', yearEn: '1405', altFa: 'اثر ۰۷ — پیکر فروپاشیده در پس‌زمینه‌ی کوه‌ها', altEn: 'Work 07 — disintegrating figure before the mountains' },
  { kind: 'documented', numberFa: '۰۸', numberEn: '08', image: w08, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۸۶*۶۵', yearFa: '۱۴۰۳', yearEn: '1403', altFa: 'اثر ۰۸ — دو فیگور روبه‌روی هم', altEn: 'Work 08 — two facing figures' },
  { kind: 'documented', numberFa: '۰۹', numberEn: '09', image: w09, mediumFa: 'ترکیب مواد روی بوم', mediumEn: 'Mixed media on canvas', dims: '۸۸*۱۶۲', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۰۹ — فیگور سرآویخته با پرنده', altEn: 'Work 09 — bowed figure with a bird' },
  { kind: 'documented', numberFa: '۱۰', numberEn: '10', image: w10, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۹۷*۱۰۵', yearFa: '۱۴۰۵', yearEn: '1405', altFa: 'اثر ۱۰ — پرنده‌ای بزرگ بر فراز کوهستان سرخ', altEn: 'Work 10 — large bird over red mountains' },
  { kind: 'documented', numberFa: '۱۱', numberEn: '11', image: w11, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۵*۳۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۱ — اتاق سرخ با پیکر نشسته', altEn: 'Work 11 — red room with a seated figure' },
  { kind: 'documented', numberFa: '۱۲', numberEn: '12', image: w12, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۵*۳۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۲ — پیکر ایستاده در منظره‌ی سرخ', altEn: 'Work 12 — standing figure in a red landscape' },
  { kind: 'documented', numberFa: '۱۳', numberEn: '13', image: w13, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۵*۳۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۳ — پیکر سرآویخته در قاب مسی', altEn: 'Work 13 — hanging figure in a copper frame' },
  { kind: 'documented', numberFa: '۱۴', numberEn: '14', image: w14, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۵*۳۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۴ — پیکر ایستاده در قاب مسی', altEn: 'Work 14 — standing figure in a copper frame' },
  { kind: 'documented', numberFa: '۱۵', numberEn: '15', image: w15, mediumFa: 'رنگ روغن روی فیبر', mediumEn: 'Oil on fibreboard', dims: '۲۵*۳۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۵ — پیکر ایستاده در دشت', altEn: 'Work 15 — standing figure in a field' },
  { kind: 'documented', numberFa: '۱۶', numberEn: '16', image: w16, mediumFa: 'ترکیب مواد روی بوم', mediumEn: 'Mixed media on canvas', dims: '۲۹*۳۹', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۶ — پیکر سرجعبه‌ای با کلاغ', altEn: 'Work 16 — box-headed figure with a crow' },
  { kind: 'documented', numberFa: '۱۷', numberEn: '17', image: w17, mediumFa: 'ترکیب مواد روی بوم', mediumEn: 'Mixed media on canvas', dims: '۶۶*۷۱', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۷ — پیکر آرمیده بر مبل در اتاق آبی', altEn: 'Work 17 — figure sprawled in an armchair, blue room' },
  { kind: 'documented', numberFa: '۱۸', numberEn: '18', image: w18, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۴۰*۴۰', yearFa: '۱۴۰۴', yearEn: '1404', altFa: 'اثر ۱۸ — منظره‌ای با ابرهای نارنجی', altEn: 'Work 18 — landscape with orange clouds' },
  { kind: 'documented', numberFa: '۱۹', numberEn: '19', image: w19, mediumFa: 'اکریلیک روی بوم', mediumEn: 'Acrylic on canvas', dims: '۴۰*۳۶', yearFa: '۱۴۰۳', yearEn: '1403', altFa: 'اثر ۱۹ — کلاغی در حال نوک‌زدن زمین', altEn: 'Work 19 — crow pecking at the ground' },
];

/** Additional works from the studio, presented without catalog captions. */
export const otherWorks: UndocumentedWork[] = [
  { kind: 'undocumented', id: 'u01', image: u01, altFa: 'درخت تیره بر فراز تپه‌ای سنگی', altEn: 'Dark tree on a rocky hill' },
  { kind: 'undocumented', id: 'u02', image: u02, altFa: 'سوسن‌های سفید بر زمینه‌ی سرخ', altEn: 'White lilies on red' },
  { kind: 'undocumented', id: 'u03', image: u03, altFa: 'پیکر نقاب‌دار در حال چمن‌زنی', altEn: 'Hooded figure mowing' },
  { kind: 'undocumented', id: 'u04', image: u04, altFa: 'زن نشسته روبه‌روی تندیس در غروب', altEn: 'Seated woman facing a sunset totem' },
  { kind: 'undocumented', id: 'u05', image: u05, altFa: 'نیم‌رخ پیکر با کلاه و پرنده', altEn: 'Profile figure with hat and bird' },
  { kind: 'undocumented', id: 'u06', image: u06, altFa: 'مطالعه‌ی دست‌ها بر زمینه‌ی زرد', altEn: 'Hand studies on yellow' },
  { kind: 'undocumented', id: 'u07', image: u07, altFa: 'مردی با سنج بر زمینه‌ی سرخ', altEn: 'Man with cymbals on red' },
  { kind: 'undocumented', id: 'u08', image: u08, altFa: 'نیم‌رخ سر نقاب‌دار بر زمینه‌ی سرخ', altEn: 'Hooded head on red' },
  { kind: 'undocumented', id: 'u09', image: u09, altFa: 'پیکر نقاب‌دار زیر درخت خشک در بیابان', altEn: 'Hooded figure beneath a bare tree in the desert' },
  { kind: 'undocumented', id: 'u10', image: u10, altFa: 'پیکر خاکستری-صورتی کنار درخت سفید', altEn: 'Grey-pink figure by a white tree' },
  { kind: 'undocumented', id: 'u11', image: u11, altFa: 'پیکر آرمیده‌ی آبی و زرد با گلدان‌ها', altEn: 'Blue and yellow reclining figure with vases' },
  { kind: 'undocumented', id: 'u12', image: u12, altFa: 'چهره‌ی جیغ‌زننده‌ی بنفش', altEn: 'Purple screaming face' },
  { kind: 'undocumented', id: 'u13', image: u13, altFa: 'تابلوی کوچک تیره با گلدان', altEn: 'Small dark painting with a vase' },
  { kind: 'undocumented', id: 'u14', image: u14, altFa: 'دو مرد بر کرانه‌ی غروب', altEn: 'Two men on the seashore at sunset' },
  { kind: 'undocumented', id: 'u15', image: u15, altFa: 'چهره‌ی دراز سبز', altEn: 'Elongated green face' },
  { kind: 'undocumented', id: 'u16', image: u16, altFa: 'دو پیکر سرخ با پرنده‌ای سفید', altEn: 'Two red figures with a white bird' },
  { kind: 'undocumented', id: 'u17', image: u17, altFa: 'درخت خشک سفید', altEn: 'Bare white tree' },
  { kind: 'undocumented', id: 'u18', image: u18, altFa: 'دست در قاب سیاه و سفید', altEn: 'Hand in a black and white frame' },
  { kind: 'undocumented', id: 'u19', image: u19, altFa: 'دختری با گل در مزرعه', altEn: 'Girl with a flower in a field' },
  { kind: 'undocumented', id: 'u20', image: u20, altFa: 'گیاه سبز در گلدان', altEn: 'Green plant in a pot' },
];
