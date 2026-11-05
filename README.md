# Moroccan Life Support — activity mosaic website

Built around the selected `05-activity-mosaic.png` reference: white background, bold typography, red buttons, teal panels, training/video mosaic, large Bouznika group photograph and an association card. Responsive on phones, tablets and desktops, in French, Arabic (right-to-left) and English. No installation or build command is required.

## Upload to Netlify

1. Unzip `mls-netlify.zip` into a folder. `index.html` must be directly inside that folder.
2. Open your existing Netlify project's **Deploys** section and upload the extracted folder as a manual deployment. For a new project, use Netlify Drop: https://app.netlify.com/drop.
3. Enable form detection in the project's Forms settings if needed, then redeploy so Netlify detects the `mls-contact` form.
4. Add **mrccnlfspprt@gmail.com** as the recipient for form submission notifications.
5. Test the live contact form once after deploying. Successful submissions open the translated thank-you page.

For Git-based deployment, use this folder as the base directory, leave the build command blank and use `.` as the publish directory. `netlify.toml` is included. Account settings and email notifications must be configured in Netlify; the upload folder cannot change them.

Official instructions: [manual upload](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/), [form setup](https://docs.netlify.com/manage/forms/setup/), [notifications](https://docs.netlify.com/manage/forms/notifications/).

## Pages

- `index.html`: the mosaic homepage and four featured activities.
- `association.html`: MLS definition, objectives and Arab Resuscitation Council membership.
- `formations.html`: first aid, healthcare simulation and community training.
- `activites.html`: the full vertical timeline, from the founding assembly through both May 2026 MCI workshops.
- `ressources.html`: the MLS CPR awareness video and its 2022 recognition.
- `contact.html`: email, telephone, LinkedIn and Netlify contact form.
- `merci.html`: translated submission confirmation.

The original slogan is used unchanged, **inside the teal footer bar**, on every page and in every language. There is no black slogan strip or slogan in the header. The specified medical/social caravan objective has been removed in every language. START and JumpSTART algorithm downloads are excluded.

## Photos and content sources

The full timeline contains 32 entries and 69 selected event photographs. Photographs are matched to their own activities from `Events Pictures` and the MCI workshop photo folders. The laboratory-technician, Nour Platon and CRMEF photographs are extracted from the relevant activity pages of `Rapport MLS 2022- 2026.pdf`.

The homepage uses original MLS photographs: outdoor scouting CPR training (IMG_6494.JPG), the large Bouznika group (FB_IMG_1694100655859.jpg), and the first Emergency Days team group (DSC_7703.JPG). The two excluded photographs DSC_7664.JPG and DSC_7686.JPG are not used. Images are optimized copies; original files remain intact.

Dates, venues, audiences and participant numbers come from the MLS activity report. Month-only dates keep that precision. The Taghazout caravan gives 14–15 January without a year; the timeline explicitly notes this and follows its position in the report. Membership and the 2022 BEST-video recognition wording were supplied by MLS. The original awareness video is optimized to 720p with its original audio.

## Languages and editing

French is available in the HTML without JavaScript. Language buttons translate page content, navigation, form labels and image descriptions. Language is preserved when moving between pages, and URLs can specify `?lang=ar` or `?lang=en`.

- French page text: each HTML file.
- Arabic and English text: `app.js` and `copy.js`.
- Timeline content and photos: `activities-data.js`.
- Timeline rendering: `timeline.js`.
- Colours, layout and responsive styles: `styles.css`.
- Media: `assets/`.

## Contact

- Email: mrccnlfspprt@gmail.com
- Telephone: +212 6 94 55 96 57
- LinkedIn: https://www.linkedin.com/company/moroccan-life-support-association/

## Local preview

From this folder, run `python3 -m http.server 8000`, then open http://localhost:8000. The form displays a local-preview message rather than sending a submission locally. The website uses no analytics or external font requests.

Homepage featured activities: Air DIAT cabin-crew training (June 2022), first ISPITS Emergency Days (May 2023), youth camp with OCED at Rass Lma (July 2023), and MCI Meknès (May 2026). The compact original slogan replaces the invitation heading and paragraph in the centre of the blue footer bar.
