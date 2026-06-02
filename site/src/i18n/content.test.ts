import { describe, expect, it } from 'vitest';
import { content, type Lang } from './content';

const langs: Lang[] = ['en', 'ja'];

describe('i18n content', () => {
  it('defines copy for every supported locale', () => {
    for (const lang of langs) {
      expect(content[lang], `missing content for "${lang}"`).toBeDefined();
    }
  });

  it('keeps en and ja in sync (same set of keys)', () => {
    const enKeys = Object.keys(content.en).sort();
    const jaKeys = Object.keys(content.ja).sort();
    expect(jaKeys).toEqual(enKeys);
  });

  it('sets the correct htmlLang per locale', () => {
    expect(content.en.htmlLang).toBe('en');
    expect(content.ja.htmlLang).toBe('ja');
  });

  it('has non-empty meta titles for SEO', () => {
    for (const lang of langs) {
      expect(content[lang].metaTitle.trim().length).toBeGreaterThan(0);
    }
  });
});
