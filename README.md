# web-automation-using-playwright

| No. | Tag & Name | Element Type | Sample Web Element | Playwright Actions | Playwright Assertions / Notes |
|-----|------------|--------------|-----------------|-----------------|-----------------|
| 1 | a / Anchor | Anchor | `<a href="/home">Home</a>` | `await page.locator('a[href="/home"]').click();`<br>`hover()`<br>`dblclick()`<br>`focus()` | `await expect(page.locator('a')).toHaveText('Home');`<br>`toBeVisible()` |
| 2 | button / Button | Button | `<button id="submit">Submit</button>` | `await page.locator('#submit').click();`<br>`hover()`<br>`dblclick()`<br>`focus()` | `await expect(page.locator('#submit')).toBeEnabled();`<br>`toHaveText('Submit')` |
| 3 | input / Textbox | Input | `<input type="text" id="username">` | `await page.locator('#username').fill('admin');`<br>`type()`<br>`press('Enter')` | `await expect(page.locator('#username')).toHaveValue('admin');`<br>`toBeEditable()` |
| 4 | input[type=checkbox] / Checkbox | Checkbox | `<input type="checkbox" id="agree" checked>` | `await page.locator('#agree').check();`<br>`uncheck()`<br>`click()` | `await expect(page.locator('#agree')).toBeChecked();`<br>`not.toBeChecked()` |
| 5 | input[type=radio] / Radio | Radio | `<input type="radio" id="genderMale">` | `await page.locator('#genderMale').check();`<br>`click()` | `await expect(page.locator('#genderMale')).toBeChecked();` |
| 6 | select / Dropdown | Dropdown | `<select id="country"><option>India</option></select>` | `await page.locator('#country').selectOption('India');` | `await expect(page.locator('#country')).toHaveValue('India');` |
| 7 | textarea / Textarea | Textarea | `<textarea id="comments"></textarea>` | `await page.locator('#comments').fill('Text here');`<br>`type()` | `await expect(page.locator('#comments')).toHaveValue('Text here');` |
| 8 | img / Image | Image | `<img src="logo.png" alt="Logo">` | `await page.locator('img').click();`<br>`hover()` | `await expect(page.locator('img')).toHaveAttribute('alt', 'Logo');` |
| 9 | label / Label | Label | `<label for="username">Username</label>` | `await page.locator('label[for="username"]').click();` | `await expect(page.locator('label')).toHaveText('Username');` |
| 10 | div / Division | Division | `<div id="modal">Modal Content</div>` | `await page.locator('#modal').click();`<br>`hover()` | `await expect(page.locator('#modal')).toBeVisible();` |
| 11 | span / Span | Span | `<span id="msg">Message</span>` | `await page.locator('#msg').click();` | `await expect(page.locator('#msg')).toHaveText('Message');` |
| 12 | ul / Unordered List | List | `<ul><li>Item1</li></ul>` | `await page.locator('ul li').click();` | `await expect(page.locator('ul li')).toHaveCount(1);` |
| 13 | ol / Ordered List | List | `<ol><li>First</li></ol>` | `await page.locator('ol li').click();` | `await expect(page.locator('ol li')).toHaveCount(1);` |
| 14 | li / List Item | List Item | `<li>Item1</li>` | `await page.locator('li').click();` | `await expect(page.locator('li')).toHaveText('Item1');` |
| 15 | table / Table | Table | `<table><tr><td>1</td></tr></table>` | `await page.locator('table').click();` | `await expect(page.locator('table tr')).toHaveCount(1);` |
| 16 | tr / Table Row | Table Row | `<tr><td>1</td></tr>` | `await page.locator('tr').click();` | `await expect(page.locator('tr')).toHaveCount(1);` |
| 17 | td / Table Cell | Table Cell | `<td>Cell</td>` | `await page.locator('td').click();` | `await expect(page.locator('td')).toHaveText('Cell');` |
| 18 | iframe / Iframe | Iframe | `<iframe src="frame.html"></iframe>` | `await page.frameLocator('iframe[src="frame.html"]').locator('body').click();` | `await expect(page.frameLocator('iframe')).toBeVisible();` |
| 19 | form / Form | Form | `<form id="loginForm"></form>` | `await page.locator('#loginForm').submit();` | `await expect(page.locator('#loginForm')).toBeAttached();` |
| 20 | input[type=file] / File Input | File Upload | `<input type="file" id="upload">` | `const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), page.locator('#upload').click()]); await fileChooser.setFiles('file.txt');` | `toHaveFileChooser` |
| 21 | h1 / Heading 1 | Heading | `<h1>Welcome</h1>` | `await page.locator('h1').click();` | `await expect(page.locator('h1')).toHaveText('Welcome');`<br>`toBeVisible()` |
| 22 | h2 / Heading 2 | Heading | `<h2>Title</h2>` | `await page.locator('h2').click();` | `await expect(page.locator('h2')).toHaveText('Title');` |
| 23 | h3 / Heading 3 | Heading | `<h3>Section</h3>` | `await page.locator('h3').click();` | `await expect(page.locator('h3')).toHaveText('Section');` |
| 24 | h4 / Heading 4 | Heading | `<h4>Subsection</h4>` | `await page.locator('h4').click();` | `await expect(page.locator('h4')).toHaveText('Subsection');` |
| 25 | h5 / Heading 5 | Heading | `<h5>Small Heading</h5>` | `await page.locator('h5').click();` | `await expect(page.locator('h5')).toHaveText('Small Heading');` |
| 26 | h6 / Heading 6 | Heading | `<h6>Minor Heading</h6>` | `await page.locator('h6').click();` | `await expect(page.locator('h6')).toHaveText('Minor Heading');` |
| 27 | p / Paragraph | Paragraph | `<p>Hello World</p>` | `await page.locator('p').click();` | `await expect(page.locator('p')).toContainText('Hello');` |
| 28 | strong / Strong | Text Format | `<strong>Bold Text</strong>` | `await page.locator('strong').click();` | `await expect(page.locator('strong')).toHaveText('Bold Text');` |
| 29 | em / Emphasis | Text Format | `<em>Italic Text</em>` | `await page.locator('em').click();` | `await expect(page.locator('em')).toHaveText('Italic Text');` |
| 30 | small / Small | Text Format | `<small>Small Text</small>` | `await page.locator('small').click();` | `await expect(page.locator('small')).toHaveText('Small Text');` |
| 31 | b / Bold | Text Format | `<b>Bold</b>` | `await page.locator('b').click();` | `await expect(page.locator('b')).toHaveText('Bold');` |
| 32 | i / Italic | Text Format | `<i>Italic</i>` | `await page.locator('i').click();` | `await expect(page.locator('i')).toHaveText('Italic');` |
| 33 | br / Break | Line Break | `<br>` | `// No action needed` | `// Cannot assert directly, use container` |
| 34 | hr / Horizontal Rule | Rule | `<hr>` | `// No action needed` | `// Can check visibility in container` |
| 35 | nav / Navigation | Navigation | `<nav id="menu"></nav>` | `await page.locator('#menu').click();` | `await expect(page.locator('#menu')).toBeVisible();` |
| 36 | footer / Footer | Footer | `<footer>Footer</footer>` | `await page.locator('footer').click();` | `await expect(page.locator('footer')).toBeVisible();` |
| 37 | header / Header | Header | `<header>Header</header>` | `await page.locator('header').click();` | `await expect(page.locator('header')).toBeVisible();` |
| 38 | section / Section | Section | `<section id="sec1"></section>` | `await page.locator('#sec1').click();` | `await expect(page.locator('#sec1')).toBeVisible();` |
| 39 | article / Article | Article | `<article>Content</article>` | `await page.locator('article').click();` | `await expect(page.locator('article')).toBeVisible();` |
| 40 | aside / Aside | Aside | `<aside>Sidebar</aside>` | `await page.locator('aside').click();` | `await expect(page.locator('aside')).toBeVisible();` |
| 41 | dialog / Dialog | Dialog | `<dialog id="dlg">Dialog</dialog>` | `await page.locator('#dlg').click();` | `toBeVisible()`<br>`toHaveText('Dialog')` |
| 42 | summary / Summary | Summary | `<summary>More Info</summary>` | `await page.locator('summary').click();` | `await expect(page.locator('summary')).toHaveText('More Info');` |
| 43 | details / Details | Details | `<details><summary>Info</summary></details>` | `await page.locator('details').click();` | `toBeVisible()` |
| 44 | output / Output | Output | `<output id="result">0</output>` | `await page.locator('#result').click();` | `await expect(page.locator('#result')).toHaveText('0');` |
| 45 | progress / Progress | Progress | `<progress value="70" max="100"></progress>` | `await page.locator('progress').click();` | `await expect(page.locator('progress')).toHaveAttribute('value', '70');` |
| 46 | meter / Meter | Meter | `<meter value="0.5"></meter>` | `await page.locator('meter').click();` | `await expect(page.locator('meter')).toHaveAttribute('value', '0.5');` |
| 47 | canvas / Canvas | Canvas | `<canvas id="myCanvas"></canvas>` | `await page.locator('#myCanvas').click();` | `toBeVisible()` |
| 48 | video / Video | Video | `<video id="vid"></video>` | `await page.locator('#vid').click();` | `toBeVisible()` |
| 49 | audio / Audio | Audio | `<audio id="aud"></audio>` | `await page.locator('#aud').click();` | `toBeVisible()` |
| 50 | script / Script | Script | `<script src="app.js"></script>` | `// Not interactable` | `// Can check presence in DOM` |



