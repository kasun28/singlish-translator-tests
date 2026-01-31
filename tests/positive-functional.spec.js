const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests - Singlish to Sinhala Converter', () => {

  test('Pos_Fun_0001: Convert a short daily greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `oyaata kohomadha?`;
    const expectedOutput = `ඔයාට කොහොමද?`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0002: Long mixed-language input with slang + typo causes incorrect conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha? Please send it before 3pm. Mama office yanna kalin check karanna oonea. Email ekak evanna amaarunam WhatsApp msg ekak dhaapan. Thx!`;
    const expectedOutput = `මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද? Please send it before 3pm. මම office යන්න කලින් check කරන්න ඕනේ. Email එකක් එවන්න අමාරුනම් WhatsApp ම්ස්ග් එකක් දාපන්. ථx!!`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0003: Convert a short request phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mata help ekak karanna puLuvandha?`;
    const expectedOutput = `මට help එකක් කරන්න පුළුවන්ද?`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0004: Convert simple present tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `man gedhara yanavaa`;
    const expectedOutput = `මම ගෙදර යනවා`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0005: Convert a short request phrase with English term', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mata help ekak karanna puLuvandha?`;
    const expectedOutput = `මට help එකක් කරන්න පුළුවන්ද?`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0006: Convert compound sentence with two clauses', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee`;
    const expectedOutput = `මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නැහැ`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0007: Convert imperative command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `vahaama enna`;
    const expectedOutput = `වහාම එන්න`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0008: Convert negative form sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mama ehema karannee naehae`;
    const expectedOutput = `මම එහෙම කරන්නේ නැහැ`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0009: Convert polite request with high formality', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `karuNaakaralaa mata podi udhavvak karanna puLuvandha?`;
    const expectedOutput = `කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0010: Convert past tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mama iiyee gedhara giyaa`;
    const expectedOutput = `මම ඊයේ ගෙදර ගියා`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0011: Convert future tense sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mama heta enavaa`;
    const expectedOutput = `මම හෙට එනවා`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0012: Convert plural pronoun sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `api yamu`;
    const expectedOutput = `අපි යමු`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0013: Convert sentence with English technical term', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `Zoom meeting ekak thiyennee`;
    const expectedOutput = `Zoom meeting එකක් තියෙන්නේ`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0014: Convert sentence with place name', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `siiyaa Colombo yanna hadhannee`;
    const expectedOutput = `සීයා Colombo යන්න හදන්නේ`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0015: Convert complex sentence with condition', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `oya enavaanam mama balan innavaa`;
    const expectedOutput = `ඔය එනවානම් මම බලන් ඉන්නවා`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0016: Convert sentence with punctuation marks', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `mama enavaa!`;
    const expectedOutput = `මම එනවා!`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });

  test('Pos_Fun_0017: Convert informal greeting with slang', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    
    const input = `ela machan! supiri!!`;
    const expectedOutput = `එල මචන්! සුපිරි!!`;
    
    await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', input);
    
    // Wait until output text appears
    await page.waitForFunction(() => {
        const el = document.querySelector('div.whitespace-pre-wrap.overflow-y-auto');
        return el && el.innerText.trim().length > 0;
    }, { timeout: 30000 });
    
    const actualOutput = await page.$eval('div.whitespace-pre-wrap.overflow-y-auto', el => el.innerText.trim());
    expect(actualOutput.trim()).toBe(expectedOutput);
  });
});
