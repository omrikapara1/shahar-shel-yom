
import React from 'react';
import { bookImages } from './constants/images';
import { MapPin, Tag, Feather, BookOpen, Palette, PenTool, Award, Heart, Monitor } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';

// A soft, watercolor-like background component
const WatercolorBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[#fcfbf9]"></div> {/* Paper base */}
    
    {/* Sun - Top Right */}
    <div className="absolute top-[-5%] right-[-5%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] opacity-90">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse" style={{ animationDuration: '8s' }}>
             <defs>
                <filter id="sun-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                </filter>
            </defs>
            <g filter="url(#sun-blur)">
                {/* Core */}
                <circle cx="100" cy="100" r="45" fill="#fbbf24" className="fill-amber-400" opacity="0.6" />
                {/* Outer Glow */}
                <circle cx="100" cy="100" r="70" fill="#fcd34d" className="fill-amber-300" opacity="0.4" />
                 {/* Rays */}
                <path d="M100,10 L100,190 M10,100 L190,100 M36,36 L164,164 M164,36 L36,164" stroke="#fbbf24" strokeWidth="15" strokeLinecap="round" opacity="0.3" />
            </g>
        </svg>
    </div>

    {/* House - Bottom Left */}
    <div className="absolute bottom-[4%] left-[2%] w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] opacity-80 z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
                <filter id="house-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                </filter>
            </defs>
            <g filter="url(#house-blur)">
                {/* Roof */}
                <path d="M20,80 L100,20 L180,80" fill="#f87171" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {/* Base */}
                <rect x="35" y="80" width="130" height="100" fill="#fef3c7" stroke="#fbbf24" strokeWidth="4" rx="2" />
                {/* Door */}
                <rect x="85" y="120" width="30" height="60" fill="#a0522d" stroke="#78350f" strokeWidth="3" rx="5" />
                {/* Windows */}
                <rect x="45" y="95" width="25" height="25" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="2" rx="1" />
                <rect x="130" y="95" width="25" height="25" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="2" rx="1" />
                {/* Chimney */}
                <rect x="140" y="40" width="20" height="30" fill="#ef4444" opacity="0.9" />
                {/* Smoke */}
                <circle cx="150" cy="30" r="6" fill="#e5e7eb" opacity="0.6" />
                <circle cx="155" cy="18" r="8" fill="#e5e7eb" opacity="0.4" />
            </g>
        </svg>
    </div>

    {/* Green Grass - Bottom */}
    <div className="absolute bottom-0 left-0 w-full h-[20vh] md:h-[25vh] z-0 opacity-90">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d" preserveAspectRatio="none">
             <defs>
                <filter id="grass-blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                </filter>
            </defs>
            <g filter="url(#grass-blur)">
                <path fill="#bef264" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,202.7C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="#d9f99d" fillOpacity="0.7" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </g>
        </svg>
    </div>

    {/* Blobs of color simulating watercolor washes */}
    <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-sky-200/20 rounded-full blur-[100px] mix-blend-multiply" />
    <div className="absolute top-[40%] left-[30%] w-[60vw] h-[60vw] bg-teal-100/20 rounded-full blur-[80px] mix-blend-multiply" />
    
    {/* Texture overlay */}
    <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>
  </div>
);

const SectionCard: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
    <div className={`relative bg-white/60 backdrop-blur-sm rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-12 mx-auto max-w-5xl border border-white/50 ${className}`}>
        {children}
    </div>
);

const SectionTitle: React.FC<{children: React.ReactNode, color?: string}> = ({ children, color = "text-teal-800" }) => (
    <div className="text-center mb-8 md:mb-12">
        <h2 className={`text-3xl md:text-5xl font-black ${color} drop-shadow-sm`}>
            {children}
        </h2>
        <div className="w-24 h-2 bg-amber-300 mx-auto mt-4 rounded-full opacity-60 blur-[1px]"></div>
    </div>
);

