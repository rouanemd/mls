'use strict';
const timelineLabels = {
 fr:{audience:'Public',participants:'participants',unknown:'année non précisée',note:'Le rapport mentionne les 14–15 janvier sans préciser l’année ; cette activité est présentée à sa place dans le rapport.',mci:'Atelier de préparation à la prise en charge des incidents à victimes multiples (MCI / IVM), avec mise en situation et simulation.'},
 en:{audience:'Audience',participants:'participants',unknown:'year not specified',note:'The report lists 14–15 January without a year; this activity follows its position in the report.',mci:'A workshop preparing participants to manage mass-casualty incidents (MCI), through scenarios and simulation.'},
 ar:{audience:'الفئة المستهدفة',participants:'مشاركاً',unknown:'السنة غير محددة',note:'يذكر التقرير يومي 14 و15 يناير دون تحديد السنة؛ عُرض هذا النشاط وفق ترتيبه في التقرير.',mci:'ورشة للاستعداد للتعامل مع الحوادث متعددة الضحايا، من خلال سيناريوهات تطبيقية ومحاكاة.'}
};
function activityDate(activity,language){
 const options={month:'long',...(activity.date.length>7?{day:'numeric'}:{}),...(!activity.unknownYear?{year:'numeric'}:{})};
 const formatter=new Intl.DateTimeFormat(language,options);
 const start=new Date(activity.date+(activity.date.length===7?'-01':'')+'T12:00:00');
 let value=activity.end ? formatter.formatRange(start,new Date(activity.end+'T12:00:00')) : formatter.format(start);
 return value+(activity.unknownYear?' · '+timelineLabels[language].unknown:'');
}
function renderTimeline(language){
 document.querySelectorAll('[data-timeline]').forEach(list=>{
 const recent=list.dataset.timeline==='featured';
 const featuredIDs = [4, 13, 15, 30];
 const records=recent ? window.MLS_ACTIVITIES.filter(activity => featuredIDs.includes(activity.id)) : window.MLS_ACTIVITIES;
 list.replaceChildren();let previousYear;
 function paragraph(text,cls){const p=document.createElement('p');p.textContent=text;if(cls)p.className=cls;return p;}
 for(const activity of records){
 const year=activity.date.slice(0,4);
 if(year!==previousYear){const marker=document.createElement('li');marker.className='timeline-year';marker.id='year-'+year;const span=document.createElement('span');span.textContent=year;marker.append(span);list.append(marker);previousYear=year;}
 const entry=document.createElement('li');entry.className='timeline-event';entry.id='activity-'+activity.id;
 const article=document.createElement('article');article.append(paragraph(activityDate(activity,language),'timeline-date'));
 const title=document.createElement('h3');title.textContent=activity.title[language];article.append(title);
 let venue=activity.venue;
 if(activity.id===11)venue={fr:'Arabie saoudite',en:'Saudi Arabia',ar:'السعودية'}[language];
 if(activity.id===24)venue={fr:'Dubaï · Émirats arabes unis',en:'Dubai · United Arab Emirates',ar:'دبي · الإمارات العربية المتحدة'}[language];
 article.append(paragraph(venue,'timeline-venue'));
 article.append(paragraph(timelineLabels[language].audience+' : '+activity.audience[language],'timeline-audience'));
 if(activity.participants!==null)article.append(paragraph(new Intl.NumberFormat(language).format(activity.participants)+' '+timelineLabels[language].participants,'participant-count'));
 if(activity.kind==='mci')article.append(paragraph(timelineLabels[language].mci));
 if(activity.unknownYear)article.append(paragraph(timelineLabels[language].note,'date-note'));
 if(activity.images?.length || activity.image){
 const gallery=document.createElement('div');gallery.className='activity-gallery';
 const pictures=recent ? (activity.images || [activity.image]).slice(0,1) : (activity.images || [activity.image]);
 for(const [index,picture] of pictures.entries()){
  const link=document.createElement('a');link.href='assets/images/'+picture;link.target='_blank';link.rel='noopener';
  const img=document.createElement('img');img.src=link.href;img.alt=activity.title[language]+' — '+(index+1);img.loading='lazy';img.width=1400;img.height=900;
  link.append(img);gallery.append(link);
 }
 article.append(gallery);
}
 entry.append(article);list.append(entry);
 }
 });
}