const PurchaseButton: React.FC<{ className?: string, large?: boolean }> = ({ className, large = false }) => (
    <a href="https://user.yeshinvoice.co.il/payment/07233d41-f229-446a-9c5f-cfb576654463" target="_blank" rel="noopener noreferrer" 
       className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${large ? 'py-5 px-12 text-2xl' : 'py-3 px-8 text-lg'} bg-gradient-to-r from-orange-400 to-amber-500 text-white font-bold ${className}`}>
        <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0 blur-md"></span>
        <span className="relative flex items-center gap-2">
            לרכישה מאובטחת של הספר <BookOpen className="w-5 h-5" />
        </span>
    </a>
);

const App = () => {
    return (
        <>
            <WatercolorBackground />
            <AudioPlayer src="/mnt/audio/music.mp3" />
            
            <div className="min-h-screen text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900">
                <main className="container mx-auto px-4 py-8 md:py-16 space-y-20 md:space-y-32 pb-32">

                    {/* Hero Section */}
                    <header className="relative flex flex-col items-center justify-center gap-8 text-center pt-4">
                        <div className="max-w-2xl space-y-6 flex flex-col items-center">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-teal-900 leading-[1.1] drop-shadow-sm">
                                "שחר של<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-amber-600">יום חדש"</span>
                            </h1>
                            
                            {/* Cover Image */}
                            <div className="relative w-80 md:w-96 lg:w-[30rem] my-8 group perspective-1000">
                                <div className="relative w-full transition-transform duration-500 transform group-hover:rotate-y-6 group-hover:scale-105">
                                    <img 
                                        src={bookImages.cover} 
                                        alt="כריכת הספר שחר של יום חדש" 
                                        className="w-full h-auto rounded-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.2)]"
                                    />
                                </div>
                            </div>

                            <div className="pt-2 hidden md:block">
                                <PurchaseButton large />
                            </div>
                        </div>
                    </header>

                    {/* Author Section */}
                    <SectionCard>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="order-2 md:order-1 space-y-6 text-lg leading-loose text-slate-700">
                                <SectionTitle color="text-teal-900">היי, נעים מאוד ❤️</SectionTitle>
                                <p>
                                    <strong className="text-2xl text-teal-700 block mb-2">שמי שחר ברגר,</strong> 
                                    תושב רמת השרון, בן 29. אני עובד כיום כעורך דין במחלקת הליטיגציה המסחרית של משרד פרגן פלס ושות', עורכי דין.
                                </p>
                                <p className="bg-amber-50 p-6 rounded-2xl border-r-4 border-amber-300 italic">
                                    "בילדות שלי התחבאתי, שתקתי, עד שבתקופה של התיכון ובעיקר בצבא הבנתי דבר אחד: הכל תלוי בי, בביטחון שלי."
                                </p>
                                <p>
                                    אם אני רוצה להשיג משהו – אני אשיג אותו – <span className="font-bold text-teal-700">לא משנה מה!</span>
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative">
                                <div className="absolute inset-0 bg-sky-200 rounded-full translate-x-4 translate-y-4 blur opacity-50"></div>
                                <img 
                                    src={bookImages.author} 
                                    alt="שחר ברגר" 
                                    className="relative w-full max-w-md mx-auto h-80 md:h-96 object-top rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-2xl rounded-br-2xl shadow-xl border-8 border-white object-cover transform duration-500" 
                                />
                            </div>
                        </div>
                    </SectionCard>

                    {/* About the Book */}
                    <SectionCard className="overflow-hidden">
                         <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                         <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        
                        <SectionTitle>מה תמצאו בספר שלי?</SectionTitle>
                        <div className="space-y-8 text-center max-w-3xl mx-auto">
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl leading-relaxed text-slate-700">
                                    זהו ספר על ילד קטן שמגלה שהפחד הוא לא אויב, אלא מורה דרך. 
                                    <span className="block mt-2 font-bold text-teal-700">שהמשבר הוא לא משבר, אלא מבשר.</span>
                                </p>
                                <p className="text-lg leading-relaxed text-slate-600">
                                    זהו ספר שעוסק ב<strong>כוח רצון</strong>, <strong>מוטיבציה</strong> ו<strong>התגברות על קשיים</strong>.
                                </p>
                            </div>

                            <div className="pt-4">
                                <p className="text-lg leading-relaxed text-slate-600">
                                    הספר מוקדש לאחיין שלי, <span className="font-bold text-teal-700">נבו</span>, ולכל אדם בעולם – ילד, נער, חייל, סטודנט או מבוגר – 
                                    ונועד להראות לו שהחיים שלנו הם בחירה, <span className="font-bold">ועלינו לבחור כיצד לחיות את החיים</span>.
                                    <span className="block font-bold mt-2">יש בך הכל זו לא רק שורה משיר, זו המציאות!</span>
                                </p>
                            </div>
                        </div>
                    </SectionCard>

                    {/* Gallery Section */}
                    <section className="relative max-w-6xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-64 bg-teal-50/50 -skew-y-3 -z-10 blur-xl"></div>
                        <SectionTitle>טעימה קטנה מתוך הספר שלי</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                            {[bookImages.page1, bookImages.page2, bookImages.page3, bookImages.page4].map((img, index) => (
                                <div key={index} className="group relative aspect-square bg-white p-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rotate-1 odd:-rotate-1">
                                    <img src={img} alt={`איור מתוך הספר ${index + 1}`} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 border-2 border-slate-100 pointer-events-none"></div>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Social Vision */}
                     <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
                        <Heart className="w-16 h-16 mx-auto text-rose-400 fill-rose-100 animate-pulse" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">חזון חברתי</h2>
                        <div className="text-xl text-slate-600 leading-relaxed space-y-2">
                            <p>
                                אני שמח לשתף פעולה עם עמותות חברתיות שמעצימות ילדים ובני נוער.
                            </p>
                            <p className="font-bold">
                                יש לי חלום שסיפור חיי והמילים בספר שלי,<br/>
                                ישפיעו על הרבה ילדים בישראל.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Price Card */}
                        <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-orange-300 hover:-translate-y-1 transition-transform flex flex-col items-center justify-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Tag className="w-8 h-8 text-orange-600"/>
                            </div>
                            <h3 className="font-bold text-slate-500 mb-2">מחיר הספר</h3>
                            <p className="text-5xl font-black text-slate-800">75 ₪</p>
                        </div>

                        {/* Pickup Card */}
                        <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-b-8 border-teal-300 hover:-translate-y-1 transition-transform flex flex-col items-center justify-center h-full">
                            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shrink-0">
                                <MapPin className="w-8 h-8 text-teal-600"/>
                            </div>
                            <h3 className="font-bold text-slate-700 mb-3 text-xl leading-snug">
                                לתיאום איסוף עצמי של הספר והזמנת הרצאות
                            </h3>
                            <p className="text-2xl font-black text-teal-800 dir-ltr mb-4">שחר 050-666-0505</p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                מסירת ספרים שנרכשו תתבצע באופן מרוכז גם בימי שישי בין השעות <span dir="ltr">8:00-9:00</span> בגינת הבנים ברמת השרון
                            </p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <PurchaseButton large className="shadow-orange-200/50" />
                    </div>

                    {/* Footer */}
                    <footer className="text-center space-y-8 pt-12 border-t border-slate-200/60">
                         <div className="max-w-3xl mx-auto px-4 space-y-2">
                            <p className="text-xl md:text-2xl font-black text-slate-900 leading-relaxed drop-shadow-sm">
                                אשמח אם תוכלו לעזור לי להפיץ את סיפור חיי ולשנות את החיים של דור העתיד של ישראל.
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-4 text-sm text-slate-500 bg-white/50 py-6 rounded-3xl max-w-4xl mx-auto shadow-sm px-8">
                             {/* Top Row */}
                             <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-slate-200/50 pb-4 w-full">
                                <div className="flex items-center gap-2"><Feather className="w-4 h-4 text-slate-400"/><span>כתיבה: <strong>שחר ברגר</strong></span></div>
                                <div className="w-px h-4 bg-slate-300 hidden md:block"></div>
                                <div className="flex items-center gap-2"><Palette className="w-4 h-4 text-slate-400"/><span>איורים: <strong>AI</strong></span></div>
                             </div>
                             
                             {/* Bottom Row */}
                             <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
                                <div className="flex items-center gap-2"><Monitor className="w-4 h-4 text-slate-400"/><span>דף נחיתה: <strong>עומרי קפרא</strong></span></div>
                                <div className="w-px h-4 bg-slate-300 hidden md:block"></div>
                                <div className="flex items-center gap-2"><Award className="w-4 h-4 text-slate-400"/><span>עיצוב גרפי: <strong>אופיר מילר</strong></span></div>
                                <div className="w-px h-4 bg-slate-300 hidden md:block"></div>
                                <div className="flex items-center gap-2"><PenTool className="w-4 h-4 text-slate-400"/><span>הגהה: <strong>רעות גרוס</strong></span></div>
                             </div>
                        </div>
                        
                        <p className="text-xs text-slate-400 pb-8">© 2025 שחר ברגר. כל הזכויות שמורות.</p>
                    </footer>

                </main>
                
                {/* Sticky Footer CTA for Mobile */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] text-center z-50 border-t border-slate-100">
                    <PurchaseButton className="w-full shadow-none" />
                </div>
            </div>
        </>
    );
};

export default App;
